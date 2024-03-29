//services 

var serviceTemplate = Handlebars.compile( $("#service-template").html() );   
var serviceData = { services: [
    
  {
      title:    'Webutvikling', 
      subtitle: 'Vi leverer komplette websider med brukervennlige administratorgrensesnitt',
      icon:     'fa-laptop'
  },
    
  {
      title:    'Grafisk design', 
      subtitle: 'Vi hjelper med webdesign og logo hvis du vil modernisere din nettside',
      icon:     'fa-picture-o'
  },
    
  {
      title:    'Webanalyse', 
      subtitle: 'Vi utfører trafikkanalyse og søkemotoroptimalisering på din nettside',
      icon:     'fa-search'
  }
       
]};

$("#service-template-output").html(serviceTemplate(serviceData));