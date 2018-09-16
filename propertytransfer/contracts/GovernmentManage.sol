pragma solidity ^0.4.19;


import "./PropertyContract.sol";


contract GovernmentManage {

	address public government = 0x1aAFBfa6e844F9af8fabfA8420610CEe85Cd4605;
    mapping (address => PropertyContract) public properties;
  

	event NewPropertyCreated(address indexed owner_address, address indexed property_address, uint created_time);
	event GovernmentSigned(uint time);

    constructor () public {}

    modifier onlyGovernment() { 
    	require (msg.sender == government); 
    	_; 
    }
    

    function NewPropertyCreate(string _owner_name, string _location, string _ptype, uint _size, uint _cost, uint _tax) public returns(address){
        address property = new PropertyContract(_owner_name, _location, _ptype, _size, _cost, _tax, government, msg.sender);
        properties[property] = PropertyContract(property);
        emit NewPropertyCreated(msg.sender, property, now);
        return property;
    }
    
    function GovernmentSign(address _property) onlyGovernment public returns(bool){
    	PropertyContract property_contract = PropertyContract(_property);
    	emit GovernmentSigned(now);
    	return property_contract.GovernmentSign();
    }

    function checkGovernmentSigned(address _property) public constant returns(bool) {
    	return PropertyContract(_property).checkGovernmentSigned();
    }
    
    function checkOwnership(address _property) public constant returns(address) {
        return PropertyContract(_property).owner();
    }

}
