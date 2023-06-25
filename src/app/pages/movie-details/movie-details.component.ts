import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  getMovieDetailResults: any;
  getPreviewResults: any;
  getCastResults: any;

  constructor(private movieService: MovieService, private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'paramId#')
    
    this.getMovie(getParamId);
    this.getPreview(getParamId);
    this.getCast(getParamId);
  }

  getMovie(id: any) {
    this.movieService.getMovieDetails(id).subscribe((res) => {
      console.log(res, 'getMovieDetails#');
      this.getMovieDetailResults = res;
    })
  }

  getPreview(id: any) {
    this.movieService.getMoviePreview(id).subscribe((res) => {
      console.log(res, 'preview#');
      res.results.array.forEach((element: any) => {
        if(element.type=="Trailer") {
          this.getPreviewResults = element.key;
        }
      });
    })
  }

  getCast(id: any) {
    this.movieService.getCast(id).subscribe((res) => {
      console.log(res, 'cast#');
      this.getCastResults = res.cast;
    })
  }

}
