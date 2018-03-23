function makeOscarPlayer(videoElement){
    
    var div = document.createElement("div");  
    div.innerHTML = `
        <div class="video_controls_bar">
            <button class="playpausebtn"> Play </button>
            <button class="mutebtn"> Mute </button>
            <input class="seekslider" type="range" value="0" max="100" step="1" style="width: 250px">
            <span class="curtimetext>00:00</span> / <span class="durtimetext">00:00</span>
        </div>
    `
    var parent = videoElement.parentNode;
    parent.insertBefore(div, videoElement);
    div.insertBefore(videoElement, div.querySelector('.video_controls_bar'));
    
    var playbtn, seekslider, curtimetext, durtimetext, mutebtn;
    
    playbtn = div.querySelector('.playpausebtn');
    mutebtn = div.querySelector('.mutebtn');
    seekslider = div.querySelector('.seekslider');
    curtimetext = div.querySelector('.curtimetext');
    durtimetext = div.querySelector('.durtimetext')
    
    //Event listners
    playbtn.addEventListener('click', playPause, false);
    seekslider.addEventListener('change', vidSeek, false);
    mutebtn.addEventListener('click', vidMute, false);
    videoElement.addEventListener('timeupdate', seektimeupdate, false);
    function playPause(){
        if(videoElement.paused){
            videoElement.play();
            playbtn.innerHTML = "Pause";
        } else{
            videoElement.pause();
            playbtn.innerHTML = "Play";
        }
    };
    function vidSeek(){
    var seekto = videoElement.duration * (seekslider.value / 100);
    videoElement.currentTime = seekto;
};
    function vidMute (){
    if(videoElement.muted){
            videoElement.muted = false;
            mutebtn.innerHTML = "Mute";
        } else {
            videoElement.muted = true;
            mutebtn.innerHTML = "Unmute";
        }
};
    function seektimeupdate(){
    var nt = videoElement.currentTime * (100/ videoElement.duration);
    seekslider.value = nt;
    var curmins = Math.floor(videoElement.currentTime / 60);
    var cursecs = Math.floor(videoElement.currentTime - curmins * 60);
    var durmins = Math.floor(videoElement.duration / 60);
    var dursecs = Math.floor(videoElement.duration - durmins * 60);
    if(cursecs < 10) {cursecs = "0"+cursecs;}
    if(dursecs < 10){dursecs = "0"+dursecs;}
    curtimetext.innerHTML = curmins+":"+cursecs;
    durtimetext.innerHTML = durmins+":"+dursecs;
};
    
}

/*var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn;


function intializePlayer(){
    debugger
    //Set object refrences
    vid = document.getElementById('my_video');
    playbtn = document.getElementById('playpausebtn');
    seekslider = document.getElementById('seekslider');
    curtimetext = document.getElementById('curtimetext');
    durtimetext = document.getElementById('durtimetext');
    mutebtn = document.getElementById('mutebtn');

    
    //Event listners
    playbtn.addEventListener('click', playPause, false);
    seekslider.addEventListener('change', vidSeek, false);
    vid.addEventListener('timeupdate', seektimeupdate, false);
    mutebtn.addEventListener('click', vidMute, false);

}

window.onload = intializePlayer;

function playPause() {
        if(vid.paused){
            vid.play();
            playbtn.innerHTML = "Pause";
        } else {
            vid.pause();
            playbtn.innerHTML = "Play";
        }
}; 

function vidSeek(){
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;
}

function seektimeupdate(){
    var nt = vid.currentTime * (100/ vid.duration);
    seekslider.value = nt;
    var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);
    var durmins = Math.floor(vid.duration / 60);
    var dursecs = Math.floor(vid.duration - durmins * 60);
    if(cursecs < 10) {cursecs = "0"+cursecs;}
    if(dursecs < 10){dursecs = "0"+dursecs;}
    curtimetext.innerHTML = curmins+":"+cursecs;
    durtimetext.innerHTML = durmins+":"+dursecs;
}

function vidMute (){
    if(vid.muted){
            vid.muted = false;
            mutebtn.innerHTML = "Mute";
        } else {
            vid.muted = true;
            mutebtn.innerHTML = "Unmute";
        }
}*/