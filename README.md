# created using

npm create vue@latest ff
cd ff
yarn install

```graphql
/src
 ├── app/          # App-wide configuration (router, store, styles)
 │   ├── providers/  # App-level providers (Pinia, Vue Router setup)
 │   ├── styles/     # Global styles (e.g., Tailwind config, theme variables)
 │   ├── config.ts   # App-wide settings
 │   ├── index.ts    # Entry point for app setup
 │
 ├── shared/       # Reusable utilities, helpers, common UI elements
 │   ├── api/       # API base services (Axios setup, fetch utils)
 │   ├── ui/        # Generic UI components (Button, Modal, Loader)
 │   ├── hooks/     # Composables (useFetch, useAuth)
 │   ├── lib/       # Helper functions (dateFormatter, validators)
 │   ├── types/     # TypeScript interfaces and models
 │
 ├── entities/     # Global domain models (business logic entities)
 │   ├── room/       # Room entity (state, model, API interactions)
 │   │   ├── model/   # Room state management (Pinia store)
 │   │   ├── api/     # API calls related to rooms
 │   │   ├── types.ts # TypeScript interfaces for rooms
 │   │   ├── index.ts # Central export
 │
 ├── features/     # Self-contained features (logic + UI)
 │   ├── room-list/  # Feature for listing rooms
 │   │   ├── ui/      # UI components specific to room listing (RoomCard.vue)
 │   │   ├── model/   # Local state for this feature (optional)
 │   │   ├── index.ts # Export entry for the feature
 │   ├── room-booking/ # Feature for booking a room
 │   │   ├── ui/      # Booking form, availability display
 │   │   ├── model/   # Local booking state
 │   │   ├── api/     # API call for booking a room
 │   │   ├── index.ts # Central export
 │
 ├── widgets/      # Reusable UI components that combine features
 │   ├── sidebar/    # Sidebar component
 │   ├── header/     # Header with navigation
 │   ├── index.ts    # Export entry for widgets
 │
 ├── pages/        # Route-level pages (used in Vue Router)
 │   ├── home/       # Home page (Rooms list + booking options)
 │   │   ├── ui/      # Page-specific UI
 │   │   ├── index.vue # Main home page file
 │   ├── room-details/ # Room details page
 │   │   ├── ui/      # UI components for details
 │   │   ├── index.vue # Page entry point
 │
 ├── processes/    # Complex workflows that combine features
 │   ├── auth/       # Login, Logout, Register workflow
 │   ├── index.ts    # Export entry
 │
 ├── main.ts       # Entry point for Vue app
 ├── vite.config.ts # Vite configuration

```
