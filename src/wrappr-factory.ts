import { BigInt } from "@graphprotocol/graph-ts"
import {
  WrapprFactory,
  WrapprDeployed
} from "../generated/WrapprFactory/WrapprFactory"
import { Wrappr } from "../generated/schema"

export function handleWrapprDeployed(event: WrapprDeployed): void {
  const wrappr = new Wrappr(event.params.wrappr.toHexString())
  
  wrappr.name = event.params.name 
  wrappr.symbol = event.params.symbol
  wrappr.baseURI = event.params.baseURI
  wrappr.mintFee = event.params.mintFee
  wrappr.admin = event.params.admin

  wrappr.save()
}
