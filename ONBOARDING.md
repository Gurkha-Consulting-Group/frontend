# Frontend Onboarding

## Overview
Angular app for Gurkha Consulting Group. Local uses `environment.ts`, production uses `environment.prod.ts` (configured in `angular.json`).

## Prerequisites
- Node.js LTS
- npm

## Install
- `npm install`

## Git: Clone and Pull
1. `git clone https://github.com/Gurkha-Consulting-Group/frontend`
2. `cd frontend`
3. `git checkout main`
4. `git pull`

If you have local changes and need to pull:
- `git status`
- `git add .`
- `git commit -m "WIP"`
- `git pull --rebase` (or `git pull` if you prefer merge)

## Run (Local)
- `ng serve`
- App: http://localhost:4200
- API: http://localhost:8080 (from `src/environments/environment.ts`)

## Build (Production)
- `ng build --configuration production`
- Uses `src/environments/environment.prod.ts`

## Tests
- `ng test`

## Environment Configuration
- Local: `src/environments/environment.ts`
- Prod: `src/environments/environment.prod.ts`
- Production file replacement is set in `angular.json` under build `configurations.production.fileReplacements`.

## Key Paths
- App shell: `src/app/app.component.*`
- Routes: `src/app/app.routes.ts`
- Shared services: `src/app/shared/*`
- Pages: `src/app/*/`

## API Usage
- Base URL: `environment.apiBaseUrl`
- Example service: `src/app/shared/contact-request.service.ts`

## Backend API Details
- Local base URL: `http://localhost:8080`
- Production base URL: `https://backend-iusm.onrender.com`

## REST API (Postman-ready)
Base URL:
- Local: `http://localhost:8080/api`
- Prod: `https://backend-iusm.onrender.com/api`

### Contact Requests
**GET** `/contact`
- Returns: list of contact requests

**POST** `/contact`
- Content-Type: `application/json`
- Body:
	- `name` (string)
	- `email` (string)
	- `interest` (string)
	- `message` (string)

## Notes
- If `ng` is not found, install Angular CLI: `npm i -g @angular/cli`.
