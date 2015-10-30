var MovieView = {
    renderList: function () {
        var movies = MovieModal.getMovie();
        $("#movie-list").html("");
        $.map(movies, function (movie) {
            console.log("movie: ", movie);
//            $("#movie-list").append("<li>here</li>");
            $("#movie-list").append("<li><a href='#details'><img src='" + movie.img + "'/>'" + movie.name + "'</a></li>");
        });


    }


};