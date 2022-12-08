import {v4 as uuid4} from "uuid"
import { FILTER_TODO } from "../constants/actions-types"

const filterId = "All"



export const filter = (state = filterId, action) => {
    
    
    switch (action.type) {

        case FILTER_TODO: 
            return action.payload
            
        default: return state

    }
}