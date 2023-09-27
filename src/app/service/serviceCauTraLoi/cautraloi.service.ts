import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../../types/cautraloi.entity'

@Injectable({
  providedIn: 'root'
})
export class CautraloiService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private http: HttpClient) { }
  public getData(): Observable<Answer> { return this.http.get<Answer>(`  http://localhost:3001/cauTraLoi`) }
  public addItem(payload: Answer): Observable<Answer> {
    return this.http.post<Answer>(` http://localhost:3001/cauTraLoi`, payload);
  }
  public deleteItem(payload: String): Observable<Answer> {
    return this.http.delete<Answer>(` http://localhost:3001/cauTraLoi/${payload}`);
  }
  public updateItem(payload: Answer, id: String): Observable<Answer> {
    return this.http.put<Answer>(` http://localhost:3001/cauTraLoi/${id}`, payload);
  }
}
