package main.java.com.dm.moviebuff;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class MoviebuffController {
    @GetMapping("/api/movie-genres")
    public String[] hello() {
      String[] genres = {
        "Suspense",
        "Comedy",
        "Romance",
        "Fantasy",
        "Sci-Fi", 
        "Action",
        "Thriller",
        "Horror",
        "Documentary"
      };

      return genres;
    }
}