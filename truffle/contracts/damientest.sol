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
    //mapping(uint256 => address) public profileIdToOwnerAddress;
    mapping(uint256 => Profile) public profileMap;
    
    address[] public profiles;
    uint256 internal fee;
    
     constructor() ERC721("SubstratmNFT", "SBSTR") { 
        
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
        address userAddress,
        string memory twitterHandle
    ) public {
        require(_isApprovedOrOwner(_msgSender(), walletToProfileId[userAddress]), "ERC721: updateSubstratmProfile caller is not owner nor approved"        );
        
        
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
        profiles.push(_msgSender); // doing this so that we can get a count of minted nfts
        walletToProfileId[_msgSender] = newId; // Lilly, I thought this made more sense because we can look up stuff for a given address, which we can read from metamask in the Front End.
        
        _safeMint(_msgSender, newId);
                
        profileMap[_msgSender] = Profile({
                twitterHandle: twitterHandle
            });
    }
    
    function readTwitterHandleForGivenAddress (address userAddress) public returns (uint256) 
    {
     return walletToProfileId[msg.sender];   
    }



    function setTokenURI(uint256 profileId, string memory _profileURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), profileId), "ERC721: transfer caller is not owner nor approved"
        );
        _setTokenURI(profileId, _profileURI);
    }


}