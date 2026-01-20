import React from 'react';
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

const SocialScreen = () => {
  const socialChannels = [
    {
      id: 1,
      platform: 'Instagram',
      handle: '@fbla_national',
      icon: '📷',
      color: '#E4405F',
      url: 'https://instagram.com/fbla',
    },
    {
      id: 2,
      platform: 'Twitter',
      handle: '@FBLA_National',
      icon: '🐦',
      color: '#1DA1F2',
      url: 'https://twitter.com/fbla',
    },
    {
      id: 3,
      platform: 'Facebook',
      handle: 'FBLA National',
      icon: '👍',
      color: '#4267B2',
      url: 'https://facebook.com/fbla',
    },
    {
      id: 4,
      platform: 'LinkedIn',
      handle: 'FBLA-PBL',
      icon: '💼',
      color: '#0077B5',
      url: 'https://linkedin.com/company/fbla',
    },
    {
      id: 5,
      platform: 'TikTok',
      handle: '@fbla_national',
      icon: '🎵',
      color: '#000000',
      url: 'https://tiktok.com/@fbla',
    },
    {
      id: 6,
      platform: 'YouTube',
      handle: 'FBLA National',
      icon: '📺',
      color: '#FF0000',
      url: 'https://youtube.com/fbla',
    },
  ];

  const chapterSocial = [
    {
      id: 1,
      platform: 'Chapter Instagram',
      handle: '@springfield_fbla',
      icon: '📷',
      color: '#E4405F',
    },
    {
      id: 2,
      platform: 'Chapter Twitter',
      handle: '@Springfield_FBLA',
      icon: '🐦',
      color: '#1DA1F2',
    },
  ];

  const handleSocialPress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Social Media</Text>
        <Text style={styles.headerSubtitle}>Connect with FBLA community</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* National Channels */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>National FBLA</Text>
          <Text style={styles.sectionDescription}>
            Follow our national channels for updates, inspiration, and more!
          </Text>
          {socialChannels.map((channel) => (
            <TouchableOpacity
              key={channel.id}
              style={styles.socialCard}
              onPress={() => handleSocialPress(channel.url)}>
              <View
                style={[
                  styles.iconCircle,
                  { backgroundColor: channel.color + '20' },
                ]}>
                <Text style={styles.platformIcon}>{channel.icon}</Text>
              </View>
              <View style={styles.socialContent}>
                <Text style={styles.platformName}>{channel.platform}</Text>
                <Text style={styles.platformHandle}>{channel.handle}</Text>
              </View>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Chapter Channels */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Chapter</Text>
          <Text style={styles.sectionDescription}>
            Stay connected with your local FBLA chapter
          </Text>
          {chapterSocial.map((channel) => (
            <TouchableOpacity key={channel.id} style={styles.socialCard}>
              <View
                style={[
                  styles.iconCircle,
                  { backgroundColor: channel.color + '20' },
                ]}>
                <Text style={styles.platformIcon}>{channel.icon}</Text>
              </View>
              <View style={styles.socialContent}>
                <Text style={styles.platformName}>{channel.platform}</Text>
                <Text style={styles.platformHandle}>{channel.handle}</Text>
              </View>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Hashtags */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Hashtags</Text>
          <View style={styles.hashtagContainer}>
            <View style={styles.hashtagBadge}>
              <Text style={styles.hashtagText}>#FBLA2026</Text>
            </View>
            <View style={styles.hashtagBadge}>
              <Text style={styles.hashtagText}>#FutureBusinessLeaders</Text>
            </View>
            <View style={styles.hashtagBadge}>
              <Text style={styles.hashtagText}>#SLC2026</Text>
            </View>
            <View style={styles.hashtagBadge}>
              <Text style={styles.hashtagText}>#NLC2026</Text>
            </View>
          </View>
        </View>
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
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.h4,
    fontWeight: '700',
    color: COLORS.primaryDark,
    marginBottom: SPACING.xs,
  },
  sectionDescription: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.mediumGray,
    marginBottom: SPACING.md,
    fontStyle: 'italic',
  },
  socialCard: {
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
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  platformIcon: {
    fontSize: 24,
  },
  socialContent: {
    flex: 1,
  },
  platformName: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
    color: COLORS.darkGray,
    marginBottom: 2,
  },
  platformHandle: {
    fontSize: FONT_SIZES.small,
    color: COLORS.mediumGray,
  },
  arrow: {
    fontSize: 20,
    color: COLORS.accentBlue,
  },
  hashtagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hashtagBadge: {
    backgroundColor: COLORS.accentBlue,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    marginRight: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  hashtagText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.small,
    fontWeight: '600',
  },
});

export default SocialScreen;
