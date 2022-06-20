pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDC is ERC20("USDC", "USDC") {
    constructor() {
    }

    function mint(address addr, uint amount) external {
        _mint(addr, amount);
    }
}