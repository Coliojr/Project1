let Trip = function (name, destination, month, transportation, numPeople) {
    this.name = name;
    this.destination = destination;
    this.month = month;
    this.transportation = transportation;
    this.numPeople = numPeople;    
};

Trip.prototype.isValid = function () {
    if (this.name == "" || 
    this.destination == "" || 
    this.month == "" ||
    this.transportation == "" ||
    isNaN(this.numPeople)) 
    {
        return false;
    }
    else if (this.numPeople < 1) 
    {
        return false;
    }
    else 
    {
        return true;
    }
};

Trip.prototype.toString = function () {
    return "Name: " + this.name + "\n" +
    "Destination: " + this.destination + "\n" +
    "Month: " + this.month + "\n" +
    "Transportation: " + this.transportation + "\n" +
    "Number of People: " + this.numPeople;
}
