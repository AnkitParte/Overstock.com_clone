

import {Box, Button, Checkbox, FormControl, FormLabel, HStack, Input,Text} from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { create} from "../AuthCon/AuthRed";
import { AuthContext } from "../AuthCon/AuthContext";

export default function SignUp(){

    const [state,setState] = useState({email:"",password:"",confirm:""})
    const {Authdispatch} = useContext(AuthContext);
    
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setState({...state,[name]:value});
    }
    const handleSubmit = ()=>{
        console.log(state)
        Authdispatch({...create,payload:state})
        Array.from(document.querySelectorAll("input")).forEach((input)=>input.value="")
        alert("signup successfull")
    }
    const nav = useNavigate();

    return (<>
        <Box pl={10} pr={10} pb={10} borderRight="1px solid #EAEAEA">
            
            <FormControl>
                <FormLabel fontSize={14} color="#626669" fontWeight={400} >Email Address*</FormLabel>
                <Input type="email" placeholder="Email" fontSize={12}
                name="email"
                onChange={handleChange}/>
            </FormControl>
            <HStack spacing={5} mt="10px">
                <FormControl>
                    <FormLabel fontSize={14} color="#626669" fontWeight={400}>Create password*</FormLabel>
                    <Input type="password" placeholder="Password" fontSize={12}
                    name="password"
                    onChange={handleChange}/>
                </FormControl>
                <FormControl >
                    <FormLabel fontSize={14} color="#626669" as={"span"} fontWeight={400}>Confirm password*</FormLabel>
                    <Input type="password" placeholder="Password" fontSize={12}
                    name="confirm"
                    onChange={handleChange}/>
                </FormControl>

            </HStack>
            <Box border={"1px solid #EAEAEA"} p={2} borderRadius="5px" fontSize={12} color="#626669" mt="20px">
                <Checkbox mr="4px"/><Text as={"span"}>Sign up today for exclusive offers from Overstock.com delivered right to your inbox**</Text>
            </Box>
            <Button colorScheme={"blue"} mt="20px" mb="20px" width={"326px"} height="46px" fontWeight={"bold"}
            onClick={handleSubmit}>Create Account</Button>
            <br />
            <hr color="#EAEAEA"/>
            
            <Button mt="20px" width={"326px"} height="46px" fontWeight={"bold"} color="#444444"
            onClick={()=>nav("/")}
            >Continue as Guest</Button>
            <Box mt="20px">
                <Text as="span"> By creating an account or continuing as a Guest, you agree to our </Text>
                 
                <Text as="span" fontWeight={700} textDecoration="underline 1px solid black">Terms & Conditions</Text>
                   <Text as="span"> and </Text>
                <Text as="span" fontWeight={700} textDecoration="underline 1px solid black">Privacy Policy.</Text> 
            </Box>
            <br />
            <Box> <Text as="span" fontWeight={700} textDecoration="underline 1px solid black">Terms & Conditions</Text> 
              <Text as="span"> | </Text> 
            <Text as="span" fontWeight={700} textDecoration="underline 1px solid black">Privacy Policy</Text></Box>
            <Box>**You can unsubsribe at any time</Box>
        </Box>
    </>)
}