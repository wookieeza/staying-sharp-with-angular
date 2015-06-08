angular.module('NoteWrangler')
  .controller('NotesIndexController', function(){
     var controller = this;
     this.notes
     $http({method: 'GET', url:'/notes'}).success(function(data) {
        controller.notes = data;
     });
  });