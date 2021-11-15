const { expect } = require("chai");

describe("Substratm NFT contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
//    const [owner] = await ethers.getSigners();

    const SubstratmNFT = await ethers.getContractFactory("SubstratmNFT");

    const hardhatToken = await SubstratmNFT.deploy();

    const profiles = await hardhatToken.profiles;
    expect(profiles.length).to.equal(0);
  });
});