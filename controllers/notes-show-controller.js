angular.module('NoteWrangler').controller('NotesShowController', function($http, $routeParams){

	var controller = this; // assign this to a variable in order to use this inside the callback
	$http({ method:'GET', url: '/notes/' + $routeParams.id}).success(
		function(data){
			controller.note = data;
		})

});