
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    //.fetchTodayForecast()
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      let main=[];
      let description=[];
      let temp=[];
      let icon=[];

      // On récupère l'information principal
      /*const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);*/

      /*console.log(data.list[0].temp);
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);*/
      
      function getmain(val){
        return val.weather[0].main;
      }
      function getdes(val){
        return val.weather[0].description;
      }
      function gettemp(val){
        return val.temp.day;
      }
      function geticon(val){
        return apiWeather.getHTMLElementFromIcon(val.weather[0].icon);
      }

      main = data.list.map(getmain);
      description = data.list.map(getdes);
      temp = data.list.map(gettemp);
      icon = data.list.map(geticon);

      /*for(i=0;i<3;i++){
        main.push(data.list[i].weather[0].main);
        console.log(main);
      }
      for(i=0;i<3;i++){
        description.push(data.list[i].weather[0].description);
      }
      for(i=0;i<3;i++){
        temp.push(data.list[i].temp.day);
      }
      for(i=0;i<3;i++){
        icon.push(apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon));
      }*/

      // Modifier le DOM
      //document.querySelectorAll("#today-forecast-main").innerHTML = main;
      document.getElementById('today-forecast-main').innerHTML = main[0];
      document.getElementById('today-forecast-more-info').innerHTML = description[0];
      document.getElementById('icon-weather-container').innerHTML = icon[0];
      document.getElementById('today-forecast-temp').innerHTML = `${temp[0]}°C`;

      document.getElementById('tomorrow-forecast-main').innerHTML = main[1];
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description[1];
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icon[1];
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp[1]}°C`;

      document.getElementById('aftertomorrow-forecast-main').innerHTML = main[2];
      document.getElementById('aftertomorrow-forecast-more-info').innerHTML = description[2];
      document.getElementById('aftertomorrow-icon-weather-container').innerHTML = icon[2];
      document.getElementById('aftertomorrow-forecast-temp').innerHTML = `${temp[2]}°C`;

      document.getElementById('afteraftertomorrow-forecast-main').innerHTML = main[3];
      document.getElementById('afteraftertomorrow-forecast-more-info').innerHTML = description[3];
      document.getElementById('afteraftertomorrow-icon-weather-container').innerHTML = icon[3];
      document.getElementById('afteraftertomorrow-forecast-temp').innerHTML = `${temp[3]}°C`;
      

      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
