import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Review } from 'src/app/models/review';
import { ReviewPayload } from 'src/app/models/review-payload';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../home/movie';
import { ReviewService } from 'src/app/services/review.service';
import { forkJoin } from 'rxjs';
import { Auth } from 'src/app/models/auth';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
//   movie!: Movie;
//   reviews: Review[] = [];
//   loading: boolean = true;
//   userRatingForm = new FormGroup({
//     rating: new FormControl(null, Validators.required),
//     comment: new FormControl('', Validators.required),
//   });

//   constructor(private movieService: MovieService,
//     private reviewService: ReviewService,
//     private authService: AuthService,
//     private route: ActivatedRoute,
//     private toastr: ToastrService
//     ) {}

   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id')!;

//     if (id) {
//       const movie$ = this.movieService.getMovieById(id);
//       const reviews$ = this.reviewService.getReviewsByMovieId(id);
      

//       forkJoin([movie$, reviews$]).subscribe({
//       next: ([movie, reviews]) => {
//         this.movie = movie;
//         this.reviews = reviews;
//         this.loading = false;
//       },
//       error: (error) => {
//         console.log(error);
//         this.loading = false;
//       },
//     });
//     }
   }

//   submitReview() {
//     if (this.userRatingForm.valid) {
//       for (let i =0; i < this.reviews.length; i++) {
//         if(this.reviews[i].username === this.authService.getAuth()?.username){
//           this.userRatingForm.reset();
//           this.userRatingForm.controls.rating.setValue(null);
//           this.toastr.error("Movie previously reviewed");
//         }
//       }

//       const payload: ReviewPayload = {
//         rating: this.userRatingForm.controls.rating.value!,
//         comment: this.userRatingForm.controls.comment.value!,
//         username: this.authService.getAuth()?.username!,
//         userId: this.authService.getAuth()?.id!,
//         movieId: ,
//       };
//       this.reviewService.addReview(payload).subscribe({
//         next: () => {
//           this.ngOnInit();
//           this.toastr.success('Review has been added');
//           this.userRatingForm.reset();
//           this.userRatingForm.controls.rating.setValue(null);
//         },
//         error: (error) => {
//           console.log(error);
//         }
//       });
//     }else {
//       if (this.userRatingForm.controls.rating.invalid) {
//         this.userRatingForm.controls.rating.markAsTouched();
//       }
//       if (this.userRatingForm.controls.comment.invalid) {
//         this.userRatingForm.controls.comment.markAsTouched();
//       }
//     }
//   }
 
//    deleteReview(reviewId: string): void {
//      this.reviewService.deleteReview(reviewId).subscribe({
//        next: () => {
//          this.ngOnInit();
//          this.toastr.success('Review has been deleted');
//        },
//        error: (error)  => {
//          console.log(error);
//        },
//      });
//    }

//   getAuth(): Auth | null {
//     return this.authService.getAuth();
//   }

}
