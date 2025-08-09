import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TabButton from "./MainPageComponents/TabButton"
import { Menu } from 'react-native-paper';

const { height } = Dimensions.get('window');



const Mainpage = () => {
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('2 Adults • 1 Room');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [activeTab, setActiveTab] = useState('hotels');
  const [showPicker, setShowPicker] = useState(false);
  const [currentStep, setCurrentStep] = useState('checkIn');
  const [packageType, setPackageType] = useState('');
  const [carDate, setCarDate] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const locations = ['Kolkata', 'Mumbai', 'Delhi', 'Bangalore'];
  const [inputWidth, setInputWidth] = useState(0);

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      if (activeTab === 'hotels') {
        if (currentStep === 'checkIn') {
          setCheckIn(selectedDate);
          setCurrentStep('checkOut');
        } else {
          setCheckOut(selectedDate);
          setShowPicker(false);
          setCurrentStep('checkIn');
        }
      } else if (activeTab === 'cars') {
        setCarDate(selectedDate);
        setShowPicker(false);
      }
    } else {
      setShowPicker(false);
      setCurrentStep('checkIn');
    }
  };

  const renderSearchBox = () => {
    if (activeTab === 'hotels') {
      return (
        <View style={styles.searchBox}>
          <Text style={styles.title}>Find Your Perfect Stay</Text>
          <Text style={styles.label}>Location</Text>
          {/* <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
              <TouchableOpacity
                style={styles2.input}
                onPress={() => setVisible(true)}
              // ref={inputRef} // Optional for more control
              >
                <Text style={selected ? styles2.inputText : styles2.placeholderText}>
                  {selected || 'Select location'}
                </Text>
              </TouchableOpacity>
            }
            anchorPosition="bottom" // 👈 ensures it appears below
            contentStyle={styles2.menuContent} // 👈 style to match input
          >
            {locations.map((location, index) => (
              <Menu.Item
                key={index}
                onPress={() => {
                  setSelected(location);
                  setVisible(false);
                }}
                title={location}
                titleStyle={{ color: 'black' }}
              />
            ))}
          </Menu> */}
          <Menu
  visible={visible}
  onDismiss={() => setVisible(false)}
  anchor={
    <TouchableOpacity
      style={styles2.input}
      onPress={() => setVisible(true)}
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setInputWidth(width); // store button width
      }}
    >
      <Text style={selected ? styles2.inputText : styles2.placeholderText}>
        {selected || 'Select location'}
      </Text>
    </TouchableOpacity>
  }
  anchorPosition="bottom"
  contentStyle={[
    styles2.menuContent,
    { width: inputWidth } // dynamically set width
  ]}
>
  {locations.map((location, index) => (
    <Menu.Item
      key={index}
      onPress={() => {
        setSelected(location);
        setVisible(false);
      }}
      title={location}
      titleStyle={{ color: 'black' }}
    />
  ))}
</Menu>



          <Text style={styles.label}>Dates</Text>
          <TouchableOpacity style={styles.input} onPress={() => setShowPicker(true)}>
            <Text style={{ color: checkIn && checkOut ? '#000' : '#666' }}>
              {checkIn && checkOut
                ? `${checkIn.toDateString()} - ${checkOut.toDateString()}`
                : 'Select check-in and check-out'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.label}>Guests</Text>
          <TextInput
            style={styles.input}
            placeholder="2 Adults • 1 Room"
            placeholderTextColor="#666"
            value={guests}
            onChangeText={setGuests}
          />

          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (activeTab === 'packages') {
      return (
        <View style={styles.searchBox}>
          <Text style={styles.title}>Explore Packages</Text>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Select location"
            placeholderTextColor="#666"
            value={location}
            onChangeText={setLocation}
          />
          <Text style={styles.label}>Package</Text>
          <TextInput
            style={styles.input}
            placeholder="Select package"
            placeholderTextColor="#666"
            value={packageType}
            onChangeText={setPackageType}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (activeTab === 'cars') {
      return (
        <View style={styles.searchBox}>
          <Text style={styles.title}>Rent a Car</Text>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Select location"
            placeholderTextColor="#666"
            value={location}
            onChangeText={setLocation}
          />
          <Text style={styles.label}>Date</Text>
          <TouchableOpacity style={styles.input} onPress={() => setShowPicker(true)}>
            <Text style={{ color: carDate ? '#000' : '#666' }}>
              {carDate ? carDate.toDateString() : 'Select date'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.innerContainer}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Ino Travels</Text>
        <View style={styles.tabRow}>

          <TabButton icon="box-open" label="Package" onPress={() => setActiveTab('packages')} isActive={activeTab === 'packages'} />
          <TabButton icon="hotel" label="Hotels" onPress={() => setActiveTab('hotels')} isActive={activeTab === 'hotels'} />
          <TabButton icon="car" label="Cars" onPress={() => setActiveTab('cars')} isActive={activeTab === 'cars'} />

        </View>
      </View>

      {renderSearchBox()}

      {showPicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </ScrollView>
  );
};

const styles2 = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 12,
    marginTop: 5,
  },
  placeholderText: {
    color: '#000',
  },
  inputText: {
    color: '#000',
  },
  // menuContent: {
  //   width: '145%', // 👈 Optional: match input width
  //   alignSelf: 'center',
  //   backgroundColor: '#fff',
  //   borderRadius: 12,
  //   elevation: 2,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 4,
  //   marginTop: 0, // Tweak as needed
  //   marginLeft: 110
  // },
  menuContent: {
  alignSelf: 'center',
  backgroundColor: '#fff',
  borderRadius: 12,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  marginTop: 0,
  marginLeft: 110
}

});


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  banner: {
    height: height * 0.14,
    width: '100%',
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center'
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: '#fff',
  },
  tabText: {
    color: '#fff',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#555',
  },
  searchBox: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginTop: 5,
    fontSize: 16,
    color: '#000',
  },
  searchButton: {
    marginTop: 20,
    backgroundColor: '#1976D2',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  placeholderText: {
    color: '#888',
  },
  inputText: {
    color: '#000',
  },
  input2: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  menuContent: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingVertical: 4,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Mainpage;
