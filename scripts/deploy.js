async function main() {
    const SubstratmNFT = await ethers.getContractFactory("SubstratmNFT");
    const deployedSubstratmContract = await SubstratmNFT.deploy();
    const ChainlinkTwitter = await ethers.getContractFactory("ChainlinkTwitter");
    const deployedChainlinkTwitterContract = await ChainlinkTwitter.deploy();

    console.log("SubstratmNFT Address deployed to:", deployedSubstratmContract.address);
    console.log("ChainlinkTwitter Address deployed to:", deployedChainlinkTwitterContract.address);
    return deployedSubstratmContract.address;
}

main()
.then(() => process.exit(0))
.catch(
    (error) => {
        console.error(error);
        process.exit(1);
    }
);