async function main() {
    const SubstratmNFT = await ethers.getContractFactory("SubstratmNFT");
    const deployedSubstratmContract = await SubstratmNFT.deploy();
  
    console.log("SubstratmNFT Address deployed to:", deployedSubstratmContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });