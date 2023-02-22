/*** Main Song Array ************************************************************/
let songArr = [];

/*** Load After DOM *************************************************************/
document.addEventListener("DOMContentLoaded", function () {
    createList();

    /* Button: Add Song */
    document.getElementById("buttonAdd").addEventListener("click", function () {
        songArr.push(new Song(
            document.getElementById("title").value,
            document.getElementById("artist").value,
            document.getElementById("album").value,
            document.getElementById("year").value,
            document.getElementById("genre").value, 
            document.getElementById("rating").value));
        document.location.href = "index.html#ListAll";
        ClearForm();
        alert("Song Submitted");
    });

    /* Button: Clear Form Input */
    document.getElementById("buttonClear").addEventListener("click", function () {
        ClearForm();
        alert("Form Cleared");
    });
    
    // /* Button: Show Song Added */
    // document.getElementById("buttonShow").addEventListener("click", function(){
    //     let display = songArr[0].toString();
    //     document.getElementById("show").value = display;
        
    // });

    /* Button: Sort By Rating */
    document.getElementById("buttonSortRating").addEventListener("click", function () {
        songArr.sort(dynamicSort("Rating"));
        createList();
        document.location.href = "index.html#page3";
    });

    /* Button: Sort By Title */
    document.getElementById("buttonSortTitle").addEventListener("click", function () {
        songArr.sort(dynamicSort("Title"));
        createList();
        document.location.href = "index.html#page3";
    });

    /* Page 3 - List Songs */
    $(document).on("pagebeforeshow", "#page3", function (event){
        createList();
    });

    /* Page 4 - Detail of Song */
    $(document).on("pagebeforeshow", "#page4", function (event) {
      let localParm = localStorage.getItem('parm');
      let localID = GetArrayPointer(localParm);

        //songArr = JSON.parse(localStorage.getItem(songArr));

        /* Display Detail of Selected Li */
        document.getElementById("oneTitle").innerHTML = "Title: " + songArr[localID].Title;
        document.getElementById("oneArtist").innerHTML = "Artist: " + songArr[localID].Artist;
        document.getElementById("oneAlbum").innerHTML = "Album: " + songArr[localID].Album;
        document.getElementById("oneYear").innerHTML = "Year: " + songArr[localID].Year;
        document.getElementById("oneGenre").innerHTML = "Genre: " + songArr[localID].Genre;
        document.getElementById("oneRating").innerHTML = "Rating: " + songArr[localID].Rating;
        
    });
}); 

/*** Creat List Funtion *************************************************************/
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
/*** Jump To Page 4 On Click *********************************************************/
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

/*** Gets ID From localStorage and checks where in the array matches the stored IDe ***/
function GetArrayPointer(localID) {
    for (let i = 0; i < songArr.length; i++) {
        if (localID === songArr[i].ID) {
            return i;
        }
    }
}


/* Button: Clear Form Input */
function ClearForm() {
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("album").value = "";
    document.getElementById("year").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("rating").value = "";
}


/*** Sorting Function ******************************************************************/
function dynamicSort(property) {
    return function (a, b) {
            return a[property].localeCompare(b[property]);
    }
}