import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT_SIZES, SPACING } from '../constants/theme';

const CalendarScreen = () => {
  const [events] = useState([
    {
      id: 1,
      title: 'State Leadership Conference',
      date: 'March 15, 2026',
      time: '9:00 AM - 5:00 PM',
      location: 'Convention Center',
      type: 'Conference',
    },
    {
      id: 2,
      title: 'Business Plan Competition Deadline',
      date: 'April 2, 2026',
      time: '11:59 PM',
      location: 'Online Submission',
      type: 'Competition',
    },
    {
      id: 3,
      title: 'Chapter Meeting',
      date: 'March 20, 2026',
      time: '3:30 PM - 4:30 PM',
      location: 'Room 204',
      type: 'Meeting',
    },
    {
      id: 4,
      title: 'National Leadership Conference',
      date: 'June 28-July 1, 2026',
      time: 'All Day',
      location: 'Atlanta, GA',
      type: 'Conference',
    },
  ]);

  const getEventColor = (type: string) => {
    switch (type) {
      case 'Conference':
        return COLORS.primaryBlue;
      case 'Competition':
        return COLORS.primaryGold;
      case 'Meeting':
        return COLORS.accentBlue;
      default:
        return COLORS.mediumGray;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Event Calendar</Text>
        <Text style={styles.headerSubtitle}>Stay updated with FBLA events</Text>
      </View>

      <ScrollView style={styles.content}>
        {events.map((event) => (
          <TouchableOpacity key={event.id} style={styles.eventCard}>
            <View
              style={[
                styles.eventIndicator,
                { backgroundColor: getEventColor(event.type) },
              ]}
            />
            <View style={styles.eventContent}>
              <View style={styles.eventHeader}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <View
                  style={[
                    styles.typeBadge,
                    { backgroundColor: getEventColor(event.type) },
                  ]}>
                  <Text style={styles.typeText}>{event.type}</Text>
                </View>
              </View>
              <Text style={styles.eventDate}>📅 {event.date}</Text>
              <Text style={styles.eventTime}>🕐 {event.time}</Text>
              <Text style={styles.eventLocation}>📍 {event.location}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Set Reminder</Text>
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
  eventCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventIndicator: {
    width: 6,
  },
  eventContent: {
    flex: 1,
    padding: SPACING.md,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.sm,
  },
  eventTitle: {
    flex: 1,
    fontSize: FONT_SIZES.subheading,
    fontWeight: '600',
    color: COLORS.primaryDark,
    marginRight: SPACING.sm,
  },
  typeBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.tiny,
    fontWeight: '600',
  },
  eventDate: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.darkGray,
    marginBottom: 4,
  },
  eventTime: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.darkGray,
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.mediumGray,
  },
  addButton: {
    backgroundColor: COLORS.accentBlue,
    padding: SPACING.md,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: SPACING.md,
    marginBottom: SPACING.xl,
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
  },
});

export default CalendarScreen;
