#  Todo NestJS Prisma API

[![NestJS](https://img.shields.io/badge/NestJS-10.0.0-red.svg)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.22.0-blue.svg)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-green.svg)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-20.10-blue.svg)](https://www.docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue.svg)](https://www.typescriptlang.org/)

A modern, scalable **Todo API** built with **NestJS**, **Prisma ORM**, and **PostgreSQL**. This project demonstrates best practices for building RESTful APIs with TypeScript, including proper validation, error handling, and database management.

## Features

-  **NestJS Framework** - Enterprise-grade Node.js framework
-  **Prisma ORM** - Type-safe database toolkit
-  **PostgreSQL** - Robust, production-ready database
-  **Docker Support** - Containerized development and production
-  **TypeScript** - Full type safety and IntelliSense
-  **Input Validation** - Request validation using class-validator
-  **Testing Ready** - Jest-based testing framework
-  **API Documentation** - Clear endpoint documentation
-  **Hot Reload** - Development mode with auto-restart

##  Architecture

```
src/
├── prisma/           # Database schema and migrations
├── tasks/            # Task management module
│   ├── dto/         # Data Transfer Objects
│   ├── types.ts     # TypeScript interfaces
│   ├── tasks.service.ts    # Business logic
│   ├── tasks.controller.ts # HTTP endpoints
│   └── tasks.module.ts     # Module configuration
└── app.module.ts    # Root application module
```

##  Quick Start

### Prerequisites

- **Node.js** 18+ 
- **Docker** & **Docker Compose**
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/todo-nest-prisma.git
cd todo-nest-prisma
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL="postgresql://postgres:postgres@localhost:54322/todo?schema=public"

# Application Configuration
NODE_ENV=development
PORT=3000
```

### 3. Start with Docker (Recommended)

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f api

# Stop services
docker-compose down
```

### 4. Manual Setup (Alternative)

```bash
# Install dependencies
npm install

# Generate Prisma client
npm run prisma:generate

# Start PostgreSQL (if not using Docker)
# ... start your PostgreSQL instance

# Push schema to database
npm run prisma:migrate

# Seed database
npm run db:seed

# Start development server
npm run start:dev
```

##  API Endpoints

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Get all tasks |
| `GET` | `/api/tasks/:id` | Get task by ID |
| `POST` | `/api/tasks` | Create new task |
| `PATCH` | `/api/tasks/:id` | Update task |
| `PATCH` | `/api/tasks/:id/toggle` | Toggle task completion |
| `DELETE` | `/api/tasks/:id` | Delete task |

### Task Model

```typescript
interface Task {
  id: string;           // Unique identifier
  title: string;        // Task title (required)
  description?: string; // Task description (optional)
  completed: boolean;   // Completion status
  priority: Priority;   // Priority level
  dueDate?: Date;      // Due date (optional)
  createdAt: Date;     // Creation timestamp
  updatedAt: Date;     // Last update timestamp
}

enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}
```

### Request Examples

#### Create Task
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn NestJS",
    "description": "Study the framework documentation",
    "priority": "HIGH",
    "dueDate": "2024-12-31"
  }'
```

#### Update Task
```bash
curl -X PATCH http://localhost:3000/api/tasks/:id \
  -H "Content-Type: application/json" \
  -d '{
    "completed": true,
    "priority": "MEDIUM"
  }'
```

#### Toggle Completion
```bash
curl -X PATCH http://localhost:3000/api/tasks/:id/toggle
```

##  Database Management

### Prisma Commands

```bash
# Generate Prisma client
npm run prisma:generate

# Push schema changes to database
npm run prisma:migrate

# Open Prisma Studio (database GUI)
npm run prisma:studio

# Seed database with sample data
npm run db:seed

# Reset database
npm run db:reset
```

### Database Access

- **Adminer URL:** `http://localhost:8081`
- **System:** PostgreSQL
- **Server:** `postgres` (or `host.docker.internal:54322` from host)
- **User:** `postgres`
- **Password:** `postgres`
- **Database:** `todo`

## 🐳 Docker

### Development
```bash
# Build and start services
docker-compose up -d

# View logs
docker-compose logs -f api

# Stop services
docker-compose down

# Rebuild containers
docker-compose build --no-cache
```

### Production
```bash
# Build production image
docker build -t todo-app .

# Run container
docker run -p 3000:3000 --env-file .env todo-app
```

##  Testing

```bash
# Unit tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:cov

# E2E tests
npm run test:e2e
```

##  Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Required |
| `NODE_ENV` | Application environment | `development` |
| `PORT` | Application port | `3000` |

##  Available Scripts

```bash
# Development
npm run start:dev      # Start in watch mode
npm run build          # Build application
npm run start          # Start production server

# Database
npm run prisma:generate    # Generate Prisma client
npm run prisma:migrate     # Run migrations
npm run prisma:studio      # Open Prisma Studio
npm run db:seed            # Seed database
npm run db:reset           # Reset database

# Docker
npm run docker:up      # Start services
npm run docker:down    # Stop services
npm run docker:build   # Build images
npm run docker:logs    # View logs

# Code Quality
npm run lint           # Run ESLint
npm run format         # Format code with Prettier
```

##  Project Structure

```
todo-nest-prisma/
├── 📄 .env.example          # Environment variables template
├── 📄 .gitignore            # Git ignore rules
├── 📄 .dockerignore         # Docker ignore rules
├── 📄 Dockerfile            # Multi-stage Docker build
├── 📄 docker-compose.yml    # Docker services configuration
├── 📄 package.json          # Dependencies and scripts
├── 📄 nest-cli.json        # NestJS CLI configuration
├── 📄 tsconfig.json        # TypeScript configuration
├── 📂 prisma/              # Database schema and migrations
│   ├── 📄 schema.prisma    # Prisma schema
│   ├── 📄 seed.ts          # Database seeding
│   └── 📂 migrations/      # Database migrations
├── 📂 src/                 # Source code
│   ├── 📄 main.ts          # Application entry point
│   ├── 📄 app.module.ts    # Root module
│   ├── 📂 prisma/          # Prisma module and service
│   └── 📂 tasks/           # Tasks module
│       ├── 📂 dto/         # Data Transfer Objects
│       ├── 📄 types.ts     # TypeScript interfaces
│       ├── 📄 tasks.service.ts    # Business logic
│       ├── 📄 tasks.controller.ts # HTTP endpoints
│       └── 📄 tasks.module.ts     # Module configuration
└── 📄 README.md            # Project documentation
```

##  Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

##  License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [PostgreSQL](https://www.postgresql.org/) - Advanced open source database
- [Docker](https://www.docker.com/) - Container platform

##  Support

Need help? Here are some resources:

- 📖 [Documentation](https://docs.nestjs.com/)
- 🐛 [Issues](https://github.com/Hamma21ach/todo-nest-prisma/issues)
- 💬 [Discussions](https://github.com/Hamma21ach/todo-nest-prisma/discussions)
- 📧 [Email Support](Mohamed Ayech: ayechm34@gmail.com)

---

** Star this repository if you found it helpful!**


