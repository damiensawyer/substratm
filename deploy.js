async function main(){
const [deployer] = await ethers.getSigners();
console.log(`Deploying contracts with teh account: ${deployer.address}`);

const balance = await deployer.getBalance();
console.log(`Account balance: ${balance.toString()}`);

const Token = await ethers.getContractFactory('SubstratmNFT');
const token = await Token.deploy();
console.log(`Token address: ${token.address}}`);

}


main()
    .then(()=>process.exit(0))
    .catch(error =>{
        console.error(error);
        process.exit(1);
    });