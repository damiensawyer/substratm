// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";


contract TwitterClient is ChainlinkClient {
    using Chainlink for Chainlink.Request;
    uint256 constant private ORACLE_PAYMENT = 1 * LINK_DIVISIBILITY;
    uint256 public volume;
    string public username;
    address private oracle;
    string private jobId;
    uint256 private fee;
//    Deployed helperFunctions;
    constructor() {
        setPublicChainlinkToken();
        oracle = 0x112A582C924D432bB8b05840dE0fd9B585A8f6ac; // KOVAN oracle address
        jobId = "336173f43fa74a6db81223590a8c23f0"; // defined on locally running chainlink Node
//        helperFunctions = HelperFunctions(0x8A8f9D8109cda2CC49B1DA367B063183318E9775); // TODO refactor this to call stringToBytes, etc.
    }

    function requestTwitterVerification(
        string memory _tweetId,
        string memory _verificationString,
        string memory _twitterHandle
    ) public
    {
        Chainlink.Request memory req = buildChainlinkRequest(stringToBytes32(jobId), address(this), this.fulfillTwitterData.selector);
        req.add("tweetId", _tweetId);
        req.add("twitterHandle", _twitterHandle);
        req.add("verificationString", _verificationString);
        sendChainlinkRequestTo(oracle, req, ORACLE_PAYMENT);
    }

    function fulfillTwitterData(bytes32 _requestId, bytes32 _username)
    public virtual
    recordChainlinkFulfillment(_requestId)
    {
        username = bytes32ToString(_username);
    }

    function bytes32ToString(bytes32 _bytes32) public pure returns (string memory) {
        uint8 i = 0;
        while(i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
    }

    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly { // solhint-disable-line no-inline-assembly
            result := mload(add(source, 32))
        }
    }
}
