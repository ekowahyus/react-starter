import { el, diff, patch } from 'simple-virtual-dom'


let count = 0;

const renderTree = () => {
    count++

    let items = []
    let color = (count % 2 === 0) ? 'blue': 'red'

    for (let i = 0; i < count; i++) {
        items.push(
            el('li', ['Item ke ' + i])
        )
    }

    return el('div', {'id': 'container'}, [
        el('h1', {style: 'color: ' + color}, ['Virtual DOM']),
        el('p', ['Hitungan ke: ' + count]),
        el('ul', items)
    ])
}

// generate real DOM
let tree = renderTree()
let root = tree.render()

document.body.appendChild(root)

setInterval(() => {
    let newTree = renderTree()
    let patches = diff(tree, newTree)
    
    patch(root, patches)

    tree = newTree
}, 1000)