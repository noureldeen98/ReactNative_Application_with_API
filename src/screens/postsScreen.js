import { SafeAreaView , Text , Image ,Button , VStack , Heading ,FlatList,Box } from "native-base";


import {useState , useEffect} from 'react'
import {PostsContext} from "../../Context/context"
import Post from './PostScreen'
import {getPosts} from  '../Redux/Action/actions'
import styles from './../../styleSheet';

const PostsScreen=()=>{

    const [posts , setPost]=useState(null)

    const [isLoading , setIsLoading]=useState(false)


    // useEffect(() => {
    //     setIsLoading(true)
    //     fetch(" https://jsonplaceholder.typicode.com/posts")
    //     .then((response) => response.json())
    //     .then((data) =>{setPost(data)
    //         setIsLoading(false)
    //     console.log(data);
    //     });
             
    //     }, []);

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

export default PostsScreen