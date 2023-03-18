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

// CHANGE PAGE TO SELECED DATA DASHBOARD
function loadFirstDataDashboard() {
  const dataSubPageContainer = document.querySelectorAll('.dataSubPageContainer');
  for (let i = 0; i < dataSubPageContainer.length; i++) {
    dataSubPageContainer[i].style.display = 'none';
  };
  // change the selection below for what to show when building
  const showThisContainer = document.querySelector('.totalValueLockedContainer');
  showThisContainer.style.display = 'flex';

}
loadFirstDataDashboard();
function changeDisplayedDashboard(event) {
  const dataSubPageContainer = document.querySelectorAll('.dataSubPageContainer');
  for (let i = 0; i < dataSubPageContainer.length; i++) {
    dataSubPageContainer[i].style.display = 'none';
  };

  if (event.target.classList.contains('priceHolingsBtn')) {
    const priceContainer = document.querySelector('.priceContainer');
    priceContainer.style.display = 'flex';
  }
  else if (event.target.classList.contains('compareMarketCapBtn')) {
    const compareMarketCapContainer = document.querySelector('.compareMarketCapContainer');
    compareMarketCapContainer.style.display = 'flex';
  }
  else if (event.target.classList.contains('marketVolumeBtn')) {
    const volumePageContainer = document.querySelector('.volumePageContainer');
    volumePageContainer.style.display = 'flex';
  } else if (event.target.classList.contains('dataDashboardSelectionBtn')) {
    const totalValueLockedContainer = document.querySelector('.totalValueLockedContainer');
    totalValueLockedContainer.style.display = 'flex';
  } 
  else {
    console.log('no displayed charts available');
  }
};
const dataDashboardSelectionBtn = document.querySelectorAll('.dataDashboardSelectionBtn');
dataDashboardSelectionBtn.forEach(button => {
  button.addEventListener('click', changeDisplayedDashboard);
  button.addEventListener('click', openOrCloseCategoryList);
});


  // START OF THE DATA PAGES -- START OF THE DATA PAGES -- START OF THE DATA PAGES
  // START OF THE DATA PAGES -- START OF THE DATA PAGES -- START OF THE DATA PAGES

  // the option for the intersection observer
const dataPageContainer = document.querySelectorAll('.dataSubPageContainer');
const dataPageOptions = {
  rootMargin: "0px",
  threshold: 0
};

  // MARKETS PAGE -- CRYPTOCURRENCY PRICES // -- CRYPTOCURRENCY PRICES // CRYPTOCURRENCY PRICES
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
          stockList.innerHTML = '';
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
          setTimeout(fetchStockList, 3000);
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
      window.addEventListener("resize", (event) => {
        stockPriceCanvas.style.width = '100%';
        stockPriceCanvas.style.height = '100%';
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
                  return '$' + value / 1e6 + ' ' + 'M';
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


  // MARKETS PAGE -- COMPARE MARKET CAPS // COMPARE MARKET CAPS // COMPARE MARKET CAPS
const marketsCompareMarketCapObserver = new IntersectionObserver(function(entries, marketsCompareMarketCapObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      // CODE FOR CHANGING THE CHART SCALE
      let chartScale = 'linear'; //logarithmic or linear
      const autoChartOption = document.querySelector('.marketCapAutoChartOption');
      autoChartOption.addEventListener('click', changeChartScale)
      const logChartOption = document.querySelector('.marketCaplogChartOption');
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

      // variables for timeframe
      let chartTime = []; //fetched data
      let selectedTimePeriod = '365';

      // variables for selected assets
      let assetPriceData = []; //fetched data
      let firstSelectedAssetID = 'bitcoin';
      let firstSelectedAssetName = 'Bitcoin';
      let secondSelectedAssetID = 'ethereum';
      let secondSelectedAssetName = 'Ethereum';

      // fetch initial data
      async function fetchData() {
          try {
          // FETCH ASSET 1 DATA -- FETCH ASSET 1 DATA 
          let URLOne = `https://api.coingecko.com/api/v3/coins/${firstSelectedAssetID}/market_chart?vs_currency=usd&days=${selectedTimePeriod}`;
          let responseOne = await fetch(URLOne);
          let dataOne = await responseOne.json();
          let marketcapAndTimeDataOne = await dataOne.market_caps;

          // FETCH ASSET 2 DATA -- FETCH ASSET 2 DATA
          let URLTwo = `https://api.coingecko.com/api/v3/coins/${secondSelectedAssetID}/market_chart?vs_currency=usd&days=${selectedTimePeriod}`;
          let responseTwo = await fetch(URLTwo);
          let dataTwo = await responseTwo.json();
          let marketcapAndTimeDataTwo = await dataTwo.market_caps;

          // ADD LONGEST TIMEFRAME
          if (marketcapAndTimeDataOne.length > marketcapAndTimeDataTwo.length) {
            // clear old data from chart
            chartTime = [];
            assetPriceData = [];
            
            // adding the fetched time to the chart
            for (const time of marketcapAndTimeDataOne) {
              let epochTimeframe = await time[0];
              let formattedDate = new Date(epochTimeframe);
              let longTimeframe = formattedDate.toUTCString();
              let timeframe = longTimeframe.substring(5, 16);
              chartTime.push(timeframe);
            };

            // ADD ASSET 1 DATA -- ADD ASSET 1 DATA
            let fetchedPriceData = [];
            for (const marketCap of marketcapAndTimeDataOne) {
              let marketCaps = await marketCap[1];
              fetchedPriceData.push(marketCaps);
            };
            let DataObject = {
              label: `Price of ${firstSelectedAssetName}`,
              data: fetchedPriceData,
              fill: false,
              pointRadius: 0,
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              borderColor: '#FFFFFF',
              yAxisID: 'y'
            };
            assetPriceData.push(DataObject);

            // ADD ASSET 2 DATA -- ADD ASSET 2 DATA
            let missingZeroValues = marketcapAndTimeDataOne.length - marketcapAndTimeDataTwo.length;
            let fetchedPriceDataTwo = [];
            for (let i = 0; i < missingZeroValues; i++) {
              fetchedPriceDataTwo.push('');
            };

            for (const marketCap of marketcapAndTimeDataTwo) {
              let marketCaps = await marketCap[1];
              fetchedPriceDataTwo.push(marketCaps);
            };
            let DataObjectTwo = {
              label: `Price of ${secondSelectedAssetName}`,
              data: fetchedPriceDataTwo,
              fill: false,
              pointRadius: 0,
              borderWidth: 1,
              backgroundColor: '#FF0000',
              borderColor: '#FF0000',
              yAxisID: 'y'
            };
            assetPriceData.push(DataObjectTwo);
          } else {
            // clear old data from chart
            chartTime = [];
            assetPriceData = [];

            // adding the fetched time to the chart
            for (const time of marketcapAndTimeDataTwo) {
              let epochTimeframe = await time[0];
              let formattedDate = new Date(epochTimeframe);
              let longTimeframe = formattedDate.toUTCString();
              let timeframe = longTimeframe.substring(5, 16);
              chartTime.push(timeframe);
            };

            // ADD ASSET 1 DATA -- ADD ASSET 1 DATA
            let fetchedPriceData = [];
            let missingZeroValues = marketcapAndTimeDataTwo.length - marketcapAndTimeDataOne.length;
            for (let i = 0; i < missingZeroValues; i++) {
              fetchedPriceData.push('');
            };
            for (const marketCap of marketcapAndTimeDataOne) {
              let marketCaps = await marketCap[1];
              fetchedPriceData.push(marketCaps);
            };
            let DataObject = {
              label: `Price of ${firstSelectedAssetName}`,
              data: fetchedPriceData,
              fill: false,
              pointRadius: 0,
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              borderColor: '#FFFFFF',
              yAxisID: 'y'
            };
            assetPriceData.push(DataObject);

            // ADD ASSET 2 DATA -- ADD ASSET 2 DATA
            let fetchedPriceDataTwo = [];
            for (const marketCap of marketcapAndTimeDataTwo) {
              let marketCaps = await marketCap[1];
              fetchedPriceDataTwo.push(marketCaps);
            };
            let DataObjectTwo = {
              label: `Price of ${secondSelectedAssetName}`,
              data: fetchedPriceDataTwo,
              fill: false,
              pointRadius: 0,
              borderWidth: 1,
              backgroundColor: '#FF0000',
              borderColor: '#FF0000',
              yAxisID: 'y'
            };
            assetPriceData.push(DataObjectTwo);
          };


          // UPDATE CHART WITH DATA
          displayedChart.data.datasets = assetPriceData;
          displayedChart.data.labels = chartTime;
          displayedChart.update();
        }
        catch(error) {
          console.log('could not fetch initial data...');
        }
      }
      fetchData();

        // generate list of assets and add market cap metrics
      const assetListURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';
      const assetListElOne = document.querySelector('.cryptoCompareAssetListOne');
      const assetListElTwo = document.querySelector('.cryptoCompareAssetListTwo');
      async function getAssetList() {
        try {
          // the number of the asset inside the array
          let assetCountInArrayOne = 0;
          let assetCountInArrayTwo = 0;

          // fetch the list of assets
          let response = await fetch(assetListURL);
          let assetListData = await response.json();

          console.log(assetListData);

          // ASSET 1 DATA
          for (const asset of assetListData) {
            // for the ID 
            let assetID = await asset.id;
            const listOptions = document.createElement('option');
            listOptions.classList.add(assetID);
            listOptions.classList.add(assetCountInArrayOne);
            assetCountInArrayOne++;

            // for the display name
            let assetName = await asset.name;
            listOptions.value = await assetName;

            // add option onto the dropdown selection
            listOptions.appendChild(document.createTextNode(assetName));
            // add element to lists
            assetListElOne.appendChild(listOptions);
          }
          // variables for the asset metrics within panel
          let marketCapValuationOne = document.querySelector('.marketCapValuationOne');
          let fullyDilutedValOne = document.querySelector('.fullyDilutedValOne');
          let percentFromATHOne = document.querySelector('.percentFromATHOne');

          // getting the number within the array
          let firstListOfCryptos = document.querySelector('.cryptoCompareAssetListOne');
          let firstNumberInCryptoList = firstListOfCryptos.options[firstListOfCryptos.selectedIndex];
          let firstNumberInList = firstNumberInCryptoList.classList[1];

          // is it in the millions or billions
          let totalMarketCapOne = assetListData[firstNumberInList]['market_cap'];
          if (totalMarketCapOne > 1000000000) {
            // market cap
            let shortenedMarketCapOne = totalMarketCapOne / 1000000000;
            let formattedTotalMarketCapOne = shortenedMarketCapOne.toLocaleString();
            marketCapValuationOne.innerHTML = `$ ${formattedTotalMarketCapOne} B`;

            // fully diluted valuation
            let fullyDilutedvalOne = assetListData[firstNumberInList]['fully_diluted_valuation'];
            let shortendedFullyDilutedValOne = (fullyDilutedvalOne / 1000000000).toLocaleString();
            let formattedFullyDilutedValOne = `$ ${shortendedFullyDilutedValOne} B`;
            fullyDilutedValOne.innerHTML = formattedFullyDilutedValOne;
          } else {
            // market cap
            let totalMarketCapOne = assetListData[firstNumberInList]['market_cap'];
            let shortenedMarketCapOne = totalMarketCapOne / 1000000000;
            let formattedTotalMarketCapOne = shortenedMarketCapOne.toLocaleString();
            marketCapValuationOne.innerHTML = `$ ${formattedTotalMarketCapOne} M`;

            // fully diluted valuation
            let fullyDilutedvalOne = assetListData[firstNumberInList]['fully_diluted_valuation'];
            let shortendedFullyDilutedValOne = (fullyDilutedvalOne / 1000000000).toLocaleString();
            let formattedFullyDilutedValOne = `$ ${shortendedFullyDilutedValOne} M`;
            fullyDilutedValOne.innerHTML = formattedFullyDilutedValOne;
          }
          // % from all time high
          let percentFromAllTimeHighOne = assetListData[firstNumberInList]['ath_change_percentage'];
          percentFromATHOne.innerHTML = `% from ATH: ${Math.round(percentFromAllTimeHighOne.toLocaleString())}%`;

          // ASSET 2 DATA
          for (const asset of assetListData) {
            // for the ID 
            let assetID = await asset.id;
            const listOptions = document.createElement('option');
            listOptions.classList.add(assetID);
            listOptions.classList.add(assetCountInArrayTwo);
            assetCountInArrayTwo++;

            // for the display name
            let assetName = await asset.name;
            listOptions.value = await assetName;

            // add option onto the dropdown selection
            listOptions.appendChild(document.createTextNode(assetName));
            // add element to lists
            assetListElTwo.appendChild(listOptions);
          }
          assetListElTwo.selectedIndex = 1;

          let marketCapValuationTwo = document.querySelector('.marketCapValuationTwo');
          let fullyDilutedValTwo = document.querySelector('.fullyDilutedValTwo');
          let percentFromATHTwo = document.querySelector('.percentFromATHTwo');

          let secondListOfCryptos = document.querySelector('.cryptoCompareAssetListTwo');
          let secondNumberInCryptoList = secondListOfCryptos.options[secondListOfCryptos.selectedIndex];
          let secondNumberInList = secondNumberInCryptoList.classList[1];

          // is it in the millions or billions
          let totalMarketCapTwo = assetListData[secondNumberInList]['market_cap'];
          if (totalMarketCapTwo > 1000000000) {
            // market cap
            let shortenedMarketCapTwo = totalMarketCapTwo / 1000000000;
            let formattedTotalMarketCapTwo = shortenedMarketCapTwo.toLocaleString();
            marketCapValuationTwo.innerHTML = `$ ${formattedTotalMarketCapTwo} B`;

            // fully diluted valuation
            let fullyDilutedvalTwo = assetListData[secondNumberInList]['fully_diluted_valuation'];
            let shortendedFullyDilutedValTwo = (fullyDilutedvalTwo / 1000000000).toLocaleString();
            let formattedFullyDilutedValTwo = `$ ${shortendedFullyDilutedValTwo} B`;
            fullyDilutedValTwo.innerHTML = formattedFullyDilutedValTwo;
          } else {
            // market cap
            let totalMarketCapTwo = assetListData[secondNumberInList]['market_cap'];
            let shortenedMarketCapTwo = totalMarketCapTwo / 1000000000;
            let formattedTotalMarketCapTwo = shortenedMarketCapTwo.toLocaleString();
            marketCapValuationTwo.innerHTML = `$ ${formattedTotalMarketCapTwo} M`;

            // fully diluted valuation
            let fullyDilutedvalTwo = assetListData[secondNumberInList]['fully_diluted_valuation'];
            let shortendedFullyDilutedValTwo = (fullyDilutedvalTwo / 1000000000).toLocaleString();
            let formattedFullyDilutedValTwo = `$ ${shortendedFullyDilutedValTwo} M`;
            fullyDilutedValTwo.innerHTML = formattedFullyDilutedValTwo;
          }
          // % from all time high
          let percentFromAllTimeHighTwo = assetListData[secondNumberInList]['ath_change_percentage'];
          percentFromATHTwo.innerHTML = `% from ATH: ${Math.round(percentFromAllTimeHighTwo.toLocaleString())}%`;
        }
        catch(error) {
            console.log(error);
            console.log('cannot get list of assets from CoinGecko...');
        }
      }
      getAssetList();

      async function reFetchAssetMetrics() {
        try {

          // re-fetch the list of assets
          let response = await fetch(assetListURL);
          let assetListData = await response.json();

          // ASSET 1 DATA
          // variables for the asset metrics within panel
          let marketCapValuationOne = document.querySelector('.marketCapValuationOne');
          let fullyDilutedValOne = document.querySelector('.fullyDilutedValOne');
          let percentFromATHOne = document.querySelector('.percentFromATHOne');

          // getting the number within the array
          let firstListOfCryptos = document.querySelector('.cryptoCompareAssetListOne');
          let firstNumberInCryptoList = firstListOfCryptos.options[firstListOfCryptos.selectedIndex];
          let firstNumberInList = firstNumberInCryptoList.classList[1];

          // is it in the millions or billions
          let totalMarketCapOne = assetListData[firstNumberInList]['market_cap'];
          if (totalMarketCapOne > 1000000000) {
            // market cap
            let shortenedMarketCapOne = totalMarketCapOne / 1000000000;
            let formattedTotalMarketCapOne = shortenedMarketCapOne.toLocaleString();
            marketCapValuationOne.innerHTML = `${formattedTotalMarketCapOne} B`;

            // fully diluted valuation
            let fullyDilutedvalOne = assetListData[firstNumberInList]['fully_diluted_valuation'];
            let shortendedFullyDilutedValOne = (fullyDilutedvalOne / 1000000000).toLocaleString();
            let formattedFullyDilutedValOne = `${shortendedFullyDilutedValOne} B`;
            fullyDilutedValOne.innerHTML = formattedFullyDilutedValOne;
          } else {
            // market cap
            let totalMarketCapOne = assetListData[firstNumberInList]['market_cap'];
            let shortenedMarketCapOne = totalMarketCapOne / 1000000000;
            let formattedTotalMarketCapOne = shortenedMarketCapOne.toLocaleString();
            marketCapValuationOne.innerHTML = `${formattedTotalMarketCapOne} M`;

            // fully diluted valuation
            let fullyDilutedvalOne = assetListData[firstNumberInList]['fully_diluted_valuation'];
            let shortendedFullyDilutedValOne = (fullyDilutedvalOne / 1000000000).toLocaleString();
            let formattedFullyDilutedValOne = `${shortendedFullyDilutedValOne} M`;
            fullyDilutedValOne.innerHTML = formattedFullyDilutedValOne;
          }
          // % from all time high
          let percentFromAllTimeHighOne = assetListData[firstNumberInList]['ath_change_percentage'];
          percentFromATHOne.innerHTML = `% from ATH: ${Math.round(percentFromAllTimeHighOne.toLocaleString())}%`;

          // ASSET 2 DATA
          let marketCapValuationTwo = document.querySelector('.marketCapValuationTwo');
          let fullyDilutedValTwo = document.querySelector('.fullyDilutedValTwo');
          let percentFromATHTwo = document.querySelector('.percentFromATHTwo');

          let secondListOfCryptos = document.querySelector('.cryptoCompareAssetListTwo');
          let secondNumberInCryptoList = secondListOfCryptos.options[secondListOfCryptos.selectedIndex];
          let secondNumberInList = secondNumberInCryptoList.classList[1];

          // is it in the millions or billions
          let totalMarketCapTwo = assetListData[secondNumberInList]['market_cap'];
          if (totalMarketCapTwo > 1000000000) {
            // market cap
            let shortenedMarketCapTwo = totalMarketCapTwo / 1000000000;
            let formattedTotalMarketCapTwo = shortenedMarketCapTwo.toLocaleString();
            marketCapValuationTwo.innerHTML = `${formattedTotalMarketCapTwo} B`;

            // fully diluted valuation
            let fullyDilutedvalTwo = assetListData[secondNumberInList]['fully_diluted_valuation'];
            let shortendedFullyDilutedValTwo = (fullyDilutedvalTwo / 1000000000).toLocaleString();
            let formattedFullyDilutedValTwo = `${shortendedFullyDilutedValTwo} B`;
            fullyDilutedValTwo.innerHTML = formattedFullyDilutedValTwo;
          } else {
            // market cap
            let totalMarketCapTwo = assetListData[secondNumberInList]['market_cap'];
            let shortenedMarketCapTwo = totalMarketCapTwo / 1000000000;
            let formattedTotalMarketCapTwo = shortenedMarketCapTwo.toLocaleString();
            marketCapValuationTwo.innerHTML = `${formattedTotalMarketCapTwo} M`;

            // fully diluted valuation
            let fullyDilutedvalTwo = assetListData[secondNumberInList]['fully_diluted_valuation'];
            let shortendedFullyDilutedValTwo = (fullyDilutedvalTwo / 1000000000).toLocaleString();
            let formattedFullyDilutedValTwo = `${shortendedFullyDilutedValTwo} M`;
            fullyDilutedValTwo.innerHTML = formattedFullyDilutedValTwo;
          }
          // % from all time high
          let percentFromAllTimeHighTwo = assetListData[secondNumberInList]['ath_change_percentage'];
          percentFromATHTwo.innerHTML = `% from ATH: ${Math.round(percentFromAllTimeHighTwo.toLocaleString())}%`;
        }
        catch(error) {
            console.log(error);
            console.log('cannot get list of assets from CoinGecko...');
        }
      }

      // change timeframe
      function changeTimeframe() {
        selectedTimePeriod = '';
        assetPriceData = [];
        chartTime = [];

        selectedTimePeriod = selectedTimePeriodEl.value;
        fetchData();
      }
      const selectedTimePeriodEl = document.querySelector('.compareMarketCapTimeframeList');
      selectedTimePeriodEl.addEventListener('change', changeTimeframe);

      // change asset  -- asset 1
      function changeAssetOne(event) {
        let selectedOption = changeAssetOneEl.options[changeAssetOneEl.selectedIndex];
        firstSelectedAssetID = selectedOption.classList[0];
        firstSelectedAssetName = selectedOption.value;
        fetchData();
        reFetchAssetMetrics();
      }
      const changeAssetOneEl = document.querySelector('.cryptoCompareAssetListOne');
      changeAssetOneEl.addEventListener('change', changeAssetOne);
      // change asset -- asset 2
      function changeAssetTwo(event) {
        let selectedOption = changeAssetTwoEl.options[changeAssetTwoEl.selectedIndex];
        secondSelectedAssetID = selectedOption.classList[0];
        secondSelectedAssetName = selectedOption.value;
        fetchData();
        reFetchAssetMetrics();
      }
      const changeAssetTwoEl = document.querySelector('.cryptoCompareAssetListTwo');
      changeAssetTwoEl.addEventListener('change', changeAssetTwo);
      
      // CODE FOR THE CHART.JS LIBRARY
      const ctx = document.querySelector('.marketCryptoCap');
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
                  return '$' + value / 1e9 + ' ' + 'B';
                }
            }
            }
          }
        }
      });

    // end of the Intersection Observer
    }
  })
}, dataPageOptions);
const compareMarketCapContainer = document.querySelector('.compareMarketCapContainer');
marketsCompareMarketCapObserver.observe(compareMarketCapContainer);


// MARKETS PAGE -- EXCHANGE VOLUMES // EXCHANGE VOLUMES // EXCHANGE VOLUMES
const exchangeVolumeObserver = new IntersectionObserver(function(entries, exchangeVolumeObserver) {
  entries.forEach(entry => {

      // CEX VOLUME COMPARISON -- CEX DOMINANCE // CEX DOMINANCE
    let totalBitcoinVolume = 0;
    let BitcoinPrice = 0;
    let dominanceOfExchanges = [];
    let nameOfAllExchanges = [];

    // fetch the volume data
    async function fetchVolumeData() {

      try {
        // FETCH THE TOTAL VOLUME & BTC PRICE 
        let TotalVolumeUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';
        let totalVolumeResponse = await fetch(TotalVolumeUrl);
        let totalVolumeData = await totalVolumeResponse.json();
  
        // get the total BTC volume for all exchangs
        let bitcoinTotalVolumeVariable = await totalVolumeData[0]['total_volume'];
        totalBitcoinVolume = await bitcoinTotalVolumeVariable;
  
        // get the pric of Bitcoin
        let currentBitcoinPrice = await totalVolumeData[0]['current_price'];
        BitcoinPrice = currentBitcoinPrice;
  
          // FETCH SINGLE EXCHANGE DATA AND DOMINANCE
        let singleExchanageUrl = 'https://api.coingecko.com/api/v3/exchanges';
        let singleExchangeResponse = await fetch(singleExchanageUrl);
        let singleExchangeData = await singleExchangeResponse.json();
        // console.log(singleExchangeData);
  
        // get the name of the exchange
        for (const names of singleExchangeData) {
          let singleExchangeName = names['name'];
          nameOfAllExchanges.push(singleExchangeName);
        };
  
        // get the 24H btc volume for the exchange
        for (const dominance of singleExchangeData) {
          let totalBtcTraded = dominance['trade_volume_24h_btc'];
          let totalUsdTraded = totalBtcTraded * BitcoinPrice;
          let dominanceDecimal = totalUsdTraded / totalBitcoinVolume;
          let dominancePercentage = dominanceDecimal * 100;
          dominanceOfExchanges.push(dominancePercentage);
        };
  
        // shorten array to only display certain amount 
        nameOfAllExchanges.splice(-80);
        dominanceOfExchanges.splice(-80);
  
        // calculate other exchange dominance
        let displayedExchangeDominance = 0;
        let otherExchangeDominance = 0;
        for (const percentage of dominanceOfExchanges) {
          displayedExchangeDominance += percentage;
        }
        otherExchangeDominance = 100 - displayedExchangeDominance;
  
        // add the other exchanage data to array
        nameOfAllExchanges.push('others');
        dominanceOfExchanges.push(otherExchangeDominance);
  
        let CexDominancedata = {
          labels: nameOfAllExchanges,
          datasets: [{
            label: ['% of Total CEX Volume'],
            data: dominanceOfExchanges,
            hoverOffset: 10,
          }]
        };
  
        // update the chart
        cexVolumePieChart.data = CexDominancedata;
        cexVolumePieChart.update();

      } catch(error) {
        console.log(error);
        console.log('Could not fetch the exchange data..')
      }
    }
    fetchVolumeData();

      // CHART FOR THE CEX DOMINANCE
    const cexVolumePieChartEl = document.querySelector('.cexVolumePieChart');
    let cexVolumePieChart = new Chart(cexVolumePieChartEl, {
      type: 'doughnut', 
      data: {},
      options: {
        cutout: '40%',
        plugins: {
          legend: {
            display: true,
            position: 'left'
          }
        }
      }
    });
    window.addEventListener("resize", (event) => {
      cexVolumePieChartEl.style.width = '100%';
    });

      // CEX VOLUME COMPARISON -- FUTURES FUNDING RATE // FUTURES FUNDING RATE
    let totalOpenInterest = 0;
    let nameOfFuturesExchanges = [];
    let openInterests = [];

    // fetch all the futures exchanges
    async function fetchFuturesExchanges() {

      // fetching the data for futures exchanges
      try {
        let URL = 'https://api.coingecko.com/api/v3/derivatives/exchanges';
        let response = await fetch(URL);
        let data = await response.json();
  
        // extracting names and ID's of futures exchanages
        for (const name of data) {
          let futuresExchange = name['name'];
          nameOfFuturesExchanges.push(futuresExchange);
        }

        // calculate the total open interest
        for (const singleExchangeOi of data) {
          if (singleExchangeOi['open_interest_btc'] > 0) {
            let currentOpenInterest = singleExchangeOi['open_interest_btc'];
            totalOpenInterest += currentOpenInterest;
          }
        }

        // extract open interest of each exchange
        for (const openInterest of data) {
          let openInterestData = openInterest['open_interest_btc'];
          let openInterestDominance = openInterestData / totalOpenInterest;
          let openInterestDominancePercentage = openInterestDominance * 100;
          openInterests.push(openInterestDominancePercentage);
        };

        // shorten array to only display certain amount 
        nameOfFuturesExchanges.splice(-30);
        openInterests.splice(-30);

        // add the the 'other' exchanges
        let totalOiOtherExchanges = 0;
        let otherExchangeDominance = 0; 
        for (const otherExchanges of openInterests) {
          totalOiOtherExchanges += otherExchanges;
          otherExchangeDominance = 100 - totalOiOtherExchanges;
        }
        openInterests.push(otherExchangeDominance);
        nameOfFuturesExchanges.push('other');

        let OpenInterestDominancedata = {
          labels: nameOfFuturesExchanges,
          datasets: [{
            label: ['% of Total Open Interest'],
            data: openInterests,
            hoverOffset: 10,
          }]
        };
  
        // update the chart
        openInterestPieChart.data = OpenInterestDominancedata;
        openInterestPieChart.update();

      } catch(error) {
        console.log(error);
        console.log('Could not fetch list of Futures exchanges...')
      }
    }
    fetchFuturesExchanges();

    // CHART FOR THE OPEN INTEREST DOMINANCE
    const openInterestPieChartEl = document.querySelector('.futuresOpenInterestChart');
    let openInterestPieChart = new Chart(openInterestPieChartEl, {
      type: 'doughnut', 
      data: {},
      options: {
        cutout: '40%',
        plugins: {
          legend: {
            display: true,
            position: 'left'
          }
        }
      }
    });
    window.addEventListener("resize", (event) => {
      openInterestPieChartEl.style.width = '100%';
    });


    // FUTURES FUNDING RATE 
    let fundingRateAsset = 'BTC';
    let ticker = 'unexpired';
    let futuresExchanges = [];
    let fundingRates = [];
    let exchangeOpenInterests = [];
    let totalFundingRateOpenInterest = 0;
    let weightedAverageFundingRate = 0;

    async function fetchFundingRate() {
      let URL = `https://api.coingecko.com/api/v3/derivatives?include_tickers=${ticker}`;
      let response = await fetch(URL);
      let data = await response.json();

      futuresExchanges = [];
      fundingRates = [];
      exchangeOpenInterests = [];
      totalFundingRateOpenInterest = 0;
      weightedAverageFundingRate = 0;

      try {
          // extract the name of the exchange
          for (const market of data) {
            if (market['index_id'] === fundingRateAsset && market['funding_rate'] != 0 && market['open_interest'] > 0) {
              let rawExchangeName = market['market'];
              let exchangeRemoveFutureText = rawExchangeName.replace('Futures','');
              let exchangeOneBracket = exchangeRemoveFutureText.replace('(','');
              let exchangeTwoBracket = exchangeOneBracket.replace(')','');
              let exchange = exchangeTwoBracket.replace('()','');
              futuresExchanges.push(exchange);
            }
          }

          // extract the funding rate
          let averageFundingRate = 0;
          for (const fundingRate of data) {
            if (fundingRate['index_id'] === fundingRateAsset && fundingRate['funding_rate'] != 0 && fundingRate['open_interest'] > 0) {
              let rate = fundingRate['funding_rate'];
              fundingRates.push(rate);
              averageFundingRate += rate;

              // fetch open interest for single exchange
              let IO = fundingRate['open_interest'];
              exchangeOpenInterests.push(IO);

              // getting the total open interest from the pulled funding rates
              totalFundingRateOpenInterest += IO;
            }
          }

          // get weighted average for funding rate
          for (const weightedFR of data) {
            if (weightedFR['index_id'] === fundingRateAsset && weightedFR['funding_rate'] != 0 && weightedFR['open_interest'] > 0) {
              let weightForEachExchange = weightedFR['open_interest'] / totalFundingRateOpenInterest;
              let FundingRate = weightedFR['funding_rate'];
              let weightedFundingRate = weightForEachExchange * FundingRate;
              weightedAverageFundingRate += weightedFundingRate;
            }
          }
  
        let fundingRateObject = {
          labels: futuresExchanges,
          datasets: [{
            label: `${fundingRateAsset} funding rate %`,
            data: fundingRates,
            borderWidth: 2,
            backgroundColor: 'rgb(255,255,255, 0.6)',
            borderColor: 'rgb(255,255,255, 1)',
            yAxisID: 'y',
          },{
            label: 'Exchange Open Interest',
            data: exchangeOpenInterests,
            borderWidth: 2,
            backgroundColor: 'rgb(220, 20, 60, 0.2)',
            borderColor: 'rgb(220, 20, 60, 0.4)',
            yAxisID: 'y1'
          }]
        };

        // add average funding rate
        let averageFundingRateEl = document.querySelector('.averageFundingRate');
        averageFundingRateEl.innerHTML = averageFundingRate.toFixed(3);

        // add weighted funding rate
        let weightedAverageFundingRateEl = document.querySelector('.weightedAverageFundingRate');
        weightedAverageFundingRateEl.innerHTML = weightedAverageFundingRate.toFixed(3);
  
        // update chart with data
        fundingRateChart.data = fundingRateObject;
        fundingRateChart.update();

      } catch(error) {
        console.log(error);
        console.log('Could not fetch Futures funding rates..')
      }
    }
    fetchFundingRate();

    function changeFundingRateAsset(event) {

      let BtcFundingRateButton = document.querySelector('.BtcFundingRateButton');
      let EthFundingRateButton = document.querySelector('.EthFundingRateButton');
      let displayedFundingRateAsset = document.querySelector('.displayedFundingRateAsset');

      if (event.target.classList.contains('BtcFundingRateButton')) {
        fundingRateAsset = 'BTC';
        BtcFundingRateButton.style.backgroundColor = 'rgba(128, 128, 128, 0.6)';
        EthFundingRateButton.style.backgroundColor = 'rgba(128, 128, 128, 0.2)';
        displayedFundingRateAsset.innerHTML = 'Bitcoin';
      } else {
        fundingRateAsset = 'ETH';
        BtcFundingRateButton.style.backgroundColor = 'rgba(128, 128, 128, 0.2)';
        EthFundingRateButton.style.backgroundColor = 'rgba(128, 128, 128, 0.6)';
        displayedFundingRateAsset.innerHTML = 'Ethereum';
      }
      fetchFundingRate();
    }
    const changeFundingRateButton = document.querySelectorAll('.changeFundingRateButton');
    changeFundingRateButton.forEach(button => {
      button.addEventListener('click', changeFundingRateAsset)
    });


    // CHART FOR THE FUTURES FUNDING RATE
    const fundingRateChartEl = document.querySelector('.fundingRateChart');
    let  fundingRateChart = new Chart(fundingRateChartEl, {
      type: 'bar',
      data: {},
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            display: true,
            position: 'left',
            ticks: {
              beginAtZero: true,
              color: 'rgb(255,255,255, 0.8)'
            },
          }, 
          y1: {
            display: true,
            position: 'right',
            ticks: {
              beginAtZero: true,
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                return '$' + value / 1e9 + ' ' + 'B';
              },
              color: 'rgb(220, 20, 60, 0.8)'
            }
          },
        }
      }
    });
    window.addEventListener("resize", (event) => {
      fundingRateChartEl.style.height = '100%';
      fundingRateChartEl.style.width = '100%';
    });
    
    // end of the Intersection Observer
  })
}, dataPageOptions);
const exchangeDataContainer = document.querySelector('.volumePageContainer');
exchangeVolumeObserver.observe(exchangeDataContainer);

// DEFI PAGE -- TOTAL VALUE LOCKED // TOTAL VALUE LOCKED // TOTAL VALUE LOCKED 
const totalvalueLockedObserver = new IntersectionObserver(function(entries, totalvalueLockedObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const chainNameList = [];
      const chainTotalValueLockedList = [];
      let firstDisplayedTVL = '';
      let secondDisplayedTVL = '';

      // fetch the names of the protocols and the current TVL
      async function fetchChainList() {

        try {
          let chainListURL = `https://api.llama.fi/chains`;
          let chainListData = await fetch(chainListURL);
          let chainListResponse = await chainListData.json();

          // Add chains to list 
          const compareTVLListOne = document.querySelector('.compareTVLListOne');
          const compareTVLListTwo = document.querySelector('.compareTVLListTwo');
          
          for (const chain of chainListResponse) {
            // extract name 
            let chainName = chain['name'];
            chainNameList.push(chainName);

            // add TVL to list
            let totalValueLocked = Math.round(chain['tvl']);
            chainTotalValueLockedList.push(totalValueLocked);

            // create option element and add to selection list 
            const TvlListOneEl = document.createElement('option');
            const TvlListTwoEl = document.createElement('option');
            TvlListOneEl.value = chainName;
            TvlListOneEl.classList.add('listOneChain');
            TvlListTwoEl.value = chainName;
            TvlListTwoEl.classList.add('listTwoChain');
            TvlListOneEl.appendChild(document.createTextNode(chainName));
            TvlListTwoEl.appendChild(document.createTextNode(chainName));
            compareTVLListOne.appendChild(TvlListOneEl);
            compareTVLListTwo.appendChild(TvlListTwoEl);
          }

          // select second index for 2nd asset
          compareTVLListTwo.selectedIndex = 1;

          // Add current TVL for both selected chains
          let firstChainInListName = await chainListResponse[0];
          let nameOfFirstChainInList = await firstChainInListName['name'];
          firstDisplayedTVL = nameOfFirstChainInList;
          let firstChainInListTVL = Math.round(firstChainInListName['tvl']).toLocaleString();
          const TotalValueLockedOne = document.querySelector('.TotalValueLockedOne');
          TotalValueLockedOne.innerHTML = `$ ${firstChainInListTVL}`;

          let secondChainInList = await chainListResponse[1];
          let nameOfSecondChainInList = await secondChainInList['name'];
          secondDisplayedTVL = nameOfSecondChainInList;
          let secondCurrentTVL = Math.round(secondChainInList['tvl']).toLocaleString();
          const TotalValueLockedTwo = document.querySelector('.TotalValueLockedTwo');
          TotalValueLockedTwo.innerHTML = `$ ${secondCurrentTVL}`;


        } catch(error) {
          console.log(error);
          console.log('Could not fetch chain list...');
        }
      }
      fetchChainList();

      // Change current displayed TVL
      function changeDisplayedTVL() {

        // Add selected current Total Value Locked data to panel one
        const TotalValueLockedOne = document.querySelector('.TotalValueLockedOne');
        const compareTVLListOne = document.querySelector('.compareTVLListOne');
        let selectedChainOneIndex = compareTVLListOne.selectedIndex;
        let selectedChainOne = compareTVLListOne.options[compareTVLListOne.selectedIndex].text;
        firstDisplayedTVL = selectedChainOne;
        let formatTVLValueOne = chainTotalValueLockedList[selectedChainOneIndex].toLocaleString();
        TotalValueLockedOne.innerHTML = `$ ${formatTVLValueOne}`;

        // Add selected current Total Value Locked data to panel two
        const TotalValueLockedTwo = document.querySelector('.TotalValueLockedTwo');
        const compareTVLListTwo = document.querySelector('.compareTVLListTwo');
        let selectedChainTwoIndex = compareTVLListTwo.selectedIndex;
        let selectedChainTwo = compareTVLListTwo.options[compareTVLListTwo.selectedIndex].text;
        secondDisplayedTVL = selectedChainTwo;
        let formatTVLValueTwo = chainTotalValueLockedList[selectedChainTwoIndex].toLocaleString();
        TotalValueLockedTwo.innerHTML = `$ ${formatTVLValueTwo}`;

        fetchHistoricalData();
      }
      const selectionOfChains = document.querySelectorAll('.selectionOfChains');
      selectionOfChains.forEach(chain => {
        chain.addEventListener('change', changeDisplayedTVL);
      });

      // CODE FOR CHANGING THE CHART SCALE
      let chartScale = 'linear'; //logarithmic or linear
      const autoChartOption = document.querySelector('.TVLAutoChartOption');
      autoChartOption.addEventListener('click', changeChartScale);
      const logChartOption = document.querySelector('.TVLlogChartOption');
      logChartOption.addEventListener('click', changeChartScale);
      function changeChartScale(event) {
      if (event.target.classList.contains('autoChartOption')) {
          autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          chartScale = 'linear';
          compareTvlChart.options.scales.y.type = chartScale;
          compareTvlChart.update();
      } 
      else {
        autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
        logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
        chartScale = 'logarithmic';
        compareTvlChart.options.scales.y.type = chartScale;
        compareTvlChart.update();
        }
      };
      
      // fetch the historical data of the chain TVL
      let totalValueLockedOne = [];
      let totalValueLockedTwo = [];
      let TVL_data = [];
      let timeframe_data = [];
      let selectedTimePeriod = 4380;
      let mainEndpointURL = 'https://api.llama.fi/charts';
      let TvlExtractionKey = 'totalLiquidityUSD';

      async function fetchHistoricalData() {

        try {

          const totalValueLockedAggInput = document.querySelector('.totalValueLockedAggInput');
          if (totalValueLockedAggInput.checked) {
            mainEndpointURL = 'https://api.llama.fi/charts';
            TvlExtractionKey = 'totalLiquidityUSD';

          } else {
            mainEndpointURL = 'https://api.llama.fi/v2/historicalChainTvl';
            TvlExtractionKey = 'tvl';
          };
          
          // DATASET 1 TVL -- DATASET 1 TVL
          let firstDatasetURL = `${mainEndpointURL}/${firstDisplayedTVL}`;
          let firstDatasetData = await fetch(firstDatasetURL);
          let firstDatasetResponse = await firstDatasetData.json();

          // DATASET 2 TVL -- DATASET 2 TVL
          let secondDatasetURL = `${mainEndpointURL}/${secondDisplayedTVL}`;
          let secondDatasetData = await fetch(secondDatasetURL);
          let secondDatasetResponse = await secondDatasetData.json();

          // IF THE FIRST DATASET IS LONGER
          if (firstDatasetResponse.length > secondDatasetResponse.length) {

            totalValueLockedOne = [];
            totalValueLockedTwo = [];
            TVL_data = [];
            timeframe_data = [];

            for (const timeframe of firstDatasetResponse) {
              let epochTimeframe = timeframe['date'];
              let startingDate = new Date(0);
              let formattedDateValue = startingDate.setUTCSeconds(epochTimeframe);
              let formattedDate = new Date(formattedDateValue);
              let longTimeframe = formattedDate.toUTCString();
              let displayedTimeframe = longTimeframe.substring(5, 16);
              timeframe_data.push(displayedTimeframe);
            };
          
            // DATASET 1 TVL EXTRACTION -- DATASET 1 TVL EXTRACTION
            for (const chainOneTvl of firstDatasetResponse) {
              let TVL = chainOneTvl[TvlExtractionKey]
              totalValueLockedOne.push(TVL);
            };

            let TvlObjectOne = {
              label: `TVL of ${firstDisplayedTVL}`,
              data: totalValueLockedOne,
              fill: false,
              pointRadius: 0,
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              borderColor: '#FFFFFF',
              yAxisID: 'y'
            };
            TVL_data.push(TvlObjectOne);

            // DATASET 2 TVL EXTRACTION -- DATASET 2 TVL EXTRACTION

            // add more data to the shorter timeframe TVL
            let addedTimeValueForTwo = firstDatasetResponse.length - secondDatasetResponse.length;
            for (let i = 0; i < addedTimeValueForTwo; i++) {
              totalValueLockedTwo.push('0');
            }           

            for (const chainTwoTvl of secondDatasetResponse) {
              let TVL = chainTwoTvl[TvlExtractionKey];
              totalValueLockedTwo.push(TVL);
            };

            let TvlObjectTwo = {
              label: `TVL of ${secondDisplayedTVL}`,
              data: totalValueLockedTwo,
              fill: false,
              pointRadius: 0,
              borderWidth: 1,
              backgroundColor: '#FF0000',
              borderColor: '#FF0000',
              yAxisID: 'y'
            };
            TVL_data.push(TvlObjectTwo);  

            // change TVL data to fit timeframe
            if (timeframe_data.length > selectedTimePeriod) {
              let removeItems = timeframe_data.length - selectedTimePeriod;
              totalValueLockedOne.splice(0, removeItems);
              totalValueLockedTwo.splice(0, removeItems);
            };
            
            // change time data to fit timeframe
            if (timeframe_data.length > selectedTimePeriod) {
              let removeItems = timeframe_data.length - selectedTimePeriod;
              timeframe_data.splice(0, removeItems);
            };  

          } 
          else { // IF THE SECOND DATASET IS LONGER

            totalValueLockedOne = [];
            totalValueLockedTwo = [];
            TVL_data = [];
            timeframe_data = [];
            
            for (const timeframe of secondDatasetResponse) {
              let epochTimeframe = timeframe['date'];
              let startingDate = new Date(0);
              let formattedDateValue = startingDate.setUTCSeconds(epochTimeframe);
              let formattedDate = new Date(formattedDateValue);
              let longTimeframe = formattedDate.toUTCString();
              let displayedTimeframe = longTimeframe.substring(5, 16);
              timeframe_data.push(displayedTimeframe);
            };      

            // DATASET 1 TVL EXTRACTION -- DATASET 1 TVL EXTRACTION

            // add more data to the shorter timeframe TVL
            let addedTimeValueForOne = secondDatasetResponse.length - firstDatasetResponse.length;
            for (let i = 0; i < addedTimeValueForOne; i++) {
              totalValueLockedOne.push('0');
            };

            for (const chainOneTvl of firstDatasetResponse) {
              let TVL = chainOneTvl[TvlExtractionKey]
              totalValueLockedOne.push(TVL);
            };             

            let TvlObjectOne = {
              label: `TVL of ${firstDisplayedTVL}`,
              data: totalValueLockedOne,
              fill: false,
              pointRadius: 0,
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              borderColor: '#FFFFFF',
              yAxisID: 'y'
            };
            TVL_data.push(TvlObjectOne);

            // DATASET 2 TVL EXTRACTION -- DATASET 2 TVL EXTRACTION
            for (const chainTwoTvl of secondDatasetResponse) {
              let TVL = chainTwoTvl[TvlExtractionKey];
              totalValueLockedTwo.push(TVL);
            };

            let TvlObjectTwo = {
              label: `TVL of ${secondDisplayedTVL}`,
              data: totalValueLockedTwo,
              fill: false,
              pointRadius: 0,
              borderWidth: 1,
              backgroundColor: '#FF0000',
              borderColor: '#FF0000',
              yAxisID: 'y'
            };
            TVL_data.push(TvlObjectTwo); 

            // change TVL data to fit timeframe
            if (timeframe_data.length > selectedTimePeriod) {
              let removeItems = timeframe_data.length - selectedTimePeriod;
              totalValueLockedOne.splice(0, removeItems);
              totalValueLockedTwo.splice(0, removeItems);
            };            
            
            // change time data to fit timeframe
            if (timeframe_data.length > selectedTimePeriod) {
              let removeItems = timeframe_data.length - selectedTimePeriod;
              timeframe_data.splice(0, removeItems);
            };            

          };

          // UPDATE CHART
          compareTvlChart.data.datasets = TVL_data;
          compareTvlChart.data.labels = timeframe_data;
          compareTvlChart.update();

        } 
        catch(error) {
          console.log(error);
          console.log('Could not fetch historical TVL data...')
        }

      }
      fetchHistoricalData();

      // change timeframe of chart
      const compareTVLTimeframeList = document.querySelector('.compareTVLTimeframeList');
      compareTVLTimeframeList.addEventListener('change', changeTimeframe);
      function changeTimeframe() {

        // change timeframe value
        selectedTimePeriod = compareTVLTimeframeList.options[compareTVLTimeframeList.selectedIndex].value;
        let takeawayValue = Number(timeframe_data.length) - Number(selectedTimePeriod);
        timeframe_data.splice(0, takeawayValue);

        fetchHistoricalData();
      };

      // Change how the TVL data is aggregated
      const totalValueLockedAggInputContainer = document.querySelector('.totalValueLockedAggInputContainer');
      totalValueLockedAggInputContainer.addEventListener('click', fetchHistoricalData);

      // CHART FOR THE TVL COMPARISON
      const compareTotalValueLockedCanvas = document.querySelector('.compareChainTVL');
      let compareTvlChart = new Chart(compareTotalValueLockedCanvas, {
        type: 'line',
        data: {
          labels: timeframe_data,
          datasets: TVL_data,
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
                  return '$' + value / 1e9 + ' ' + 'B';
                }
            }
            }
          }
        }
      });
      window.addEventListener("resize", (event) => {
        compareTotalValueLockedCanvas.style.width = '100%';
        compareTotalValueLockedCanvas.style.height = '100%';
      });


      // End of intersection observer
    }
  })
}, dataPageOptions);
const totalValueLockedContainer = document.querySelector('.totalValueLockedContainer');
totalvalueLockedObserver.observe(totalValueLockedContainer);