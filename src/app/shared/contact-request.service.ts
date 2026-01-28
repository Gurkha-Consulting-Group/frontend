import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ContactRequest } from './contactrequest.model';

@Injectable({
  providedIn: 'root'
})
export class ContactRequestService {
  private url='';
  private baseUrl = `http://localhost:8080/api`;
  constructor(private http:HttpClient) { }

  postContactRequest(contactRequest: ContactRequest): Observable<ContactRequest> {
    console.log('Posting contact request to API:', contactRequest);
    this.url=`${this.baseUrl}/contact`;
    const payload = {
      name: contactRequest.name,
      email: contactRequest.email,
      interest: contactRequest.interest,
      message: contactRequest.message
    };
    return this.http.post<ContactRequest>(this.url, payload);
  }

  getAllContactRequests(): Observable<ContactRequest[]> {
    this.url=`${this.baseUrl}/contact`;
    return this.http.get<ContactRequest[]>(this.url);
  }
  
}
