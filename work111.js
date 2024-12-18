//Завдання використати усі методи із лекції

let arr1 = [1, null, 'eee', 6, true, false, 11, 111, 1111]
//Метод find()
let res1 = arr1.find((el, ind, arr) => {
    return el === 11111
})
console.log(res1)

//Метод findIndex()
let arr2 = [1, 11, 111, 1111, 11111, 111111, 1111111]
let res2  = arr2.findIndex((el, ind, arr) => el === 1111)

console.log(res2)

//Метод indexOf()
let arr3 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', true ]

let res3 = arr3.indexOf('Sunday')
console.log(res3)

//Метод lastindexOf()
let arr4 = [true, false, 12, 'ss', true, true, 14785]

let res4 = arr4.lastIndexOf(true)
console.log(res4)

//Метод sort() за цифрами 
let arr5 = [1, 48, -9, 41, 12, -1, 0, 18]

let res5 = arr5.sort((a, b) => a - b )
console.log(res5)

//Метод sort() за літерами 
let arr6 = ['Nazar', 'Olena', 'Sasha', 'Pavlo', 'Tania']
let arr7 = [
    {name:'Nazar', id:21}, 
    {name:'Olena', id:18},
    {name:'Sasha', id:11},
    {name:'Pavlo', id:40},
    {name:'Tania', id:43},
]
let res7 = arr7.sort((a,b) => a.id - b.id)
console.log(res7)

//Метод reserve()
let res8 = arr5.reverse()
console.log(res8)

//Метод filter()
let arr9 = ['delivery', 'number', 'party', 'destruction', 'present'];
let res9 = arr9.filter((word) => word.length > 6);
console.log(res9);

//Метод some()
let arr10 = [12, -8 , 0, 7, 52, 9]

let res10 = arr10.some((el) => el > 0)
console.log(res10)

//Метод every()
let arr11 = [-1, 9, -58, -100, -156, -8]
let res11 = arr11.every((el) => el < 0)
console.log(res11)
//Метод includes()
let arr12 = ['d', 'c', 'f', 'e', 'n']
let res12 = arr12.includes('a')
console.log(res12)

//Метод flat()
let arr13 = ['a', 'b', 'c', [true, false, [1, 2 , 3]], 'd']
let res13 = arr13.flat(1)
console.log(res13)
//Метод flat(infinity)
let res14 = arr13.flat(Infinity)
console.log(res14)

//Метод concat()
let arr15 = ['p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'e']
let res15 = arr15.concat(['r'])
console.log(res15)

//Метод toString()
let  arr16 = ['Programming', 'is', 'so ', 'cool']
let res16 = arr16.toString()
console.log(res16)

//Метод map()
let arr17 = [2, 5, 8, 10]
let res17 = arr17.map((el) => el * 2)
console.log(res17)