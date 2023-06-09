import { checkCheckboxes } from "../../script.js";
import { checkSearch } from "./searchItem.js";
import { addItemsToDoc } from "../addItemsToDoc.js";

export let boolForSearchFocus = false;

export const searchFocused = (event) => {
    if(event.type === 'focus'){
        boolForSearchFocus = true;
    }
    
    if(event.type === 'blur'){
        boolForSearchFocus = false;
        
        if(checkCheckboxes == false && checkSearch == false){
            addItemsToDoc() 
        }
    }

}