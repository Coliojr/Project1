//Object Constructor
let Song = function (title, artist, album, year, genre, raiting) {
    this.Title = title;
    this.Artist = artist;
    this.Album = album;
    this.Year = year;
    this.Genre = genre;
    this.Rating = raiting;
    this.ID = Math.random().toString(16).slice(5);
};

Song.prototype.isValid = function () {
    if (this.Title == "" || this.Artist == "" || this.Album == "" || isNaN(this.Year) || this.Genre == "" || isNaN(this.Rating)) {
        return false;
    } else if (this.Year < 1 || this.Year.length != 4 || this.Year > 2023) {
        return false;
    } else if (this.Rating < 1 || this.Rating > 5) {
        return false;
    } else {
        return true;
    }
};

Song.prototype.toString = function () {
    return "Song Tilte: " + this.Title + "\n" +
    "Artist: " + this.Artist + "\n" +
    "Album: " + this.Album + "\n" +
    "Year: " + this.Year + "\n" +
    "Genre: " + this.Genre + "\n" +
    "Rating: " + this.Rating;
}
