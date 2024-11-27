import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = 'https://api.example.com/roles';

  constructor(private http: HttpClient) {}

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addRole(role: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, role);
  }

  updateRole(role: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${role.id}`, role);
  }

  deleteRole(roleId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${roleId}`);
  }

  updateRolePermissions(roleId: number, permissions: any[]): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${roleId}/permissions`, { permissions });
  }
}
