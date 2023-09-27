import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../types/cauhoi.entity';

@Injectable({
  providedIn: 'root'
})
export class CauhoiService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private http: HttpClient) { }
  public getData(): Observable<Question> { return this.http.get<Question>(` http://localhost:3001/cauHoi`) }
  public addItem(payload: Question): Observable<Question> {
    return this.http.post<Question>(`http://localhost:3001/cauHoi`, payload);
  }
  public deleteItem(payload: String): Observable<Question> {
    return this.http.delete<Question>(`http://localhost:3001/cauHoi/${payload}`);
  }
  public updateItem(payload: Question, id: String): Observable<Question> { 
    return this.http.put<Question>(`http://localhost:3001/cauHoi/${id}`, payload);
}
} 

