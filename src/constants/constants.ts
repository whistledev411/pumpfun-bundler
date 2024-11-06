import dotenv from "dotenv";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { getOrCreateKeypair, logger, readBuyerWallet } from "../src";
import { Logger } from "pino";
import bs58 from "bs58"
// import { Program } from "@coral-xyz/anchor";
// import * as anchor from "@coral-xyz/anchor";
// import fs from "fs";
const KEYS_FOLDER = __dirname + "/.keys";

const retrieveEnvVariable = (variableName: string, logger: Logger) => {
    const variable = process.env[variableName] || '';
    if (!variable) {
        console.log(`${variableName} is not set`);
        process.exit(1);
    }
    return variable;
};

dotenv.config()

export const RPC_ENDPOINT = retrieveEnvVariable("RPC_ENDPOINT", logger)
export const RPC_WEBSOCKET_ENDPOINT = retrieveEnvVariable("RPC_WEBSOCKET_ENDPOINT", logger)
export const connection = new Connection(RPC_ENDPOINT, { wsEndpoint: RPC_WEBSOCKET_ENDPOINT, commitment: "confirmed" });
export const IS_TEST = retrieveEnvVariable("IS_TEST", logger) === "true"

// export const RPC_ENDPOINT = "https://white-aged-glitter.solana-mainnet.quiknode.pro/743d4e1e3949c3127beb7f7815cf2ca9743b43a6/"
// export const RPC_WEBSOCKET_ENDPOINT = "wss://white-aged-glitter.solana-mainnet.quiknode.pro/743d4e1e3949c3127beb7f7815cf2ca9743b43a6/"
export const JITO_FEE = 500000
export const COMMITMENT_LEVEL = "confirmed"
export const JITO_KEY = "66xqL9aFZJ8k9YpjNBexNASfuoDgNE1ZpGRXB28zoTfS4u2czzVBhMNMqgZYFeMN8FnUi6gMzXWgVYRHkTZ6yuLC"
export const JITO_AUTH_KEYPAIR = "66xqL9aFZJ8k9YpjNBexNASfuoDgNE1ZpGRXB28zoTfS4u2czzVBhMNMqgZYFeMN8FnUi6gMzXWgVYRHkTZ6yuLC"
export const BLOCKENGINE_URL = "tokyo.mainnet.block-engine.jito.wtf"
export const global_mint = new PublicKey("p89evAyzjd9fphjJx7G3RFA48sbZdpGEppRcfRNpump")

export const PUMP_PROGRAM = new PublicKey("6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P");

// const IDL_PumpFun = JSON.parse(fs.readFileSync("./pumpfun-IDL.json", "utf-8")) as anchor.Idl;
// export const program = new anchor.Program(IDL_PumpFun, PUMP_PROGRAM, provider);

export const SLIPPAGE_BASIS_POINTS = 500n;

export const SWAPSOLAMOUNT = Number(retrieveEnvVariable("SWAP_AMOUNT", logger))

