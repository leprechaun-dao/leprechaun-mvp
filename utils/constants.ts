// TODO make these wagmi contracts?
import { ERC20ABI } from "@/utils/abis/ERC20";
import { LeprechaunFactoryABI } from "@/utils/abis/LeprechaunFactory";
import { LeprechaunLensABI } from "@/utils/abis/LeprechaunLens";
import { OracleInterfaceABI } from "@/utils/abis/OracleInterface";
import { PositionManagerABI } from "@/utils/abis/PositionManager";
import { SyntheticAssetABI } from "@/utils/abis/SyntheticAsset";

export const rpcUrl =
  "https://base-mainnet.infura.io/v3/" + process.env.NEXT_PUBLIC_INFURA_KEY;

export const usdcAddress = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
export const icoAddress = "0x99ECa4843D85b73b4EEA8e987B63B77763DAadFd";
export const lprAddress = "0x7AD3b12d91e81ebd218f9acF55E2A699d7f68A33";

export const LeprechaunFactoryAddress =
  "0x364A6127A8b425b6857f4962412b0664D257BDD5";
export const PositionManagerAddress =
  "0x401d1cD4D0ff1113458339065Cf9a1f2e8425afb";
export const OracleInterfaceAddress =
  "0xBc2e651eD3566c6dF862815Ed05b99eFb9bC0255";
export const LENSAddress = "0x80d4D0e68efDBB8b16fdD1e8ff7511ecc3869503";

export const sDOWAddress = "0xD14F0B478F993967240Aa5995eb2b1Ca6810969a";

export const mUSDCAddress = "0x39510c9f9E577c65b9184582745117341e7bdD73";
export const mWETHAddress = "0x95539ce7555F53dACF3a79Ff760C06e5B4e310c3";
export const mWBTCAddress = "0x1DBf5683c73E0D0A0e20AfC76F924e08E95637F7";

export const assetsImages: Record<string, string> = {
  sDOW: "/assets/us.svg",
  sXAU: "/assets/gold.svg",
  sOIL: "/assets/oil.svg",
  mWBTC: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  mWETH: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  mUSDC: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
};

export {
  ERC20ABI,
  LeprechaunFactoryABI,
  LeprechaunLensABI,
  OracleInterfaceABI,
  PositionManagerABI,
  SyntheticAssetABI,
};

export function getUniswapPoolHash(sAssetSymbol: string): string {
    switch (sAssetSymbol) {
      case "sDOW":
        return "0x35fe68d317f15c3db528192cf0e71eff2265babaaaee23d7192b98703729bd89";

      case "sXAU":
        return "0x4a880171e7bfbee7a8f390ac3fe36245baecc1b7064e399ad042c5e85a010651";

      case "sOIL":
        return "0xfb6d04fbc133f88ee966239857c3b9f1c005a5aba87497dad853d175bc819451";

      default:
        return "";
    }
}

export const EXPLORER_URL = "https://basescan.org/"