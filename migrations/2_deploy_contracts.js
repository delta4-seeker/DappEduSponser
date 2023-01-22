const Donation = artifacts.require("Donation");

module.exports =async  function(deployer) {
  await deployer.deploy(Donation);
};

