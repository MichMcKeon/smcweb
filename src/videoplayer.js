
var player = video.js('videoPlayer', {
    autoplay: 'muted',
    controls: true,
    poster: './assets/appheaderlogo1.png',
    loop: true,
    playbackRates: [0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
    plugins: {
        hotkeys: {
            enabledModifiersForNumbers: false,
            seekStep:30
        }
    }
});