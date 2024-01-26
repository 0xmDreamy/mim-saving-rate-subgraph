import { BigInt, store } from "@graphprotocol/graph-ts"
import {
  LogLockIndexChanged,
  LogLocked,
  LogStaked,
  LogUnlocked,
  LogWithdrawn,
} from "../generated/LockingMultiRewards/LockingMultiRewards"
import { LockingMultiRewards } from '../generated/LockingMultiRewards/LockingMultiRewards';
import { getOrCreateUserLock } from "./helpers/userLock/getOrCreateUserLock"
import { getUserLockId } from "./helpers/userLock/getUserLockId";
import { getOrCreateUser } from "./helpers/user/getOrCreateUser";

export function handleLogLockIndexChanged(event: LogLockIndexChanged): void {
  const userLock = getOrCreateUserLock(event.params.user, event.params.fromIndex);
  userLock.id = getUserLockId(event.params.user, event.params.toIndex);
  userLock.lockIndex = event.params.toIndex;
  userLock.save();
  store.remove("UserLock", getUserLockId(event.params.user, event.params.fromIndex));
}

export function handleLogLocked(event: LogLocked): void {
  const user = getOrCreateUser(event.params.user);
  const lockingMultiRewardsContract = LockingMultiRewards.bind(event.address);
  const unlockedAmount = lockingMultiRewardsContract.unlocked(event.params.user);
  const directLock = user.unlockedAmount == unlockedAmount;
  if (!directLock) {
    user.unlockedAmount = user.unlockedAmount.minus(event.params.amount);
  }
  user.lockedAmount = user.lockedAmount.plus(event.params.amount);
  user.save();

  const userLock = getOrCreateUserLock(event.params.user, event.params.lockCount.minus(BigInt.fromU32(1)));
  userLock.amount = userLock.amount.plus(event.params.amount);
  userLock.unlockTime = event.params.unlockTime;
  userLock.save();
}

export function handleLogStaked(event: LogStaked): void {
  const user = getOrCreateUser(event.params.user);
  user.unlockedAmount = user.unlockedAmount.plus(event.params.amount);
  user.save();
}

export function handleLogUnlocked(event: LogUnlocked): void {
  const user = getOrCreateUser(event.params.user);
  user.unlockedAmount = user.unlockedAmount.plus(event.params.amount);
  user.lockedAmount = user.lockedAmount.minus(event.params.amount);
  user.save();
  store.remove('UserLock', getUserLockId(event.params.user, event.params.index));
}

export function handleLogWithdrawn(event: LogWithdrawn): void {
  const user = getOrCreateUser(event.params.user);
  user.unlockedAmount = user.unlockedAmount.minus(event.params.amount);
  user.save();
}
