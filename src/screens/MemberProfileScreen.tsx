import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, FONT_SIZES, SPACING } from '../constants/theme';

const ProfileScreen = ({ navigation }: any) => {
  const [memberData] = useState({
    name: 'Haasini Jakkaraju',
    membershipId: 'FBLA-2026-12345',
    email: 'haasini@example.com',
    school: 'Lincoln High School',
    city: 'Springfield',
    state: 'Illinois',
    chapter: 'Springfield Chapter',
    joinDate: 'September 2025',
    membershipLevel: 'Active Member',
    competitions: ['Business Plan', 'Mobile App Development', 'Marketing'],
    events: 12,
    points: 450,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {memberData.name.split(' ').map((n) => n[0]).join('')}
              </Text>
            </View>
          </View>
          <Text style={styles.name}>{memberData.name}</Text>
          <Text style={styles.memberId}>{memberData.membershipId}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{memberData.membershipLevel}</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{memberData.events}</Text>
            <Text style={styles.statLabel}>Events</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{memberData.competitions.length}</Text>
            <Text style={styles.statLabel}>Competitions</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{memberData.points}</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
        </View>

        {/* Member Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Member Information</Text>
          
          <View style={styles.infoCard}>
            <InfoRow label="Email" value={memberData.email} />
            <InfoRow label="School" value={memberData.school} />
            <InfoRow label="City" value={memberData.city} />
            <InfoRow label="State" value={memberData.state} />
            <InfoRow label="Chapter" value={memberData.chapter} />
            <InfoRow label="Join Date" value={memberData.joinDate} />
          </View>
        </View>

        {/* Competitions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Registered Competitions</Text>
          {memberData.competitions.map((comp, index) => (
            <View key={index} style={styles.competitionCard}>
              <Text style={styles.competitionName}>{comp}</Text>
              <Text style={styles.competitionStatus}>Registered ✓</Text>
            </View>
          ))}
        </View>

        {/* Actions */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
            <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>
              View Achievements
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  header: {
    backgroundColor: COLORS.primaryDark,
    padding: SPACING.xl,
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: SPACING.md,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primaryGold,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '700',
    color: COLORS.white,
  },
  name: {
    fontSize: FONT_SIZES.h2,
    fontWeight: '700',
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  memberId: {
    fontSize: FONT_SIZES.small,
    color: COLORS.primaryGold,
    marginBottom: SPACING.md,
  },
  badge: {
    backgroundColor: COLORS.accentBlue,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: 20,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.small,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginHorizontal: SPACING.lg,
    marginTop: -30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statBox: {
    flex: 1,
    padding: SPACING.lg,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.borderGray,
  },
  statNumber: {
    fontSize: FONT_SIZES.h3,
    fontWeight: '700',
    color: COLORS.primaryDark,
    marginBottom: SPACING.xs,
  },
  statLabel: {
    fontSize: FONT_SIZES.small,
    color: COLORS.mediumGray,
  },
  section: {
    padding: SPACING.lg,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.h4,
    fontWeight: '700',
    color: COLORS.primaryDark,
    marginBottom: SPACING.md,
  },
  infoCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  infoLabel: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '500',
    color: COLORS.mediumGray,
  },
  infoValue: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '500',
    color: COLORS.darkGray,
  },
  competitionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.accentBlue,
  },
  competitionName: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '500',
    color: COLORS.darkGray,
  },
  competitionStatus: {
    fontSize: FONT_SIZES.small,
    color: COLORS.success,
    fontWeight: '600',
  },
  actionButton: {
    backgroundColor: COLORS.primaryBlue,
    padding: SPACING.md,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  actionButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primaryBlue,
  },
  secondaryButtonText: {
    color: COLORS.primaryBlue,
  },
});

export default ProfileScreen;
