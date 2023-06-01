/**
 * @notice Sample simulation configuration file for a roundtrip proposal
 */
import { SimulationConfigNew } from '../types'
import { Interface } from '@ethersproject/abi'
import { parseUnits } from '@ethersproject/units'

const ARBSYS = '0x0000000000000000000000000000000000000064'

const call1 = {
  target: ARBSYS,
  calldata:
    '0x928c169a000000000000000000000000e6841d92b0c345144506576ec13ecf5103ac7f490000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000026401d5062a000000000000000000000000a723c008e76e379c55599d2e4d93879beafda79c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000001a56238f04802a2aa6d74a32b3aca286a25fe7c544fa7db1d7efd0c297bd5a20000000000000000000000000000000000000000000000000000000000003f48000000000000000000000000000000000000000000000000000000000000001800000000000000000000000004dbd4fc535ac27206064b68ffcf827b0a60bab3f000000000000000000000000cf57572261c7c2bcf21ffd220ea7d1a27d40a82700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000841cff79cd0000000000000000000000008f89288a199f92cd6c5c9fd97b530ea5e868556300000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004b147f40c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
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
  description: 'A roundtrip proposal',
}
