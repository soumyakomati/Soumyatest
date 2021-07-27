db.persons.insertMany([{
    name: 'John Doe',
    age :20
}
,{
    name: 'John 1',
    age :21
},
{
    name: 'John 2',
    age :22
},
{
    name: 'John 3',
    age :23
}]);

db.persons.insert({
    name: 'John Doe',
    ageh :20
});

db.persons.insert({
    name: 'John 1',
    age :20
});
db.persons.insert({
    name: 'John 2',
    age :20
});
db.persons.insert({
    name: 'John 3',
    age :20
});
db.persons.insert({
    name: 'John 5',
    age :42
    ,interests :['sports','music',]
});

//when querying for multivalued attributes on of intersts is sports, 
// treat like it is single valued attribute
db.persons.find({
    name :'John 5'
    , interests: 'sports'
}).pretty();


db.workshops.insert([{
    "location": {
        "address": "Tata Elxsi, Prestige Shantiniketan",
        "city": "Bangalore",
        "state": "Karnataka"
    },
    "modes": [
        "online",
        "face 2 face"
    ],
    "name": "React Bootcamp",
    "description": "React is by Facebook (UI library)",
    "startDate": "2019-01-01T04:00:00.000Z",
    "endDate": "2019-01-03T08:00:00.000Z",
    "startTime": "9:30 am",
    "endTime": "1:30 pm",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/2000px-AngularJS_logo.svg.png"
}])