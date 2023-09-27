import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user.entity';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private http: HttpClient) { }
  public getData(): Observable<User> {
    return this.http.get<User>(` http://localhost:3001/boCauHoi
`)
  }
  public addItem(payload: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3001/boCauHoi
`, payload);
  }
  public deleteItem(payload: String): Observable<User> {
    return this.http.delete<User>(`http://localhost:3001/boCauHoi
/${payload}`);
  }
  public updateItem(payload: User, id: String): Observable<User> {
    return this.http.put<User>(`http://localhost:3001/boCauHoi
/${id}`, payload);
  }
}
