import { Center } from 'native-base';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcomedPhoto:{
      height:500,
      width:400,
    },
    startButton:{
      width:300,
      height:50,
      borderRadius:15,
      marginLeft:40 
    },
    boxItem:{
      margin:5,
      borderBottomWidth:2,
      borderBottomColor:'grey'
    },
    divider:{
      borderBottomWidth:2,
      borderBottomColor:'black',
      margin:5
    }

  });

  export default styles