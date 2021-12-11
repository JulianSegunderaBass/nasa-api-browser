import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiKey = 'DEMO_KEY';
  private apodURL = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

  constructor(
    private http: HttpClient,
  ) { }

    getApodData(): Observable<[]> {
      let startDate: Date = new Date();
      startDate.setDate(startDate.getDate() - 5);
      return this.http
        .get<any>(`${this.apodURL}&start_date=${startDate.toISOString().split('T')[0]}`)
        // Transforming fetched data
        .pipe(map(apods => {
          let id = 0;
          return apods.map((apod: {}) => {
            id += 1;
            return {...apod, id: id}
          });
        }));
    }
}