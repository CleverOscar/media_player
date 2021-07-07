//const vm = new can.DefineMap({
//    init: function () {
//        const videoElement = document.createElement('video')
//        const source = document.createElement('source')
//        source.setAttribute('src', this.src)
//        videoElement.appendChild(
//            source
//        )
//        this.videoElement = videoElement
//        this.videoElement.addEventListener('timeupdate', e => {
//                var nt = videoElement.currentTime * (100/ videoElement.duration);
//                this.sliderValue = nt;
//                var curmins = Math.floor(videoElement.currentTime / 60);
//                var cursecs = Math.floor(videoElement.currentTime - curmins * 60);
//                var durmins = Math.floor(videoElement.duration / 60);
//                var dursecs = Math.floor(videoElement.duration - durmins * 60);
//                if(cursecs < 10) {cursecs = "0"+cursecs;}
//                if(dursecs < 10){dursecs = "0"+dursecs;}
//                this.currentTime = curmins+":"+cursecs;
//                this.durationTime = durmins+":"+dursecs;
//        }) 
//    },
//    togglePlay () {
//        this.paused = !this.paused;
//        if(this.paused){
//            this.videoElement.play();
//        } else{
//            this.videoElement.pause();
//        }
//    },
//    seekSlider (value) {
//        var seekto = this.videoElement.duration * (value / 100);
//        this.videoElement.currentTime = seekto;
//    },
//    sliderValue: 0,
//    muted: false,
//    paused: false,
//    currentTime: '00:00',
//    durationTime: '00:00',
//    src: './1-setup.webm'
//})
//const template = can.stache.from('app')
//const frag = template(vm)
//
//document.body.appendChild(frag)
