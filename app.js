var mongodb = require('mongodb');

var uri = "mongodb://localhost:27017/example";

mongodb.MongoClient.connect(uri, function(error, db){
  if(error){
    console.log(error);
    process.exit(1);
  }

  var doc = {
    title: 'Mighty Python',
    year: 1990,
    director: 'Steven Spielberg',
    rating: 'A'
  };

var query = {
  year: 1980,
  rating: 'A'
};


  db.collection('movies').insert(doc , function(error, result){
    if(error)
    {
      console.log(error);
      process.exit(1);
    }

    db.collection('movies').find(query).toArray(function(error, docs){
      if(error)
      {
        console.log(error);
        process.exit(1);
      }else if(docs.length == 0){
        console.log('No docs found in the database ');
      }
      else{
        console.log('Found docs: ');
        docs.forEach(function(doc){
          console.log(JSON.stringify(doc));
        });
      }
      process.exit(0);
    });
  });
});
