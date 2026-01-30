import { Component, OnInit } from '@angular/core';
import { ContactRequestService } from '../shared/contact-request.service';
import { ContactRequest } from '../shared/contactrequest.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-contact-request',
  imports: [],
  templateUrl: './view-contact-request.component.html',
  styleUrl: './view-contact-request.component.css'
})
export class ViewContactRequestComponent implements OnInit {
  contactRequests:ContactRequest[] = [];
  constructor(private router:Router, private contactRequestService:ContactRequestService) {}

  ngOnInit(): void {
    this.contactRequestService.getAllContactRequests().subscribe(
      response=>{
        console.log('API response:', response);
        this.contactRequests=response;
      },
    error=>{
      console.error(error);
    }
    );  
  }

  backHome(){
    console.log('Back clicked');
    this.router.navigate(['/home']);
  }

}
