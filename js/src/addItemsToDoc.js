import { createItems } from "./createItem.js";

const mainProducts = document.querySelector('.main__products');
export let productsElements;

const getList = async () => {
    try{
        let res = await fetch('../js/src/list.json');
        let data = await res.json();
        
        return data;
    }catch(e){
        console.log(e)
    }
}

export const addItemsToDoc = async () => {
    const productsCompanyCheckbox = document.querySelectorAll('.products__company_checkbox');
    productsCompanyCheckbox.forEach(el => el.nextElementSibling.innerHTML = 0)

    const mainObj = await getList();
    
    const elements = document.createElement('div');
    elements.classList.add('products__elements');

    mainObj.list.forEach(item => {
        if(item.name.includes(document.querySelector('.products__search').value) 
            && item.price <= document.querySelector('#price').value)
        {
            createItems(item, elements);
        }

        productsCompanyCheckbox.forEach(el => el.id == item.company ? el.nextElementSibling.innerHTML++ : false)
    })

    productsElements = elements;
    mainProducts.appendChild(elements);
}