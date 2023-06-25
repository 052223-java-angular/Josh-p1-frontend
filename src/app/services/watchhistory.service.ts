import { Injectable } from '@angular/core';
import { WatchHistory } from '../pages/watchhistory/watchhistory';

@Injectable({
  providedIn: 'root'
})
export class WatchhistoryService {
 
  constructor() { }

  getList(): WatchHistory[] {
    return [
      {
        cover: "https://image.tmdb.org/t/p/w500/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg",
        title: "Puss in Boots: The Last Wish",
        release: "2022-12-21",
        genre: "Animation, Action, Adventure, Comedy, Family",
        trailer: "https://www.youtube.com/watch?v=tHb7WlgyaUc"
      },
      {
        cover: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        title: "Avatar: The Way of Water",
        release: "2022-12-16",
        genre: "Science Fiction, Actiom,  Adventure",
        trailer: "https://www.youtube.com/watch?v=d9MyW72ELq0"
      },
    ];
  }
}

