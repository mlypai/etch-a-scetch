const container = document.getElementById('sheet');
let gridSize = 16;


for(let i = 0; i < gridSize; i++)
{
    var grid = document.createElement('div');

    grid.style.height = `${100 / gridSize}%`;
    for(let j = 0; j < gridSize; j++)
    {
        var elem =document.createElement('div');
        elem.style.width = `${100 / gridSize}%`;
        elem.classList.add('grid');

        grid.appendChild(elem);
    }
    container.appendChild(grid);
}
