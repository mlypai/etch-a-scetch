var container = document.getElementById('sheet');
let gridSize = document.getElementById('size');

var mode = document.querySelectorAll('.mode');
const black = document.getElementById('black');
const color = document.getElementById('color');
const shadow = document.getElementById('shadow');
const rainbow = document.getElementById('rainbow');
const clear = document.getElementById('clear');

const wheel = document.getElementById('wheel');
const colorPicker = document.getElementById('colorPicker');
var grid;
black.classList.add('active');

function createGrid(){
    for(let i = 0; i < gridSize.value * gridSize.value; i++)
    {
        var elem = document.createElement('div');
        elem.classList.add('grid');
        elem.style.height = `${100 / gridSize.value}%`;
        elem.style.width = `${100 / gridSize.value}%`;
        container.appendChild(elem);
    }
    grid = document.querySelectorAll('.grid');
    grid.forEach(a => a.addEventListener('mouseover', () => paint(a)));
    clear.addEventListener('click', () => grid.forEach(a => a.style.backgroundColor = 'white'));
}

if(!grid)
    createGrid();
gridSize.addEventListener('change', () => 
    {
        document.querySelectorAll('.grid').forEach(a => container.removeChild(a));
        createGrid();
    });

function paint(grid){
    if (black.classList.contains('active'))
        grid.style.backgroundColor = 'black';
    if(color.classList.contains('active'))
        grid.style.backgroundColor = colorPicker.value;
    if(rainbow.classList.contains('active'))
        grid.style.backgroundColor = `rgb(${getRand()}, ${getRand()}, ${getRand()})`;
}

function getRand()
{
    return Math.floor(Math.random() * 256);
}

mode.forEach(a => a.addEventListener('click', () => {
    mode.forEach(x => x.classList.remove('active'));
    a.classList.add('active');
    if(color.classList.contains('active'))
        wheel.style.visibility ="visible";
    else
        wheel.style.visibility = "hidden";
}));

