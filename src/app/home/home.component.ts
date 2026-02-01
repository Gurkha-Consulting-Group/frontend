import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  dayLabel = '';
  timeLabel = '';
  temperatureC: number | null = null;
  weatherSummary = '';
  locationLabel = 'Local area';
  addressLabel = '';
  timeZoneLabel = '';
  private timerId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.updateTime();
    this.timerId = window.setInterval(() => this.updateTime(), 1000);
    this.loadWeather();
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

  private loadWeather(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          this.fetchWeather(40.7128, -74.0060);
        }
      );
    } else {
      this.fetchWeather(40.7128, -74.0060);
    }
  }

  private fetchWeather(latitude: number, longitude: number): void {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius`;
    this.http.get<{ current_weather?: { temperature?: number; weathercode?: number } }>(url)
      .subscribe({
        next: (data) => {
          const current = data?.current_weather;
          if (current?.temperature !== undefined) {
            this.temperatureC = Math.round(current.temperature);
            this.weatherSummary = this.mapWeatherCode(current.weathercode ?? -1);
          }
        }
      });

    const geoUrl = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}&count=1`;
    this.http.get<{ results?: Array<{ name?: string; admin1?: string; country?: string }> }>(geoUrl)
      .subscribe({
        next: (data) => {
          const place = data?.results?.[0];
          if (place) {
            const parts = [place.name, place.admin1, place.country].filter(Boolean);
            this.addressLabel = parts.join(', ');
            this.locationLabel = this.addressLabel;
          }
        }
      });
  }

  private mapWeatherCode(code: number): string {
    const map: Record<number, string> = {
      0: 'Clear sky',
      1: 'Mostly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Fog',
      48: 'Rime fog',
      51: 'Light drizzle',
      53: 'Drizzle',
      55: 'Heavy drizzle',
      61: 'Light rain',
      63: 'Rain',
      65: 'Heavy rain',
      71: 'Light snow',
      73: 'Snow',
      75: 'Heavy snow',
      80: 'Rain showers',
      81: 'Heavy showers',
      82: 'Violent showers',
      95: 'Thunderstorm'
    };
    return map[code] ?? 'Weather update';
  }

}
