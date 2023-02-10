let tripArr = [];

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("buttonAdd").addEventListener("click", newTrip);
    
}); 

let newTrip = function() {
    
    let name = document.getElementById("name").value;
    let destination = document.getElementById("destination").value;
    let month = document.getElementById("month").value;
    let transportation = document.getElementById("transportation").value;
    let numPeople = document.getElementById("numPeople").value;         

    let trip = new Trip(name, destination, month, transportation, numPeople);

    if (!trip.isValid()) {
        alert("Please enter information in all input fields. " 
        + "Number of guests must be greater than 0");
    }
    else {
        tripArr.push(trip);
        console.log(tripArr);
    } 
    document.getElementById("name").focus();
};

document.getElementById("buttonShow").addEventListener("click", function(){
    let display = tripArr[0].toString();
    document.getElementById("show").value = display;
    
});

document.getElementById("edit").addEventListener("mouseover", function(){
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
    
});