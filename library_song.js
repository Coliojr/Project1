//Object Constructor
let Song = function (title, artist, album, year, genre, raiting) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.genre = genre;
    this.raiting = raiting;
    this.ID = Math.random().toString(16).slice(5);
};

Song.prototype.isValid = function () {
    if (this.title == "" || this.artist == "" || this.album == "" || isNaN(this.year) || this.genre == "" || isNaN(this.raiting)) {
        return false;
    } else if (this.year < 1 || this.year.length != 4 || this.year > 2023) {
        return false;
    } else if (this.raiting < 1 || this.raiting > 5) {
        return false;
    } else {
        return true;
    }
};

Song.prototype.toString = function () {
    return "Song Tilte: " + this.title + "\n" +
    "Artist: " + this.artist + "\n" +
    "Album: " + this.album + "\n" +
    "Year: " + this.year + "\n" +
    "Genre: " + this.genre + "\n" +
    "Raiting: " + this.raiting;
}
