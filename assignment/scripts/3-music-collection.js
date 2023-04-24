console.log('***** Music Collection *****')

const collection = [];
console.log(collection);

//function with a newly created object, which is pushed and returned
//items push into object and returned via the collection array
function addToCollection(title, artist, yearPublished) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(album);

    return album;
}
console.log('title', 'artist', 'yearPublished');
