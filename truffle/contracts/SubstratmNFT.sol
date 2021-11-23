// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
contract SubstratmNFT is ERC721URIStorage, Ownable {
    struct Profile {
        string twitterHandle;
    }
    // Base URI
    string private _baseURIextended;

    mapping(address => uint256) walletToProfileId;
    mapping(uint256 => address) public profileIdToOwnerAddress;
    Profile[] public profiles;
    uint256 internal fee;
    
    constructor() ERC721("SubstratmNFT", "SBSTR") public { 
        
    }
    
    function getProfileMetadata(uint256 profileId)
    public
    view
    returns (
        string memory
    )
    {
        // TODO return all profile Metadata
        return (
            profiles[profileId].twitterHandle
        );
    }

    function updateSubstratmProfile(
        uint256 profileId        
    ) public {
        require(
            _isApprovedOrOwner(_msgSender(), profileId), "ERC721: updateSubstratmProfile caller is not owner nor approved"
        );
        // TODO: add functionality to update Substratm Profile
    }
    function setBaseURI(string memory baseURI_) external onlyOwner() {
        _baseURIextended = baseURI_;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURIextended;
    }

    function requestToMintNewSubstratmProfileNFT(
        string memory twitterHandle
    ) public {
        // TODO validate twitter handle
        uint256 newId = profiles.length;
        
        profiles.push(
            Profile({
                twitterHandle: twitterHandle
            })
        );
        profileIdToOwnerAddress[newId] = msg.sender; // profile Id mapping to wallet Id
        _safeMint(msg.sender, newId);
    }

    function setTokenURI(uint256 profileId, string memory _profileURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), profileId), "ERC721: transfer caller is not owner nor approved"
        );
        _setTokenURI(profileId, _profileURI);
    }


}