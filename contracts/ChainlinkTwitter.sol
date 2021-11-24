pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract ChainlinkTwitter is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    address private oracle;
    bytes32 private jobId;
    uint256 private fee;
    uint256 public statusCode;

    //only the contract owner should be able to tweet
    address public owner;
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    constructor() public {
        setPublicChainlinkToken();
        oracle = 0xAA1DC356dc4B18f30C347798FD5379F3D77ABC5b; // oracle address
        jobId = "09f3d678301a408cb6a8ab983932636d"; //job id
        fee = 11 * 10 ** 17; // 1.1 LINK
        owner = msg.sender;
    }
    //tweets the supplied string
    function tweet(string memory twt) public onlyOwner{
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        req.add("endpoint", "https://api.twitter.com/1.1/statuses/update.json");
        req.add("status", twt);
        req.add("copyPath", "statusCode");
        sendChainlinkRequestTo(oracle, req, fee);
    }

    //callback function
    function fulfill(bytes32 _requestId, uint256 _statusCode) public recordChainlinkFulfillment(_requestId) {
        statusCode = _statusCode;
    }
}