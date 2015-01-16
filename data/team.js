//team

var teamTemplate = Handlebars.compile( $("#team-template").html() );   
var teamData = { team: [
    
  {
      name:     'David Åse', 
      about:    'Designer og frontendutvikler <br> Siv.ing. datateknologi ved NTNU',
      imageurl: 'img/team/1.jpg',
      linkedin: 'https://no.linkedin.com/in/davidaase/',
      facebook: 'https://www.facebook.com/davidaase',
      mailto:   'david@didi.no'
  },
    
  {
      name:     'Vegar Engen', 
      about:    'Backendutvikler og driftsansvarlig <br> Siv.ing. datateknologi ved NTNU',
      imageurl: 'img/team/2.jpg',
      linkedin: 'https://no.linkedin.com/in/vegarengen/',
      facebook: 'https://www.facebook.com/vegarengen',
      mailto:   'vegar@didi.no'
  }, 
    
  {
      name:     'Simen Fivelstad Smaaberg', 
      about:    'Backend- og frontendutvikler <br> Siv.ing. datateknologi ved NTNU',
      imageurl: 'img/team/3.jpg',
      linkedin: 'https://no.linkedin.com/in/simensma',
      facebook: 'https://www.facebook.com/simensma',
      mailto:   'simen@didi.no'
  }
    
]};

$("#team-template-output").html(teamTemplate(teamData));