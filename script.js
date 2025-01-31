
// function printFarmInventory(cows, chickens) {
//     let cowString = String(cows); 
//     //while loop checks if length of cowstring is less than 3. If it is, a 0 is added to the beginning of the string and repeats until it is at least 3 characters long. 
//     while (cowString.length < 3) {
//         cowString = "0" + cowString; 
//     }
//     console.log(`${cowString} Cows`); 
//     let chickenString = String(chickens); 
//     while (chickenString.length < 3) {
//         chickenString = "0" + chickenString; 
//     }
//     console.log(`${chickenString} Chickens`); 
// }

// printFarmInventory(7, 11)

// function min (num1, num2) {
//     const minimum = Math.min(num1, num2)
//     return console.log(minimum); 
// }

// min(787,25)

// function isEven (num) {
//     if (num === 0) {
//         return true; 
//     } else if (num === 1) {
//         return false; 
//     } else if (num < 0) {
//         return isEven(-num); 
//     }

//     return isEven (num - 2); 
// }

// console.log(isEven(-2)); 

// function countBs (string, character) {
//     let count = 0; 
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === character) {
//             count ++; 
//         }
//     }
//     return count; 
// }

// console.log(countBs('kakkerlak', 'k'))

function isRubyComing(list) {
    for (i = 0; i < list.length; i++) {
      if(list[i].language === 'Ruby') {
        return true 
      } return false 
    }
  }


  const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' }
  ];

  console.log(isRubyComing(list1)); 

