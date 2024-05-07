import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row', // Arrange elements horizontally
    justifyContent: 'flex-end', // Align items to the right
    alignItems: 'center', // Vertically center items
    backgroundColor: '#131928',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginBottom: 15,
    marginRight: 55,
    backgroundColor: '#131928',
  },
  closebutton: {
    width: 30,
    height: 30,
    marginBottom: 15,
  },
  container: {
    backgroundColor: '#131928',
    padding: 20,
    margin: 20,
    borderRadius: 5,
    maxHeight: 500, // Reduce height to allow for scrolling
  },
  table: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#101523',
    padding: 12,
    marginLeft: 10,
  },
  tableRow: {
    flexDirection: 'row', // Enable flexbox
    alignItems: 'center', // Align items vertically within the row
    justifyContent: 'space-between', // Distribute remaining space
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableDataBlinds: {
    width: 100, // Set a fixed width for blinds text
    textAlign: 'right',
    marginRight: 30,
  },
  tableDataTime: {
    flex: 0.7,
    textAlign: 'right',
  },
  tableDataLevel: {
    flex: 0.15,
    textAlign: 'right',
  },
  tableData: {
    color: '#898EA4',
    marginLeft: 10, // Added margin for level and time text
  },
  evenRow: {
    backgroundColor: '#282D40',
  },
  oddRow: {
    backgroundColor: '#2E344A',
  },
});

export default styles;
