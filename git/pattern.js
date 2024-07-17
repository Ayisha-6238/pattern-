
var row=5
for (let i=row;i>=1;i--){
    var star=''
    for(let j=1;j<=i;j++){
        star = '*'+star
       
    }
    console.log(star)
}
  
// for(let i=row;i>=1;i--){
//     var ptrn=''
//     for(let j=1;j<=row-i;j++){
//         ptrn+=" "
//     }
//     for(let k=1;k<=i;k++){
//         ptrn+="*"
//     }
//     console.log(ptrn)

// }

// // upper triangle
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     console.log(str.repeat(i));
// }

// upper right triangle
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     let space  = '  ';
//     console.log(space.repeat((n-i))+str.repeat(i));
// }


// let n = 5; 
// for (let i = 1; i <= n; i++) { 
// 	let str = "* "; 
// 	let space = ' '; 
// 	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
// }

// var row=5;
// for(i=1;i<=row;i++){
//     var pattern=''
//     for (j=1;j<=row-i;j++){
//         // pattern=""+pattern
//         pattern+=""
//     }
//         for(k=1;k<=i;k++){
//         //   pattern=pattern+"*"
//             pattern+="*"

//         }
//     console.log(pattern)
// }


// for(i=1;i<=row;i++){
//     var pattern=''
//     for (j=i;j<=row;j++){
//         // pattern=""+pattern
//         pattern+=""
//     }
//     console.log(pattern)
// }
// for(i=2;i<=row;i++){
//     var pattern=''
//     for (j=1;j<=i;j++){
//         // pattern=""+pattern
//         pattern+=""
//     }
//     console.log(pattern)
// }

var row=5
for (let i=row;i>=1;i++){
    var star=''
    for(let j=1;j<=i;j++){
        star = '*'+star
       
    }
    console.log(star)
}