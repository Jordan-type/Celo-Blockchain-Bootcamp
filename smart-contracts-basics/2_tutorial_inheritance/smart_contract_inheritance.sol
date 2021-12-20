// SPDX-License-Identifier: GPL-3.0

// library called safemath
// ierc20

pragma solidity ^0.7.0;

interface Regulator {
    function checkValue(uint256 amount) external returns(bool);
    function loan() external returns (bool);
}

contract Bank is Regulator {
    
   uint256 value;
   
   constructor(uint256 amount){
       value = amount;
   }
   
   function deposit(uint256 amount) public {
       value += amount;
   }
   
   function withdraw(uint256 amount) public {
       if (checkValue(amount)){
           value -= amount;
       }
   }
   
   function balance() public view returns (uint256) {
       return value;
   }
   
   function checkValue(uint256 amount) public view override returns(bool) {
       return value >= amount;
   }
   
   function loan() public view override returns (bool) {
       return value > 0;
   }
   
}