import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WatchhistoryService } from 'src/app/services/watchhistory.service';
import { WatchHistory } from './watchhistory';

@Component({
  selector: 'app-watchhistory',
  templateUrl: './watchhistory.component.html',
  styleUrls: ['./watchhistory.component.css']
})
export class WatchhistoryComponent implements OnInit {
  watchhistory!: WatchHistory[];

  constructor (private watchhistoryService: WatchhistoryService) {

  }

  ngOnInit(): void {
    this.watchhistoryService.getList;
  }

  delete(){

  }

  //retrive user watch history from the backend


  //watch history contains a set of moveies...retrieve the movie information from external api
  //https://api.themoviedb.org/3/find/{external_id}

  //save movie information into watchhistory  
}
