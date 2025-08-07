import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Mainpage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event, date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) setSelectedDate(date);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Discover Your Next Adventure</Text>
          <Text style={styles.headerSubtitle}>
            Explore breathtaking destinations and create memories that last a lifetime.
          </Text>
        </View>
      </View>

      {/* Card Section */}
      <View style={styles.card}>
        {/* Location */}
        <View style={styles.cardItem}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>Select Location</Text>
        </View>

        {/* Date Picker */}
        <View style={styles.cardItem}>
          <Text style={styles.label}>Dates</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={styles.value}>{selectedDate.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
        </View>

        {/* Guests */}
        <View style={styles.cardItem}>
          <Text style={styles.label}>Guests & Rooms</Text>
          <Text style={styles.value}>6 Adults • 4 Children • 1 Room</Text>
        </View>

        {/* Search Button */}
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f5f9',
    flex: 1,
  },
  header: {
    backgroundColor: '#1d8cf8',
    paddingTop: 400,
    paddingBottom: 100,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerContent: {
    marginTop: -180,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e0f2fe',
    textAlign: 'center',
    lineHeight: 20,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -150,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardItem: {
    marginBottom: 20,
  },
  label: {
    color: '#6b7280',
    marginBottom: 4,
    fontSize: 14,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#111827',
  },
  searchButton: {
    backgroundColor: '#1d8cf8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Mainpage;
