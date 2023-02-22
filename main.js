//Main array
let songArr = [];

//Function to create an instance of song object
/* let newSong = function() {
    
    let Title = document.getElementById("title").value;
    let Artist = document.getElementById("artist").value;
    let Album = document.getElementById("album").value;
    let Year = document.getElementById("year").value;
    let Genre = document.getElementById("genre").value;
    let Rating = document.getElementById("rating").value;         

    let song = new Song(Title, Artist, Album, Year, Genre, Rating);

    if (!song.isValid()) {
        alert("Please enter information in all input fields. " 
        + "Year must be greater than 1 and in yyyy format. " + "Raiting must be 1-5");
    } else {
        songArr = [];
        songArr.push(song);
        console.log(songArr);
    }
}; */


document.addEventListener("DOMContentLoaded", function () {

    createList();

    //Buttons -----------------------------------------------------------------
    document.getElementById("buttonAdd").addEventListener("click", function () {
        songArr.push(new Song(
            document.getElementById("title").value,
            document.getElementById("artist").value,
            document.getElementById("album").value,
            document.getElementById("year").value,
            document.getElementById("genre").value, 
            document.getElementById("rating").value));
        document.location.href = "index.html#ListAll";
    });
    
    document.getElementById("buttonShow").addEventListener("click", function(){
        let display = songArr[0].toString();
        document.getElementById("show").value = display;
        
    });

    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("title").value = "";
        document.getElementById("artist").value = "";
        document.getElementById("album").value = "";
        document.getElementById("year").value = "";
        document.getElementById("genre").value = "";
        document.getElementById("rating").value = "";
    });

    //sort by raiting
    document.getElementById("buttonSortRating").addEventListener("click", function () {
        songArr.sort(dynamicSort("Rating"));
        createList();
        document.location.href = "index.html#page3";
    });



    //Page before show code ----------------------------------------------------
    $(document).on("pagebeforeshow", "#page3", function (event){
        createList();
    });

    $(document).on("pagebeforeshow", "#page4", function (event) {
        /*let localParm = localStorage.getItem("parm");
        let localID = GetArrayPointer(localParm);*/

        let localID = localStorage.getItem('parm'); //get unique id

        //songArr = JSON.parse(localStorage.getItem(songArr));

        console.log(songArr[localID]);

        //Maybe something like this?
        //document.getElementById("oneTitle").innerHTML = "The title is: " + songArr[localID].Title;
        document.getElementById("oneTitle").innerHTML = localID.Title
        /* 
        document.getElementById("oneArtist").innerHTML = "Artist: " + songArr[localID].Artist;
        document.getElementById("oneAlbum").innerHTML = "Album: " + songArr[localID].Album;
        document.getElementById("oneYear").innerHTML = "Year: " + songArr[localID].Year;
        document.getElementById("oneGenre").innerHTML = "Genre: " + songArr[localID].Genre;
        document.getElementById("oneRating").innerHTML = "Rating: " + songArr[localID].Rating;*/
        
    });
}); 

function createList() {
    var ulSongList = document.getElementById("ulSongList");
    ulSongList.innerHTML = "";

    var ul = document.createElement("ul");
    songArr.forEach(function (element) {
            var li = document.createElement("li");
            li.classList.add("oneSong");
            li.setAttribute("data-parm", element.ID);
            li.innerHTML = "\"" + element.Title + "\" (Rating: " + element.Rating + ")";
            ulSongList.appendChild(li);
    });

//---------------click function that jumps to #page4--------------------------------------------
    var liArray = document.getElementsByClassName("oneSong");
    Array.from(liArray).forEach(function (element) {
        element.addEventListener("click", function () {
            var parm = this.getAttribute("data-parm");
            localStorage.setItem("parm", parm);
            let stringSongArray = JSON.stringify(songArr);
            localStorage.setItem("songArr", stringSongArray);
            document.location.href = "index.html#page4";
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


// Sorting Function
function dynamicSort(property) {
    return function (a, b) {
            return a[property].localeCompare(b[property]);
    }
}