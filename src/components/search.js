angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<'
  },
  controller: function (youTube) {
    this.searchQuery = '';
    this.service = {
      search: function(query, cb) {
        youTube.search(query, cb);
      }
    };
  },
  templateUrl: 'src/templates/search.html'
});
