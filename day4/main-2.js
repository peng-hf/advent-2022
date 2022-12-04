const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')

let res = 0
for (const pair of rows) {
  const assignments = pair.split(',')
  const elf1 = assignments[0].split('-').map(id => parseInt(id))
  const elf2 = assignments[1].split('-').map(id => parseInt(id))

  if (
    (elf1[0] >= elf2[0] && elf1[1] <= elf2[1]) ||
    (elf2[0] >= elf1[0] && elf2[1] <= elf1[1]) ||
    (elf1[0] <= elf2[1] && elf1[1] >= elf2[1]) ||
    (elf2[0] <= elf1[1] && elf2[1] >= elf1[1])) {
    res++
  }
}



console.log('Number of pairs with overlap(s) =>', res)

/* 
5 - 7, 7 - 9 overlaps in a single section, 7.
2 - 8, 3 - 7 overlaps all of the sections 3 through 7.
6 - 6, 4 - 6 overlaps in a single section, 6.
2 - 6, 4 - 8 overlaps in sections 4, 5, and 6.

...45....  4-5
....567..  5-7

.2345678.  2-8
..34567..  3-7

.....6...  6-6
...456...  4-6

.23456...  2-6
...45678.  4-8
*/



