var uid;
var params = new URLSearchParams(window.location.search);
uid = window.videoUid || params.get('uid');
var url = '/live/' + encodeURI( uid ) + '.m3u8';
if ( Hls.isSupported() ) {
    var video = document.getElementById('video');
    var hls = new Hls();
    hls.attachMedia(video);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(url);
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            video.play();
        });
    });
}
