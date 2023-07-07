import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent {

  

  //  angular 16  {required : true , alias :'my-movie'} before was  @Input('my-movie')
  @Input({required : true , alias :'my-movie'}) movie : Movie | null = null

}
