process.stdin.resume()
process.stdin.setEncoding('utf8')
console.log('What\'s your age ? ')
process.stdin.on('data', age => {
  if ( Number.isInteger(parseInt(age))&& age < 99){
     const year = 2020;
     const birthYear = year - age ;
     if ( birthYear > 2020) {
         console.log(' wow you did not born yet');
     } else{
         console.log('Your year of Birth is : '+ birthYear)
     }
  } else {
      console.log (' you have to enter Number less than 99 ')
  }
 
  process.exit();
})
