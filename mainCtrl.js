var app = angular.module('sounder');

app.controller('mainCtrl', function($scope, soundService, $sce){

  $scope.getUser = function(){
    soundService.getUser($scope.searchText).then(function(res){
      $scope.userData = res.data;
    }, function(err){
      console.log(res.err);
    });
  };

  $scope.play = function(track_url){
    SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      console.log(oEmbed);
      $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
    });
  };

  $scope.getBirds = function(){
    soundService.mySDK($scope.status, function(birds, err){
      if(err){
        console.log(err);
      } else {
        $scope.birds = birds;
      }
    })
  }

})
