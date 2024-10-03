const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=pt-Br&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmNlYzgyODNmYjFkM2JkNjgyMzFiZTAxMzAxMjIyNCIsIm5iZiI6MTcyNzk2MTkxMS40ODIwMzcsInN1YiI6IjY2MmQ0MWZkNWE3ODg0MDEyNGMxNjc3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uUHvxwtDhC8TEFnVY9UBniYIGVRSZcUF6XTmyUI9NiU",
        },
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((filmes) => {
          const grid_filmes = document.querySelector(".grid-filmes");
          console.log(filmes.results);
          filmes.results.map((filme) => {
            grid_filmes.innerHTML += `
                <div>
                    <img src="https://image.tmdb.org/t/p/w500${filme.backdrop_path}"/>
                    <h1>${filme.title}</h1>
                    <p>${filme.overview}</p>

                    </div>`;
          });
        })
        .catch((err) => console.error("error:" + err));