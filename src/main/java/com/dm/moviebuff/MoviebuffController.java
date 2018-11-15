package com.dm.moviebuff;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class MoviebuffController {
    private MoviebuffRepository repository;

    MoviebuffController() {
      this.repository = new MoviebuffRepository();
    }

    @GetMapping("/api/movie-genres")
    public String[] movieGenres() {
      return this.repository.getGenres();
    }

    @GetMapping("/api/movies")
    public List<Movie> movies() {
      return this.repository.getMovies();
    }

    @PostMapping("/api/movies")
    public Movie newEmployee(@RequestBody Movie newEmployee) {
      return this.repository.addMovie(newEmployee);
    }

    @DeleteMapping("/api/movies/{name}")
    public void deleteMovie(@PathVariable String name) {
      this.repository.deleteMovie(name);
    }

    @PutMapping("/api/movies/{name}")
    public Movie updateMovie(@PathVariable String name, @RequestBody Movie newData) {
      return this.repository.updateMovie(name, newData);
    }
}