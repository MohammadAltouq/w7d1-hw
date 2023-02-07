//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names,
loops through the list and checks that the current name is in the string passed in.
The output should be:"Matched dog_name" if name is in the string,
if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(st, arr){
    //Your code goes here
    for(let i = 0; i < arr.length; i++){
        if(st.toLowerCase().includes(arr[i].toLowerCase())){
            console.log(`matched ${arr[i]}`)
        }
    }
    return 
}
findWords(dog_string, dog_names)
//Call method here with parameters


//Expected output
// Matched Max
// Matched PuRple
// Matched dog
//=====================================================================================
//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" 

*/
// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for( let i = 0; i < arr.length; i++){
        if (i % 2 == 0 ){
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// codewars problem 1
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// function solution(number){
//     number-- 
//     let n = 0
    
//     while(number > 0){
//       if(number % 5 == 0 || number % 3 == 0) {
//         n += number
//       }
//       number--
//     }
//     return n
//   }

// codewars problem 2
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// function solution(string) {
//     let newStr = string.charAt(0)
//     for(let i = 1; i < string.length; i++){
//       if(string.charAt(i) == string.charAt(i).toUpperCase()){
//         newStr += " "
//       }
//       newStr += string.charAt(i)
//     }
//   return newStr
// }