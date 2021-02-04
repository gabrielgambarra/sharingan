var eye = document.getElementById("eye");

function start() {
    document.getElementById("play-button").setAttribute("style", "display: none;");
    openEye();
}

function openEye() {

    setTimeout(
        function() {
            new Howl({
                src: ["vendors/audio/sharingan.mp3", "sound.wav"],
                autoplay: true,
                volume: 0.1
              }
            );
            eye.classList.add("open-eye");
        }, 2000
    );

    setEyeBlink();
}

function setEyeBlink() {

    setInterval(
        function() {
            eye.classList.add("blink");
        }, 5000
    );
    
    setInterval(
        function() {
            eye.classList.remove("blink");
        }, 5400
    );

}
