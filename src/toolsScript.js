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

      // variables for the chart data arrays (price and data)
      let timeframeData = [];
      let stockPriceData = [];

      // The ticker and timeframe variables
      let ticker = 'AAPL';
      let timeframe = 'TIME_SERIES_WEEKLY_ADJUSTED'; // TIME_SERIES_DAILY_ADJUSTED, TIME_SERIES_WEEKLY_ADJUSTED, TIME_SERIES_MONTHLY_ADJUSTED
      let timeSeries = 'Weekly Adjusted Time Series'; // (we don't need to adjust this) Time Series (Daily), Weekly Adjusted Time Series, Monthly Adjusted Time Series

      // This is for seeing if we need to change the timeframe
      function dictateTimeframe() {
        const selectedStockTimePeriodEl = document.querySelector('.stockChartTimeframe');
        let selectedTimeframe = selectedStockTimePeriodEl.value; // this shows the number of days
        
        timeframe = '';
        if (selectedTimeframe < 8) {
          timeframe = 'TIME_SERIES_DAILY_ADJUSTED';
          // console.log('timeframe is less than 8 days');
        } else if (selectedTimeframe < 91) {
          timeframe = 'TIME_SERIES_DAILY_ADJUSTED';
        } else if (selectedTimeframe < 366) {
          timeframe = 'TIME_SERIES_WEEKLY_ADJUSTED';
          // console.log('timeframe is less than 1 year and day');
        } else if (selectedTimeframe < 1826) {
          timeframe = 'TIME_SERIES_WEEKLY_ADJUSTED';
          // console.log('timeframe is less than 5 years and a day');
        } else {
          timeframe = 'TIME_SERIES_MONTHLY_ADJUSTED';
          // console.log('timeframe is longer than 5 years');
        }

        if (timeframe == 'TIME_SERIES_DAILY_ADJUSTED') {
          timeSeries = 'Time Series (Daily)';
        } else if (timeframe == 'TIME_SERIES_WEEKLY_ADJUSTED') {
          timeSeries = 'Weekly Adjusted Time Series';
        } else if (timeframe == 'TIME_SERIES_MONTHLY_ADJUSTED') {
          timeSeries = 'Monthly Adjusted Time Series';
        }
      }
      dictateTimeframe();

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

          // Initialize the time series
          dictateTimeframe();

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
          let reversedFetchedPrice = [];
          let fetchedPriceData = [];
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

      // Change the timeframe for the stock chart
      async function changeStockTimeframe() {
        try {

          // change the variables for the URL
          dictateTimeframe();

          // Creating the URL and fetching the data
          let URL = `https://www.alphavantage.co/query?function=${timeframe}&symbol=${ticker}&apikey=${myAPIkey}`;
          let response = await fetch(URL);
          let data = await response.json();

          timeframeData = [];
          let unorderedTimeframeData = [];
          let timeSeriesData = await data[`${timeSeries}`];
          for (const time in timeSeriesData) {  
            unorderedTimeframeData.push(time);
          }
          timeframeData = unorderedTimeframeData.reverse();
          // stockPriceChart.data.labels = timeframeData;

          // to fetch price data
          stockPriceData = [];
          let reversedFetchedPrice = [];
          let fetchedPriceData = [];
          let priceSeriesData = data[`${timeSeries}`];
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

          // edit the timeframe data displayed on the chart
          function adjustDisplayedTime() {
            if (selectedTimePeriodEl.value < 8) {
              // edit the length of the timeframe data
              let adjustedTimeframeData = timeframeData.slice(93);
              // update the chart data
              stockPriceChart.data.datasets = stockPriceData;
              stockPriceChart.data.labels = adjustedTimeframeData;  
            } else if (selectedTimePeriodEl.value < 31) {
              let adjustedTimeframeData = timeframeData.slice(75);
              // update the chart data
              stockPriceChart.data.datasets = stockPriceData;
              stockPriceChart.data.labels = adjustedTimeframeData;
            } else if (selectedTimePeriodEl.value < 91) {
              let adjustedTimeframeData = timeframeData.slice(10);
              // update the chart data
              stockPriceChart.data.datasets = stockPriceData;
              stockPriceChart.data.labels = adjustedTimeframeData;
            } else if (selectedTimePeriodEl.value < 366) {
              let adjustedTimeframeData = timeframeData.slice(1163);
              console.log(adjustedTimeframeData);
              // update the chart data
              stockPriceChart.data.datasets = stockPriceData;
              stockPriceChart.data.labels = adjustedTimeframeData;
            } else if (selectedTimePeriodEl.value < 731) {
              let adjustedTimeframeData = timeframeData.slice(1111);
              // update the chart data
              stockPriceChart.data.datasets = stockPriceData;
              stockPriceChart.data.labels = adjustedTimeframeData;
            } else if (selectedTimePeriodEl.value < 1096) {
              let adjustedTimeframeData = timeframeData.slice(1059);
              // update the chart data
              stockPriceChart.data.datasets = stockPriceData;
              stockPriceChart.data.labels = adjustedTimeframeData;  
            } else if (selectedTimePeriodEl.value < 1461) {
              let adjustedTimeframeData = timeframeData.slice(1007);
              // update the chart data
              stockPriceChart.data.datasets = stockPriceData;
              stockPriceChart.data.labels = adjustedTimeframeData;  
            } else if (selectedTimePeriodEl.value < 1826) {
              let adjustedTimeframeData = timeframeData.slice(955);
              // update the chart data
              stockPriceChart.data.datasets = stockPriceData;
              stockPriceChart.data.labels = adjustedTimeframeData;  
            } else if (selectedTimePeriodEl.value < 2556) {
              let adjustedTimeframeData = timeframeData.slice(194);
              // update the chart data
              stockPriceChart.data.datasets = stockPriceData;
              stockPriceChart.data.labels = adjustedTimeframeData;  
            } else if (selectedTimePeriodEl.value < 3651) {
              let adjustedTimeframeData = timeframeData.slice(158);
              // update the chart data
              stockPriceChart.data.datasets = stockPriceData;
              stockPriceChart.data.labels = adjustedTimeframeData;  
            } else {
              // update the chart data
              stockPriceChart.data.datasets = stockPriceData;
              stockPriceChart.data.labels = timeframeData;            
            };
          }
          adjustDisplayedTime();

          // update the chart 
          stockPriceChart.update();

        }
        catch(error) {
          console.log(error);
          console.log('could not change timeframe for stock chart...');
        }
      };
      const selectedTimePeriodEl = document.querySelector('.stockChartTimeframe');
      selectedTimePeriodEl.addEventListener('change', changeStockTimeframe);


      // Change the displayed stock for the chart
      async function changeStockAsset() {
        console.log('');
      };
      const selectedStockEl = document.querySelector('.stockList');
      selectedStockEl.addEventListener('change', changeStockAsset);


      // Code for the chart
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


    // End of the if statement for the intersection observer
    }
  })
}, dataPageOptions);
const marketPublicstockChartContainer = document.querySelector('.marketPublicstockChartContainer');
marketsStocksObserver.observe(marketPublicstockChartContainer);