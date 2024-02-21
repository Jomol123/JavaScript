// const dreamjob={
//     company:'Google',
//     location:'USA',
//     designation:'Software Engineer'
// }

// const {company:office,location:place,designation:job}=dreamjob
// console.log(`I would love to be a ${job} ,at ${office} in ${place}`);

// const arr=[2,4,6]
// const newArr=arr.map(function (element){
//     return element*element
// })
// console.log(newArr);

// const energyCostEuros=[140,153,164,153,128,146]
// const exchangeRate=[1.13]
// let exchangeDollar=[]
// exchangeDollar=energyCostEuros.map(function(element){
//     return element*exchangeRate
// })
// console.log(exchangeDollar);

// let users=[
//     {firstName:"Susan",lastName:"Steward"},
//     {firstName:"Daniel",lastName:"Longbottom"},
//     {firstName:"Jacob",lastName:"Black"}
// ];
// let newUsers=users.map(function(user){
//     return ` <li>${user.firstName} ${user.lastName} </li>`
// }).join('')
// console.log(newUsers);
// document.getElementById('names').innerHTML=`<ul>${newUsers} </ul>`

const room1={
    name:'Safari View',
    rooms:50,
    constPerNightAdult:'240',
}

const room2={
    name:'Leopard Mansion',
    rooms:96,
    constPerNightAdult:'120',

}

function NationalParkHotels(data){
    this.name=data.name,
    this.rooms=data.rooms,
    this.constPerNightAdult=data.constPerNightAdult,
    this.summariseHotel=function(){
        console.log(`A one night stay at the ${this.name} for two adults and two children consts a total of ${this.constPerNightAdult}`);
    }
}
 let hotel1=new NationalParkHotels(room1)
 hotel1.summariseHotel()
console.log(room1);

let hotel2=new NationalParkHotels(room2)
hotel2.summariseHotel()
console.log(room2);







