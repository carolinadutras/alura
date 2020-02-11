//What a need to do?
//make a list with all inputs of my page, read all the values of each item and put in my table;

//i need to 

let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')    
];

let form = document.querySelector('form')

// capturing the place that I will put the new informatios of volume
let tbody = document.querySelector('table tbody')

console.log(campos); 

// event listener that hear my submit and put that's informations in my table- important submit is a event of form.
//submit is a event that do's update in the page, is important do the prevent default

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    let tr = document.createElement('tr');

    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });
var tdVolume = document.createElement('td');
tdVolume.textContent = campos[1].value * campos[2].value;
tr.appendChild(tdVolume);

tbody.appendChild(tr);

//cleaning the form after the submit;
campos[0].value = '';
campos[1].value = 1;
campos [2].value = 0;


});