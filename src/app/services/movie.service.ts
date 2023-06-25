import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../pages/home/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'https://api.themoviedb.org/3';
  private apiKey = '1011018a8ee207aeea5b72b11e0ab0f8';

  constructor(private http: HttpClient) {
  }

  getSearchMovie(data:any): Observable<any> {
    console.log(data,'movie#');
    return this.http.get(`${this.url}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }

  getLatestMovie() : Observable<any> {
    return this.http.get<any>(`${this.url}/movie/latest?api_key=${this.apiKey}`);
  }

  getPopularMovies() : Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/movie/popular?api_key=${this.apiKey}`);
  }

  getNowPlayingMovies() : Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/movie/now_playing?api_key=${this.apiKey}`);
  }

  getTopRatedMovies() : Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/movie/top_rated?api_key=${this.apiKey}`);
  }

  getUpcomingMovies() : Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/movie/upcoming?api_key=${this.apiKey}`);
  }

  getTrendingMovies() : Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/trending/movie/day?api_key=${this.apiKey}`);
  }

  getOriginals() : Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/discover/tv?api_key=${this.apiKey}`);
  }

  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.url}/movie/${data}?api_key=${this.apiKey}`);
  }

  getMoviePreview(data: any): Observable<any> {
    return this.http.get(`${this.url}/movie/${data}/videos?api_key=${this.apiKey}`);
  }

  getCast(data: any): Observable<any> {
    return this.http.get(`${this.url}/movie/${data}/credits?api_key=${this.apiKey}`)
  }

}

