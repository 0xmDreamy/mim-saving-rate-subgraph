import { Address, BigInt } from "@graphprotocol/graph-ts";

export function getUserLockId(userAddress: Address, lockIndex: BigInt): string {
  return `${userAddress.toHexString()}-${lockIndex}`;
}
