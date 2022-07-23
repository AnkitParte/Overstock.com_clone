import { Box , Text , Flex ,HStack} from "@chakra-ui/react";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import Sorting from "./Sorting";


export default function Products(){
    return (
        <Box pt={"8rem"}>
            <Text fontSize="32px" textAlign={"left"} pl="1rem">Furniture</Text>
            <Flex gap="10px" p="10px" ml="68rem" alignItems={"center"}>
                <Text fontSize={16}>Sort by : </Text> 
                <Sorting/> 
            </Flex>
            <Box display={"flex"} pt="10px" pl="10px" pr="10px" justifyContent={"space-between"}>
                <Box w='25%'>
                    <Sidebar/>
                </Box>
                <Box w="72%">
                    <Cards/>
                </Box>
            </Box>
            <br/>
            <br/>
            <hr border="1px solid #EAEAEA"/>
            <br/>
            <br/>
        </Box>
    )
}