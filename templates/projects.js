//projects 

var portfolioTemplate = Handlebars.compile( $("#porfolio-template").html() );   
var projectData = { projects: [
    
  {
      title: "Flora & Fauna", 
      subtitle: "Brukergenerert oppslagsverk", 
      imageurl: "img/portfolio/bf4stats.jpg", 
      modalurl: "portModOne" 
  },
    
  {
      title: "Klubbside", 
      subtitle: "Hjemmesideløsning for idrettsklubber", 
      imageurl: "img/portfolio/klubbside.png", 
      modalurl: "portModTwo" 
  },
    
  {
      title: "BF4 Stats", 
      subtitle: "Ikondesign for app", 
      imageurl: "img/portfolio/bf4stats.jpg", 
      modalurl: "portModThree" 
  }
    
]};

$("#portfolio-template").html(portfolioTemplate(projectData));

//project modals

var portfolioModalTemplate = Handlebars.compile( $("#porfolio-modal-template").html() );   
var modalData = { portfolioModals: [
    
  {
      title: "Flora & Fauna", 
      subtitle: "Brukergenerert oppslagsverk", 
      imageurl: "img/portfolio/bf4stats-large.jpg", 
      modalurl: "#portModOne",
      description: 'Mer info kommer snart',
      date: "Dato: August 2015", 
      customer: "Kunde: Oss selv",
      category: "Kategori: Webutvikling"
  },
    
  {
      title: "Klubbside", 
      subtitle: "Hjemmesideløsning for idrettsklubber", 
      imageurl: "img/portfolio/klubbside-large.png", 
      modalurl: "#portModTwo",
      description: '<p>Klubbside er en komplett hjemmesideløsning for små og store idrettsklubber. <br> Med vår brukervennlige admininistratorløsning går det fort å legge til nye spillere og kamper, eller sende SMS til hele laget. Siden har et responsivt design, noe som gjør at den ser like bra ut på mobiltelefoner, tablets og PCer. Besøk <a href="http://klubbside.no" target="_blank">klubbside.no</a> for å lære mer om Klubbside</p>',
      date: "Dato: Januar 2015", 
      customer: 'Pilotkunde: <a href="http://shk.no" target="_blank">St. Hallvard Håndballklubb</a>',
      category: "Kategori: Webutvikling" 
  },
    
  {
      title: "BF4 Stats", 
      subtitle: "Ikondesign for app", 
      imageurl: "img/portfolio/bf4stats-large.jpg", 
      modalurl: "#portModThree",
      description: '<p>Utvikleren <a href="https://play.google.com/store/apps/developer?id=Bjorn%20CS&hl=en" target="_blank">Bjorn CS</a> trengte et appikon. De ønsket at ikonet skulle følge designprinsippene til Battlefield serien, men siden appen har flere hundre tusen nedlastinger var det viktig å ikke trå over copyrightgrensen. Designet er vektorbasert, og vi laget en egen font som er svært lik den offisielle. <br>Appen kan lastes ned fra <a href="https://play.google.com/store/apps/details?id=com.bcseime.bf4stats&hl=en" target="_blank">Google Play</a></p>',
      date: "Dato: Januar 2014", 
      customer: 'Kunde: <a href="https://play.google.com/store/apps/developer?id=Bjorn%20CS&hl=en" target="_blank">Bjorn CS</a>',
      category: "Kategori: Grafisk design"
  }
    
]};

$("#portfolio-modals").html(portfolioModalTemplate(modalData));

