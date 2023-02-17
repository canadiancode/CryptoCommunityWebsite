  // CODE FOR THE CATEGORY LIST FUNCTION
// display and hide the category list
const openCloseCategoriesDiv = document.querySelector('.openCloseCategoriesDiv');
const categoryHeadingContainer = document.querySelectorAll('.categoryHeadingContainer');
const openCloseCategoriesDivText = document.querySelector('.containerSignDiv');
const chartButtonContainer = document.querySelectorAll('.chartButtonContainer');
function openOrCloseCategoryList() {

  // variables
  const chartSelectionPanelContainer = document.querySelector('.chartSelectionPanelContainer');
  const openCategoryListIcon = document.querySelector('.fa-arrow-right-to-bracket');

  if (openCloseCategoriesDiv.classList.contains('openCategoryList')) {
    openCloseCategoriesDiv.classList.remove('openCategoryList');
    chartSelectionPanelContainer.style.transform = 'translateX(-100%)';
    openCategoryListIcon.style.transform = 'rotate(0deg)';
    openCloseCategoriesDivText.style.transform = 'rotate(-90deg) translateY(0%)';
  } else {
    openCloseCategoriesDiv.classList.add('openCategoryList');
    chartSelectionPanelContainer.style.transform = 'translateX(0%)';
    openCategoryListIcon.style.transform = 'rotate(180deg)';
    openCloseCategoriesDivText.style.transform = 'rotate(-90deg) translateY(-100%)';
  }
}
openCloseCategoriesDiv.addEventListener('click', openOrCloseCategoryList);
openCloseCategoriesDivText.addEventListener('click', openOrCloseCategoryList);
for (let i = 0; i < categoryHeadingContainer.length; i++) {

  // variables
  const categoryArrowOpen = document.querySelectorAll('.fa-arrow-down-short-wide');
  const categoryArrowClose = document.querySelectorAll('.fa-arrow-up-short-wide');

  // function to open or close the category
  function openOrCloseCategory() {
    if (chartButtonContainer[i].classList.contains('opened')) {
      chartButtonContainer[i].classList.remove('opened');
      categoryArrowOpen[i].style.display = 'none';
      categoryArrowClose[i].style.display = 'block';

    } else {
      chartButtonContainer[i].classList.add('opened');
      categoryArrowOpen[i].style.display = 'block';
      categoryArrowClose[i].style.display = 'none';
    }
  };
  categoryHeadingContainer[i].addEventListener('click', openOrCloseCategory);
};

  // START OF THE DATA PAGES // START OF THE DATA PAGES // START OF THE DATA PAGES
const dataPageContainer = document.querySelectorAll('.dataSubPageContainer');
const dataPageOptions = {
  rootMargin: "0px",
  threshold: 0
};

  // MARKETS PAGE -- CRYPTOCURRENCIES // MARKETS PAGE -- CRYPTOCURRENCIES // MARKETS PAGE -- CRYPTOCURRENCIES
const marketsCryptoObserver = new IntersectionObserver(function(entries, marketsCryptoObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      // CODE FOR CHANGING THE CHART SCALE
      let chartScale = 'linear'; //logarithmic or linear
      const autoChartOption = document.querySelector('.autoChartOption');
      autoChartOption.addEventListener('click', changeChartScale)
      const logChartOption = document.querySelector('.logChartOption');
      logChartOption.addEventListener('click', changeChartScale);
      function changeChartScale(event) {
      if (event.target.classList.contains('autoChartOption')) {
          autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          chartScale = 'linear';
          displayedChart.options.scales.y.type = chartScale;
          displayedChart.update();
      } else {
              autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
              logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
              chartScale = 'logarithmic';
              displayedChart.options.scales.y.type = chartScale;
              displayedChart.update();
          }
      };

      // variables for the chart
      let chartTime = []; //fetched data
      let selectedTimePeriod = '365';
      let assetPriceData = []; //fetched data
      let selectedAssetID = 'bitcoin';
      let selectedAssetName = 'Bitcoin';

      // fetch initial data
      try {
        async function fetchData() {
          let URL = `https://api.coingecko.com/api/v3/coins/${selectedAssetID}/market_chart?vs_currency=usd&days=${selectedTimePeriod}`;
          let response = await fetch(URL);
          let data = await response.json();
          let priceAndTimeData = await data.prices;

          // adding the fetched time to the chart
          for (const time of priceAndTimeData) {
            let epochTimeframe = await time[0];
            let formattedDate = new Date(epochTimeframe);
            let longTimeframe = formattedDate.toUTCString();
            let timeframe = longTimeframe.substring(5, 16);
            chartTime.push(timeframe);
          };
          displayedChart.data.labels = chartTime;

          // adding the fetched price to the chart
          let fetchedPriceData = [];
          for (const price of priceAndTimeData) {
            let prices = await price[1];
            fetchedPriceData.push(prices);
          };
          let DataObject = {
            label: `Price of ${selectedAssetName}`,
            data: fetchedPriceData,
            fill: false,
            pointRadius: 0,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            yAxisID: 'y'
          };
          assetPriceData.push(DataObject);
          displayedChart.data.datasets = assetPriceData;

          // update the chart with data and time
          displayedChart.update();
        }
        fetchData();
      }
      catch(error) {
        console.log('could not fetch initial data...');
      }

        // generate list of assets
      const assetListURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';
      const assetListEl = document.querySelector('.assetList');
      const addDataButton = document.querySelector('.addDataButton');
      async function getAssetList() {
        try {
            // fetch the list of assets
            let response = await fetch(assetListURL);
            let assetListData = await response.json();

            for (const asset of assetListData) {
                // for the ID 
                let assetID = await asset.id;
                const listOptions = document.createElement('option');
                listOptions.classList.add(assetID);

                // for the display name
                let assetName = await asset.name;
                listOptions.value = await assetName;

                // add option onto the dropdown selection
                listOptions.appendChild(document.createTextNode(assetName));
                assetListEl.appendChild(listOptions);
            }
        }
        catch(error) {
            console.log(error);
            console.log('cannot get list of assets from CoinGecko...');
        }
      }
      getAssetList();

      // change asset
      function changeAsset() {
        try {

          // clear old chart history
          assetPriceData = [];
          chartTime = [];
          selectedAssetID = '';
          selectedAssetName = '';

              // change the data on the chart
          const changeAssetEl = document.querySelector('.assetList');
          let selectedOption = changeAssetEl.options[changeAssetEl.selectedIndex];
          selectedAssetName = selectedOption.value;
          selectedAssetID = selectedOption.classList[0];

          async function changeDisplayedAsset() {
            let URL = `https://api.coingecko.com/api/v3/coins/${selectedAssetID}/market_chart?vs_currency=usd&days=${selectedTimePeriod}`;
            let response = await fetch(URL);
            let data = await response.json();
            let priceAndTimeData = await data.prices;
  
            // adding the fetched time to the chart
            for (const time of priceAndTimeData) {
              let epochTimeframe = await time[0];
              let formattedDate = new Date(epochTimeframe);
              let longTimeframe = formattedDate.toUTCString();
              let timeframe = longTimeframe.substring(4, 16);
              chartTime.push(timeframe);
            };
            displayedChart.data.labels = chartTime;
  
            // adding the fetched price to the chart
            let fetchedPriceData = [];
            for (const price of priceAndTimeData) {
              let prices = await price[1];
              fetchedPriceData.push(prices);
            };
            let DataObject = {
              label: `Price of ${selectedAssetName}`,
              data: fetchedPriceData,
              fill: false,
              pointRadius: 0,
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              borderColor: '#FFFFFF',
              yAxisID: 'y'
            };
            assetPriceData.push(DataObject);
            displayedChart.data.datasets = assetPriceData;
  
            // update the chart with data and time
            displayedChart.update();
          };
          changeDisplayedAsset();

        } 
        catch(error) {
          console.log('Could not add new asset to chart....')
        }
      }
      const changeAssetEl = document.querySelector('.assetList');
      changeAssetEl.addEventListener('change', changeAsset);


      // change timeframe
      function changeTimeframe() {
        try {
          selectedTimePeriod = '';
          assetPriceData = [];
          chartTime = [];

          const timeframeList = document.querySelector('.timeframeList');
          selectedTimePeriod = timeframeList.value;
  
          async function fetchNewTimeframe() {
            let URL =  `https://api.coingecko.com/api/v3/coins/${selectedAssetID}/market_chart?vs_currency=usd&days=${selectedTimePeriod}`;
            let response = await fetch(URL);
            let data = await response.json();
            let priceAndTimeData = await data.prices;

            // adding the newly fetched time to the chart
            for (const time of priceAndTimeData) {
              let epochTimeframe = await time[0];
              let formattedDate = new Date(epochTimeframe);
              let longTimeframe = formattedDate.toUTCString();
              let timeframe = longTimeframe.substring(4, 16);
              chartTime.push(timeframe);
            }
            displayedChart.data.labels = chartTime;

            // adding the fetched price to the chart
            let fetchedPriceData = [];
            for (const price of priceAndTimeData) {
              let prices = await price[1];
              fetchedPriceData.push(prices);
            };
            let DataObject = {
              label: `Price of ${selectedAssetName}`,
              data: fetchedPriceData,
              fill: false,
              pointRadius: 0,
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              borderColor: '#FFFFFF',
              yAxisID: 'y'
            };
            assetPriceData.push(DataObject);
            displayedChart.data.datasets = assetPriceData;
  
            // update the chart with data and time
            displayedChart.update();
  
          }
          fetchNewTimeframe();
  
  
        }
        catch(error) {
          console.log('could not fetch new timeframe data...');
        }
      }
      const selectedTimePeriodEl = document.querySelector('.timeframeList');
      selectedTimePeriodEl.addEventListener('change', changeTimeframe);
      
      // CODE FOR THE CHART.JS LIBRARY
      const ctx = document.querySelector('.marketCryptoPrice');
      let displayedChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: chartTime,
          datasets: assetPriceData,
        },
        options: {
          type: chartScale,
          display: true,
          position: 'left',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                color: '#232323',
              },
              ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                    return '$' + value.toLocaleString("en-US");
                }
            }
            }
          }
        }
      });
      // end of the Intersection Observer
    };
  })
}, dataPageOptions);
const marketCryptoPriceContainer = document.querySelector('.marketCryptocurrrencyChartContainer');
marketsCryptoObserver.observe(marketCryptoPriceContainer);


  // MARKETS PAGE -- PUBLIC EXCHANGES, STAKERS & MINERS // MARKETS PAGE -- PUBLIC EXCHANGES, STAKERS & MINERS
const marketsStocksObserver = new IntersectionObserver(function(entries, marketsStocksObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const myAPIkey = 'GH9DTBAMAJL2HKD1';

      // CODE FOR CHANGING THE CHART SCALE
      let chartScale = 'logarithmic'; //logarithmic or linear
      const autoChartOption = document.querySelector('.stockAutoChartOption');
      autoChartOption.addEventListener('click', changeChartScale)
      const logChartOption = document.querySelector('.stockLogChartOption');
      logChartOption.addEventListener('click', changeChartScale);
      function changeChartScale(event) {
      if (event.target.classList.contains('autoChartOption')) {
        autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
        logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
        chartScale = 'linear';
        stockPriceChart.options.scales.y.type = chartScale;
        stockPriceChart.update();
      } 
      else {
        autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
        logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
        chartScale = 'logarithmic';
        stockPriceChart.options.scales.y.type = chartScale;
        stockPriceChart.update();
      }
      };

      // variables for price, time, and ticker
      let timeframeData = [];
      let stockPriceData = [];
      let reversedFetchedPrice = [];
      let fetchedPriceData = [];
      let ticker = 'MSTR';
      let nameOfPublicCompany = 'MicroStrategy Inc.';

      // INVESTMENT RETURN DATA AND CHART
      let selectedAsset = 'bitcoin';
      let investmentAmounts = [];
      let backgroundColor = 'rgb(255,255,255, 0.15)';

      let timeframe = 'TIME_SERIES_DAILY_ADJUSTED'; // TIME_SERIES_DAILY_ADJUSTED, TIME_SERIES_WEEKLY_ADJUSTED
      let timeSeries = 'Time Series (Daily)'; // Time Series (Daily), Weekly Adjusted Time Series

      // function to initially fetch the data
      async function fetchData() {
        try {
          const options = {
              method: 'GET',
              headers: {
                  'X-RapidAPI-Key': '5abcde3910mshe635fb57c055c0fp10d768jsna1801b9b4a77',
                  'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
              }
          };

          // Creating the URL and fetching the data
          let URL = `https://www.alphavantage.co/query?function=${timeframe}&symbol=${ticker}&apikey=${myAPIkey}`;
          let response = await fetch(URL);
          let data = await response.json();

          // to fetch timeframe
          timeframeData = [];
          let unorderedTimeframeData = [];
          let timeSeriesData = await data[`${timeSeries}`];
          for (const time in timeSeriesData) {  
            unorderedTimeframeData.push(time);
          }
          timeframeData = unorderedTimeframeData.reverse();
          stockPriceChart.data.labels = timeframeData;

          // to fetch price data
          stockPriceData = [];
          reversedFetchedPrice = [];
          fetchedPriceData = [];
          let priceSeriesData = await data[`${timeSeries}`];
          let allPriceDataObject = Object.values(priceSeriesData);
          for (let i = 0; i < allPriceDataObject.length; i++) {
            let allPrices = allPriceDataObject[`${i}`];
            let closePrices = Object.values(allPrices);
            let closePrice = Number(closePrices[4]);
            reversedFetchedPrice.push(closePrice);
          };
          fetchedPriceData = reversedFetchedPrice.reverse();
          
          let dataObject = {
            label: `Price of ${ticker}`,
            data: fetchedPriceData,
            fill: false,
            pointRadius: 0,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            yAxisID: 'y'
          };
          stockPriceData.push(dataObject);
          stockPriceChart.data.datasets = stockPriceData;

          // update chart
          stockPriceChart.update();
        } 
        catch(error) {
          console.log(error);
          console.log('could not fetch data');
        };
      };
      fetchData();

      async function fetchStockList() {

        try {
          let URL = `https://api.coingecko.com/api/v3/companies/public_treasury/${selectedAsset}`;

          let response = await fetch(URL);
          let data = await response.json();

          // fetch the names of the stocks
          let stockName = await data['companies'];
          const stockList = document.querySelector('.stockList');
          let arrayNumber = 0;
          for (const names of stockName) {
            // create the element for the drop down list
            const optionEl = document.createElement('option');
            optionEl.classList.add(arrayNumber);
            arrayNumber++;
            let nameOfStock = names['name'];
            optionEl.appendChild(document.createTextNode(nameOfStock));
            let fullTicker = names['symbol'];
            let justTicker = fullTicker.split(':').pop();
            let singleticker = justTicker.trim();

            // change necessary ticker names
            if (singleticker == 'Hut-8') {
              singleticker = 'HUT';
            } else if (singleticker == '3659') {
              singleticker = 'NEXOF';
            } else if (singleticker == 'VYGR') {
              singleticker = 'VYGVQ';
            } else if (singleticker == 'BIGG') {
              singleticker = 'BBKCF';
            } else if (singleticker == 'DCC') {
              singleticker = 'DGGXF';
            } else if (singleticker == 'FORT') {
              singleticker = 'FRTTF';
            } else if (singleticker == 'MODE') {
              singleticker = 'MODGF';
            } else if (singleticker == 'DASH') {
              singleticker = 'NPPTF';
            }
            optionEl.value = singleticker;

            // if function to remove unnecessary stocks from the list
            if (singleticker !== '1357' && singleticker !== 'AKER' && singleticker !== 'HODL' && singleticker !== 'BROOK') {
              stockList.appendChild(optionEl);
            };
          }

          // fetch the data on the text section
          let publicStockHoldingFullName = document.querySelector('.publicStockHoldingFullName');
          let selectedStock = stockList.options[stockList.selectedIndex].text;
          publicStockHoldingFullName.innerHTML = selectedStock; 
          let publicStockHoldingTicker = document.querySelector('.publicStockHoldingTicker');
          publicStockHoldingTicker.innerHTML = stockList.value;
          let nameofSelectedCryptoPublicCompany = document.querySelector('.nameofSelectedCryptoPublicCompany');
          let UpperCaseSelectedAsset = selectedAsset.charAt(0).toUpperCase() + selectedAsset.slice(1);
          nameofSelectedCryptoPublicCompany.innerHTML = UpperCaseSelectedAsset;

          // fetch the total holding data
          let firstCompanydata = await data['companies'][0];
          let companyTotalCryptoHoldings = document.querySelector('.companyTotalCryptoHoldings');
          let unformattedTotalCryptoHoldings = await firstCompanydata['total_holdings'];
          let totalCryptoHoldings = unformattedTotalCryptoHoldings.toLocaleString();
          companyTotalCryptoHoldings.innerHTML = totalCryptoHoldings;
          let companyTotalUSDholdings = document.querySelector('.companyTotalUSDholdings');
          let unformattedUsdHoldings = await firstCompanydata['total_current_value_usd'];
          let totalUsdHoldings = unformattedUsdHoldings.toLocaleString();
          companyTotalUSDholdings.innerHTML = totalUsdHoldings;

          // fetch the dominance and total supply
          let percentOfTotalSupply = document.querySelector('.publicCompanyMarketCapDominance');
          percentOfTotalSupply.innerHTML = firstCompanydata['percentage_of_total_supply'];

          // fetch the investment returns
          let InitialInvestmentValue = await stockName[0]['total_entry_value_usd'];
          let = currentInvestmentValue = await stockName[0]['total_current_value_usd'];
          publicCompanyInvestmentReturns.data.datasets.forEach(data => {
            data.data.push(InitialInvestmentValue);
            data.data.push(currentInvestmentValue);
          });

          function changeColorOfInvestmentChart() {
            if (InitialInvestmentValue < currentInvestmentValue) {
              backgroundColor = 'rgb(0,255,0, 0.15)';
            } else {
              backgroundColor = 'rgb(255,0,0, 0.15)';
            }
            publicCompanyInvestmentReturns.data.datasets.forEach(data => {
              data.backgroundColor = backgroundColor;
            });
          };
          changeColorOfInvestmentChart();

          publicCompanyInvestmentReturns.update();
        }
        catch(error) {
          console.log(error);
          console.log('Could not fetch the list of stocks...')
        }
      };
      fetchStockList();

      // function to initially fetch the stock names and company data
      function changeTimeframe() {

        if (publicStockChartTimeframe.value == 'TIME_SERIES_DAILY_ADJUSTED') {
          timeSeries = 'Time Series (Daily)'; // Time Series (Daily), Weekly Adjusted Time Series
          timeframe = publicStockChartTimeframe.value;

        } else {
          timeSeries = 'Weekly Adjusted Time Series'; // Time Series (Daily), Weekly Adjusted Time Series
          timeframe = publicStockChartTimeframe.value;
        }
        fetchData();
        changeHeldAsset();
        fetchStockList();
      };
      const publicStockChartTimeframe = document.querySelector('.publicStockTimeframeSelection');
      publicStockChartTimeframe.addEventListener('change', changeTimeframe);

      // change the displayed stock data and price action
      function changeDisplayedStock() {
        // for the stock chart
        const listOfCryptoCompanies = document.querySelector('.listOfCryptoCompanies');
        let selectedStockTicker = listOfCryptoCompanies.value;
        ticker = selectedStockTicker;
        fetchData();

        // change company full name and ticker symbol
        let selectedStock = listOfCryptoCompanies.options[listOfCryptoCompanies.selectedIndex].text;
        let publicStockHoldingFullName = document.querySelector('.publicStockHoldingFullName');
        publicStockHoldingFullName.innerHTML = selectedStock;
        let publicStockHoldingTicker = document.querySelector('.publicStockHoldingTicker');
        publicStockHoldingTicker.innerHTML = listOfCryptoCompanies.value;
        let nameofSelectedCryptoPublicCompany = document.querySelector('.nameofSelectedCryptoPublicCompany');
        nameofSelectedCryptoPublicCompany.innerHTML = selectedAsset.charAt(0).toUpperCase() + selectedAsset.slice(1);

        // change the company holdings and % of total supply
        async function reFetchCompanyData() {
          try {

            let URL = `https://api.coingecko.com/api/v3/companies/public_treasury/${selectedAsset}`;
            let response = await fetch(URL);
            let data = await response.json();
            // for the stock number within the list
            let selectedStockEl = listOfCryptoCompanies.options[listOfCryptoCompanies.selectedIndex];
            let selectedStockOrderValue = Array.from(selectedStockEl.classList);
            let stockNumberInArray = selectedStockOrderValue.toString();
            // the crypto holdings
            let companyCryptoHoldings = await data['companies'][stockNumberInArray]['total_holdings'];
            let companyTotalCryptoHoldings = document.querySelector('.companyTotalCryptoHoldings');
            companyTotalCryptoHoldings.innerHTML = companyCryptoHoldings.toLocaleString();
            // the holdings in USD
            let companyUsdHoldings = await data['companies'][stockNumberInArray]['total_current_value_usd'];
            let companyTotalUsdHoldings = document.querySelector('.companyTotalUSDholdings');
            companyTotalUsdHoldings.innerHTML = companyUsdHoldings.toLocaleString();

            // the % of total supply
            let percentOfTotalSupply = await data['companies'][stockNumberInArray]['percentage_of_total_supply'];
            let percentOfTotalSupplyEl = document.querySelector('.publicCompanyMarketCapDominance');
            percentOfTotalSupplyEl.innerHTML = percentOfTotalSupply;

            // the investment value
            investmentAmounts = [];
            let initialInvestmentValue = await data['companies'][stockNumberInArray]['total_entry_value_usd'];
            let currentInvestmentValue = await data['companies'][stockNumberInArray]['total_current_value_usd'];
            investmentAmounts.push(initialInvestmentValue);
            investmentAmounts.push(currentInvestmentValue);
            publicCompanyInvestmentReturns.data.datasets[0].data = investmentAmounts;
            if (initialInvestmentValue < currentInvestmentValue) {
              backgroundColor = 'rgb(0,255,0, 0.15)';
            } else {
              backgroundColor = 'rgb(255,0,0, 0.15)';
            }
            publicCompanyInvestmentReturns.data.datasets[0].backgroundColor = backgroundColor;
            publicCompanyInvestmentReturns.update();



            console.log(investmentAmounts);
  
          }
          catch(error) {
            console.log(error);
            console.log('Could not change displayed stock info...')
          }
        };
        reFetchCompanyData();

      };
      const listOfCryptoCompanies = document.querySelector('.listOfCryptoCompanies');
      listOfCryptoCompanies.addEventListener('change', changeDisplayedStock);

      // if the user changes the held asset
      const heldAssetByPublicCompanies = document.querySelectorAll('.heldAssetByPublicCompanies');
      function changeHeldAsset(event) {
        const chartBTCButton = document.querySelector('.chartBTCButton');
        const chartETHButton = document.querySelector('.chartETHButton');
        if (event.target.value == 'bitcoin') {
          chartBTCButton.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          chartETHButton.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          selectedAsset = event.target.value;
          changeDisplayedStock();
        } else {
          chartBTCButton.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          chartETHButton.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          selectedAsset = event.target.value;
          changeDisplayedStock();
        }

      };
      heldAssetByPublicCompanies.forEach(asset => {
        asset.addEventListener('click', changeHeldAsset);
      });

      // CODE FOR THE MAIN PRICE CHART
      const stockPriceCanvas = document.querySelector('.marketStockPrice');
      let stockPriceChart = new Chart(stockPriceCanvas, {
        type: 'line',
        data: {
          labels: timeframeData,
          datasets: stockPriceData,
        },
        options: {
          type: chartScale,
          display: true,
          position: 'left',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                color: '#232323',
              },
              ticks: {
                callback: function(value, index, values) {
                  return '$' + value.toLocaleString("en-US");
                }
              }
            }
          }
        }
      });

      // CODE FOR THE INVESTMENT RETURN CHART
      const investmentReturnChart = document.querySelector('.publicStockAssetHoldingChart');
      let publicCompanyInvestmentReturns = new Chart(investmentReturnChart, {
        type: 'line',
        data: {
          labels: ['Initial Investment', 'Current Value'],
          datasets: [{
            label: 'Gain/Loss',
            data: investmentAmounts,
            fill: true,
            pointRadius: 0,
            borderWidth: 1,
            backgroundColor: backgroundColor,
            borderColor: '#FFFFFF',
          }]
        },
        options: {
          type: 'logarithmic',
          display: true,
          position: 'left',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                color: '#232323',
              },
              ticks: {
                beginAtZero: false,
                callback: function(value, index, values) {
                  return '$' + value / 1e6 + ' ' + 'M';;
                }
              }
            }
          }
        }
      });
      window.addEventListener("resize", (event) => {
        const publicStockAssetHoldingChart = document.querySelector('.publicStockAssetHoldingChart');
        publicStockAssetHoldingChart.style.width = '100%';
      });




    // End of the if statement for the intersection observer
    }
  })
}, dataPageOptions);


const marketPublicstockChartContainer = document.querySelector('.marketPublicstockChartContainer');
marketsStocksObserver.observe(marketPublicstockChartContainer);

