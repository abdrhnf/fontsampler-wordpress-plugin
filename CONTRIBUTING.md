# Contributing to Fontsampler

Thank you for your interest in contributing to Fontsampler! This document provides guidelines and instructions for contributing to this project.

## Development Setup

### Prerequisites
- PHP 7.0 or higher
- Node.js 14 or higher
- Composer
- Git

### Getting Started

1. **Fork and Clone**
   ```bash
   git clone https://github.com/abdrhnf/fontsampler-wordpress-plugin.git
   cd fontsampler-wordpress-plugin
   ```

2. **Install Dependencies**
   ```bash
   # PHP dependencies
   composer install
   
   # Node.js dependencies
   npm install
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

## Development Workflow

### Code Standards

This project follows WordPress Coding Standards for PHP and ESLint for JavaScript.

**PHP**:
- Follow [WordPress PHP Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/)
- Use tabs for indentation
- Run PHPCS before committing: `composer phpcs`

**JavaScript**:
- Follow ESLint rules defined in `.eslintrc.js`
- Use 2 spaces for indentation
- Run linter: `npm run lint`
- Auto-fix issues: `npm run lint:fix`

**CSS/LESS**:
- Follow WordPress CSS Coding Standards
- Compile LESS: `npm run less`

### Building Assets

```bash
# Build frontend JavaScript
npm run build

# Build admin JavaScript
npm run build-admin

# Compile LESS to CSS
npm run less
npm run less-admin

# Watch for changes
npm run watch
```

### Testing

Before submitting a pull request:

1. **PHP Syntax Check**
   ```bash
   find . -name "*.php" -not -path "./vendor/*" -exec php -l {} \;
   ```

2. **Run PHPCS**
   ```bash
   ./vendor/bin/phpcs --standard=phpcs.xml
   ```

3. **Run ESLint**
   ```bash
   npm run lint
   ```

4. **Manual Testing**
   - Test on a WordPress installation
   - Test all UI elements
   - Test on multiple browsers (Chrome, Firefox, Safari, Edge)
   - Test with different PHP versions (7.4, 8.0, 8.1, 8.2)

## Pull Request Process

1. **Update Documentation**
   - Update README.md if needed
   - Add/update inline code comments
   - Update changelog.txt

2. **Commit Messages**
   - Use clear, descriptive commit messages
   - Format: `type: description`
   - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
   - Example: `feat: add WOFF2 support`

3. **Create Pull Request**
   - Fill out the PR template
   - Reference related issues
   - Include screenshots for UI changes
   - Ensure CI checks pass

4. **Code Review**
   - Address review comments
   - Keep PR focused on one feature/fix
   - Squash commits if needed

## Project Structure

```
fontsampler-wordpress-plugin/
├── admin/              # Admin interface files
│   ├── css/           # Admin styles
│   └── js/            # Admin scripts
├── css/               # Frontend styles
├── includes/          # Twig templates
├── js/                # Frontend scripts
├── vendor/            # PHP dependencies (Composer)
├── *.php              # Main plugin classes
└── fontsampler.php    # Plugin entry point
```

## Coding Guidelines

### PHP

```php
<?php
// Use WordPress functions
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// Class naming
class Fontsampler_Feature_Name {
    // Method naming
    public function get_feature_data() {
        // Implementation
    }
}
```

### JavaScript

```javascript
// Use ES6 features
const myFunction = () => {
  // Implementation
};

// Avoid jQuery when possible
document.querySelector('.selector');
```

## Reporting Bugs

1. Check if the bug has already been reported
2. Create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - WordPress version
   - PHP version
   - Browser (if frontend issue)
   - Screenshots if applicable

## Feature Requests

1. Check if the feature has been requested
2. Create a new issue with:
   - Clear description
   - Use case
   - Mockups/examples if applicable

## Questions?

- Open a [GitHub Discussion](https://github.com/abdrhnf/fontsampler-wordpress-plugin/discussions)
- Check existing issues and documentation

## License

By contributing, you agree that your contributions will be licensed under the GPL-3.0 License.

---

**Thank you for contributing to Fontsampler!** 🎉
