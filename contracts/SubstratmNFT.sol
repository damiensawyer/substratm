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
        uint256 tokenId = 0;
        if (!nftExistsForAccount(_msgSender())){
            lastTokenId = lastTokenId + 1;
            tokenId = lastTokenId;
            
            walletToProfileId[_msgSender()] = tokenId; // Lilly, I thought this made more sense because we can look up stuff for a given address, which we can read from metamask in the Front End.
            profileIdToWallet[tokenId] = _msgSender();
            _safeMint(_msgSender(), tokenId);
         }  
         else
         {
            tokenId = profiles[_msgSender()].tokenId;
         }     

        // update if it was existing. 
        profiles[_msgSender()] = Profile({
            twitterHandle: twitterHandle,
            tokenId: tokenId
        });
    }
    
    function readTwitterHandleForGivenAddress () public view returns (string memory) 
    {
        return profiles[_msgSender()].twitterHandle; // not sure what happens if we haven't minted yet and the mapping entry is 0. Are there null reference exceptions?
    }

    function nftExistsForAccount (address userAddress) public view returns (bool) 
    {
        return walletToProfileId[userAddress] != 0;
    }



    function setTokenURI(uint256 profileId, string memory _profileURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), profileId), "ERC721: transfer caller is not owner nor approved"
        );
        _setTokenURI(profileId, _profileURI);
    }


}