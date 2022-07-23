import { Select } from "@chakra-ui/react"
export default function SelectMe({child}){

    return(<>
        <Select placeholder={child} border={0} variant="flushed" fontWeight={"bold"}>
            <option>one</option>
            <option>two</option>
            <option>three</option>
        </Select>
    </>)
}