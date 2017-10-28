angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    onClick: '<',
    index: '<'
  },
  controller: () => {},
  templateUrl: 'src/templates/videoListEntry.html'
});
