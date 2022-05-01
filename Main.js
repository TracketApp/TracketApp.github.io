
const fs = require('fs');

  
fs.readFile('Test.txt', (err, data) => {
    if (err) throw err;
    test = data.includes('BahrainTRUE')
    
    
    if (test===true) {
        console.log(test)
        document.getElementById("HomeFRAME").hidden = true
    }else
    {
        console.log(test)
    }
    

})
try {
    fs.unlinkSync('Test.txt')
    //file removed
  } catch(err) {
    console.error(err)
  }