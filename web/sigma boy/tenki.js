  let hour = new Date().getHours();
  hour = String(hour)
  let hour_length = hour.length;
  if(hour_length<2)
  {
    hour_length = '0'+ hour
  }
  else
  {
  hour_length = hour
  }
  let minutes = new Date().getMinutes();
  minutes = String(minutes)

  let minutes_length = minutes.length;
  if(minutes_length<2)
    {
      minutes_length = '0'+ minutes
    }
    else
    {
    minutes_length = minutes
    }
   let month = new Date().getMonth();
   month = String(month+1)
   let month_length = month.length;
   if(month_length<2)
    {
      month_length = '0'+ month
    }
    else
    {
    month_length = month
    }
   let date = new Date().getDate();
   date = String(date)
   let date_length = date.length;
   if(date_length<2)
    {
        date_length = '0'+ date
    }
    else
    {
    date_length = date
    }
    let hiduke = month_length +'/'+ date_length
    document.getElementById('hiduke').innerHTML = hiduke;
    let jikoku = hour_length+':'+minutes_length
    document.getElementById('jikoku').innerHTML = jikoku;
 fetch("https://api.open-meteo.com/v1/forecast?latitude=34.0805&longitude=131.8256&hourly=temperature_2m,apparent_temperature,precipitation_probability,weather_code&forecast_days=1")
  .then(response => response.json())
  .then((a) => {
    let temperature = a.hourly.apparent_temperature[hour];
    temperature = String(temperature) + '℃'
    document.getElementById('kion').innerHTML = temperature;

  });
   fetch("https://api.open-meteo.com/v1/forecast?latitude=34.0805&longitude=131.8256&hourly=temperature_2m,apparent_temperature,precipitation_probability,weather_code&forecast_days=1")
  .then(response => response.json())
  .then((a) => {
    let kakuritu = a.hourly.precipitation_probability[hour];
    kakuritu = '降水確率'+String(kakuritu) + '％'
    document.getElementById('kakuritu').innerHTML = kakuritu;

  });

  
    const morning = document.getElementById("morning");
    const afternoon = document.getElementById("afternoon");
    const evening = document.getElementById("evening");
    const hello = new Date().getHours();

    if (hello >= 5 && hello < 12) {
      morning.classList.remove("hidden");
    } else if (hello >= 12 && hello < 18) {
      afternoon.classList.remove("hidden");
    } else {
      evening.classList.remove("hidden");
    }

    const hare = document.getElementById("hare");
    const ame = document.getElementById("ame");
    const kumori = document.getElementById("kumori");
    const yuki = document.getElementById("yuki");
    const ellor = document.getElementById("ellor");
    const tuki = document.getElementById("tuki");
fetch("https://api.open-meteo.com/v1/forecast?latitude=34.0805&longitude=131.8256&hourly=temperature_2m,apparent_temperature,precipitation_probability,weather_code&forecast_days=1")
  .then(response => response.json())
  .then((a) => {
    let tenki = a.hourly.weather_code[hour];
    console.log(a)
    document.getElementById('aaa').innerHTML = tenki;
    //上の1行はデバッグ用
  });

  hour = Number(hour)


    if (tenki = 0)
    {
    if (hour >= 19 || hour <= 6)
    {
    tuki.classList.remove("hidden");
    }
    else
    {
    hare.classList.remove("hidden");
    }
    }
    else if (tenki = "")
    {
    ame.classList.remove("hidden");
    }
    else if (tenki = "2" && "51")
    {
    kumori.classList.remove("hidden");
    }
    else
    {
    ellor.classList.remove("hidden");
    }