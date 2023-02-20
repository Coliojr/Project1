//Main array
let songArr = [];

//Function to create an instance of song object
let newSong = function() {
    
    let Title = document.getElementById("title").value;
    let Artist = document.getElementById("artist").value;
    let Album = document.getElementById("album").value;
    let Year = document.getElementById("year").value;
    let Genre = document.getElementById("genre").value;
    let Raiting = document.getElementById("raiting").value;         

    let song = new Song(Title, Artist, Album, Year, Genre, Raiting);

    if (!song.isValid()) {
        alert("Please enter information in all input fields. " 
        + "Year must be greater than 1 and in yyyy format. " + "Raiting must be 1-5");
    } else {
        songArr.push(song);
        console.log(songArr);
    }
};


document.addEventListener("DOMContentLoaded", function () {

    createList();

    //Buttons -----------------------------------------------------------------
    document.getElementById("buttonAdd").addEventListener("click", newSong);
    
    document.getElementById("buttonShow").addEventListener("click", function(){
        let display = songArr[0].toString();
        document.getElementById("show").value = display;
        
    });






    //Page before show code ----------------------------------------------------
    $(document).on("pagebeforeshow", "#page3", function (event){
        createList();
    });

    $(document).on("pagebeforeshow", "#page4", function (event) {
        let localParm = localStorage.getItem("parm");
        let localID = GetArrayPointer(localParm);

        songArr = JSON.parse(localStorage.getItem);

        console.log(songArr[localID - 1]);

        //Maybe something like this?
        //document.getElementById("oneTitle").innerHTML = "The title is: " + songArr[localID].Title;
        document.getElementById("oneTitle").innerHTML = "Title: " + songArr[localID - 1].Title;
        document.getElementById("oneArtist").innerHTML = "Artist: " + songArr[localID - 1].Artist;
        document.getElementById("oneAlbum").innerHTML = "Album: " + songArr[localID - 1].Album;
        document.getElementById("oneYear").innerHTML = "Year: " + songArr[localID - 1].Year;
        document.getElementById("oneGenre").innerHTML = "Genre: " + songArr[localID - 1].Genre;
        document.getElementById("oneRaiting").innerHTML = "Raiting: " + songArr[localID - 1].Raiting;
        
    });
}); 

function createList() {
    var ulSongList = document.getElementById("ulSongList");
    ulSongList.innerHTML = "";

    //var ul = document.createElement("ul");
    songArr.forEach(function (element) {
            var li = document.createElement("li");
            li.classList.add("oneSong");
            li.setAttribute("data-parm", element.ID);
            li.innerHTML = element.ID + ": " + element.Title + " " + element.Genre;
            ulSongList.appendChild(li);
    });

    var liArray = document.getElementsByClassName("oneSong");
    Array.from(liArray).forEach(function (element) {
        element.addEventListener("click", function () {
            var parm = this.getAttribute("data-parm");
            localStorage.setItem("parm", parm);
            let stringSongArray = JSON.stringify(songArr);
            localStorage.setItem("songArr", stringSongArray);
            document.location.href = "index.html#page3";
        });
    });
};

//In the createList function, gets the ID from localStorage and checks where in the array matches the stored ID
function GetArrayPointer(localID) {
    for (let i = 0; i < songArr.length; i++) {
        if (localID === songArr[i].ID) {
            return i;
        }
    }
}