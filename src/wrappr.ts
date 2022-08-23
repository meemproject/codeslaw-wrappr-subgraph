import { BigInt, log } from "@graphprotocol/graph-ts";
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
  UserURIset,
} from "../generated/templates/Wrappr/Wrappr";
import {
  Wrappr,
  Collection,
  Manager,
  User,
  Account,
  Approval,
} from "../generated/schema";
import { AddressZero } from "./constants";

export function handleAdminSet(event: AdminSet): void {
  const wrappr = new Wrappr(event.address.toHexString());

  wrappr.admin = event.params.admin;

  wrappr.save();
}

export function handleApprovalForAll(event: ApprovalForAll): void {
  const account = new Account(
    event.address.toHexString() + event.params.owner.toHexString()
  );

  account.address = event.params.owner;

  account.save();

  const approval = new Approval(
    event.address.toHexString() + event.params.owner.toHexString() + "approval"
  );

  approval.account =
    event.address.toHexString() + event.params.owner.toHexString();
  approval.address = event.params.operator;
  approval.approve = event.params.approved;

  approval.save();
}

export function handleBaseURIset(event: BaseURIset): void {
  const wrappr = new Wrappr(event.address.toHexString());

  wrappr.baseURI = event.params.baseURI;

  wrappr.save();
}

export function handleDelegateChanged(event: DelegateChanged): void {}
export function handleDelegateVotesChanged(event: DelegateVotesChanged): void {}

export function handleManagerSet(event: ManagerSet): void {
  const manager = new Manager(
    event.address.toHexString() + event.params.to.toHexString()
  );

  manager.wrappr = event.address.toHexString();
  manager.address = event.params.to;
  manager.active = event.params.set;

  manager.save();
}

export function handleMintFeeSet(event: MintFeeSet): void {
  const wrappr = new Wrappr(event.address.toHexString());

  wrappr.mintFee = event.params.mintFee;

  wrappr.save();
}

export function handleOwnerOfSet(event: OwnerOfSet): void {
  const collection = new Collection(
    event.address.toHexString() + event.params.id.toHexString()
  );

  collection.wrappr = event.address.toHexString();
  collection.collectionId = event.params.id;
  collection.owner = event.params.to;

  collection.save();
}

export function handlePermissionSet(event: PermissionSet): void {
  const collection = new Collection(
    event.address.toHexString() + event.params.id.toHexString()
  );

  collection.wrappr = event.address.toHexString();
  collection.collectionId = event.params.id;
  collection.transferability = event.params.set;

  collection.save();
}

// TODO
export function handleTransferBatch(event: TransferBatch): void {}

// REVIEW
export function handleTransferSingle(event: TransferSingle): void {
  const collection = new Collection(
    event.address.toHexString() + event.params.id.toHexString()
  );
  collection.wrappr = event.address.toHexString();
  collection.collectionId = event.params.id;

  const user = new User(
    event.address.toHexString() +
      event.params.id.toHexString() +
      event.params.to.toHexString()
  );

  user.collection =
    event.address.toHexString() + event.params.id.toHexString();
  user.amount = event.params.amount

  user.save();

  // if (event.params.from.toHexString() == AddressZero) {  // mint
  //   let user = User.load(event.address.toHexString() + event.params.id.toHexString() + event.params.to.toHexString());

  //   if (user === null) {
  //     user = new User(event.address.toHexString() + event.params.id.toHexString() + event.params.to.toHexString());
  //     user.amount = BigInt.fromI32(0)
  //   }

  //   user.collection = event.address.toHexString() + event.params.id.toHexString()
  //   user.amount = user.amount.plus(event.params.amount)

  //   user.save()
  // } else if (event.params.to.toHexString() == AddressZero) { // burn
  //   let user = User.load(event.address.toHexString() + event.params.id.toHexString() + event.params.to.toHexString())

  //     if (user === null) {
  //       user = new User(event.address.toHexString() + event.params.id.toHexString() + event.params.to.toHexString())
  //       user.amount = BigInt.fromI32(0)
  //     }

  //     user.collection = event.address.toHexString() + event.params.id.toHexString()
  //     user.amount = user.amount.minus(event.params.amount)

  //     user.save()
  // } else { // member to member
  //   let userFrom = new User(event.address.toHexString() + event.params.id.toHexString() + event.params.from.toHexString())
  //   let userTo = new User(event.address.toHexString() + event.params.id.toHexString() + event.params.to.toHexString())

  //   if (userTo === null) {
  //     userTo = new User(event.address.toHexString() + event.params.id.toHexString() + event.params.to.toHexString())
  //     userTo.amount = BigInt.fromI32(0)
  //   }

  //   userTo.collection = event.address.toHexString() + event.params.id.toHexString()
  //   userTo.amount = userTo.amount.plus(event.params.amount)

  //   if (userFrom === null) {
  //     userFrom = new User(event.address.toHexString() + event.params.id.toHexString() + event.params.from.toHexString())
  //     userFrom.amount = BigInt.fromI32(0)
  //   }

  //   userFrom.collection = event.address.toHexString() + event.params.id.toHexString()
  //   userFrom.amount = userFrom.amount.minus(event.params.amount)

  //   userTo.save()
  //   userFrom.save()
  // }

  collection.save();
}

export function handleTransferabilitySet(event: TransferabilitySet): void {
  const collection = new Collection(
    event.address.toHexString() + event.params.id.toHexString()
  );

  collection.wrappr = event.address.toHexString();
  collection.collectionId = event.params.id;
  collection.transferability = event.params.set;

  collection.save();
}

export function handleURI(event: URI): void {
  const collection = new Collection(
    event.address.toHexString() + event.params.id.toHexString()
  );

  collection.wrappr = event.address.toHexString();
  collection.uri = event.params.value;

  collection.save();
}

export function handleUserPermissionSet(event: UserPermissionSet): void {
  const user = new User(
    event.address.toHexString() +
      event.params.id.toHexString() +
      event.params.to.toHexString()
  );

  user.collection = event.address.toHexString() + event.params.id.toHexString();
  user.permission = event.params.set;

  user.save();
}
export function handleUserURIset(event: UserURIset): void {
  const user = new User(
    event.address.toHexString() +
      event.params.id.toHexString() +
      event.params.to.toHexString()
  );

  user.collection = event.address.toHexString() + event.params.id.toHexString();
  user.uri = event.params.uuri;

  user.save();
}
