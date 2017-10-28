angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function(query, callback) {
    console.log('searched ', query);
    console.log('callback', callback);
    var data = {
      part: 'snippet',
      q: query,
      maxResults: 5,
      key: 'AIzaSyCe9OjRxypAljXosJDrcwWT-bcJcn6Y0GQ',
      chart: 'mostPopular',
      type: 'video'
    };
    
    $http.get('https://www.googleapis.com/youtube/v3/videos',
      {
        params: data,
        type: 'json'
      }).then((response) => {
        callback(response.data.items);
        console.log('succeeded: ', response);
      }, (response) => {
        console.log('failed: ', response);
      });
  };
});
