import {
  AdminSet,
  ApprovalForAll,
  BaseURIset,
  DelegateChanged,
  DelegateVotesChanged,
  ManagerSet,
  MintFeeSet,
  OwnerOfSet,
  PermissionSet,
  TransferBatch,
  TransferSingle,
  TransferabilitySet,
  URI,
  UserPermissionSet,
  UserURIset
} from "../generated/templates/Wrappr/Wrappr"
import { Wrappr } from "../generated/schema"

export function handleAdminSet(event: AdminSet): void {}
export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleBaseURIset(event: BaseURIset): void {
  const wrappr = new Wrappr(event.address.toHexString())

  wrappr.operator = event.params.operator
  wrappr.baseURI = event.params.baseURI
  
  wrappr.save()
}

export function handleDelegateChanged(event: DelegateChanged): void {}
export function handleDelegateVotesChanged(event: DelegateVotesChanged): void {}
export function handleManagerSet(event: ManagerSet): void {}
export function handleMintFeeSet(event: MintFeeSet): void {}
export function handleOwnerOfSet(event: OwnerOfSet): void {}
export function handlePermissionSet(event: PermissionSet): void {}
export function handleTransferBatch(event: TransferBatch): void {}
export function handleTransferSingle(event: TransferSingle): void {}
export function handleTransferabilitySet(event: TransferabilitySet): void {}
export function handleURI(event: URI): void {}
export function handleUserPermissionSet(event: UserPermissionSet): void {}
export function handleUserURIset(event: UserURIset): void {}