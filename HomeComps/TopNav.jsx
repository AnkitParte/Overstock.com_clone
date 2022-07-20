import { Flex , Text , Image} from "@chakra-ui/react";


export default function TopNav(){

    return(
        <Flex borderBottom="1px solid #EAEAEA" pl="2rem"  align={"center"}>
                
                    <Text as="span" fontSize={"13px"} mr="0.6rem" color="gray">Ship to : </Text>
                    <Image boxSize="25px" src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif"
                    borderLeftRadius="150%"
                    borderRightRadius="150%"/><Text ml="0.5rem" fontSize={"13px"} fontWeight="bold" color="blackAlpha.700">INDIA</Text>
                
        </Flex>
    )
}