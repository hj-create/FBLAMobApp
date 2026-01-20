import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {COLORS, FONT_SIZES} from '../constants/theme';

const DashboardScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.fblaTitle}>FBLA</Text>
          <Text style={styles.subtitle}>Future Business Leaders of America</Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>2,450</Text>
            <Text style={styles.statLabel}>Members</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>150+</Text>
            <Text style={styles.statLabel}>Chapters</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>75</Text>
            <Text style={styles.statLabel}>Events</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Calendar')}>
              <View style={styles.actionIconContainer}>
                <Text style={styles.actionIcon}>📅</Text>
              </View>
              <Text style={styles.actionTitle}>Events</Text>
              <Text style={styles.actionSubtitle}>View calendar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Resources')}>
              <View style={styles.actionIconContainer}>
                <Text style={styles.actionIcon}>📚</Text>
              </View>
              <Text style={styles.actionTitle}>Resources</Text>
              <Text style={styles.actionSubtitle}>Browse materials</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('NewsFeed')}>
              <View style={styles.actionIconContainer}>
                <Text style={styles.actionIcon}>📰</Text>
              </View>
              <Text style={styles.actionTitle}>News</Text>
              <Text style={styles.actionSubtitle}>Latest updates</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Social')}>
              <View style={styles.actionIconContainer}>
                <Text style={styles.actionIcon}>👥</Text>
              </View>
              <Text style={styles.actionTitle}>Connect</Text>
              <Text style={styles.actionSubtitle}>Social media</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Upcoming Events */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Events</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.eventCard}>
            <View style={styles.eventDateBadge}>
              <Text style={styles.eventMonth}>MAR</Text>
              <Text style={styles.eventDay}>15</Text>
            </View>
            <View style={styles.eventDetails}>
              <Text style={styles.eventTitle}>State Leadership Conference</Text>
              <Text style={styles.eventLocation}>📍 Chicago, IL</Text>
              <Text style={styles.eventTime}>⏰ 9:00 AM - 5:00 PM</Text>
            </View>
          </View>

          <View style={styles.eventCard}>
            <View style={styles.eventDateBadge}>
              <Text style={styles.eventMonth}>APR</Text>
              <Text style={styles.eventDay}>22</Text>
            </View>
            <View style={styles.eventDetails}>
              <Text style={styles.eventTitle}>Business Plan Competition</Text>
              <Text style={styles.eventLocation}>📍 Virtual Event</Text>
              <Text style={styles.eventTime}>⏰ 2:00 PM - 4:00 PM</Text>
            </View>
          </View>

          <View style={styles.eventCard}>
            <View style={styles.eventDateBadge}>
              <Text style={styles.eventMonth}>JUN</Text>
              <Text style={styles.eventDay}>28</Text>
            </View>
            <View style={styles.eventDetails}>
              <Text style={styles.eventTitle}>National Leadership Conference</Text>
              <Text style={styles.eventLocation}>📍 Orlando, FL</Text>
              <Text style={styles.eventTime}>⏰ All Day Event</Text>
            </View>
          </View>
        </View>

        {/* Latest News */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest News</Text>
            <TouchableOpacity onPress={() => navigation.navigate('NewsFeed')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.newsCard}>
            <View style={styles.newsBadge}>
              <Text style={styles.newsBadgeText}>ANNOUNCEMENT</Text>
            </View>
            <Text style={styles.newsTitle}>
              2026 National Leadership Conference Registration Now Open
            </Text>
            <Text style={styles.newsExcerpt}>
              Join us in Orlando this summer for the premier FBLA event of the year...
            </Text>
            <Text style={styles.newsDate}>January 15, 2026</Text>
          </View>

          <View style={styles.newsCard}>
            <View style={[styles.newsBadge, styles.competitionBadge]}>
              <Text style={styles.newsBadgeText}>COMPETITION</Text>
            </View>
            <Text style={styles.newsTitle}>
              Scholarship Opportunities for Spring 2026
            </Text>
            <Text style={styles.newsExcerpt}>
              Applications are now being accepted for FBLA scholarships worth over $50,000...
            </Text>
            <Text style={styles.newsDate}>January 12, 2026</Text>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
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
    padding: 24,
    paddingTop: 40,
    paddingBottom: 32,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.white,
    opacity: 0.9,
    marginBottom: 4,
  },
  fblaTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: COLORS.primaryGold,
    letterSpacing: 3,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: FONT_SIZES.small,
    color: COLORS.white,
    opacity: 0.8,
    fontStyle: 'italic',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    marginTop: -20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statCard: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primaryBlue,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: FONT_SIZES.small,
    color: COLORS.mediumGray,
    fontWeight: '600',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.primaryDark,
  },
  seeAllText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.accentBlue,
    fontWeight: '600',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionIcon: {
    fontSize: 28,
  },
  actionTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.primaryDark,
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: FONT_SIZES.small,
    color: COLORS.mediumGray,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  eventDateBadge: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: COLORS.primaryGold,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  eventMonth: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  eventDay: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  eventDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  eventTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.primaryDark,
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: FONT_SIZES.small,
    color: COLORS.mediumGray,
    marginBottom: 2,
  },
  eventTime: {
    fontSize: FONT_SIZES.small,
    color: COLORS.mediumGray,
  },
  newsCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primaryBlue,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  newsBadge: {
    backgroundColor: COLORS.primaryBlue,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  competitionBadge: {
    backgroundColor: COLORS.primaryGold,
  },
  newsBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.white,
    letterSpacing: 0.5,
  },
  newsTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.primaryDark,
    marginBottom: 8,
    lineHeight: 22,
  },
  newsExcerpt: {
    fontSize: FONT_SIZES.small,
    color: COLORS.mediumGray,
    marginBottom: 8,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  newsDate: {
    fontSize: FONT_SIZES.small,
    color: COLORS.mediumGray,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 20,
  },
});

export default DashboardScreen;
