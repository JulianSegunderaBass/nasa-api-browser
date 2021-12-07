import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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
      return this.http.get<[]>(`${this.apodURL}&start_date=${startDate.toISOString().split('T')[0]}`);
    }
}