import { Box, StackDivider, VStack,Select } from "@chakra-ui/react";
import SelectMe from "./Select";


export default function Sidebar(){

    return(<>
        <Box textAlign={"left"} fontWeight="bold" fontSize={14}>Filtered by :</Box>
        <VStack gap={0} divider={<StackDivider borderColor={"gray.200"}/>} overflow="scroll" h="420px">
            <Select placeholder="Type 1" border={0} variant="flushed" fontWeight={"bold"}>
                <option>Sofa</option>
                <option>SleeperSofa</option>
                <option>Recliner</option>
            </Select>
            <Select placeholder="Price" border={0} variant="flushed" fontWeight={"bold"}>
                <option>40,000</option>
                <option>50,000</option>
                <option>60,000</option>
            </Select>
            <Select placeholder="Upholstery material" border={0} variant="flushed" fontWeight={"bold"}>
                <option>Leather</option>
                <option>MicroFiber</option>
                <option>Velvet</option>
            </Select>
            <Select placeholder="Styles" border={0} variant="flushed" fontWeight={"bold"}>
                <option>Mid-Century</option>
                <option>Modern</option>
                <option>Traditional</option>
            </Select>
            <SelectMe child={"Color"}/>
            <SelectMe child={"Ratings"}/>
            <SelectMe child={"Assembly"}/>
            <SelectMe child={"Availability"}/>
            <SelectMe child={"Best Selling"}/>
            <SelectMe child={"Back Style"}/>
            <SelectMe child={"Arm Style"}/>
            <SelectMe child={"Brand"}/>
        </VStack>
    </>)
}