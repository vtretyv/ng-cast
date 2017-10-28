angular.module('video-player')

.component('app', {
  // TODO
  controller: function(youTube) {
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
      console.log(index);
    };
    this.searchResults = (results) => {
      this.currentVideo = results[0];
      this.videos = results;
    };
    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;
    this.search = function(query, cb) {
      console.log('clicked');
      youTube.search(query, cb);
    };
  },
  templateUrl: 'src/templates/app.html'
});
