import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { MoviesApiResult } from '../models/movies-api-result';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

 
  apiUrl = 'https://api.themoviedb.org/3/movie/'
  apiKey = 'a54977d86f086274fa076a38308e819e'
  
  getMovies() :Observable<MoviesApiResult>
  {
    return  this.http.get<MoviesApiResult>(`${this.apiUrl}/popular?api_key=${this.apiKey}`)
  }
  getMovie(id:string) :Observable<Movie>
  {
    return  this.http.get<Movie>(`${this.apiUrl}/${id}?api_key=${this.apiKey}`)
  }
  


  }

