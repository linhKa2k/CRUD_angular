import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Result } from '../../types/ketqua.entity'
@Injectable({
  providedIn: 'root'
})
export class KetquaService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private http: HttpClient) { }
  public getData(): Observable<Result> { return this.http.get<Result>(` http://localhost:3001/ketqua`)}
}
