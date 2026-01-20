import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT_SIZES, SPACING } from '../constants/theme';

const NewsFeedScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [news] = useState([
    {
      id: 1,
      title: '2026 SLC Registration Now Open!',
      excerpt: 'Register now for the State Leadership Conference. Early bird pricing available until March 1st.',
      date: 'January 15, 2026',
      category: 'Event',
      important: true,
    },
    {
      id: 2,
      title: 'New Competition Categories Announced',
      excerpt: 'FBLA introduces three new competition categories for 2026, including Cryptocurrency and Data Analytics.',
      date: 'January 12, 2026',
      category: 'Competition',
      important: false,
    },
    {
      id: 3,
      title: 'Chapter Spotlight: Springfield Chapter',
      excerpt: 'Learn about the amazing community service initiatives from our Springfield chapter members.',
      date: 'January 10, 2026',
      category: 'Chapter News',
      important: false,
    },
    {
      id: 4,
      title: 'Scholarship Opportunities Available',
      excerpt: 'Apply now for FBLA national scholarships. Deadline: February 28, 2026.',
      date: 'January 8, 2026',
      category: 'Scholarship',
      important: true,
    },
    {
      id: 5,
      title: 'Mobile App Development Workshop',
      excerpt: 'Join our virtual workshop on mobile app development best practices. Free for all members!',
      date: 'January 5, 2026',
      category: 'Workshop',
      important: false,
    },
  ]);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate refresh
    setTimeout(() => setRefreshing(false), 1500);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Event':
        return COLORS.primaryBlue;
      case 'Competition':
        return COLORS.primaryGold;
      case 'Scholarship':
        return COLORS.accentBlue;
      default:
        return COLORS.mediumGray;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>News Feed</Text>
        <Text style={styles.headerSubtitle}>Latest updates and announcements</Text>
      </View>

      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {news.map((item) => (
          <TouchableOpacity key={item.id} style={styles.newsCard}>
            {item.important && (
              <View style={styles.importantBanner}>
                <Text style={styles.importantText}>⭐ Important</Text>
              </View>
            )}
            <View style={styles.newsHeader}>
              <View
                style={[
                  styles.categoryBadge,
                  { backgroundColor: getCategoryColor(item.category) },
                ]}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
              <Text style={styles.newsDate}>{item.date}</Text>
            </View>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsExcerpt}>{item.excerpt}</Text>
            <Text style={styles.readMore}>Read more →</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  header: {
    backgroundColor: COLORS.primaryDark,
    padding: SPACING.lg,
  },
  headerTitle: {
    fontSize: FONT_SIZES.h2,
    fontWeight: '700',
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  headerSubtitle: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.primaryGold,
  },
  content: {
    flex: 1,
    padding: SPACING.lg,
  },
  newsCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  importantBanner: {
    backgroundColor: COLORS.primaryGold,
    marginHorizontal: -SPACING.md,
    marginTop: -SPACING.md,
    marginBottom: SPACING.sm,
    padding: SPACING.xs,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  importantText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.small,
    fontWeight: '600',
    textAlign: 'center',
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  categoryBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.tiny,
    fontWeight: '600',
  },
  newsDate: {
    fontSize: FONT_SIZES.small,
    color: COLORS.mediumGray,
  },
  newsTitle: {
    fontSize: FONT_SIZES.subheading,
    fontWeight: '600',
    color: COLORS.primaryDark,
    marginBottom: SPACING.sm,
  },
  newsExcerpt: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.darkGray,
    lineHeight: 20,
    marginBottom: SPACING.sm,
  },
  readMore: {
    fontSize: FONT_SIZES.callout,
    fontStyle: 'italic',
    color: COLORS.accentBlue,
    fontWeight: '500',
  },
});

export default NewsFeedScreen;
