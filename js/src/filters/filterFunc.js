import {objectOfItems} from '../objectOfItems.js';
import { productsElements } from '../addItemsToDoc.js';

const checkboxes = document.querySelectorAll('.products__company_checkbox');

const compareNames = (item) => item.lastChild.querySelector('.element__title').innerHTML.includes(document.querySelector('.products__search').value);
const comparePrice = (item) => Number(item.lastChild.querySelector('.element__price').innerHTML.split('$')[1]) <= document.querySelector('#price').value;

export const filterFunc = () => {
    let counter = 0;
    
    productsElements.innerHTML = '';

    const counters = document.querySelectorAll('.products__company_counter');
    counters.forEach(el => el.innerHTML = 0)

    for(let el in objectOfItems){
        checkboxes.forEach(element => {
            if(element.checked){
                objectOfItems[element.id].forEach(item => {
                    if(compareNames(item) && comparePrice(item)) {
                        productsElements.append(item)
                        
                        document.querySelector(`#${element.id}`).nextElementSibling.innerHTML++
                    }
                })
            }
            else{
                counter++;
            }
        })
    }
    if(counter == 9){
        for(let el in objectOfItems){
            objectOfItems[el].forEach(item => {
                if(compareNames(item) && comparePrice(item)) {
                    productsElements.append(item)

                    document.querySelector(`#${el}`).nextElementSibling.innerHTML++
                }
            })
        }
    }

    counters.forEach(elem => {
        if(elem.innerHTML == 0){
            elem.previousElementSibling.disabled = true
        }else{
            elem.previousElementSibling.disabled = false
        }
    })
}