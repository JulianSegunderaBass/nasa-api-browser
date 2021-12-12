import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { APOD } from './apod/apod.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiKey = 'DEMO_KEY';
  private apodURL = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

  // API Data
  private apodData: [] = [];

  constructor(
    private http: HttpClient,
  ) { }

  getApodData(apodCount: number): Observable<[]> {
    let startDate: Date = new Date();
    startDate.setDate(startDate.getDate() - (apodCount - 1));
    return this.http
      .get<any>(`${this.apodURL}&start_date=${startDate.toISOString().split('T')[0]}`)
      // Transforming fetched data
      .pipe(
        map(apods => {
          let id = 0;
          return apods.map((apod: {}) => {
            id += 1;
            return {...apod, id: id}
          });
        }),
        tap(apods => {
          this.apodData = apods;
        }));
  }

  getApod(index: number) {
    return this.apodData.slice()[index - 1];
  }
}