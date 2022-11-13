import './item.scss'
const Item = (name, nambers) => {
    const ItemElement = document.createElement('div')
    ItemElement.className = 'item'
    

    const nameElement = document.createElement('span')
    nameElement.className = 'item__name'
    nameElement.innerText = name
    const nambersElement = document.createElement('span')
    nambersElement.className = 'item__nambers'
    nambersElement.innerText =  `Номер: ${nambers}`
    //const imgElement = document.createElement('img')
    //imgElement.src = ItemImg;

    const buttonElement = document.createElement('button')
    buttonElement.className = 'item__add-button'
    buttonElement.innerText = 'Добавить в избранное'


    ItemElement.appendChild(nameElement)
    //ItemElement.appendChild(imgElement)
    ItemElement.appendChild(nambersElement)
    ItemElement.appendChild(buttonElement)
    
    return ItemElement
};

export default Item

