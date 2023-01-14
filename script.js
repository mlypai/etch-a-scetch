const container = document.getElementById('sheet');
let gridSize = 16;

for(let i = 0; i < gridSize; i++)
{
    console.log("here");
    var grid = document.createElement('div');
    for(let j = 0; j < gridSize; j++)
    {
        var elem =document.createElement('div');
        elem.classList.add('grid');

        grid.appendChild(elem);
    }
    container.appendChild(grid);
}
