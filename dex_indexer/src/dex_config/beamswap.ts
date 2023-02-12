import { lookupArchive } from '@subsquid/archive-registry'
import dotenv from 'dotenv'
dotenv.config()

export const CHAIN_NODE: string = process.env.MOONBEAM_CHAIN_NODE!
export const SUBSQUID_ARCHIVE = lookupArchive('moonbeam', { release: 'FireSquid' })

export const FACTORY_ADDRESS = '0x985bca32293a7a496300a48081947321177a86fd'.toLowerCase()
export const FACTORY_CREATION_BLOCK = 199156
export const STABLESWAP_POOLS: [string, number][] = [
    ['0x8273De7090C7067f3aE1b6602EeDbd2dbC02C48f', 1329660], // DAI.multi/USDC.multi/BUSD.multi/USDT.multi
    ['0x09A793cCa9D98b14350F2a767Eb5736AA6B6F921', 1298636], // USDT.mad/USDC.mad/DAI.mad
]
// Generated by pairsProcessor.ts, consumed by processor.ts
export const POOLS_JSON_FILE = './assets/pools_beamswap.json'

export const WRAPPED_NATIVE_ADDRESS = '0xAcc15dC74880C9944775448304B263D191c6077F'.toLowerCase() // WGLMR
export const WRAPPED_NATIVE_USDC_ADDRESS = '0xb929914B89584b4081C7966AC6287636F7EfD053'.toLowerCase() // WGLMR_USDC.multi
export const USDC = '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b'.toLowerCase() // USDC.multi
export const DOT = '0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080'.toLowerCase() // xcDOT
export const WHITELIST: string[] = [
    '0xcd3B51D98478D53F4515A306bE565c6EebeF1D58'.toLowerCase(), // GLINT (BeamSwap token)
    WRAPPED_NATIVE_ADDRESS,
    USDC,
]