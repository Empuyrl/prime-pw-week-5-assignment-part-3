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
//define this
//testing addToCollection with different music 
//added one extra for the same artist commitment

console.log(addToCollection("BOOMBAYAH", "Blackpink", 2017));
console.log(addToCollection("Cold Heart", "Dua Lipa & Elton John", 2021));
console.log(addToCollection("Welcome to the Family", "Avenged Sevenfold", 2010));
console.log(addToCollection("Ich Will", "Rammstein", 2001));
console.log(addToCollection("MEGITSUNE", "BabyMetal", 2014));
console.log(addToCollection("Kill This Love", "Blackpink", 2019));

//log the collection array
console.log(collection);
//pass in collection then loop
//loop through collection
function showCollection(array) {
    console.log(`Number of items in collection: ${array.length}`);
    for (let album of array) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
      }
  }
  console.log(showCollection(collection, 'title', 'artist', 'publiahed in'))
  // without this line 37 doesn't log and yet I feel this is wrong
