import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
myMovies: Array<Object>;
  constructor(private listMovies: MoviesService) { }

  ngOnInit() {
    
  }


  //AQui tienes que hacer una función  para llamar al servicio
  //this.myMovies= this.listMovies.getMovies();
}
