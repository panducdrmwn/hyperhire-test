# Atomic Design Pattern

This project follows the Atomic Design methodology, organizing components into five distinct levels:

## Structure

```
components/
├── atoms/          # Basic building blocks
├── molecules/      # Simple combinations of atoms
├── organisms/      # Complex UI components
└── templates/      # Page-level layouts
```

## Atoms

Basic, indivisible UI elements that cannot be broken down further.

- **Button** - Reusable button component with variants
- **Badge** - Badge/tag component for labels
- **Text** - Typography component with variants
- **Logo** - Logo image component
- **Icon** - Icon/image component

## Molecules

Simple combinations of atoms that form a functional unit.

- **DropdownMenu** - Dropdown menu with trigger and items
- **ServiceCard** - Service card with icon and title
- **FeatureCard** - Feature card with title and description
- **ProfileCard** - Profile card with image, name, role, skills, and badges
- **HamburgerMenu** - Mobile hamburger menu button

## Organisms

Complex UI components composed of molecules and/or atoms.

- **Navbar** - Main navigation bar
- **Footer** - Site footer
- **SwiperCoverflow** - 3D coverflow slider for profiles
- **ServiceSlide** - Service slider component

## Templates

Page-level layouts that combine organisms into a complete page structure.

- **HomeTemplate** - Home page template

## Usage

### Importing Components

```typescript
// Atoms
import { Button, Badge, Text } from '@/components/atoms';

// Molecules
import { DropdownMenu, ServiceCard } from '@/components/molecules';

// Organisms
import { Navbar, Footer } from '@/components/organisms';

// Templates
import HomeTemplate from '@/components/templates/HomeTemplate';
```

### Example: Using Atoms

```typescript
import { Button, Text } from '@/components/atoms';

<Button variant="primary" size="md">Click me</Button>
<Text variant="h1" weight="black" color="white">Heading</Text>
```

### Example: Using Molecules

```typescript
import { ProfileCard } from '@/components/molecules';

<ProfileCard
  image="/profile.png"
  name="John Doe"
  role="Developer · 3y+"
  skills={["React", "TypeScript"]}
  badges={["Full Stack", "Remote"]}
/>
```

## Benefits

1. **Reusability** - Components can be reused across the application
2. **Maintainability** - Clear structure makes it easy to find and update components
3. **Scalability** - Easy to add new components following the pattern
4. **Consistency** - Standardized components ensure UI consistency
5. **Testability** - Small, focused components are easier to test

