/**
 * Created by ManaliJain on 9/22/17.
 */

export const MENU_ITEM = 'MENU_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

export function menuItem(menulist) {
    "use strict";
    return {
      type : MENU_ITEM,
      menulist
    }
}

export function addItem(orderlist, quantity) {
    "use strict";
    return {
        type : ADD_ITEM,
        // orderlist,
        // quantity
    }
}