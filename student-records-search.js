var students = [ 
  { 
   name: 'Dave',
    track: 'Front End Development',
    achievements: 158,
    points: 14730
  },
  {
    name: 'Jody',
    track: 'iOS Development with Swift',
    achievements: '175',
    points: '16375'
  },
  {
    name: 'Jordan',
    track: 'PHP Development',
    achievements: '55',
    points: '2025'
  },
  {
    name: 'John',
    track: 'Learn WordPress',
    achievements: '40',
    points: '1950'
  },
  {
    name: 'Trish',
    track: 'Rails Development',
    achievements: '5',
    points: '350'
  }
];

var recordQuery;

function print (message) { 
  document.write(message);
}


while (true) {
  //gets the query for the name
  recordQuery = prompt("Search student records, type either a name or quit."); 
  //puts the query into lowercase format so that the query can be recognized by the student name
    

   if (recordQuery.toLowerCase() === "quit" || recordQuery === null ) {
      break;
   } 
  
  else {
     for (var i = 0; i < students.length; i ++) 
     {
       
       if (recordQuery == students[i].name || recordQuery === students[i].name.toLowerCase() ) 
       {
        print("<strong>Student:</strong> <br>");
       for (var key in students[i]) 
       {
        
        print(key + ": " + students[i][key] + "<br>");
     }
    
      
      }
       
     }
    
   
   
   }
  
}
