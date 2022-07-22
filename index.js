// Code your solution here
const findMatching = (drivers, name) => {
   return drivers.filter(item => item.toUpperCase() === name.toUpperCase())
}
const fuzzyMatch = (drivers, name) => {
    return drivers.filter(item => item[0] === name[0])
}
const matchName = (drivers, string) => {
    return drivers.filter(item => item.name === string )
}