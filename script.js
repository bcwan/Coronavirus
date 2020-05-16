const runCall = async () => {
  const apiValue = await fetchRetry();
  console.log(apiValue);
}

const fetchRetry = async (n = 0) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  }

  const apiURL = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${getDateString(n)}.csv`;

  try {
    const response = await fetch(apiURL, requestOptions);
    return response.ok ? response.text() : fetchRetury(n + 1);
  } catch (err) {
    console.log(err);
    return null;
  }
}

const getDateString = (n) => {
  //return mm-dd-yyy
  const date = new Date(Date.now() - daysToMS(n))

}

