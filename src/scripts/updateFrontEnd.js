const fs = require('fs');
require('dotenv').config();
const path = require('path');

async function updateFrontEnd(deployedContractAddress) {
  console.log('updating files');

  console.log('updating contractAddress on FE...');
  const data = `export const contractAddress = "${deployedContractAddress}";`;
  const contractAddrPath = path.resolve(
    __dirname,
    '../utils/contractAddress.tsx'
  );

  fs.writeFileSync(contractAddrPath, data, (err) => {
    if (err) {
      console.error('ERROR: contract address not updated');
      throw err;
    }
  });
  console.log(
    `Successfully updated contract address to ${deployedContractAddress}`
  );
  return deployedContractAddress;
}

module.exports = { updateFrontEnd };
