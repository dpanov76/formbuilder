import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  submitDecisionDraft(jurId: string, caseId: string, pageId: string, caseType: string, body: any): Observable<any> {
    const url = this.generateDecisionUrl(pageId);
    return this.httpClient.post(url, body);
  }

}
