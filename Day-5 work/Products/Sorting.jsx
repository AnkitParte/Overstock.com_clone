import { Select ,Box} from "@chakra-ui/react";

export default function Sorting(){

    return(
        <Box>
            <Select placeholder="Best Selling">
                <option value={""}>Best Selling</option>
                <option value={"LTH"}>Price Low - High</option>
                <option value={"HTL"}>Price High - Low</option>
            </Select>
        </Box>
    )
}