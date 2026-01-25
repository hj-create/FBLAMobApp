# FBLA Mobile App - React Native Android Application

A modern React Native application for Android, built with TypeScript and following best practices.

## 📁 Project Structure

```
FBLAMobApp/
├── android/                 # Android native code
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Loading.tsx
│   │   └── index.ts
│   ├── screens/           # App screens
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── navigation/        # Navigation configuration
│   │   └── AppNavigator.tsx
│   ├── services/          # API and external services
│   │   ├── api.ts
│   │   └── index.ts
│   ├── utils/             # Helper functions
│   │   ├── helpers.ts
│   │   └── index.ts
│   ├── constants/         # App constants and theme
│   │   ├── theme.ts
│   │   ├── config.ts
│   │   └── index.ts
│   ├── types/             # TypeScript type definitions
│   │   ├── navigation.ts
│   │   ├── global.d.ts
│   │   └── index.ts
│   └── assets/            # Images, fonts, etc.
├── App.tsx                # Root component
├── index.js               # Entry point
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript configuration
├── babel.config.js        # Babel configuration
├── metro.config.js        # Metro bundler configuration
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- Android Studio
- JDK 11 or higher
- Android SDK

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```
1.1 If there are errors on the packages requirements:
npm outdated
npm update

Force-update package.json versions (controlled)
npx npm-check-updates -u
npm install

Safe expo combo
npx npm-check-updates '/^(?!expo|react-native).*$/' -u
npm install

Clean install
rm -rf node_modules package-lock.json
npm install
expo start -c

Runtime errors in Android using Expo app
npx expo-doctor
npx expo install --check
npx expo install --fix


2. Install Android dependencies:
```bash
cd android && ./gradlew clean && cd ..
```

### Running the App

1. Start Metro bundler:
```bash
npm start
# or
yarn start
```

2. Run on Android:
```bash
npm run android
# or
yarn android
```

## 📦 Features

- ✅ TypeScript support
- ✅ React Navigation (Stack & Bottom Tabs)
- ✅ Modular architecture
- ✅ Path aliases for clean imports
- ✅ Reusable components
- ✅ API service layer
- ✅ Theme constants
- ✅ Type-safe navigation

## 🛠️ Technologies

- **React Native** - Mobile framework
- **TypeScript** - Type safety
- **React Navigation** - Navigation solution
- **React Native Gesture Handler** - Gesture management
- **React Native Reanimated** - Animations
- **React Native Safe Area Context** - Safe area management

## 📝 Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm test` - Run tests
- `npm run lint` - Lint code

## 🎨 Project Features

### Navigation
The app uses React Navigation with:
- Stack Navigator for screen transitions
- Bottom Tab Navigator for main app sections
- Type-safe navigation with TypeScript

### Components
Reusable components located in `src/components/`:
- Button - Customizable button component
- Loading - Loading indicator component

### Screens
Main app screens in `src/screens/`:
- HomeScreen - Main landing screen
- ProfileScreen - User profile
- SettingsScreen - App settings

### Services
API and service layer in `src/services/`:
- API service with timeout and error handling
- Supports GET, POST, PUT, DELETE methods

### Utils
Helper functions in `src/utils/`:
- Date formatting
- Email validation
- Delay functions

### Constants
Theme and configuration in `src/constants/`:
- Colors, fonts, spacing
- API configuration
- App constants

## 📱 Building for Production

```bash
cd android
./gradlew assembleRelease
```

The APK will be generated at:
`android/app/build/outputs/apk/release/app-release.apk`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.