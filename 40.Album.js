// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function makeAlbum(name, title, tracks) {
    if (!tracks) {
        let obj = {
            artist_name: name,
            album_title: title,
        };
        return obj;
    }
    let obj = {
        artist_name: name,
        album_title: title,
        numberof_tracks: tracks,
    };
    return obj;
}
let a = makeAlbum("Michael Jackson", "Thriller");
let b = makeAlbum("Jewel ", "Pieces of You", 19);
let c = makeAlbum("Backstreet Boys", "Millennium", 24);
console.log(a);
console.log(b);
console.log(c);