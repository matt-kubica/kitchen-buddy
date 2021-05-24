import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    flex: 1,
    backgroundColor: Colors.lighter,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    padding: 8,
    width: '100%',
  },
  input: {
    height: 32,
    paddingHorizontal: 4,
    borderRadius: 2,
    backgroundColor: 'white',
    marginVertical: 6,
    width: '80%',
  },
  searchBar: {
    height: 36,
    fontSize: 24,
    paddingHorizontal: 4,
    borderRadius: 2,
    backgroundColor: 'white',
    marginVertical: 6,
    width: '100%',
  },
  item: {
    alignSelf: 'center',
    height: 'auto',
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 4,
    borderRadius: 6,
    padding: 12,
  },
  title: {
    color: 'black',
    marginLeft: 0,
    fontSize: 48,
    marginRight: 'auto',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export const pickerStyle = StyleSheet.create({
  inputIOS: {
    marginLeft: 'auto',
    marginRight: 'auto',
    ...styles.input,
  },
});
