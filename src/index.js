import Item from './item';
import ItemsList from './items-list'
import './index.scss'
import 'normalize.css'

const macks = [{
    "id": 1,
    "name": "Valera",
    "nambers": 89165064231
    
},
{
    "id": 2,
    "name": "Nina",
    "nambers": 89135021324
    
},
{
    "id": 3,
    "name": "Kata",
    "nambers": 89165723124
    
}]


const itemsList = ItemsList();
document.body.appendChild(itemsList)

const generateItems = () => {
    macks.forEach((item)=>{
        const itemElements = Item(item.name, item.nambers);
        itemsList.appendChild(itemElements)
    })
}
generateItems()
//const item1 = Item('name', 891);
//itemsList.appendChild(item1)
