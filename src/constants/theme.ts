// FBLA Official Colors
export const COLORS = {
  // Primary FBLA Colors
  primaryDark: '#0a2e7f',    // Deep Navy Blue
  primaryBlue: '#1d52bc',     // Royal Blue
  primaryGold: '#f4ab19',     // Gold/Yellow
  accentBlue: '#226add',      // Light Blue
  darkGray: '#2d2b2b',        // Dark Gray
  
  // Utility Colors
  white: '#FFFFFF',
  black: '#000000',
  success: '#34C759',
  danger: '#FF3B30',
  warning: '#FF9500',
  
  // Grays
  lightGray: '#F5F5F5',
  mediumGray: '#888888',
  borderGray: '#DDDDDD',
  
  // Background
  background: '#FFFFFF',
  backgroundLight: '#F9F9F9',
};

// Typography - Apercu Font Family
export const FONTS = {
  heading: 'Apercu-Bold',        // For headings
  subheading: 'Apercu-Medium',   // For subheadlines
  body: 'Apercu-Medium',         // For body text
  callout: 'Apercu-MediumItalic', // For callouts
  regular: 'System',             // Fallback
};

export const FONT_SIZES = {
  // Headings
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,
  
  // Subheadings
  subheading: 18,
  
  // Body
  large: 16,
  medium: 14,
  small: 12,
  tiny: 10,
  
  // Callouts
  callout: 14,
};

export const FONT_WEIGHTS = {
  bold: '700' as const,
  semibold: '600' as const,
  medium: '500' as const,
  regular: '400' as const,
};

// Spacing
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Border Radius
export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 9999,
};
