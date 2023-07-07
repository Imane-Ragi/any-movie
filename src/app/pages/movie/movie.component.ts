import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private route: ActivatedRoute , private movieService : MovieService){

  }
  ngOnInit(): void {
   
    this.getMovie()
  }


  getMovie()
  {
    this.route.params.subscribe(res => this.movieService.getMovie(res['id']).subscribe(r => console.log(r)))

    // another way to manage errors using an object contains next && error 
    // this.route.params.subscribe({
    //   next : (res) => console.log(res),
    //   error : (err) => console.log(err),
      
    // })

    
  }
}
