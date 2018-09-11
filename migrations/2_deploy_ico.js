var NauhToken = artifacts.require("./NauhToken.sol");
var NauhCrowdsale = artifacts.require("./NauhCrowdsale.sol");

const duration = {
  seconds: function (val) { return val; },
  minutes: function (val) { return val * this.seconds(60); },
  hours: function (val) { return val * this.minutes(60); },
  days: function (val) { return val * this.hours(24); },
  weeks: function (val) { return val * this.days(7); },
  years: function (val) { return val * this.days(365); },
};

module.exports = async function(deployer, network, accounts) {
  deployer.deploy(NauhToken, "Nauh Token", "NAUH", 18).then(async () => {
    const deployedToken = await NauhToken.deployed();
    console.log(deployedToken.address)
    // uint256 _rate,
    // address _wallet,
    // ERC20 _token,
    // uint256 _openingTime,
    // uint256 _closingTime,
    // uint256 _cap
    const rate = 100; // 1 eth = 100 NAUH tokens
    const wallet = accounts[0];
    const timeNow = Math.floor(Date.now() / 1000);
    const openingTime = timeNow  + duration.seconds(30);
    const closingTime = timeNow  + duration.years(1);
    const cap = web3.toWei(1); // 100 eth
  
    await deployer.deploy(NauhCrowdsale, rate, wallet, deployedToken.address, openingTime, closingTime, cap);
    const deployedCrowdsale = await NauhCrowdsale.deployed();
    console.log('aa', deployedCrowdsale.address);
    await deployedToken.transferOwnership(deployedCrowdsale.address);
    console.log('Contracts deployed: \n', deployedCrowdsale.address, deployedToken.address)

  })



};

