const payoutRates = require('./032020_py.json');
//const payoutRates = require ('./rf-raw.json');
const fs = require('fs');

//-------------------- TOTAL PAYOUTS PER ASSET

/* let totalAmountUSD = 0;
let totalAmountAsset = 0
let period = [];

for (date in payoutRates) {
    
    period.push(date);
    totalAmountAsset += payoutRates[date]['funds']['BTG']['payoutAmount'];
    totalAmountUSD += payoutRates[date]['funds']['BTG']['payoutAmountUSD'];

    console.log(date);
    console.log(payoutRates[date]['funds']['ETN']['payoutAmount']);
    console.log(payoutRates[date]['funds']['ETN']['payoutAmountUSD'])
    console.log('--------------------------------') 

    
} 

console.log( `Total amount paid in asset: ${totalAmountAsset}`);
console.log( `Total amount paid in USD: ${totalAmountUSD}`);
console.log(`Since: ${period[period.length-1]}`); */



// --- CODED BY VANJA
/* let pr = payoutRates
let n = {}, nb = {}
let log = false

Object.keys(pr).map(e=>{
    //if (e=='2020-02-29') {

        if (log) console.log('main level '+ e)

        Object.keys(pr[e]).map(f=>{

            if (log) console.log('second level '+f)

            Object.keys(pr[e][f]).map(g=>{

                if (log) console.log(typeof pr[e][f][g], g)
                
                if (typeof pr[e][f][g] === 'object') {
                    Object.keys(pr[e][f][g]).map(h=>{
                        
                        if (log) console.log(typeof pr[e][f][g][h], h)
                        if (log) console.log(h)

                        if (!n.hasOwnProperty(e)) n[e] = {}
                        if (!n[e].hasOwnProperty(g)) n[e][g] = {}
                        if (typeof pr[e][f][g][h]=='number') {
                            if (!n[e][g].hasOwnProperty(h)) n[e][g][h] = 0
                            n[e][g][h] += pr[e][f][g][h]
                        }

                        if (!nb.hasOwnProperty(g)) nb[g] = {}
                        if (typeof pr[e][f][g][h]=='number') {
                            if (!nb[g].hasOwnProperty(h)) nb[g][h] = 0
                            nb[g][h] += pr[e][f][g][h]
                        }

                    })
                }
            })
        })
    //}
})
console.log(nb) */
//-------------------------------- 


//---------------------- TOTAL PAYOUTS
/* let totalAmount = 0;

for (date in payoutRates) {
    //console.log(date)


    totalAmount += payoutRates[date]['payoutETN'];

    //console.log(totalAmount);
}

console.log(totalAmount); */
//---------------------------




/* console.log(`Total payout in USD: ${totalUSD}`); 
console.log(`Total payout in coihn: ${totalETN}`);
console.log(`Since: ${period[period.length-1]}`); 
 */


//-----------------------------------



//---- file test

/* let file = './test1-payout-rates.csv';



    //console.log(date)


//let data = date + ',' + payoutRates[date]['payoutUSD']; 


//console.log(data)


let fileAppender = (array) => {

const writeStream = fs.createWriteStream('testFile.csv');

const pathName = writeStream.path;

//let array = ['1','2','3','4','5','6','7'];

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

let array = ['2020-02-29,ETN,ETN,4596.374353091109,0,0,0,0,422.73524364574', 'test'];

fileAppender(array);
 */



/* fs.stat(file, (err, stats) => {
    if(err) throw err;
    
   let fileData = stats.size;
   console.log(fileData);


});
 */
 


 //-----PAYOUT PER DAY

//let file = './test1-payout-rates.csv';
let totalUSD = 0
let totalETN = 0;
let period = [];
let data = ['Date, daemonName, currency, payoutBalance, bufferBalance, payoutBalanceUnconf, releasedAmount, releaseAmountUSD, payoutAmount, payoutAmountUSD, payoutAmountETN, missingAmount, fundAmount, reqiredBuffer, totalMarket, totalRelBal, totalRelExtra, totalBuffer, exchangeUSD, exchangeBTC'];

//data.push('Date, daemonName, currency, payoutBalance, bufferBalance, payoutBalanceUnconf, releasedAmount, releaseAmountUSD, payoutAmount, payoutAmountUSD, payoutAmountETN, missingAmount, fundAmount, reqiredBuffer, totalMarket, totalRelBal, totalRelExtra, totalBuffer, exchangeUSD, exchangeETN'); 

for (date in payoutRates) {

    period.push(date);
  
        //fileData = fileData;
        let str0 = '';
        str0 = date + ',' + payoutRates[date]['funds']['ETN']['daemonName'] + ',' + payoutRates[date]['funds']['ETN']['currency'] + ',' + payoutRates[date]['funds']['ETN']['payoutBalance'] + ',' + payoutRates[date]['funds']['ETN']['bufferBalance'] + ',' + payoutRates[date]['funds']['ETN']['payoutBalanceUnconf'] + ','
        + payoutRates[date]['funds']['ETN']['releasedAmount'] + ',' + payoutRates[date]['funds']['ETN']['releaseAmountUSD'] + ',' + payoutRates[date]['funds']['ETN']['payoutAmount'] + ',' + payoutRates[date]['funds']['ETN']['payoutAmountUSD'] + ',' + payoutRates[date]['funds']['ETN']['payoutAmountBTC'] +  ',' + payoutRates[date]['funds']['ETN']['missingAmount'] + ',' + payoutRates[date]['funds']['ETN']['fundAmount'] + ','
        + payoutRates[date]['funds']['ETN']['reqiredBuffer'] + ',' + payoutRates[date]['funds']['ETN']['totalMarket'] + ',' + payoutRates[date]['funds']['ETN']['totalRelBal'] +  ',' + payoutRates[date]['funds']['ETN']['totalRelExtra'] + ',' + payoutRates[date]['funds']['ETN']['totalBuffer'] + ','+ payoutRates[date]['funds']['ETN']['exchangeUSD']  + ','
        + payoutRates[date]['funds']['ETN']['exchangeBTC'];
                     
        //console.log(str0);          

        data.push(str0);
}

fileAppender(data);
//console.log(data);


 function fileAppender(array){
//let fileAppender = (array) => {

    const writeStream = fs.createWriteStream('ETN-payouts032020.csv');
    
    const pathName = writeStream.path;
    
    //let array = ['1','2','3','4','5','6','7'];
    
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
