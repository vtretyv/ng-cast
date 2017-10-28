angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    search: '<',
    result: '<'
  },
  controller: function () {
    this.searchQuery = '';
  },
  templateUrl: 'src/templates/search.html'
});
