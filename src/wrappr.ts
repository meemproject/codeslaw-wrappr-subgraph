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
import { Wrappr, Collection, Manager } from "../generated/schema"

export function handleAdminSet(event: AdminSet): void {
  const wrappr = new Wrappr(event.address.toHexString())

  wrappr.admin = event.params.admin
  
  wrappr.save()
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleBaseURIset(event: BaseURIset): void {
  const wrappr = new Wrappr(event.address.toHexString())

  wrappr.baseURI = event.params.baseURI
  
  wrappr.save()
}

export function handleDelegateChanged(event: DelegateChanged): void {}
export function handleDelegateVotesChanged(event: DelegateVotesChanged): void {}
export function handleManagerSet(event: ManagerSet): void {
  const manager = new Manager(event.address.toHexString() + event.params.to.toHexString())

  manager.address = event.params.to
  manager.active = event.params.set

  manager.save()
}

export function handleMintFeeSet(event: MintFeeSet): void {
  const wrappr = new Wrappr(event.address.toHexString())

  wrappr.mintFee = event.params.mintFee
  
  wrappr.save()
}

export function handleOwnerOfSet(event: OwnerOfSet): void {
  const collection = new Collection(event.address.toHexString() + event.params.id.toHexString())

  collection.tokenId = event.params.id
  collection.owner = event.params.to
  
  collection.save()
}

export function handlePermissionSet(event: PermissionSet): void {
  const collection = new Collection(event.address.toHexString() + event.params.id.toHexString())

  collection.tokenId = event.params.id
  collection.transferability = event.params.set
  
  collection.save()
}
export function handleTransferBatch(event: TransferBatch): void {}
export function handleTransferSingle(event: TransferSingle): void {}

export function handleTransferabilitySet(event: TransferabilitySet): void {
  const collection = new Collection(event.address.toHexString() + event.params.id.toHexString())

  collection.tokenId = event.params.id
  collection.transferability = event.params.set
  
  collection.save()
}
export function handleURI(event: URI): void {}
export function handleUserPermissionSet(event: UserPermissionSet): void {}
export function handleUserURIset(event: UserURIset): void {}