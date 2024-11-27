import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private apiUrl = 'https://api.example.com/permissions';

  constructor(private http: HttpClient) {}

  getPermissions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
