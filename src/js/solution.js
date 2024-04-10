
'use strict'

const createTable = (rows, column) => {
    const table = document.createElement('table')
    for (let i = 0; i < rows; i++) {
        const rowElement = document.createElement('tr')
        for (let j = 0; j < column; j++) {
            const cellElement = document.createElement('td')
            rowElement.appendChild(cellElement)
            if (i === 0) {
                cellElement.textContent = j + 1
            } else {
                cellElement.textContent = i * 10 + j + 1
            }
        }
        table.appendChild(rowElement)
    }

    document.body.appendChild(table)
}
createTable(10, 10)
