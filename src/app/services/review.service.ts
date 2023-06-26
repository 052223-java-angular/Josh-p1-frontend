import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Review } from '../models/review';
import { ReviewPayload } from 'src/app/models/review-payload';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://showtracker-env-1.eba-hwbn4ifk.us-east-2.elasticbeanstalk.com/showtracker/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'auth-token': this.authService.getAuth()?.token!,
    }),
  };

  constructor(private http: HttpClient, private authService: AuthService) { }

  getReviewsByMovieId(id: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/review/${id}`);
  }

  addReview(review: ReviewPayload): Observable<void> {
    return this.http.post<void>(
      `${this.baseUrl}/review/create`,
      review,
      this.httpOptions
    );
  }

  deleteReview(reviewId: string): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/review/delete/${reviewId}`,
      this.httpOptions
    );
  }


}
