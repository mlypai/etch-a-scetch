var container = document.getElementById('sheet');
let gridSize = 16;

var mode = document.querySelectorAll('.mode');
const black = document.getElementById('black');
const color = document.getElementById('color');
const shadow = document.getElementById('shadow');
const rainbow = document.getElementById('rainbow');
const wheel = document.getElementById('wheel');
const colorPicker = document.getElementById('colorPicker');
black.classList.add('active');

for(let i = 0; i < gridSize; i++)
{
    var grid = document.createElement('div');

    grid.style.height = `${100 / gridSize}%`;
    for(let j = 0; j < gridSize; j++)
    {
        var elem =document.createElement('div');
        elem.classList.add('grid');
        elem.style.width = `${100 / gridSize}%`;
        grid.appendChild(elem);
    }
    container.appendChild(grid);
}

grid = document.querySelectorAll('.grid');

function colorWheel(){
    if(color.classList.contains('active'))
    {
        wheel.style.visibility ="visible";
    }
    else{
        wheel.style.visibility = "hidden";
    }
}

mode.forEach(a => a.addEventListener('click', () => {
    mode.forEach(x => x.classList.remove('active'));
    a.classList.add('active');
    colorWheel();
}));

if (black.classList.contains('active'))
    grid.forEach(a => a.addEventListener('mouseover', () => a.style.backgroundColor = 'black'));