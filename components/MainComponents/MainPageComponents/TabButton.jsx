import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TabButton = ({ icon, label, onPress, isActive }) => (
  <TouchableOpacity onPress={onPress} style={[styles.tab, isActive && styles.activeTab]}>
    <Icon name={icon} size={16} color={isActive ? '#555' : '#fff'} style={{ marginRight: 6 }} />
    <Text style={[styles.tabText, isActive && styles.activeText]}>{label}</Text>
  </TouchableOpacity>
);
export default TabButton;

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    color: '#fff',
    fontWeight: '600',
  },
  activeText: {
    color: '#555',
  },
});
