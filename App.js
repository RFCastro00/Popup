import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import BlindsData from './Data/BlindsData';
import styles from './Styles/AppStyles'; // Assuming your stylesheet path

const BlindsPopup = ({isVisible, onClose}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Blinds Structure</Text>
          <TouchableHighlight onPress={onClose}>
            <Image
              source={require('./Images/cross.png')}
              style={styles.closebutton}
            />
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.tableContainer}>
          <View style={styles.table}>
            <TableHeader />
            {BlindsData.map((level, index) => (
              <TableRow
                key={index}
                level={level}
                isEvenLevel={index % 2 === 0}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const TableHeader = () => (
  <View style={styles.tableHeader}>
    <Text>Level</Text>
    <Text>Time</Text>
    <Text>Blinds</Text>
  </View>
);

const TableRow = ({level, isEvenLevel}) => {
  const backgroundColor = isEvenLevel ? styles.evenRow : styles.oddRow;

  return (
    <View style={[styles.tableRow, backgroundColor]}>
      <Text style={styles.tableDataLevel}>{level.ante}</Text>
      <Text style={styles.tableDataTime}>
        {Math.floor(level.after_seconds / 60)}:00
      </Text>
      <Text style={styles.tableDataBlinds}>
        {level.small_blind}/{level.big_blind}
      </Text>
    </View>
  );
};

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);

  return (
    <View style={styles.appContainer}>
      <Button title="Show Blinds Structure" onPress={showPopup} />
      <BlindsPopup isVisible={isPopupVisible} onClose={closePopup} />
    </View>
  );
};

export default App;
