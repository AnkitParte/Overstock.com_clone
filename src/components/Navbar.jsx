import { Box , Flex , Image , Input , Text ,HStack} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi"
import { BsPerson } from "react-icons/bs"
import { IoIosSearch , IoIosHeartEmpty} from "react-icons/io"
import mainlogo from ".././overstockProject.jpg"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


let arr=["Furniture","Rugs","Decor","Bedding","Home Improvement","Kitchen","Outdoor","Lighting",
"Kids & Baby","More","|","Ideas","Sales & Deals"]


export default function Navbar(){
    const state = useSelector((state)=>state);
    const x = state.length || 0
    console.log(state)    

    return(<>
        <Box pos={"fixed"} zIndex={2} background="white" width={'100%'}>
            <HStack gap="19px" pt="1rem" pl="2.5rem" pr="2rem" pb="0.8rem" borderBottom="1px solid #EAEAEA">
                <NavLink to="/">
                <Image
                src={mainlogo}
                alt="overstockImage"
                w="180px"
                h="55px"
                />
                </NavLink>
                <Flex>
                    <Input placeholder="Search" 
                    w={"850px"} 
                    h="30px" 
                    p="18px"
                    borderBottomRightRadius="0px"
                    borderTopRightRadius="0px"
                    />
                    <NavLink to="/products"><Text bg="#ff1f2c" color="white" pt="0.4rem" pr="0.4em" pl="0.4rem"
                    h="38px"
                    borderBottomRightRadius="5px"
                    borderTopRightRadius="5px"
                    >{<IoIosSearch style={{fontSize:"27px",fontWeight:"bold"}} />}</Text></NavLink>
                </Flex>
                <Flex justifyContent={'end'} gap={5} width={'20%'}>
                <Box>
                    <NavLink to="/accounts">
                        <Text ml="10px">{<BsPerson style={{fontSize:"23px"}}/>}</Text>
                        <Text fontSize={"13px"}>Account</Text>
                    </NavLink>
                </Box>
                <Box>
                    
                    <Text>{<IoIosHeartEmpty style={{fontSize:"23px"}}/>}</Text>
                    <Text fontSize={"13px"}>Lists</Text>
                </Box>
                <NavLink to={"/cart"}><Box>
                    <Text mt="6px">
                        {<FiShoppingCart style={{fontSize:"21px"}}></FiShoppingCart>}
                        
                        
                    </Text>
                    <Text 
                        color="white" 
                        background="#ff1f2c"
                        pl="1px" pr="1px"
                        fontWeight={"bold"}
                        marginTop={"-1.5rem"}
                        fontSize={12}
                        borderRadius={20}
                        >{x}</Text>
                    <Text fontSize={"13px"} mt="3px" mb="1px">Cart</Text>
                </Box></NavLink>
                </Flex>
            </HStack>
            
            <HStack gap="10px" pl="1rem" pr="1rem" pt="0.5rem" pb="0.5rem" justify={"space-between"} borderBottom="1px solid #EAEAEA">
                {arr && arr.map((elem,i)=>{
                    let col = "black"

                    if(i===arr.length-1){
                        col = "#c7202c"
                    }
                    if(elem==="|"){
                        col = "#EAEAEA"
                    }
                    return <Link to="/products"><Box color={col} 
                    fontSize="14px" 
                    fontWeight={"normal"}
                    _hover={{textDecoration:`underline 2px solid ${col}`,textUnderlineOffset:"0.7rem"}}>{elem}</Box></Link>
                })}
            </HStack>
        </Box>
    </>)
}