/**
 * Created by ManaliJain on 9/22/17.
 */
import {ADD_ITEM} from "../action/index";
const initialStateMenu = {

    "Pasta Carbonara" : '12.00',
    "Margherita Pizza" : '27.00',
    "Mushroom Risotto" : '16.00',
    "Penzenella" : '10.00',
    "Bruschetta" : '10.00',
    "Tiramisu" : '6.00'
}

const initialStateOrder = {

}
export const menu =  (state=initialStateMenu, action) => {
    // "use strict";

    switch (action.type){
        case ADD_ITEM :
            return {
                ...state
                //[action.newI
            };

        default :
            return state;
    }
};

export const placeOrder =  (state=initialStateOrder, action) => {
    // "use strict";

    switch (action.type){
        case ADD_ITEM :
            // return {
            //     ...state
            //         [action.orderlist] : [action.price]
            // };

        default :
            return state;
    }
};
export default menu;
//export default placeOrder;