import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  movies : Movie[] = [];
   constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.getAllMovies()
  }

  getAllMovies()
  {
    this.movieService.getMovies().subscribe(({results}) => this.movies = results);
  }


}
