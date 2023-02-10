let songArr = [];

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("buttonAdd").addEventListener("click", newSong);
    
}); 

let newSong = function() {
    
    let title = document.getElementById("title").value;
    let artist = document.getElementById("artist").value;
    let album = document.getElementById("album").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;
    let raiting = document.getElementById("raiting").value;         

    let song = new Song(title, artist, album, year, genre, raiting);

    if (!song.isValid()) {
        alert("Please enter information in all input fields. " 
        + "Year must be greater than 1 and in yyyy format. " + "Raiting must be 1-5");
    } else {
        songArr.push(song);
        console.log(songArr);
    }
};

document.getElementById("buttonShow").addEventListener("click", function(){
    let display = songArr[0].toString();
    document.getElementById("show").value = display;
    
});

/* document.getElementById("edit").addEventListener("mouseover", function(){
    let border = "------------------------------------------<br>"
    let displayAll = "<h2>Catologed Trips</h2>" + border;
        
    for (let i = 0; i < tripArr.length; i++) {
        displayAll = displayAll + "Trip " + parseInt(i+1) + ": <br>" + tripArr[i].name + 
        "<br>" + tripArr[i].destination + "<br>" + tripArr[i].month  + "<br>" + tripArr[i].transportation  
        + "<br>" + tripArr[i].numPeople + "<br>" + border + "<br>";
    }

    document.getElementById("listAll").innerHTML = displayAll;
});


document.getElementById("buttonTripFacts").addEventListener("click", function(){
    let totalTripNumber = tripArr.length;
    let totalPeopleNumber = 0;
    
    for (let i = 0; i < tripArr.length; i++) {
       totalPeopleNumber = parseInt(totalPeopleNumber) + parseInt(tripArr[i].numPeople);
    }

    document.getElementById("tripFacts").innerHTML = "Number of trips: " + totalTripNumber + "<br>Number of people: " + totalPeopleNumber;
    
}); */