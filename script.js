const ViewModel = can.DefineMap.extend({
    togglePlay () {
        this.paused = !this.paused;
        if(this.paused){
            this.videoElement.play();
        } else{
            this.videoElement.pause();
        }
    },
    seekSlider (value) {
        var seekto = this.videoElement.duration * (value / 100);
        this.videoElement.currentTime = seekto;
    },
    sliderValue: {
        type: 'number',
        default: 0 
    },
    muted: {
        type: 'boolean',
        default: false
    },
    paused: {
        type: 'boolean',
        default: false
    },
    currentTime: {
        type: 'string',
        default: '00:00'
    },
    durationTime: {
        type: 'string',
        default: '00:00'
    },
    videoElement:{
        type: 'any'
    },
    src: 'string'
})

const view = can.stache (`
<video class="video"> <source src="{{src}}"> </video>
<div class="video_controls_bar">
    <button class="playpausebtn" on:click="togglePlay()"> {{#if(paused)}}Play{{else}}Pause{{/if}} </button>
    <button class="mutebtn"> Mute </button>
    <input class="seekslider" type="range" value="0" max="100" step="1" style="width: 250px" on:change="seekSlider(scope.element.value)" value:from="sliderValue">
    <span class="curtimetext">{{currentTime}}</span> / <span class="durtimetext">{{durationTime}}</span>
</div>
`);

can.Component.extend ({
    tag : 'video-player',
    view,
    ViewModel,
    events: {
        init () {
            setTimeout(() => {
                const videoElement = this.element.querySelector('video');
                this.viewModel.videoElement = videoElement
                this.viewModel.videoElement.addEventListener('timeupdate', () => {
                    const nt = videoElement.currentTime * (100/ videoElement.duration);
                    this.viewModel.sliderValue = nt;  
                    const curmins = Math.floor(videoElement.currentTime / 60);
                    let cursecs = Math.floor(videoElement.currentTime - curmins * 60);
                    const durmins = Math.floor(videoElement.duration / 60);
                    let dursecs = Math.floor(videoElement.duration - durmins * 60);
                    if(cursecs < 10) {cursecs = "0"+cursecs;}
                    if(dursecs < 10){dursecs = "0"+dursecs;}
                    this.viewModel.currentTime = curmins+":"+cursecs;
                    this.viewModel.durationTime = durmins+":"+dursecs;
                })
            }, 0)
        }
    }
})

//function makeOscarPlayer(videoElement){
//    var div = document.createElement("div");  
//    div.innerHTML = `
//        <div class="video_controls_bar">
//            <button class="playpausebtn"> Play </button>
//            <button class="mutebtn"> Mute </button>
//            <input class="seekslider" type="range" value="0" max="100" step="1" style="width: 250px">
//            <span class="curtimetext">00:00</span> / <span class="durtimetext">00:00</span>
//        </div>
//    `
//    var parent = videoElement.parentNode;
//    parent.insertBefore(div, videoElement);
//    div.insertBefore(videoElement, div.querySelector('.video_controls_bar'));
//    
//    var playbtn, seekslider, curtimetext, durtimetext, mutebtn;
//    
//    playbtn = div.querySelector('.playpausebtn');
//    mutebtn = div.querySelector('.mutebtn');
//    seekslider = div.querySelector('.seekslider');
//    curtimetext = div.querySelector('.curtimetext');
//    durtimetext = div.querySelector('.durtimetext')
//    
//    //Event listners
//    playbtn.addEventListener('click', playPause, false);
//    seekslider.addEventListener('change', vidSeek, false);
//    mutebtn.addEventListener('click', vidMute, false);
//    videoElement.addEventListener('timeupdate', seektimeupdate, false);
//    function playPause(){
//        if(videoElement.paused){
//            videoElement.play();
//            playbtn.innerHTML = "Pause";
//        } else{
//            videoElement.pause();
//            playbtn.innerHTML = "Play";
//        }
//    };
//    function vidSeek(){
//    var seekto = videoElement.duration * (seekslider.value / 100);
//    videoElement.currentTime = seekto;
//};
//    function vidMute (){
//    if(videoElement.muted){
//            videoElement.muted = false;
//            mutebtn.innerHTML = "Mute";
//        } else {
//            videoElement.muted = true;
//            mutebtn.innerHTML = "Unmute";
//        }
//};
//    function seektimeupdate(){
//    var nt = videoElement.currentTime * (100/ videoElement.duration);
//    seekslider.value = nt;
//    var curmins = Math.floor(videoElement.currentTime / 60);
//    var cursecs = Math.floor(videoElement.currentTime - curmins * 60);
//    var durmins = Math.floor(videoElement.duration / 60);
//    var dursecs = Math.floor(videoElement.duration - durmins * 60);
//    if(cursecs < 10) {cursecs = "0"+cursecs;}
//    if(dursecs < 10){dursecs = "0"+dursecs;}
//    curtimetext.innerHTML = curmins+":"+cursecs;
//    durtimetext.innerHTML = durmins+":"+dursecs;
//};
//    
//}
