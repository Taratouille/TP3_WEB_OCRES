
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
      var i;

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
      for(i=0;i<4;i++){
        document.getElementById('day'+i+'-forecast-main').innerHTML = main[i];
        document.getElementById('day'+i+'-forecast-more-info').innerHTML = description[i];
        document.getElementById('icon'+i+'-weather-container').innerHTML = icon[i];
        document.getElementById('day'+i+'-forecast-temp').innerHTML = `${temp[i]}°C`;
      }
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
