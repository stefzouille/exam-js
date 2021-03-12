const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

let i = 0
while (i < tab.length) {
  console.log(`${tab[i]}, length : ${tab.length}`)
  ++i
}

for (let i = 0; i < tab.length; ++i) {
  console.log(`${tab[i]}, length : ${tab.length}`)
}

tab.forEach((elem) => {
  console.log(`${elem}, length : ${tab.length}`)
})
