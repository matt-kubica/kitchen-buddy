import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    color: 'black',
    padding: 12,
    width: '100%',
  },
  input: {
    height: 42,
    fontSize: 20,
    paddingHorizontal: 4,
    borderRadius: 6,
    backgroundColor: 'white',
    marginVertical: 4,
    width: '100%',
  },
  searchBar: {
    height: 42,
    fontSize: 20,
    paddingHorizontal: 4,
    borderRadius: 6,
    backgroundColor: 'white',
    width: '100%',
  },
  item: {
    alignSelf: 'center',
    height: 'auto',
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 8,
    borderRadius: 10,
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
  submitButton: {
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    elevation: 3,
    backgroundColor: '#d9d9db',
    width: '80%',
  },
  submitButtonText: { color: '#007aff', fontWeight: 'bold', fontSize: 20 },
  deleteButton: {
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    elevation: 3,
    backgroundColor: '#d9d9db',
    width: '80%',
  },
  deleteButtonText: { color: '#ff453a', fontWeight: 'bold', fontSize: 20 },
});

export const pickerStyle = StyleSheet.create({
  inputIOS: {
    marginLeft: 'auto',
    marginRight: 'auto',
    ...styles.input,
  },
});
