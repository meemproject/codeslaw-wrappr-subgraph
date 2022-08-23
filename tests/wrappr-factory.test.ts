import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as/assembly/index";
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Wrappr } from "../generated/schema";
import { handleWrapprDeployed } from "../src/wrappr-factory";
import { createWrapprDeployedEvent } from "./wrappr-factory-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0
describe("Describe entity assertions", () => {
  beforeAll(() => {
    let wrapprDeploymentEvent = createWrapprDeployedEvent(
      Address.fromString("0xa16081f360e3847006db660bae1c6d1b2e17ec2a"),
      "Test Wrappr",
      "TEST",
      "ipfs://mock",
      BigInt.fromI32(234),
      Address.fromString("0x0000000000000000000000000000000000000002")
    );
    handleWrapprDeployed(wrapprDeploymentEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Wrappr created and stored", () => {
    assert.entityCount("Wrappr", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Wrappr",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "name",
      "Test Wrappr"
    );
    assert.fieldEquals(
      "Wrappr",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "symbol",
      "TEST"
    );
    assert.fieldEquals(
      "Wrappr",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "baseURI",
      "ipfs://mock"
    );
    assert.fieldEquals(
      "Wrappr",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "mintFee",
      "234"
    );
    assert.fieldEquals(
      "Wrappr",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "admin",
      "0x0000000000000000000000000000000000000002"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
