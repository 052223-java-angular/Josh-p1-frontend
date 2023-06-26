import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
    private apiBaseUrl = 'http://showtracker-env-1.eba-hwbn4ifk.us-east-2.elasticbeanstalk.com/showtracker/api';
    private url = 'https://api.themoviedb.org/3';
    private apiKey =  '1011018a8ee207aeea5b72b11e0ab0f8';
  
    constructor() { }
}
