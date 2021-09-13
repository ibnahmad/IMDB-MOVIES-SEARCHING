
const button = document.querySelector('.btn');


button.addEventListener('click', function(){


    fetch(" http://www.omdbapi.com/?apikey=xxxxxxxxx&s=" + $('#value').val())
    .then(response => response.json())
    .then(response => {
    
    let movies = response.Search;
    
    console.log(movies);
    
    let cards = '';
    movies.forEach(element => {
    
    console.log(element);
    cards +=`<div class="col md-4 mt-3"><div class="card" style="width: 18rem;"><img src="${element.Poster}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${element.Title}</h5><p class="card-text">${element.Type}</p><a href="#" class="btn btn-primary">More Details</a></div></div></div>`;
     });

     $('.movie-container').html(cards);
    })




})



