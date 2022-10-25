const BASE_URL = "https://api.giphy.com/v1"
const API_KEY = "grszT8PPh8t8tXcWMfVO1FkF0nf4FGBP"
const GIF_SEARCH_URL = `${BASE_URL}/gifs/search?api_key=${API_KEY}&limit=25&offset=0&rating=g&lang=en`;

//return the data
function searchGif(searchTerm) { 
  $.ajax({url: `${GIF_SEARCH_URL}&q=${searchTerm}`})
  .then((response) =>{ //if success then run response
    
    displayResults(response.data);
  })
  .catch((error) =>{ //if fail
    console.log("There was a problem " + error);
  });
}

// loop and display the data i need function
function displayResults(results){
  const gifItems = results.map((item) =>{
  const image = item.images.original
  const author = item.user //(?item)
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


//use jqery to find the item container and save in variable
const itemEl = $("#itemContainer")
console.log("this is" + itemEl)

// function to create a new div then write the logic to create the image element.

function appendItem(){
  const imgDiv = $("<div>")
  const imgEl = $("<img>")
  // add attribute
imgDiv.attr("style", "width: 248px; height: 248px; position: relative;");

imgEl.attr("src","https://media3.giphy.com/media/44zuwboiEZCXZD58Hv/200w.gif?cid=ecf05e472scvdvm5q5g9076pz39g1leg40xub8645mkatq4i&amp;rid=200w.gif&amp;ct=g");
imgEl.attr("style","width: 248px; height: 248px; position: relative;");

imgDiv.append(imgEl);
itemEl.append(imgDiv);

//append 


}
appendItem()
appendItem()
console.log(itemContainer)

//next loop