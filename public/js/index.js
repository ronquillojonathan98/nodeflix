'use strict';


console.log('Starting fetching movie data list')


fetch('/nodeflix')
    .then(res => res.json()
        .then(({movies}) => 
            {   
                movies = movies.map(movie => //`<li> ${movie.name} - ${movie.type} </li>`
                    {
                        let li = document.createElement('li')
                        li.textContent = `${movie.name} - ${movie.type}`
                        return li
                    }
                    )

                const movie_lists = document.querySelector('#movies_list');

                movies.forEach(movie => 
                    {
                        movie_lists.append(movie)
                    })
                
            }))