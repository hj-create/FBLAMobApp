# FBLA Mobile App - AI Agent Instructions

## Project Overview
React Native (Expo) Android app for FBLA with TypeScript. Uses Stack (auth) + Bottom Tab (main app) navigation pattern.

## Architecture

### Navigation Flow
- **Auth Stack** (`SignIn` → `SignUp` → `ForgotPassword`) → **MainTabs** (6 tabs: Dashboard, Calendar, NewsFeed, Resources, Social, Profile)
- Entry point: [App.tsx](../App.tsx) wraps `AppNavigator` with `NavigationContainer`, `GestureHandlerRootView`, `SafeAreaProvider`
- All navigation types defined in [src/types/navigation.ts](../src/types/navigation.ts) as `RootStackParamList` and `TabParamList`

### Import Aliases
Use TypeScript path aliases (configured in [tsconfig.json](../tsconfig.json)):
```typescript
import {Button} from '@components';
import {API_BASE_URL} from '@constants/config';
import {COLORS, FONTS, SPACING} from '@constants/theme';
```

### Component Patterns
- All screens use `SafeAreaView` from `react-native-safe-area-context`
- Styles defined with `StyleSheet.create()` at bottom of each component
- Components export through barrel files (`index.ts`) - see [src/components/index.ts](../src/components/index.ts)

## Design System

### FBLA Brand Colors (CRITICAL)
Official FBLA colors defined in [src/constants/theme.ts](../src/constants/theme.ts):
- **Primary Dark**: `#0a2e7f` (Deep Navy Blue)
- **Primary Gold**: `#f4ab19` (Gold/Yellow) - used for active tab icons
- **Accent Blue**: `#226add` - used for borders/highlights
- Always reference `COLORS` object, never hardcode colors

### Typography
- **Apercu font family** (Bold, Medium, MediumItalic) - see `FONTS` in theme.ts
- Font sizes: `FONT_SIZES` (h1-h4, subheading, large/medium/small/tiny)
- Spacing: `SPACING` constant for consistent padding/margins

### Navigation UI
Tab bar styling in [src/navigation/AppNavigator.tsx](../src/navigation/AppNavigator.tsx):
- Dark background (`COLORS.primaryDark`)
- Gold active tint, emoji icons
- Border top with accent blue (2px)

## Development Workflow

### Running the App
```bash
npm start           # Start Expo dev server
npm run android     # Run on Android device/emulator
```

### Troubleshooting Package Issues
From [README.md](../README.md#L67-L78):
```bash
# Check outdated packages
npm outdated && npm update

# Safe expo-compatible updates (excludes expo/react-native)
npx npm-check-updates '/^(?!expo|react-native).*$/' -u && npm install

# Clean install
rm -rf node_modules package-lock.json && npm install && expo start -c
```

### Environment Detection
[src/constants/config.ts](../src/constants/config.ts) uses `__DEV__` global:
```typescript
const API_BASE_URL = __DEV__ ? 'http://localhost:3000/api' : 'https://api.production.com';
```

## API Service Pattern
[src/services/api.ts](../src/services/api.ts) implements:
- Class-based `ApiService` with timeout (30s)
- Generic `request<T>()` method with abort controller
- Centralizes `Content-Type: application/json` headers
- Import from `@services/api`

## Authentication Flow
[src/screens/SignInScreen.tsx](../src/screens/SignInScreen.tsx#L21-L28):
- Demo mode: accepts any email/password
- On success: `navigation.navigate('MainTabs')` 
- Shows `Alert.alert()` for validation errors
- Uses `KeyboardAvoidingView` for iOS compatibility

## Key Conventions
1. **Component Structure**: Import statements → Component → StyleSheet.create() → export
2. **Type Safety**: All navigation params typed in `navigation.ts`
3. **Logo Component**: Reusable `<Logo size={120} />` for branding ([src/components/Logo.tsx](../src/components/Logo.tsx))
4. **Loading States**: Use `<Loading />` component for async operations
5. **Button Variants**: `variant='primary'|'secondary'` prop pattern in [Button.tsx](../src/components/Button.tsx)

## File Organization
- Screens: Feature-complete views in `src/screens/`
- Components: Reusable UI in `src/components/` with barrel exports
- Constants: Theme, config in `src/constants/`
- Services: API logic in `src/services/`
- Types: TypeScript definitions in `src/types/`
