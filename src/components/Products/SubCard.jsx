import {Box,Image} from "@chakra-ui/react"
import Detail from "./Detail";
import { useParams } from "react-router-dom";
import products from '../../product.json'
import { useState } from "react";
import { useEffect } from "react";

export default function SubCard(){
    let params = useParams();
    const [card,setCard] = useState({});
    
    
    useEffect(()=>{
        products.forEach((el)=>{
            if(el.id === Number(params.id)){
                setCard({...el})
            }
        })
        
    },[params.id])
    return(
        <Box pl={"4rem"} mb="1rem" pt={"8rem"}>
            <Box fontSize={18} textAlign="left" pt={6} pb={6} >Sofas</Box>
            <Box display={"flex"} >
                <Box w={"40%"}>
                    <Image
                        src={card.img}
                        w={"100%"}
                        h="440px"
                    />
                </Box>
                <Box w={"50%"} pl="2rem">
                    <Detail card={card}/>
                </Box>
            </Box>
        </Box>
    )
}