# Daily Bites (Smart Recipe & Meal Planner)

## Overview

A platform where users input ingredients, dietary preferences, or health goals, and the AI generates personalized recipes, meal plans, and shopping lists.

## Features

- [ ] User
    - [ ] Email/password auth
    - [ ] JWT/session-based authentication
    - [ ] User profiles
- [ ] Recipe Book
    - [ ] Create/edit/delete recipes
    - [ ] Save favorites
- [ ] Recipe Database
    - [ ] Ingredients
    - [ ] Steps
    - [ ] Tags (sweet, spicy, etc)
    - [ ] Search
- [ ] Cooking Mode
    - [ ] Step-by-step instructions
- [ ] Recipe Feed
    - [ ] Browse new recipes
    - [ ] Search by categories
- [ ] Social
    - [ ] Public vs private recipes
    - [ ] Likes/bookmarks
- [ ] Personalization
    - [ ] Recommended recipes
    - [ ] Recently cooked
    - [ ] Favorite ingredients bias

## Tech Stack

### Frontend
- **Language**: Typescript
- **Framework**: React, Tailwind, TanStack Query
- **Router**: Next.js

### Backend
- **Language**: Python
- **Framework**: FastAPI or Django???
- **Authentication**: JWT or oAuth???
- **Database**: PostgreSQL
- **AI Integration**: OpenAI API
- **Task Queue**: Celery
- **Email Service**: Resend???
- **Caching**: Redis
- **Container**: Docker
- **Container Orchestration Platform**: Kubernetes
- **Cloud Platform**: AWS
- **Recipe API**: TheMealDB

## Architecture

- Rate limiter
- CDN
- Database indexing strategy
- Read/write separation
- Frontend component tests + Backend unit/integration tests + API contract tests