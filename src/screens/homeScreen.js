import { SafeAreaView , Text , Image ,Button , VStack , Heading ,FlatList,Box } from "native-base";
import styles from '../../styleSheet';
import {useEffect, useContext} from 'react'
import { useNavigation } from "@react-navigation/native";
import {PostsContext} from "../../Context/context"
import Post from './PostScreen'
import {getPosts} from  '../Redux/Action/actions'


const HomeScreen=(props)=>{

    const navigation = useNavigation()

    const { state, dispatch } = useContext(PostsContext);

    useEffect(() => {
        const resolveAction = async () => {
          dispatch(await getPosts());
        };
        resolveAction();
      }, []);

return   <VStack>
    <Heading fontSize="xl" p="4" pb="3">
      Posts List
    </Heading>
    <FlatList data={state.list} renderItem={
        ({item})=><Post item={item} {...props}/>
    } 
    ItemSeparatorComponent={()=><Box style={styles.boxItem}></Box> }/>
  </VStack>
}

export default HomeScreen;