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
    height: 40,
    paddingHorizontal: 4,
    borderRadius: 2,
    backgroundColor: 'white',
    marginVertical: 6,
    width: '80%',
  },
  item: {
    alignSelf: 'center',
    height: 'auto',
    backgroundColor: 'white',
    width: '80%',
    marginVertical: 4,
    borderRadius: 6,
    padding: 12,
  },
});

export const pickerStyle = StyleSheet.create({
  inputIOS: {
    marginLeft: 'auto',
    marginRight: 'auto',
    ...styles.input,
  },
});
