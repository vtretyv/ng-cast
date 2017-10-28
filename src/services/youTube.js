angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function(query, callback) {
    console.log('searched ', query);
    var data = {
      key: YOUTUBE_API_KEY,
      part: 'snippet',
      q: query,
      maxResults: 5,
      chart: 'mostPopular'
    };
    
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: data
    }).then((response) => {
      callback(response.data.items);
      console.log('succeeded: ', response);
    }, (response) => {
      console.log('failed: ', response);
    });
  };
});
