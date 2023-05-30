let SIZE = 16;

const grid = document.querySelector('#grid')
let rows;
let boxes;

const sizer = document.getElementById('sizer')
sizer.addEventListener('click', ()=>{
    newSIZE = parseInt(prompt("Enter new # pixels/side"))
    if(isNaN(newSIZE)){
        return;
    }
    SIZE = newSIZE
    console.log(SIZE)
    deleteGrid();
    renderGrid();
})

/**
     * 
     * @param {Node} div 
     */
function hovering(div){
    console.log('hover')
    div.style.backgroundColor = 'blue'
}

function off(div){
    console.log('off')
    div.style.backgroundColor = 'white'
}

function deleteGrid(){
    nodes = document.querySelectorAll('#grid *')
    nodes.forEach( (x)=>{
        x.remove();
    })
}

function renderGrid(){
    for(i=0; i<SIZE; i++){
        let row = document.createElement('div')
        row.classList.add('row')
        grid.appendChild(row)
    }

    rows = document.querySelectorAll('#grid .row')
    rows.forEach( (x)=>{
        for(i=0; i<SIZE; i++){
            let box = document.createElement('div')
            box.classList.add('box')
            x.appendChild(box)
        }
    } )

    boxes = document.querySelectorAll('.box')
    boxes.forEach( (x)=>{
        //x.style.backgroundColor = 'white'
        x.addEventListener('mouseover', () => hovering(x))
        //x.addEventListener('mouseleave', () => off(x))
    })
}

renderGrid()
