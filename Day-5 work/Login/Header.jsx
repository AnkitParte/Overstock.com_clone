import {Box} from '@chakra-ui/react'
export default function Header({head}){

    return(<>
        <Box color="2f3337" fontSize="32px" mt={8} pb="1rem" fontWeight="bold">{head}</Box>
    </>)
}