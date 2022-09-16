const user = {//  #567
    name: "Bob",
    age: 23
}

const user2 = user // #567

user2.name = "Alex"
console.log(user.name)

const copyUser = {...user} // #999
//copyUser.name = user.name
//copyUser.age = user.age

console.log(copyUser)
console.log(copyUser === user) //false
console.log(user2 === user) //true
console.log({} === {}) //false
console.log(user.name === copyUser.name) // true

const array = [1, 2, 3, 4]
const copyArray = [...array]
console.log(copyArray)

const state = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,
        address: {}
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
        address: {}
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
        address: {}
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true,
        address: {}
    }
]
/*const copyState = [
  {...state[0]},
  {...state[1]},
  {...state[2]},
  {...state[3]}]*/

/*const copyState = state.map(st => ({...st, address: {...st.address}}))
id === 3, "Ann" => "Anny"
console.log(copyState)*/

const copyState = state.map(st => st.id === 3 ? {...st,name: "Anny"} : st)

console.log(copyState)