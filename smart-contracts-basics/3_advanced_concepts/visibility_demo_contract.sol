// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VisibilityExample {
    // State variables of different visibilities
    uint private privateVar = 42;
    uint internal internalVar = 123;
    uint public publicVar = 777;

    // Private function
    function privateFunction() private view returns (uint) {
        return privateVar;
    }

    // Internal function
    function internalFunction() internal view returns (uint) {
        return internalVar;
    }

    // Public function
    function publicFunction() public view returns (uint) {
        return publicVar;
    }

    // External function
    function externalFunction() external pure returns (string memory) {
        return "I'm external";
    }

    // Function to test visibility within the contract
    function testVisibility() public view returns (uint, uint, uint, string memory) {
        return (
            privateFunction(),
            internalFunction(),
            publicFunction(),
            externalFunction()  // This will cause an error
        );
    }
}
