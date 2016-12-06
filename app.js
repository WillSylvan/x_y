let getValue = function (x, y) {
     if(x + y >= 8) return 1
    if(x + y == 6) return 2
    if(x < y) return 3
    if(x + y <= 4) return 4
   

    // if (x < 4 && y == 1) return 4
    // if( x > 4 && y == 1) return 2
    // // rinda // 
    // if( x == 1 && y == 2) return 3
    // if( x == 2 && y == 2) return 4
    // if( x == 4 && y == 2) return 2
    // // rinda // 
    // if( x < 3 && y == 3) return 3
    // if( x == 3 && y == 3) return 2
    // if( x == 5 && y == 3) return 1
    // // rinda //
    // if( x == 1 && y == 4) return 3
    // if( x == 2 && y == 4) return 2
    // if( x == 3 && y == 4) return 3
    // if( x > 3 && y == 4) return 1
    // // rinda // 
    // if( x == 1 && y == 5) return 2
    // if( x == 2 && y == 5) return 3
    // if( x > 2 && y == 5) return 1
//  if(x + y > = 8) return 9 // 
    return 0
}

console.log([getValue(1, 1), getValue(2, 1), getValue(3, 1), getValue(4, 1), getValue(5, 1)])
console.log([getValue(1, 2), getValue(2, 2), getValue(3, 2), getValue(4, 2), getValue(5, 2)])
console.log([getValue(1, 3), getValue(2, 3), getValue(3, 3), getValue(4, 3), getValue(5, 3)])
console.log([getValue(1, 4), getValue(2, 4), getValue(3, 4), getValue(4, 4), getValue(5, 4)])
console.log([getValue(1, 5), getValue(2, 5), getValue(3, 5), getValue(4, 5), getValue(5, 5)])
