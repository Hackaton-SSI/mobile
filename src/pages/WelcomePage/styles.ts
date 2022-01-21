import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 70,
    backgroundColor: '#8965D6',
  },
  
  headerBox: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: 'black'
  },

  welcomeBox: {
    marginLeft:20
  },

  welcomeText: {
    color: '#FFFFFF',
    fontFamily: 'Ubuntu',
    fontSize: 24
  },

  welcomeName: {
    color: '#FFFFFF',
    fontFamily: 'Ubuntu',
    fontSize: 64
  },

  userIcon: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  }
})

export default styles