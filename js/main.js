let moviesArray = movies.slice(0, 70);


function normolize(array) {
    let newArray = [];


    array.forEach(item => {
        let newObject = {}

        newObject.title = item.Title.toString();
        newObject.videoUrl = `https://www.youtube.com/watch?v=${item.ytid}`;
        newObject.categories = item.Categories.split("|");
        newObject.movieYear = item.movie_year;
        newObject.rating = item.imdb_rating;
        newObject.image = `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`;

        newArray.push(newObject)
    });
    


    return newArray
}





let elMovieWrapper = document.querySelector(".movie__wrapper");
let elTemplate = document.querySelector("#movie_card").content;
const elMovieInputRating = document.querySelector('.movie-input__rating')


let newArray = normolize(moviesArray);


function renderMovies(array, wrapper) {
    wrapper.innerHTML = null

    let tempFragment = document.createDocumentFragment()

    for (const item of array) {
        let templateItem = elTemplate.cloneNode(true)

        templateItem.querySelector(".movie__img").src = item.image;
        templateItem.querySelector(".movie__title").textContent = item.title;
        templateItem.querySelector(".movie__year").textContent = item.movieYear;
        templateItem.querySelector(".movie__rating").textContent = item.rating;
        templateItem.querySelector(".movie__url").href = item.videoUrl;

        tempFragment.appendChild(templateItem)
    }
    wrapper.appendChild(tempFragment)  
}

// Rating 
function btnSearch() {
    const newMovieArray = []
    newMovieArray.innerHTML = ''
    const InputValueRating = Number(elMovieInputRating.value.trim())
    newArray.forEach((item, index) => {
        if(InputValueRating <= newArray[index].rating) {
            newMovieArray.push(newArray[index]) 
            console.log(typeof newArray[index].rating)
        }
        renderMovies(newMovieArray, elMovieWrapper);
    }) 
     
 }
const elMovieBtn = document.querySelector('.btn__search')
elMovieBtn.addEventListener('click', btnSearch)

renderMovies(newArray, elMovieWrapper);



















