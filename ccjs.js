let currentM = 0;

const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-time');
const playBtn = document.querySelector('.play');
const forwardBtn = document.querySelector('.fwd');
const backwardBtn = document.querySelector('.back');
const ps1=document.querySelector(".so1");
const ps2=document.querySelector(".so2");
const ps3=document.querySelector(".so3");
const ps4=document.querySelector(".so4");
const ps5=document.querySelector(".so5");
playBtn.addEventListener('click', () => {
    if(playBtn.className.includes('pause')){
        music.play();
    } else{
        music.pause();
    }
    playBtn.classList.toggle('pause'); 
})

const setMusic = (i) => {
    seekBar.value =0;
    let song=songs[i];
    currentM=i;
    music.src=song.path;

    songName.innerHTML=song.name;
    artistName.innerHTML=song.artist;
    disk.style.backgroundImage=`url('${song.cover}')`;

    currentTime.innerHTML='00:00';
    setTimeout(()=>{
    seekBar.max=music.duration;
    musicDuration.innerHTML=formatTime(music.duration);
    },300);
}

setMusic(0);

const formatTime=(time)=>{
    let min=Math.floor(time/60);
    if(min<10){
        min=`0${min}`;
    }
    let sec=Math.floor(time%60);
    if(sec<10){
        sec=`0${sec}`;
    }
    return`${min}:${sec}`;
}
setInterval(()=>{
   seekBar.value=music.currentTime;
   currentTime.innerHTML=formatTime(music.currentTime);
},100)

seekBar.addEventListener('change',()=>{
    music.currentTime=seekBar.value;
})

const playMusic=()=>{
    music.play();
    playBtn.classList.remove('pause');
}

forwardBtn.addEventListener('click',()=>{
    if(currentM>=songs.length-1)
    {
        currentM=0;
    }else{
        currentM++;
    }
    setMusic(currentM);
    playMusic();
})

backwardBtn.addEventListener('click',()=>{
    if(currentM<=0)
    {
        currentM=songs.length-1;
    }else{
        currentM--;
    }
    setMusic(currentM);
    playMusic();
})

ps1.addEventListener('click',() =>{
        currentM=0;
        setMusic(currentM);
        playMusic();
})
ps2.addEventListener('click',() =>{
    currentM=1;
    setMusic(currentM);
    playMusic();
})
ps3.addEventListener('click',() =>{
    currentM=2;
    setMusic(currentM);
    playMusic();
})
ps4.addEventListener('click',() =>{
    currentM=3;
    setMusic(currentM);
    playMusic();
})
ps5.addEventListener('click',() =>{
    currentM=4;
    setMusic(currentM);
    playMusic();
})