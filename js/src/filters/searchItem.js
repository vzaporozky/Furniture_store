import { addItemsToDoc, productsElements } from '../addItemsToDoc.js';
import { checkCheckboxes } from '../../script.js';
import { filterFunc } from './filterFunc.js';
import { boolForSearchFocus } from './searchFocused.js';

export let checkSearch = false;

export const searchItem = (event) => {
    if(event.target.value){
        checkSearch = true;

        // filterFunc(event, 'search');
        filterFunc(event);
    }else if(boolForSearchFocus == true){
        checkSearch = false;
        // filterFunc(event, 'search');
        filterFunc(event);
    }else{
        checkSearch = false;
        productsElements.remove();
        checkCheckboxes == false && checkSearch == false && boolForSearchFocus == false
            ? addItemsToDoc() 
            : ''
    }
}