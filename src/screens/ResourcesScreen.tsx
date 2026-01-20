import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT_SIZES, SPACING } from '../constants/theme';

const ResourcesScreen = () => {
  const [resources] = useState([
    {
      id: 1,
      category: 'Competition Guides',
      items: [
        { name: 'Business Plan Guidelines', url: '#' },
        { name: 'Marketing Strategies', url: '#' },
        { name: 'Mobile App Development Tips', url: '#' },
      ],
    },
    {
      id: 2,
      category: 'Member Resources',
      items: [
        { name: 'Membership Handbook', url: '#' },
        { name: 'Code of Conduct', url: '#' },
        { name: 'Leadership Development Guide', url: '#' },
      ],
    },
    {
      id: 3,
      category: 'Event Materials',
      items: [
        { name: 'SLC 2026 Schedule', url: '#' },
        { name: 'NLC Information Package', url: '#' },
        { name: 'Workshop Registration Forms', url: '#' },
      ],
    },
    {
      id: 4,
      category: 'Career Development',
      items: [
        { name: 'Resume Templates', url: '#' },
        { name: 'Interview Preparation Guide', url: '#' },
        { name: 'Networking Tips', url: '#' },
      ],
    },
  ]);

  const handleResourcePress = (url: string) => {
    // In a real app, this would open the document
    console.log('Opening resource:', url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Resources</Text>
        <Text style={styles.headerSubtitle}>Access FBLA documents and materials</Text>
      </View>

      <ScrollView style={styles.content}>
        {resources.map((section) => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.category}</Text>
            {section.items.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.resourceCard}
                onPress={() => handleResourcePress(item.url)}>
                <View style={styles.iconContainer}>
                  <Text style={styles.icon}>📄</Text>
                </View>
                <View style={styles.resourceContent}>
                  <Text style={styles.resourceName}>{item.name}</Text>
                  <Text style={styles.resourceAction}>Tap to view →</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText}>Request Additional Resources</Text>
        </TouchableOpacity>
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
  section: {
    marginBottom: SPACING.lg,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.h4,
    fontWeight: '700',
    color: COLORS.primaryDark,
    marginBottom: SPACING.md,
  },
  resourceCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  icon: {
    fontSize: 24,
  },
  resourceContent: {
    flex: 1,
  },
  resourceName: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '500',
    color: COLORS.darkGray,
    marginBottom: 4,
  },
  resourceAction: {
    fontSize: FONT_SIZES.small,
    fontStyle: 'italic',
    color: COLORS.accentBlue,
  },
  requestButton: {
    backgroundColor: COLORS.primaryBlue,
    padding: SPACING.md,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: SPACING.md,
    marginBottom: SPACING.xl,
  },
  requestButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
  },
});

export default ResourcesScreen;
