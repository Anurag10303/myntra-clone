let bagItems=[];
onload();
function onload(){
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems=bagItemsStr ? JSON.parse(bagItemsStr): [];
    displayItemsOnHomePage();
    displayBagIcon();
}
function addToBag(itemID){
    bagItems.push(itemID)
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagElementCountElement=document.querySelector('.bag-item-count');
    
    if(bagItems.length>0){
        bagElementCountElement.innerText=bagItems.length;
        bagElementCountElement.style.visibility='visible';
    }else{
        bagElementCountElement.style.visibility='hidden';
    }
}
function displayItemsOnHomePage(){
    let itemsContainerElement=document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHtml='';
    items.forEach(item=>{
        innerHtml+=`
            <div class="item-container">
            <img class="item-image" src="${item.image}" alt="item image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price} </span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
                </div>
        `
    });
itemsContainerElement.innerHTML=innerHtml;
}

