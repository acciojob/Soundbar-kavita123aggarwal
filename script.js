let audio = null;

function playSound(soundFile) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    
    audio = new Audio(`sounds/${soundFile}`);
    audio.play();
}

function stopSound() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

