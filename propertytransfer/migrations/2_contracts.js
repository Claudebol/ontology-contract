var PropertyContract = artifacts.require("PropertyContract");

var _ownername = "Claude";
var _location = "Egypt";
var _type = "Apartment building";
var _size = 200;
var _cost = 100000;
var _tax  = 100;

module.exports = function(deployer) {
  deployer.deploy(PropertyContract, _ownername, _location, _type, _size, _cost, _tax);
};
