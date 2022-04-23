import {  Text , Image ,Button , VStack , Heading ,FlatList,Box } from "native-base";
import {SafeAreaView ,} from 'react-native'
import styles from '../../styleSheet';
import {useEffect, useContext} from 'react'
import { useNavigation } from "@react-navigation/native";
import {PostsContext} from "../../Context/context"
import Post from './PostScreen'
import {getPosts} from  '../Redux/Action/actions'

import HomeScreen from './homeScreen'



const LandingPageScreen=()=>{

    const navigation = useNavigation();
    return(
            <SafeAreaView>
                <Image source={{uri:"https://toppng.com/uploads/preview/jpg-free-library-welcome-businessman-vector-character-cartoon-businessman-115628539293hot6vw0ry.png"}}
                style={styles.welcomedPhoto}
                ></Image>
             
             <Button
                title="lets start"
                onPress={() => navigation.navigate('Home')}
                style={styles.startButton}
              >lets start</Button>
            </SafeAreaView>
        )
}

export default LandingPageScreen