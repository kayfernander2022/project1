const BASE_URL = "https://api.giphy.com/v1"
const API_KEY = "grszT8PPh8t8tXcWMfVO1FkF0nf4FGBP"
const GIF_SEARCH_URL = `${BASE_URL}/gifs/search?api_key=${API_KEY}&limit=25&offset=0&rating=g&lang=en`;

//return the data
function searchGif(searchTerm) { 
  $.ajax({url: `${GIF_SEARCH_URL}&q=${searchTerm}`})
  .then((response) =>{ //if success then run response
    
    displayResults(response.data).forEach((item)=>{
      appendItem(item.image)
    });
  })
  .catch((error) =>{ //if fail
    console.log("There was a problem " + error);
  });
}

// loop and display the data i need function
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
return gifItems
}

searchGif("sun");


//use jqery to find the item container and save in variable
const itemEl = $("#itemContainer")
console.log("this is" + itemEl)


function appendItem(imageItem){
  const imgDiv = $("<div>")
  const imgEl = $("<img>")
  // add attribute
imgDiv.attr("style", `width: ${imageItem.width} height: ${imageItem.height} position: relative;`);

imgEl.attr("src", imageItem.url);
  imgEl.attr("style",`width: ${imageItem.width}px; height: ${imageItem.height}px; position: relative;`);


imgDiv.append(imgEl);
itemEl.append(imgDiv);

//append 


}



