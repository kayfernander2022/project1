const BASE_URL = "https://api.giphy.com/v1"
const API_KEY = "grszT8PPh8t8tXcWMfVO1FkF0nf4FGBP"
const GIF_SEARCH_URL = `${BASE_URL}/gifs/search?api_key=${API_KEY}&limit=25&offset=0&rating=g&lang=en`;

//return the data
function searchGif(searchTerm) { 
  $.ajax({url: `${GIF_SEARCH_URL}&q=${searchTerm}`})
  .then((response) =>{ //if success then run response
    
    displayResults(response.data).forEach((item)=>{
      appendItem(item)
    });
  })
  .catch((error) =>{ //if fail
    console.log("There was a problem " , error);
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
  };

});
return gifItems
}

//find the item container and save in variable
const itemEl = $("#itemContainer")
console.log("this is" + itemEl)


function appendItem(item){
  const imgDiv = $("<div>");
  const imgEl = $("<img>");
  const imgDes = $(`<p>Details<br><small>${item.title}</small></p>`);

  // add attribute
imgDiv.attr("style", `width: ${200}px; height: ${200}px; position: relative;`);
imgDiv.attr("class","item");
imgEl.attr("src", item.image.url);
imgEl.attr("style",`width: ${200}px; height: ${200}px; position: relative;`);
//append
imgDiv.append(imgEl);
imgDiv.append(imgDes);
imgDiv.on('click', function(){
  $(this).toggleClass("show-description")
});
itemEl.append(imgDiv); 

}

//add event listener
$('form').on('submit', (event)=>{
  event.preventDefault();
  itemEl.html("");
const inputText = $("input[type=text]").val();
searchGif(inputText);

})

