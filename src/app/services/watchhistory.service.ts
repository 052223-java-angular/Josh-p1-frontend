import { Injectable } from '@angular/core';
import { WatchHistory } from '../pages/watchhistory/watchhistory';
import { MovieService } from './movie.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchhistoryService {
  private apiBaseUrl = 'http://showtracker-env-1.eba-hwbn4ifk.us-east-2.elasticbeanstalk.com/showtracker/api';
    private url = 'https://api.themoviedb.org/3';
    private apiKey =  '1011018a8ee207aeea5b72b11e0ab0f8';
 
  constructor(private movieService: MovieService, private http: HttpClient ) {
  }

  getMovieList(data: any): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/history/view`);
  }

}

