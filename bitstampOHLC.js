const dailyRatesJSON = require('./filesJson/bitstampSince012019.json');
const fs = require('fs');

//crete a header
let data = [];
data.push('timestamp,open,high,low,close,volume');

 
//loop through the json and push the data to the array (Bitstamp example)
 for(let i = 0; i < dailyRatesJSON["data"]["ohlc"].length; i++) {

    let str0 = "";

    str0 = dailyRatesJSON["data"]["ohlc"][i]["timestamp"] + "," + dailyRatesJSON["data"]["ohlc"][i]["open"] + "," + dailyRatesJSON["data"]["ohlc"][i]["high"] 
    + "," + dailyRatesJSON["data"]["ohlc"][i]["low"] + "," + dailyRatesJSON["data"]["ohlc"][i]["close"] + "," + dailyRatesJSON["data"]["ohlc"][i]["volume"];

    data.push(str0);
 }


 //call functoin and write data to the csv file
fileAppender(data);


//function to create csv file
 function fileAppender(array){
   
        //create csv file
        const writeStream = fs.createWriteStream('./filesCSV/bitstampBTCEUR2019.csv');
        
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


