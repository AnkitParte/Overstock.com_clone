import {Box, Button, Text,SimpleGrid} from "@chakra-ui/react";
//import { BsChevronRight } from "react-icons/bs";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
  } from '@chakra-ui/react'
import { BsPerson } from "react-icons/bs"
import { useState } from "react";

let arr =["My Account","My Orders","My Reviews","Help"]

export default function LoginCard(){

    const [state,setState] = useState(true);
    const mouseIn = ()=>{};
    const mouseOut = ()=>{};
    return(<>
    <Menu>
        
        <MenuButton id="add" onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
            <SimpleGrid>
                <Box ml="10px" justify="space-around">{<BsPerson style={{fontSize:"23px"}}/>} </Box>
                <Box fontSize={"13px"}>Account</Box>
            </SimpleGrid>  
        </MenuButton>
        <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
    </Menu>
    </>
    )
}

{/* <Box w="50px" h="90px" p="10px" color="black" bg="white" position={"relative"}>
<SimpleGrid spacing={10} borderBottom="1px solid #EAEAEA">
    <Flex justify={"space-between"}><Text as="span">Sign In</Text> <BsChevronRight/></Flex>
    <Text flexWrap={"wrap"}>View Your account and Check your order Status</Text>
</SimpleGrid>
<SimpleGrid spacing={10} borderBottom="1px solid #EAEAEA">
    <Flex justify={"space-between"}><Text as="span">CREATE AN ACCOUNT</Text><BsChevronRight/></Flex>
    <Text flexWrap={"wrap"}>Track order, Save items to lists and more!</Text>
</SimpleGrid>
<SimpleGrid spacing={10} borderBottom="1px solid #EAEAEA">
    {arr && arr.map((elem)=>{
        return (
            <Box textStyle={"h2"}>{elem}</Box>
        )
    })}
</SimpleGrid>

</Box> */}


{/* <Modal isOpen={isOpen}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Sign In</ModalHeader>
                <ModalBody>View Your account and Check your order Status</ModalBody>
            </ModalContent>

        </Modal> */}



