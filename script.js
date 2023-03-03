var container = document.getElementById('sheet');
let gridSize = document.getElementById('size');

var mode = document.querySelectorAll('.mode');
const color = document.getElementById('color');
const shade = document.getElementById('shade');
const rainbow = document.getElementById('rainbow');
const clear = document.getElementById('clear');

const wheel = document.getElementById('wheel');
const colorPicker = document.getElementById('colorPicker');
var grid;

color.classList.add('active');


/*creating small squares and adding them to sheet and assigning event listeners related to them*/
function createGrid(){
    for(let i = 0; i < gridSize.value * gridSize.value; i++)
    {
        var elem = document.createElement('div');
        elem.classList.add('grid');
        elem.style.height = `${100 / gridSize.value}%`;
        elem.style.width = elem.style.height;
        elem.style.backgroundColor = 'rgb(255, 255, 255)';
        container.appendChild(elem);
    }
    grid = document.querySelectorAll('.grid');
    grid.forEach(a => a.addEventListener('mouseover', paint));
    clear.addEventListener('click', () => grid.forEach(a => a.style.backgroundColor = 'rgb(255, 255, 255)'));
}

/*creating initial grid*/
if(!grid)
    createGrid();

/*removes old grid and creates new one when size of grid changes*/
gridSize.addEventListener('change', () => 
{
    document.querySelectorAll('.grid').forEach(a => container.removeChild(a));
    createGrid();
});

/*coloring background depending on which mode is active*/
function paint(){
    if(color.classList.contains('active'))
        this.style.backgroundColor = colorPicker.value;
    if(rainbow.classList.contains('active'))
        this.style.backgroundColor = `rgb(${getRand()}, ${getRand()}, ${getRand()})`;
    if(shade.classList.contains('active'))
    {
        var rgb = this.style.backgroundColor.replace(/[a-z]|\(|\)|\s/g, "").split(',');
        this.style.backgroundColor = `rgb(${rgb[0] -25}, ${rgb[1] -25}, ${rgb[2] -25})`;
    }
}

/*gets random number between 0 and 255*/
function getRand()
{
    return Math.floor(Math.random() * 256);
}

/*when mode is activated, deactivates other modes */
mode.forEach(a => a.addEventListener('click', () => {
    mode.forEach(x => x.classList.remove('active'));
    a.classList.add('active');
}));

