const FlipContract = artifacts.require("FlipContract");
const SubstratmContract = artifacts.require("SubstratmContract");

module.exports = async function(deployer) {
    await deployer.deploy(FlipContract);
    let instance = await FlipContract.deployed()
    instance.fundContract({value: 100000000000000})


    await deployer.deploy(SubstratmContract);
    //let instance_sub = await SubstratmContract.deployed()
    //instance_sub.fundContract({value: 100000000000000})

};