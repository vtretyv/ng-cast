angular.module('video-player')

.component('app', {
  // TODO
  controller: function(youTube) {
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
      console.log(index);
    };

    this.searchResults = function(results) {
      this.currentVideo = results[0];
      this.videos = results;
    }.bind(this);

    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;

    this.search = function() {
      youTube.search('', this.searchResults);//Not sure if right way, current work around
    };
  },
  templateUrl: 'src/templates/app.html'
});
