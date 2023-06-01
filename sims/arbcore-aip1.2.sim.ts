/**
 * @notice Simulation configuration file for AIP 1.2
 */
import { ethers } from 'ethers'
import { SimulationConfigNew } from '../types'

const ARBSYS = '0x0000000000000000000000000000000000000064'

// from https://github.com/ArbitrumFoundation/governance/blob/07d3e88c71c3fde922721837f947cef2868e6d67/scripts/proposals/AIP12/data/42161-AIP1.2-data.json
const aip1dot2 = {
  arbSysSendTxToL1Args: {
    l1Timelock: '0xE6841D92B0C345144506576eC13ECf5103aC7f49',
    calldata:
      '0x01d5062a000000000000000000000000a723c008e76e379c55599d2e4d93879beafda79c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000067565fcc91c79be6e957056bdf0ed93287216afcc5ea02fec16f1900a177a3c5000000000000000000000000000000000000000000000000000000000003f48000000000000000000000000000000000000000000000000000000000000001800000000000000000000000004dbd4fc535ac27206064b68ffcf827b0a60bab3f000000000000000000000000cf57572261c7c2bcf21ffd220ea7d1a27d40a82700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000841cff79cd0000000000000000000000006274106eedd4848371d2c09e0352d67b795ed51600000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004b147f40c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  },
}
const iface = new ethers.utils.Interface(['function sendTxToL1(address,bytes)'])
const calldata = iface.encodeFunctionData('sendTxToL1', [
  aip1dot2.arbSysSendTxToL1Args.l1Timelock,
  aip1dot2.arbSysSendTxToL1Args.calldata,
])

const call1 = {
  target: ARBSYS,
  calldata: calldata,
  value: 0,
  signature: '',
}

export const config: SimulationConfigNew = {
  type: 'new',
  daoName: 'ArbCore',
  governorType: 'arb',
  governorAddress: '0xf07ded9dc292157749b6fd268e37df6ea38395b9',
  targets: [call1.target], // Array of targets to call.
  values: [call1.value], // Array of values with each call.
  signatures: [call1.signature], // Array of function signatures. Leave empty if generating calldata with ethers like we do here.
  calldatas: [call1.calldata], // Array of encoded calldatas.
  description: 'AIP1.2 Simulation',
}
