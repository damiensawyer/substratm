// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
 
//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";


import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract SubstratmContract is ERC1155, Ownable {

    uint256 public constant MYCODE=123; 
    event CoinMinted (
            address indexed owner,
            uint256 indexed code,
            uint256 amount
    );
    
    
    constructor() ERC1155(""){
        _mint(msg.sender, MYCODE, 2, ""); 
        
    }
    
    function mint(address account,uint256 id,uint256 amount) public onlyOwner {
        emit CoinMinted(account, id, amount );
        _mint(account, id, amount * 5, "");
        
    }
        
        
    function burn(address account,uint256 id,uint256 amount) public
    {
        require(msg.sender == account);
        _burn(account,id, amount);
    }

}