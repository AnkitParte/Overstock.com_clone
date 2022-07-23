import { Box, Button, HStack, Select } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons"
import { useDispatch } from "react-redux/es/exports";


export default function Detail({card}){
    const dispatch = useDispatch();

    const addMe = (item)=>{
        dispatch({type:"ADD",payload:item})
    }
    
    let arr = ((card.id)%2 === 0)? new Array(3).fill(0) : new Array(4).fill(0) 
    return(
        <>
            <Box textAlign={"left"}>{card.details}</Box>
            <HStack gap="2px" mt={4} fontSize="12px">
                <Box>by :</Box>
                <Box mt={"10px"} textDecoration="underline 1px solid #0272a2" color="#0272a2" fontWeight={400}>{card.author}</Box>
            </HStack >
            <HStack mt={4}>
                {arr && arr.map((star)=>{
                    return <StarIcon boxSize={5} color="orange"/>
                })}
            </HStack>
            <Box fontSize={18} textAlign={"left"} fontWeight="bold" mt="14px">Starting At {card.price}</Box>
            <Box textAlign={"left"} pt={4} pb={4} fontSize={12}>Choose color :</Box>
            <HStack gap={6}>
                <Box boxSize={12} background="gray"></Box>
                <Box boxSize={12} background="black"></Box>
                <Box boxSize={12} background="green.300"></Box>
            </HStack>
            <HStack mt={4}>
                <Select placeholder="Quantity" w="180px">
                    <option value="">1</option>
                    <option>2</option>
                    <option>3</option>
                </Select>
                <Button colorScheme={"green"} w="180px" onClick={()=>addMe(card)}>Add to Cart</Button>
            </HStack>

        </>
    )
}