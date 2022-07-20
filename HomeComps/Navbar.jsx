import { Box , Flex , IconButton , Image , Input , Text ,HStack, Spacer} from "@chakra-ui/react";
//import { FaSearch } from "react-icons/fa"; 
import { FiShoppingCart } from "react-icons/fi"
import { BsPerson } from "react-icons/bs"
import { IoIosSearch , IoIosHeartEmpty} from "react-icons/io"
import mainlogo from ".././overstockProject.jpg"

let arr=["Furniture","Rugs","Decor","Bedding","Home Improvement","Kitchen","Outdoor","Lighting",
"Kids & Baby","More","|","Ideas","Sales & Deals"]


export default function Navbar(){

    return(<>
        <Box>
            <HStack gap="20px" pt={"1rem"} pl="1rem" pr="1rem" pb="0.8rem" borderBottom="1px solid #EAEAEA">
                <Image
                src={mainlogo}
                alt="overstockImage"
                w="180px"
                h="55px"
                />
                <Flex>
                    <Input placeholder="Search" 
                    w={"900px"} 
                    h="30px" 
                    p="18px"
                    borderBottomRightRadius="0px"
                    borderTopRightRadius="0px"
                    />
                    <Text bg="red" color="white" pt="0.4rem" pr="0.4em" pl="0.4rem"
                    h="38px"
                    borderBottomRightRadius="5px"
                    borderTopRightRadius="5px"
                    >{<IoIosSearch style={{fontSize:"27px",fontWeight:"bold"}} />}</Text>
                </Flex>
                <Box>
                    {/* <IconButton icon={<BsPerson/>}/> */}
                    <Text ml="10px">{<BsPerson style={{fontSize:"23px"}}/>}</Text>
                    <Text fontSize={"13px"}>Account</Text>
                </Box>
                <Box>
                    {/* <IconButton icon={}/> */}
                    <Text>{<IoIosHeartEmpty style={{fontSize:"23px"}}/>}</Text>
                    <Text fontSize={"13px"}>Lists</Text>
                </Box>
                <Box>
                    {/* <IconButton icon={<FiShoppingCart/>}/> */}
                    <Text>{<FiShoppingCart style={{fontSize:"23px"}}><Text color={"red"}>0</Text></FiShoppingCart>}</Text>
                    <Text fontSize={"13px"}>Cart</Text>
                </Box>
            </HStack>
            <HStack gap="10px" pl="1rem" pr="1rem" pt="0.5rem" pb="0.5rem" justify={"space-between"} borderBottom="1px solid #EAEAEA">
                {arr && arr.map((elem,i)=>{
                    let col = "black"

                    if(i===arr.length-1){
                        col = "red"
                    }
                    if(elem==="|"){
                        col = "#EAEAEA"
                    }
                    return <Box color={col} 
                    fontSize="14px" 
                    fontWeight={"normal"}
                    _hover={{textDecoration:`underline 2px solid ${col}`,textUnderlineOffset:"0.7rem"}}>{elem}</Box>
                })}
            </HStack>
        </Box>
    </>)
}