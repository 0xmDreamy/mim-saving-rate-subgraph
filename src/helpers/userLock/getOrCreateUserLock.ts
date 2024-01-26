import { Address, BigInt } from "@graphprotocol/graph-ts";
import { UserLock } from "../../../generated/schema";
import { getUserLockId } from "./getUserLockId";

export function getOrCreateUserLock(userAddress: Address, lockIndex: BigInt): UserLock {
  const id = getUserLockId(userAddress, lockIndex);
  let userLock = UserLock.load(id);
  if (userLock === null) {
    userLock = new UserLock(id);
    userLock.user = userAddress;
    userLock.lockIndex = lockIndex;
    userLock.unlockTime = BigInt.zero();
    userLock.amount = BigInt.zero();
  }
  userLock.save();
  return userLock;
}
