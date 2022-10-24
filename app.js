const BASE_URL = "https://api.giphy.com/v1"
const API_KEY = "grszT8PPh8t8tXcWMfVO1FkF0nf4FGBP"
const GIF_SEARCH_URL = `${BASE_URL}/gifs/search?api_key=${API_KEY}&limit=25&offset=0&rating=g&lang=en`;

//return the data
function searchGif(searchTerm) { 
  $.ajax({url: `${GIF_SEARCH_URL}&q=${searchTerm}`})
  .then((response) =>{
    
    displayResults(response.data);
  })
  .catch((error) =>{
    console.log("There was a problem " + error);
  });
}

// loop and display the data i need
function displayResults(results){
  const gifItems = results.map((item) =>{
  const image = item.images.original
  const author = item.user 
  return{
    author: author?.display_name, //display ony if there is an author?
    title: item.title,
    image: {
      url: image.url,
      height: image.height,
      width: image.width
    }
  }

});
console.log(gifItems)
}

searchGif("sun")