import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WatchhistoryService } from 'src/app/services/watchhistory.service';
import { WatchHistory } from './watchhistory';
import { MovieService } from 'src/app/services/movie.service';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-watchhistory',
  templateUrl: './watchhistory.component.html',
  styleUrls: ['./watchhistory.component.css']
})
export class WatchhistoryComponent implements OnInit {
  getMovieDetailResults: any;
  movies: any[] = [];
  watchhistory: WatchHistory[] = [];

  constructor (private watchhistoryService: WatchhistoryService,
     private movieService: MovieService) {

  }

  ngOnInit(): void {

    // this.watchhistoryService.getMovieList(localStorage.getItem('auth')).subscribe({
    //   next: (resp: any[]) => {
    //     this.movies = resp;
    //   },
    //   error: error => {
    //     console.log(error);
    //   }
    // })

  }

  delete(){

  }

  getMovie(id: any) {
    this.movieService.getMovieDetails(id).subscribe((res) => {
      console.log(res, 'getMovieDetails#');
      this.getMovieDetailResults = res;
    })
  }
   
}
