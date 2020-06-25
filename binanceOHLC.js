const dailyRatesJSON = require('./filesJson/binanceBTCUSDT2019.json');
const fs = require('fs');

//crete a header
let data = [];
data.push('timestamp,open,high,low,close,volume');

 
//loop through the json and push the data to the array (Bitstamp example)
 for(let i = 0; i < dailyRatesJSON.length; i++) {

    let str0 = "";

    str0 = dailyRatesJSON[i][0] + ',' + dailyRatesJSON[i][1] + ',' + dailyRatesJSON[i][2] + ',' + dailyRatesJSON[i][3] + ',' + dailyRatesJSON[i][4] + ',' + dailyRatesJSON[i][5];

    data.push(str0);
 }


 //call functoin and write data to the csv file
fileAppender(data);


//function to create csv file
 function fileAppender(array){
   
        //create csv file
        const writeStream = fs.createWriteStream('./filesCSV/binanceBTCEUR2019.csv');
        
        const pathName = writeStream.path;
        
        // write each value of the array on the file breaking line
        array.forEach(value => writeStream.write(`${value}\n`));
        
        // the finish event is emitted when all data has been flushed from the stream
        writeStream.on('finish', () => {
           console.log(`wrote all the array data to file ${pathName}`);
        });
        
        // handle the errors on the write process
        writeStream.on('error', (err) => {
            console.error(`There is an error writing the file ${pathName} => ${err}`)
        });
        
        // close the stream
        writeStream.end();
        
        }


