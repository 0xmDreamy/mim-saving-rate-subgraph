import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  LogLockIndexChanged,
  LogLocked,
  LogRecovered,
  LogRewardAdded,
  LogRewardPaid,
  LogRewardsDurationUpdated,
  LogSetMinLockAmount,
  LogStaked,
  LogUnlocked,
  LogWithdrawn,
  OperatorChanged,
  OwnershipTransferred,
  Paused,
  Unpaused
} from "../generated/LockingMultiRewards/LockingMultiRewards"

export function createLogLockIndexChangedEvent(
  user: Address,
  fromIndex: BigInt,
  toIndex: BigInt
): LogLockIndexChanged {
  let logLockIndexChangedEvent = changetype<LogLockIndexChanged>(newMockEvent())

  logLockIndexChangedEvent.parameters = new Array()

  logLockIndexChangedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  logLockIndexChangedEvent.parameters.push(
    new ethereum.EventParam(
      "fromIndex",
      ethereum.Value.fromUnsignedBigInt(fromIndex)
    )
  )
  logLockIndexChangedEvent.parameters.push(
    new ethereum.EventParam(
      "toIndex",
      ethereum.Value.fromUnsignedBigInt(toIndex)
    )
  )

  return logLockIndexChangedEvent
}

export function createLogLockedEvent(
  user: Address,
  amount: BigInt,
  unlockTime: BigInt,
  lockCount: BigInt,
  newLock: boolean
): LogLocked {
  let logLockedEvent = changetype<LogLocked>(newMockEvent())

  logLockedEvent.parameters = new Array()

  logLockedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  logLockedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  logLockedEvent.parameters.push(
    new ethereum.EventParam(
      "unlockTime",
      ethereum.Value.fromUnsignedBigInt(unlockTime)
    )
  )
  logLockedEvent.parameters.push(
    new ethereum.EventParam(
      "lockCount",
      ethereum.Value.fromUnsignedBigInt(lockCount)
    )
  )
  logLockedEvent.parameters.push(
    new ethereum.EventParam("newLock", ethereum.Value.fromBoolean(newLock))
  )

  return logLockedEvent
}

export function createLogRecoveredEvent(
  token: Address,
  amount: BigInt
): LogRecovered {
  let logRecoveredEvent = changetype<LogRecovered>(newMockEvent())

  logRecoveredEvent.parameters = new Array()

  logRecoveredEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  logRecoveredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return logRecoveredEvent
}

export function createLogRewardAddedEvent(reward: BigInt): LogRewardAdded {
  let logRewardAddedEvent = changetype<LogRewardAdded>(newMockEvent())

  logRewardAddedEvent.parameters = new Array()

  logRewardAddedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return logRewardAddedEvent
}

export function createLogRewardPaidEvent(
  user: Address,
  rewardsToken: Address,
  reward: BigInt
): LogRewardPaid {
  let logRewardPaidEvent = changetype<LogRewardPaid>(newMockEvent())

  logRewardPaidEvent.parameters = new Array()

  logRewardPaidEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  logRewardPaidEvent.parameters.push(
    new ethereum.EventParam(
      "rewardsToken",
      ethereum.Value.fromAddress(rewardsToken)
    )
  )
  logRewardPaidEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return logRewardPaidEvent
}

export function createLogRewardsDurationUpdatedEvent(
  token: Address,
  newDuration: BigInt
): LogRewardsDurationUpdated {
  let logRewardsDurationUpdatedEvent = changetype<LogRewardsDurationUpdated>(
    newMockEvent()
  )

  logRewardsDurationUpdatedEvent.parameters = new Array()

  logRewardsDurationUpdatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  logRewardsDurationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newDuration",
      ethereum.Value.fromUnsignedBigInt(newDuration)
    )
  )

  return logRewardsDurationUpdatedEvent
}

export function createLogSetMinLockAmountEvent(
  previous: BigInt,
  current: BigInt
): LogSetMinLockAmount {
  let logSetMinLockAmountEvent = changetype<LogSetMinLockAmount>(newMockEvent())

  logSetMinLockAmountEvent.parameters = new Array()

  logSetMinLockAmountEvent.parameters.push(
    new ethereum.EventParam(
      "previous",
      ethereum.Value.fromUnsignedBigInt(previous)
    )
  )
  logSetMinLockAmountEvent.parameters.push(
    new ethereum.EventParam(
      "current",
      ethereum.Value.fromUnsignedBigInt(current)
    )
  )

  return logSetMinLockAmountEvent
}

export function createLogStakedEvent(user: Address, amount: BigInt): LogStaked {
  let logStakedEvent = changetype<LogStaked>(newMockEvent())

  logStakedEvent.parameters = new Array()

  logStakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  logStakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return logStakedEvent
}

export function createLogUnlockedEvent(
  user: Address,
  amount: BigInt,
  index: BigInt
): LogUnlocked {
  let logUnlockedEvent = changetype<LogUnlocked>(newMockEvent())

  logUnlockedEvent.parameters = new Array()

  logUnlockedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  logUnlockedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  logUnlockedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )

  return logUnlockedEvent
}

export function createLogWithdrawnEvent(
  user: Address,
  amount: BigInt
): LogWithdrawn {
  let logWithdrawnEvent = changetype<LogWithdrawn>(newMockEvent())

  logWithdrawnEvent.parameters = new Array()

  logWithdrawnEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  logWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return logWithdrawnEvent
}

export function createOperatorChangedEvent(
  param0: Address,
  param1: boolean
): OperatorChanged {
  let operatorChangedEvent = changetype<OperatorChanged>(newMockEvent())

  operatorChangedEvent.parameters = new Array()

  operatorChangedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )
  operatorChangedEvent.parameters.push(
    new ethereum.EventParam("param1", ethereum.Value.fromBoolean(param1))
  )

  return operatorChangedEvent
}

export function createOwnershipTransferredEvent(
  user: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
