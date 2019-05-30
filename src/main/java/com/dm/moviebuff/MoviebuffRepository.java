package com.dm.moviebuff;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

class MoviebuffRepository {
  private List<Movie> movies;

  MoviebuffRepository() {
    this.movies = new CopyOnWriteArrayList<Movie>();
    Movie highFidelity = new Movie("High Fidelity", "Comedy", 4);
    Movie darkCrystal = new Movie("The Dark Crystal", "Fantasy", 5);
    Movie purpleRain = new Movie("Purple Rain", "Romance", 3);
    Movie heat = new Movie("Heat", "Suspense", 3);
    this.movies.add(highFidelity);
    this.movies.add(darkCrystal);
    this.movies.add(purpleRain);
    this.movies.add(heat);
  }

  public List<Movie> getMovies() {
    return this.movies;
  }

  public String[] getGenres() {
    String[] genres = {
      "Suspense",
      "Comedy",
      "Romance",
      "Fantasy",
      "Sci-Fi", 
      "Action",
      "Thriller",
      "Horror",
      "Documentary",
      "Drama"
    };
    return genres;
  }

  public Movie addMovie(Movie movie) {
    if (this.movieExists(movie)) {
      return null;
    } else {
      movies.add(movie);
      return movie;
    }
  }

  public Movie deleteMovie(String movieName) {
    for (Movie movie : this.movies) {
      if (movie.getName().equals(movieName)) {
        this.movies.remove(movie);
        return movie;
      }
    }

    return null;
  }

  public Movie updateMovie(String movieName, Movie newData) {
    for (Movie movie : this.movies) {
      if (movie.getName().equals(movieName)) {
        movie.setName(newData.getName());
        movie.setGenre(newData.getGenre());
        movie.setRating(newData.getRating());
        return movie;
      }
    }

    return null;
  }

  private boolean movieExists(Movie movieToLookFor) {
    for (Movie movie : this.movies) {
      if (movie.getName().equals(movieToLookFor.getName())) {
        return true;
      }
    }

    return false;
  }
}
