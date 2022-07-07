// Objet literals 
// Arrays []
// Objets {}
let petSalon = {
    // Attributes
    name:"The Fashion Pet", 
    address:"Ave University 768",
    hours:{
        open:"09:00am",
        closed:"06:00pm",
    },
    prices: {
        small: 100, 
        medium: 200, 
        large: 300
    },
    pets: [
        {
            name: "Jerry",
            age: "82",
            breed: "mouse",
            gender: "male",
            service: "trim", 
            owner: "NA",
            phone: "123-456-7890",
        },
        {
            name: "Tom",
            age: "82",
            breed: "cat",
            gender: "male",
            service: "trim", 
            owner: "NA",
            phone: "123-456-7890",
        },
        {
            name: "Tweety",
            age: "80",
            breed: "bird",
            gender: "male",
            service: "vaccine", 
            owner: "Granny",
            phone: "123-456-7890",
        },
        {
            name: "Bugs",
            age: "81",
            breed: "bunny",
            gender: "male",
            service: "vaneers", 
            owner: "NA",
            phone: "123-456-7891",
        }
    ]
}

// createing the function
for (let i = 0; i < petSalon.pets.length; i++){
    document.getElementById('pets').innerHTML += `
    <li class="list-group-item flx-apart">
    <div>${petSalon.pets[i].name}</div>
    <div>
    <i class="fa-solid fa-scissors"></i> ${petSalon.pets[i].service} <i 
    </div>
    <i class="fa-solid fa-trash-can"></i>
    </li>
`
}
function displayNumberOfPets(){
    alert(`There are ${petSalon.pets.length} pets in que`);
}
// calling the function
displayNumberOfPets();

