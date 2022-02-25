console.log("Welcome to Lieder!")

//  Initialise the variables
let songIndex = 0;
let audioElement = new Audio('Excuses.mp3');
let masterPlay1 = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songName'));

let songs =[
    {songName: "Excuses", filePath: "Excuses.mp3", coverPath: "cover.jpg"},
    {songName: "Srivalli", filePath: "Srivalli - Pushpa.mp3", coverPath: "cover.jpg"},
    {songName: "U Antava Mava", filePath: "U Antava Mava.mp3", coverPath: "cover antava.jpg"},
    {songName: "Suna Hai", filePath: "Suna Hai.mp3", coverPath: "cover.jpg"},
    {songName: "Naach Meri Rani", filePath: "Naach Meri Rani.mp3", coverPath: "rani cover.jpg"},
    {songName: "Oo Bolega - Pushpa", filePath: "Oo Bolega - Pushpa.mp3", coverPath: "cover antava.jpg"},
    {songName: "Eyy Bidda Ye Mera Adda - Pushpa", filePath: "Eyy Bidda Ye Mera Adda - Pushpa.mp3", coverPath: "cover antava.jpg"},
    {songName: "Teri Jhalak Ashrafi", filePath: "Teri Jhalak Ashrafi.mp3", coverPath: "cover.jpg"},
]



//audioElement.play();

//handle play/pause click
masterPlay1.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay1.classList.remove('fa-play-circle');
        masterPlay1.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay1.classList.remove('fa-pause-circle');
        masterPlay1.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
myProgressBar.addEventListener('timeupdate' , ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})