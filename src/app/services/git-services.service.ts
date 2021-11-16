import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitServicesService {

  baseUrl: string='https://api.github.com/';

  constructor(  private http: HttpClient) { }

  getGitUserRepo(payload:string): Observable<any[]> {
    return  this.http.get<any[]>(`${this.baseUrl}users/${payload}/repos`);

  }

  getGitUserRepoBranches(payload:any): Observable<any[]> {
    return  this.http.get<any[]>(`${this.baseUrl}repos/${payload.username}/${payload.repo}/branches`);

  }
}
