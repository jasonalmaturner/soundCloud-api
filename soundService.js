var app = angular.module('sounder');

app.service('soundService', function($http){

  this.getUser = function(username){
    return $http({
      method: 'GET',
      url: 'http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e'
    })
  };

  this.mySDK = function(status, cb){
    $http({
      method: 'GET',
      url: 'http://bird-api.com/api/birds?IUCNRedListCategory2014=' + status
    }).then(function(res){
      cb(res.data, null);
    }, function(err){
      cb(null, err);
    });
  };

})
