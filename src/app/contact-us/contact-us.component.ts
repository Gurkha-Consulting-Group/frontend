import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactRequestService } from '../shared/contact-request.service';
import { ContactRequest } from '../shared/contactrequest.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactRequest: ContactRequest = new ContactRequest();
  
  constructor(private router: Router,private contactRequestService:ContactRequestService) {}
  
  backHome(){
    this.router.navigate(['/home']);
  }

  reset(){
    this.contactRequest=new ContactRequest();
  }

  submitRequest(){
    this.contactRequestService.postContactRequest(this.contactRequest).subscribe(
      response=>{
        alert('Your contact request has been submitted successfully.');
        this.reset();
      },
      error=>{
        console.error('Error submitting contact request:', error);
        alert('There was an error submitting your contact request. Please try again later.');
      }
    );   
  }

}
