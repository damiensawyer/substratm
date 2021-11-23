// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol"; // https://docs.openzeppelin.com/contracts/2.x/access-control
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; // https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721URIStorage
contract SubstratmNFT is ERC721URIStorage, Ownable {
    struct Profile {
        string twitterHandle;
        uint256 tokenId;
    }
    // Base URI
    string private _baseURIextended;

    mapping(address => uint256) public walletToProfileId;
    mapping(uint256 => address) public profileIdToWallet;
    mapping(address => Profile) public profiles;
    
    
    //address[] public profiles;
    uint256 internal fee;
    uint256 internal lastTokenId;
    
     constructor() ERC721("SubstratmNFT", "SBSTR") { 
        lastTokenId = 0;
    }
    
    function getProfileMetadata(uint256 profileId)
    public
    view
    returns (Profile  memory )
    {
        // TODO return all profile Metadata
        return     profiles[profileIdToWallet[profileId]];
    }

    function updateSubstratmProfile(
        address userAddress,
        string memory twitterHandle
    ) public {
        require(_isApprovedOrOwner(_msgSender(), walletToProfileId[userAddress]), "ERC721: updateSubstratmProfile caller is not owner nor approved"        );
        profiles[_msgSender()].twitterHandle = twitterHandle;
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
        lastTokenId = lastTokenId + 1;
        uint256 newId = lastTokenId;
        
        walletToProfileId[_msgSender()] = newId; // Lilly, I thought this made more sense because we can look up stuff for a given address, which we can read from metamask in the Front End.
        profileIdToWallet[newId] = _msgSender();
        _safeMint(_msgSender(), newId);
                
        profiles[_msgSender()] = Profile({
                twitterHandle: twitterHandle,
                tokenId: newId
            });
    }
    
    function readTwitterHandleForGivenAddress (address userAddress) public view returns (string memory) 
    {
        return profiles[userAddress].twitterHandle; // not sure what happens if we haven't minted yet and the mapping entry is 0. Are there null reference exceptions?
    }



    function setTokenURI(uint256 profileId, string memory _profileURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), profileId), "ERC721: transfer caller is not owner nor approved"
        );
        _setTokenURI(profileId, _profileURI);
    }


}