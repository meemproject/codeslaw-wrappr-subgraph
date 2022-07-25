import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { WrapprDeployed } from "../generated/WrapprFactory/WrapprFactory"

export function createWrapprDeployedEvent(
  wrappr: Address,
  name: string,
  symbol: string,
  baseURI: string,
  mintFee: BigInt,
  admin: Address
): WrapprDeployed {
  let wrapprDeployedEvent = changetype<WrapprDeployed>(newMockEvent())

  wrapprDeployedEvent.parameters = new Array()

  wrapprDeployedEvent.parameters.push(
    new ethereum.EventParam("wrappr", ethereum.Value.fromAddress(wrappr))
  )
  wrapprDeployedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  wrapprDeployedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  wrapprDeployedEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )
  wrapprDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "mintFee",
      ethereum.Value.fromUnsignedBigInt(mintFee)
    )
  )
  wrapprDeployedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return wrapprDeployedEvent
}
