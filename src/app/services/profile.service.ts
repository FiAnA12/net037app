import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private dataUrl = 'assets/data/profile-data.json'; // Path to your JSON file

  constructor(private http: HttpClient) { }

  // Method to get the data from the JSON file
  getProfileData(): Observable<any> {
    return this.http.get<any>(this.dataUrl); // Make sure the method name matches
  }
}
