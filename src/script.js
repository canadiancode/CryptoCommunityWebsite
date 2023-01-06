function getPrice() {
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365&interval=daily')
    .then(res => res.json())
    .then (data => {
        console.log(data);
    })
}

getPrice();


// The minimum amount of info we need for a chart using the ApexCharts JS library
var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();