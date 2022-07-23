import { SimpleGrid ,Box,Text,Image, HStack} from '@chakra-ui/react'
import products from '../../product.json'
import { StarIcon } from "@chakra-ui/icons"
import { Link, useNavigate } from 'react-router-dom'
import SubCard from './SubCard'

export default function Cards(){
    const navMe = useNavigate();
    return(<>
        <SimpleGrid spacingX={5} columns={3} spacingY={5} pr="0.5rem" overflow="scroll" h="500px">
            {products && products.map((item,i)=>{
                
                let arr = (i%2 == 0)? new Array(3).fill(0) : new Array(4).fill(0) 

                return(
                    <Link to={`/products/${item.id}`} element={<SubCard/>}>
                    <Box border={"1px solid #EAEAEA"} _hover={{cursor:"pointer"}}>
                        <Box>
                            <Image src={item.img} w="100%" h="320px"/>
                        </Box>
                        <Box p="0.8rem">
                            <Text fontSize={16} fontWeight="bold" color={"#c7202c"} textAlign="left">Sale starts at INR {item.price}</Text>
                            <HStack mt={2}>
                                {arr && arr.map((star)=>{
                                    return <StarIcon boxSize={3} color="orange"/>
                                })}
                            </HStack>
                            <Text textAlign={"left"} fontSize={13} mt={2}>{item.details}</Text>
                        </Box>
                    </Box>
                    </Link>
                )
            })}

        </SimpleGrid>
        
    </>)

}