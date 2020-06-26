let fs = require('fs');
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1d&startTime=1546218000000&endTime=1577754000000',
  headers: { }
};


//crete a header
let data = [];
data.push('timestamp,open,high,low,close,volume');


//get request
axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
  for(let i = 0; i < response.data.length; i++) {

    let str0 = "";

    str0 = response.data[i][0] + "," + response.data[i][1] + "," + response.data[i][3] + "," + response.data[i][4] + "," + response.data[i][2] + "," + response.data[i][5];

   data.push(str0);
 }


//call functoin and write data to the csv file
fileAppender(data);

//function to create csv file
function fileAppender(array){
   
    //create csv file
    const writeStream = fs.createWriteStream('./filesCSV/binanceAxiosTest.csv');
    
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


})
.catch(function (error) {
  console.log(error);
});

//console.log(data);




