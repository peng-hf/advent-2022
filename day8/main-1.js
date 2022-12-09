const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function isVisible(i, j) {
  const treeSize = rows[i][j]
  // console.log(treeSize)
  
  let left = true, right = true, bottom = true, top = true

  // check left and right
  let colIdxLeft = 0, colIdxRight = rows[i].length - 1
  while (colIdxLeft !== colIdxRight) {
    
    if (colIdxLeft < j && rows[i][colIdxLeft] >= treeSize) {
      left = false
    }
    if (colIdxRight > j && rows[i][colIdxRight] >= treeSize) {
      right = false
    }

    if (colIdxLeft < j) colIdxLeft++
    if (colIdxRight > j) colIdxRight--
  }

  // check top and bottom
  let rowIdxTop = 0, rowIdxBottom = rows.length - 1
  while (rowIdxTop !== rowIdxBottom) {

    if (rowIdxTop < i && rows[rowIdxTop][j] >= treeSize) {
      top = false
    }

    if (rowIdxBottom > i && rows[rowIdxBottom][j] >= treeSize) {
      bottom = false
    }

    if (rowIdxTop < i) rowIdxTop++
    if (rowIdxBottom > i) rowIdxBottom--
  }

  return left || right || top || bottom
}


let countVisibleTrees = rows.length * 2 // left + right edge trees

let i = 1, j = 1
while (i < rows.length - 1) {
  j = 1
  while (j < rows[i].length - 1) {
    if (isVisible(i, j)) countVisibleTrees++
    ++j
  }
  ++i
}

countVisibleTrees += (j - 1) * 2 // top + bottom 

console.log('Number of visible trees => ', countVisibleTrees)
