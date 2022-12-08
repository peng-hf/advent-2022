const fs = require('fs')

// UGLY SOLUTION. I'M NOT PROUD AT ALL.

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')

class File {
  constructor(name, size, parent) {
    this.name = name
    this.size = size
    this.parent = parent
  }
}

class Directory {
  constructor(name, parent) {
    this.name = name
    this.parent = parent
    this.list = [] // files or dirs
  }
}


const root = new Directory('/', null)
let cursor = root

// Build tree
let i = 1 // Ignore cd "/""
while (i < rows.length) {
  if (rows[i].includes('cd')) {
    const dirName = rows[i].split(' ')[2]
    if (dirName === '..') {
      cursor = cursor.parent
    } else {
      cursor = cursor.list.find(item => {
        if (item instanceof Directory && item.name === dirName) return item
      })
    }  
    ++i
  }
  else if (rows[i].includes('ls')) {
    let j = i + 1
    while (j < rows.length) {
      if (rows[j].includes('dir')) {
        const dirName = rows[j].split(' ')[1]
        cursor.list.push(new Directory(dirName, cursor))
      } 
      else if (/\d/.test(rows[j])) { // file
        const [size, fileName] = rows[j].split(' ')
        cursor.list.push(new File(fileName, parseInt(size), cursor))
      }
      else break
      ++j
    }
    i = j
  } else ++i
}

let dirSize = {}
function sum(item) {
  if (item instanceof File) {
    dirSize[item.parent.name] += parseInt(item.size)
  } 
  else if (item instanceof Directory) {
    dirSize[item.name] = 0
    for (const i of item.list) sum(i)
    if (item.parent) {
      dirSize[item.parent.name] += parseInt(dirSize[item.name])
    }
  }
}

sum(root)

const res1 = Object.values(dirSize).reduce((acc, size) => {
  if (size < 100000) return acc + size
  return acc
}, 0)


console.log('Total size of the directories (< 100000) is', res1)

const spaceRequired = 30000000 - (70000000 - dirSize['/'])
const res2 = Object.values(dirSize).filter(size => size >= spaceRequired).sort()[0]


console.log('Size directory to delete is', res2)




