// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

import { usdcAddress } from './_address'
import { USDCAbi } from './usdc_abi'

async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy();
    await myNFT.deployed();

    const [ deployer ] = await ethers.getSigners()
    const usdc = new ethers.Contract(usdcAddress, USDCAbi, deployer)

    const Borrower = await ethers.getContractFactory("Borrower");
    const borrower = await Borrower.deploy(usdc.address, myNFT.address);
    await borrower.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
