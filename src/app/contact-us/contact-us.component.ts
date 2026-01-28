import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactRequestService } from '../shared/contact-request.service';
import { ContactRequest } from '../shared/contactrequest.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactRequest: ContactRequest = new ContactRequest();
  
  constructor(private router: Router,private contactRequestService:ContactRequestService) {}
  
  backHome(){
    console.log('Back clicked');
    this.router.navigate(['/home']);
  }

  reset(){
    console.log('Reset clicked');
    this.contactRequest=new ContactRequest();
  }

  submitRequest(){
    console.log('Submit clicked');
    console.log('Contact Request Object:', this.contactRequest);
    this.contactRequestService.postContactRequest(this.contactRequest).subscribe(
      response=>{
        console.log('Contact request submitted successfully:', response);
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
