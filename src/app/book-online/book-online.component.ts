import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-online',
  imports: [CommonModule],
  templateUrl: './book-online.component.html',
  styleUrl: './book-online.component.css'
})
export class BookOnlineComponent {
  unavailableMessage = '';
  private hideTimeoutId: number | null = null;

  showUnavailable(serviceName: string): void {
    this.unavailableMessage = `Sorry, ${serviceName} is not yet available for online bookings. Please contact us for more information.`;
    if (this.hideTimeoutId !== null) {
      window.clearTimeout(this.hideTimeoutId);
    }
    this.hideTimeoutId = window.setTimeout(() => {
      this.unavailableMessage = '';
      this.hideTimeoutId = null;
    }, 4000);
  }
}
