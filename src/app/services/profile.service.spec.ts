import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private dataUrl = 'assets/data/profile-data.json';

  constructor(private http: HttpClient) {}

  getProfileData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}

