import { SimpleGrid ,Box,Image,Text, Button, border} from "@chakra-ui/react";
import data from "../home.json"
import home from ".././homeStock.jpg"
import home2 from '.././home2.PNG'
import home1 from '.././home1.PNG'
import home3 from '.././home3.PNG'
import category from ".././category.json"
import Header from './Login/Header'
import feature from '.././featured.json'
import style from '.././style.json'


let searches = ["Outdoor Rugs","Wallpapers","Patio Furniture","Mattress","TV stands","Outdoor Lighting",
"Outdoor Dining Sets","Mirrors","Portable Air conditioners","Bathroom Vanities" ,"computer Desks","Area Rugs"]
let x="https://ak1.ostkcdn.com/img/mxc/07132022-HP-A1-INTL-1400x550.svg"
export default function Home(){

    return (<>
        <Box>
            <Box pos="relative" top="170px">
                <Box color="white" fontSize={80}>summer 
                    <Text as="span" fontWeight="bold"> home savings</Text>
                </Box>
                <Box color="coral" fontSize={32} fontWeight="bold">Fresh ways to save on your summer home refresh.</Box>
            </Box>
            
            <Image _hover={{cursor:"pointer"}} src={home} w="100%" h="530px" alt="image" mt={-12}/>
            <Button pos="relative" top={-20} h="48px" w="150px">Shop Now</Button>
            <Box color="2f3337" fontSize="34px" mt={-10} pb="1rem" fontWeight="bold">Limited-Time Deal</Box>
            <SimpleGrid columns={6} spacing="15px" pl="1.5rem" pr="1.5rem">
                {data && data.map((elem)=>{
                    return(
                        <Box key={elem.id}>
                            <Image _hover={{cursor:"pointer"}} src={elem.img} alt="image" w="100%" h="80%" background={"whitesmoke"}/>
                            <Box fontWeight={700}
                             fontSize="16px" 
                             color="#2f3337"
                             pl="8px" pr="8px" pt="8px"
                             >{elem.head}</Box>
                        </Box>
                    )
                })}
            </SimpleGrid>
            <Box p={6} mt="14px">
                <Image src={home2} w="100%" h="500px" _hover={{cursor:"pointer"}}/>
            </Box>
            <Header head="Fresh Finds In Each Category"/>
            
            <SimpleGrid columns={6} row={2} spacingX="10px" spacingY="40px" pl="1.8rem" pr="1.8rem">
                {category && category.map((elem)=>{
                    return (
                        <Box key={elem.id}>
                            <Image
                            _hover={{cursor:"pointer"}}
                            src={elem.img}
                            alt="image"
                            w="100%"
                            h="85%"

                            />
                            <Box 
                            color="#545658"
                            fontWeight={400}
                            fontSize={18}
                            pt="8px"
                            >{elem.head}</Box>
                        </Box>
                    )
                })}
            </SimpleGrid>
            <Header head="More Ways to seize the Summer"/>
            
            {/* Slider component will be here */}
            <Box p={6} mt="14px">
                <Image src={home1} w="100%" h="500px" _hover={{cursor:"pointer"}}/>
            </Box>
            <Header head="OverStock Featured Brands"/>
            <SimpleGrid columns={4} spacing="10px" pl={"1.8rem"} pr="1.8rem">
                {feature && feature.map((elem)=>{
                    return (
                        <Box key={elem.id}>
                            <Image 
                            _hover={{cursor:"pointer"}}
                            w="100%"
                            h="85%"
                            alt="img"
                            src={elem.img}/>
                            <Box background={"whitesmoke"} pt="3px" pb="3px">
                                <Text fontWeight={700} fontSize={15}>{elem.off}</Text>
                                <Text fontSize={15} fontWeight={500}>{elem.head}</Text>
                                <Text fontSize={15} fontWeight={500}>{elem.para}</Text>
                            </Box>
                        </Box>
                    )
                })}
            </SimpleGrid>
            <Box p={6} mt="14px">
                <Image src={home3} w="100%" h="330px" _hover={{cursor:"pointer"}}/>
            </Box>
            <Header head="We've got your style"/>
            <SimpleGrid columns={3} spacing="10px" pl={"1.8rem"} pr="1.8rem">
                {style && style.map((elem)=>{
                    return (
                        <Box key={elem.id}>
                            <Image
                            src={elem.img}
                            w="100%"
                            h="450px"
                            _hover={{cursor:"pointer"}}
                            />
                            <Box p={6} textAlign="left" background="whitesmoke">
                                <Text fontSize={22} fontWeight={700}>{elem.head}</Text>
                                <Text fontSize={16}>{elem.para}</Text>
                            </Box>
                        </Box>
                    )
                })}
            </SimpleGrid>
            
            <button  style={{background:"#2F3337",color:"white",
            border:"1px solid black",borderRadius:"5px",paddingBottom:"5px",
            paddingTop:"5px",paddingLeft:"20px",paddingRight:"20px",
            marginTop:"30px",marginBottom:"30px",fontSize:"20px"
            }} _hover={{cursor:"pointer"}}>See All Styles</button>

            <Header head="Trending Searches"/>

            <SimpleGrid columns={3} row={4} spacingX="15px" spacingY="15px" pl="1.8rem" pr="1.8rem" pt="1rem">
                {searches && searches.map((item)=>{
                    return (
                        <Box background={"whitesmoke"}
                        pt="1rem" pb="1rem"
                        alignItems={"center"}
                        fontWeight={700}
                        justifyContent="center"
                        >{item}</Box>
                    )
                })}
            </SimpleGrid>
            <br/>
            <hr border="1px solid #EAEAEA"/>
        </Box>
    </>)
}