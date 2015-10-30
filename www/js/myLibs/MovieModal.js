var MovieModal = {
    movies: [],
    setMovie: function () {
        MovieModal.movies.push({
            "id": "1",
            "name": "Fast and Furous 7",
            "img": "img/Fast-Furious-7-9667.jpg",
            "description": "Action Movie"
        }),
        MovieModal.movies.push({
                    "id": "2",
                    "name": "Fast and Furous 8",
                    "img": "img/Fast-Furious-7-9667.jpg",
                    "description": "Action Movie"
                });
    },
    getMovie: function () {
        return MovieModal.movies;
    }

};
