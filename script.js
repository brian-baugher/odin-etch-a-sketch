const grid = document.querySelector('#grid')
for(i=0; i<16; i++){
    let row = document.createElement('div')
    row.classList.add('row')
    grid.appendChild(row)
}

const rows = document.querySelectorAll('#grid .row')
rows.forEach( (x)=>{
    for(i=0; i<16; i++){
        let box = document.createElement('div')
        box.classList.add('box')
        x.appendChild(box)
    }
} )
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

const boxes = document.querySelectorAll('.box')

boxes.forEach( (x)=>{
    x.addEventListener('mouseover', () => hovering(x))
    x.addEventListener('mouseleave', () => off(x))
})
