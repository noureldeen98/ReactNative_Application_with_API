
import { SafeAreaView , Text , Image ,Button , VStack , Heading ,FlatList,Box, HStack } from "native-base";
import { useContext, useEffect } from 'react';
import { getPostsDetails,clearDetails } from '../Redux/Action/actions';
import { PostsContext } from '../../Context/context';
import styles from './../../styleSheet';
const Details=(props)=>{
    console.log(props.route.params.id);
    const {state,dispatch} = useContext(PostsContext)
    console.log(state)
    useEffect(()=>{
        const resolveAction = async () => {
            dispatch(await getPostsDetails(props.route.params.id));
          };
          resolveAction();
        return ()=>{
            dispatch(clearDetails())
        }
    },[])

    // console.log(state.list)
    {if (props.route.params.id) {
    
 
         return(
            <VStack style={{margin:10}}>
            <HStack style={styles.divider}>
                <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                    Name:
                </Text>
                <Text>
                  { state.details.name }
                </Text>
            </HStack>
            <HStack style={styles.divider}>
                <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                    Email:
                </Text>
                <Text>
                  { state.details.email }
                </Text>
            </HStack>
            <HStack style={styles.divider}>
                <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                    Phone:
                </Text>
                <Text>
                  { state.details.phone }
                </Text>
            </HStack>
            <HStack style={styles.divider}>
                <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                    Website:
                </Text>
                <Text>
                  { state.details.website }
                </Text>
            </HStack>
            <HStack 
            style={{
                margin:5
            }}>
                <Text style={{fontWeight:'bold',fontSize:18,marginRight:2}}>
                    Bio:
                </Text>
                <Text style={{marginRight:10}}>
                 Consetetur sed no no clita gubergren kasd diam takimata sadipscing, dolores sadipscing dolor lorem amet lorem tempor ea. Ut justo ea ipsum sanctus ipsum labore sed dolores. Nonumy amet amet eos justo, amet kasd aliquyam nonumy lorem. Et voluptua clita no elitr ea diam, sea invidunt lorem stet duo. Kasd.
                 Consetetur sed no no clita gubergren kasd diam takimata sadipscing, dolores sadipscing dolor lorem amet lorem tempor ea. Ut justo ea ipsum sanctus ipsum labore sed dolores. Nonumy amet amet eos justo, amet kasd aliquyam nonumy lorem. Et voluptua clita no elitr ea diam, sea invidunt lorem stet duo. Kasd.
                </Text>
            </HStack>
        </VStack>
         )   
    }}

}

export default Details