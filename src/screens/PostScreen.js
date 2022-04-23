import { Text,Box, HStack, VStack, ArrowForwardIcon } from"native-base"
import Details from './DetailsScreen'
const Post = ({item,navigation})=>{
    if(item.id){
        return (<Box>
            <HStack style={{justifyContent:'space-between',margin:5}}>
                <VStack>
                    <Text>
                    <Text style={{fontWeight:'bold'}}>
                            
                            Name:
                            </Text>
                        {item.name}
                    </Text>
                    <Text>
                        <Text style={{fontWeight:'bold'}}>
                            
                            Email:
                            </Text>
                        {item.email}
                    </Text>
                </VStack>
                <ArrowForwardIcon onPress={()=>{
                    navigation.navigate({name:'details',params:{
                        id:item.id
                    }})
                }}/>
            </HStack>
        </Box>)
    }
    return <Text>No user</Text>
}

export default Post