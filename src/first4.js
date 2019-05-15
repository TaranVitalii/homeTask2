export function newObject() { 
let users = [
  {
    id: 1,
   name: 'Mihail'
  },
  {
    id: 2,
   name: 'Marina'
  },
  {
    id: 3,
   name: 'Andrew'
  },
  {
    id: 4,
   name: 'Ilya'
  },
];


let newObject= users.reduce((acc, item, index) => {
    index = users[index].id
    acc[index]=item.name;
    return acc;
}, {});
return newObject;
}
window.newObject=newObject;


