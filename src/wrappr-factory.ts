import { BigInt } from "@graphprotocol/graph-ts";
import {
  WrapprFactory,
  WrapprDeployed,
} from "../generated/WrapprFactory/WrapprFactory";
import { Wrappr } from "../generated/schema";
import { Wrappr as WrapprTemplate } from "../generated/templates";

export function handleWrapprDeployed(event: WrapprDeployed): void {
  WrapprTemplate.create(event.params.wrappr);
  const wrappr = new Wrappr(event.params.wrappr.toHexString());

  wrappr.name = event.params.name;
  wrappr.symbol = event.params.symbol;
  wrappr.baseURI = event.params.baseURI;
  wrappr.mintFee = event.params.mintFee;
  wrappr.admin = event.params.admin;

  wrappr.save();
}
