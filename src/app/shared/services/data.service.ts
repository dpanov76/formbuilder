import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private httpClient: HttpClient
  ) { }

  generateDecisionUrl( pageId: string ) {
    return `http://localhost:3000/${pageId}`;
  }

  fetch(pageId: string): Observable<any> {
    const url = this.generateDecisionUrl(pageId);
    return this.httpClient.get(url);
  }

  submitData(pageId: string, body: any): Observable<any> {
    const url = this.generateDecisionUrl(pageId);
    return this.httpClient.post(url + '/formValues', body, { headers : {'Content-Type': 'application/json'} });
  }

}
