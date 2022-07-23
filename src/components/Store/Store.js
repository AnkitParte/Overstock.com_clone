import { createStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

const initial = []
export const store = createStore(Reducer,initial)




