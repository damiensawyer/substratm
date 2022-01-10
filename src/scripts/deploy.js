const { updateFrontEnd } = require('./updateFrontEnd');
async function main() {
  const SubstratmNFT = await ethers.getContractFactory('SubstratmNFT');
  const deployedSubstratmContract = await SubstratmNFT.deploy();

  console.log(
    'SubstratmNFT Address deployed to:',
    deployedSubstratmContract.address
  );
  return deployedSubstratmContract.address;
}

main()
  .then((deployedContractAddress) => updateFrontEnd(deployedContractAddress))
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
