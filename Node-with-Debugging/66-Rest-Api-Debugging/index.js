var axios = require('axios');

var url = `https://restcountries.com/v2/all`;

axios.get(url).then(function ( response ) {
   let countryList = response.data;
   let StatusCode = response.status;
    console.log(countryList);
    console.log(StatusCode);
}).catch(function (error) {
   console.log(error);
})