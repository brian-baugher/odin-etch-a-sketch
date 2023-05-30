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
