import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  dayLabel = '';
  timeLabel = '';
  timeZoneLabel = '';
  private timerId: number | null = null;

  ngOnInit(): void {
    this.updateTime();
    this.timerId = window.setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private updateTime(): void {
    const now = new Date();
    this.dayLabel = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }).format(now);
    this.timeZoneLabel = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local time';
    this.timeLabel = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    }).format(now);
  }

}
