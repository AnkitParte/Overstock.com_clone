import { Routes, Route} from "react-router-dom"
import Cart from "../Cart"
import Home from "../Home"
import MyAcc from "../Login/MyAcc"
import Products from "../Products/Products"
import SubCard from "../Products/SubCard"

export default function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/accounts" element={<MyAcc/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/products/:id" element={<SubCard/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    )
}