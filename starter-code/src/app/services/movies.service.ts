import { Injectable } from '@angular/core';
import listmovies from '../../sample-movies';
@Injectable()
export class MoviesService {
    movies: Array<object> 
    constructor() { }
ngOnInit(){
    this.movies = listmovies;
}

   getMovies(): Array<object>{
       console.log("ENTRO")       
return this.movies;

   }
   getMovie(id): any{
       this.movies.forEach(movie =>{
           if(movie['id']=== id){
               return movie;
           }
       })
     

   }
}