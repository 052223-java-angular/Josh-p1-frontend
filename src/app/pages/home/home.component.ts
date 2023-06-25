import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from './movie';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private url = 'https://api.themoviedb.org/3';
  private apiKey = '1011018a8ee207aeea5b72b11e0ab0f8';

  latestMovie: any;
  popularMovies!: Movie;
  nowPlayingMovies!: Movie;
  topRated!: Movie;
  upcoming!: Movie;
  trendingMovies!: Movie;
  originals!: Movie;

  constructor(private movieService: MovieService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getLatestMovie();
    this.getNowPlaying();
    this.getOriginals();
    this.getPopularMovie();
    this.getTopRated();
    this.getTrending();
    this.getUpcoming();
  }

  searchResult: any;
  searchForm = new FormGroup({
    'movieName' : new FormControl (null)
  });

  submitForm() {
    console.log(this.searchForm.value, 'searchform#');
    this.movieService.getSearchMovie(this.searchForm.value).subscribe((res) =>{
      console.log(res,'searchmovie##');
      this.searchResult = res.results;
    })
  }

  searchMovie(data:any): Observable<any> {
    return this.http.get(`${this.url}/search/movie?api_key=${this.apiKey}&query=${data.query}`);
  }

  getLatestMovie() {
    this.movieService.getLatestMovie().subscribe(res => {
      this.latestMovie = this.changeData(res);
    }, err => {
      console.log('Latest movies unavailable', err);
    })
  }

  changeData(res: any): any {
    if(!res.backdrop_path) {
      res.backdrop_path = 'https://image.tmdb.org/t/p/original'+res.poster_path+'?api_key='+this.apiKey;
    }else {
      res.backdrop_path = 'https://image.tmdb.org/t/p/original'+res.backdrop_path+'?api_key='+this.apiKey;
    }
    return res;
  }

  getPopularMovie() {
    this.movieService.getPopularMovies().subscribe(res => {
      this.popularMovies = this.modifyData(res);
      console.log(this.popularMovies);
    }, err => {
      console.log('Latest movies unavailable', err);
    })
  }

  getNowPlaying() {
    this.movieService.getNowPlayingMovies().subscribe(res => {
      this.nowPlayingMovies = this.modifyData(res);
    }, err => {
      console.log('Now playing unavailable', err);
    })
  }

  getTopRated() {
    this.movieService.getTopRatedMovies().subscribe(res => {
      this.topRated = this.modifyData(res);
    }, err => {
      console.log('Top rated unavailable', err);
    })
  }

  getUpcoming() {
    this.movieService.getUpcomingMovies().subscribe(res => {
      this.upcoming = this.modifyData(res);
    }, err => {
      console.log('Upcoming unavailable', err);
    })
  }

  getTrending() {
    this.movieService.getTrendingMovies().subscribe(res => {
      this.trendingMovies = this.modifyData(res);
    }, err => {
      console.log('Trending unavailable', err);
    })
  }

  getOriginals() {
    this.movieService.getOriginals().subscribe(res => {
      this.originals = this.modifyData(res);
    }, err => {
      console.log('Originals unavailable', err);
    })
  }

  modifyData(movies : Movie) : Movie {
    if(movies.results) {
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/original'+element.backdrop_path+'?api_key='+this.apiKey;
        if(!element.title) {
          element.title = element?.name;
        }
      })
    }
    return movies;
  }
}
