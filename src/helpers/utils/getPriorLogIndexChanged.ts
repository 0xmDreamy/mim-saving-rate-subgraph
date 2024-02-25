import { Bytes, log, ethereum } from '@graphprotocol/graph-ts';
import { LogUnlocked } from "../../../generated/LockingMultiRewards/LockingMultiRewards";

const LOG_LOCK_INDEX_CHANGED = Bytes.fromHexString("0xc867cead03921f926f197726d0c3f6a8f763f949778e8b63ad246ae7a5fa08fb");

export function getPriorLogIndexChanged(event: LogUnlocked): ethereum.Log | null {
  const receipt = event.receipt;
  if (receipt == null) {
    log.error('Event must have receipt to check if it is a liquidation', []);
    return null;
  }
  const logs = receipt.logs;

  const logIndexInTransaction = event.logIndex.minus(logs[0].logIndex).abs().toI32();

  if (logIndexInTransaction < 1) {
    return null;
  }

  const priorLog = logs[logIndexInTransaction - 1];

  return priorLog.topics[0] == LOG_LOCK_INDEX_CHANGED ? priorLog : null;
}
