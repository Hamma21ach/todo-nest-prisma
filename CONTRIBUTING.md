# Contributing to Todo NestJS Prisma

Thank you for your interest in contributing to our project! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### 1. Fork the Repository

1. Go to the main repository page
2. Click the "Fork" button in the top-right corner
3. Clone your forked repository to your local machine

```bash
git clone https://github.com/YOUR_USERNAME/todo-nest-prisma.git
cd todo-nest-prisma
```

### 2. Set Up Development Environment

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database configuration

# Start the development environment
docker-compose up -d
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-fix-name
```

### 4. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add tests for new features
- Update documentation as needed

### 5. Test Your Changes

```bash
# Run tests
npm run test

# Check code quality
npm run lint
npm run format

# Test the API
npm run start:dev
```

### 6. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature description"
```

**Commit Message Format:**
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

### 7. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

1. Go to your forked repository on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template
4. Submit the pull request

## 📋 Development Guidelines

### Code Style

- Use **TypeScript** for all new code
- Follow **NestJS** conventions and patterns
- Use **ESLint** and **Prettier** for code formatting
- Write meaningful variable and function names
- Add JSDoc comments for complex functions

### Testing

- Write unit tests for new features
- Ensure all tests pass before submitting
- Aim for good test coverage
- Use descriptive test names

### Documentation

- Update README.md for new features
- Add inline code comments where needed
- Update API documentation
- Include examples in documentation

### Database Changes

- Update Prisma schema when needed
- Create migrations for database changes
- Update seed data if necessary
- Test database changes thoroughly

## 🐛 Reporting Issues

### Before Creating an Issue

1. Check if the issue has already been reported
2. Search existing issues and discussions
3. Try to reproduce the issue locally

### Issue Template

When creating an issue, please include:

- **Title:** Clear, descriptive title
- **Description:** Detailed description of the problem
- **Steps to Reproduce:** Step-by-step instructions
- **Expected Behavior:** What should happen
- **Actual Behavior:** What actually happens
- **Environment:** OS, Node.js version, etc.
- **Screenshots:** If applicable

## 🚀 Feature Requests

We welcome feature requests! When suggesting features:

1. **Describe the problem** you're trying to solve
2. **Explain your proposed solution**
3. **Consider alternatives** you've explored
4. **Provide examples** of similar features

## 📞 Getting Help

- **Issues:** Use GitHub issues for bugs and feature requests
- **Discussions:** Use GitHub discussions for questions and ideas
- **Documentation:** Check the README and code comments first

## 🎯 Project Goals

Our project aims to:

- Provide a **clean, maintainable** codebase
- Follow **best practices** for NestJS development
- Offer **comprehensive documentation**
- Maintain **high code quality** standards
- Foster a **welcoming community**

## 📝 Code of Conduct

- Be **respectful** and **inclusive**
- Help **new contributors** learn
- Provide **constructive feedback**
- Focus on **technical discussions**

## 🏆 Recognition

Contributors will be recognized in:

- Project README
- Release notes
- Contributor hall of fame

---

**Thank you for contributing to our project! 🎉**

Your contributions help make this project better for everyone.
