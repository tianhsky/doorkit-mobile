angular.module('DoorKit').service('$dkclient', ['$store',
  function($store){
    var _brokerID = $store.get('broker_id');
    var _clientType = 'user';
    
    this.setBrokerID = function(BrokerID){
      _brokerID = BrokerID;
      $store.set('broker_id', BrokerID);
    }

    this.getObject = function(){
      return {
        broker_id: _brokerID,
        client_type: _clientType
      }
    }

    this.isValid = function(){
      return (_brokerID && _clientType)
    }

    this.signOut = function(){
      this.setBrokerID(null);
    }

  }]
);