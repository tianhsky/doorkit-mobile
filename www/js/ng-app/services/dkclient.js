angular.module('DoorKit').service('$dkclient', ['$store',
  function($store){
    var self = this;
    var _brokerID = $store.get('broker_id');
    var _clientType = 'user';

    self.setBrokerID = function(brokerID){
      _brokerID = brokerID;
      $store.set('broker_id', brokerID);
    }

    self.getObject = function(){
      return {
        broker_id: _brokerID,
        client_type: _clientType
      }
    }

    self.isValid = function(){
      return (_brokerID && _brokerID!='' && _clientType && _clientType!='' ? true : false);
    }

    self.signIn = function(brokerID){
      self.setBrokerID(brokerID);
    }

    self.signOut = function(){
      self.setBrokerID(null);
    }

  }]
);
