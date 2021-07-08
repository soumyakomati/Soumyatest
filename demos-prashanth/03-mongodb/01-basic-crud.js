db.persons.insertOne({
    name: 'John Doe',
    age: 32
});

db.persons.find();

db.persons.insertOne({
    name: 'Jane Doe',
    age: 28
});

db.persons.insertOne({
    name: 'Mark Smith',
    age: 40
});

db.persons.find().pretty();

db.persons.insertMany([
    {
        name: 'Mary Smith',
        age: 44
    },
    {
        name: 'David Bell',
        age: 56
    }
]);

db.persons.insertMany([
    {
        name: 'Elena',
        age: 10
    },
    {
        name: 'Jack',
        age: 10,
        dob: '2011-10-10'
    }
]);

// by default the field matches are ANDed
db.persons.find(
    {
        age: 10,
        name: 'Elena'
    }
).pretty();

db.persons.insertOne({
    name: 'Jill',
    age: 12,
    interests: [
        'Sports', 'Music'
    ]
})

db.persons.insertOne({
    name: 'Jinny',
    age: 12,
    interests: [
        'Sports', 'Music'
    ],
    school: {
        name: 'ABC',
        established: 2000
    }
})

// when querying for multi-valued attributes (one of the interests in Sports) - treat like interests is a single-valued attribute and write the query
db.persons.find(
    {
        name: /Doe$/
    }
)

db.persons.find(
    {
        "school.name": 'ABC'
    }
)

// updateMany
db.persons.updateOne(
    { // filter clause
        name: 'Mary Smith'
    },
    { // update clause
        $set: {
            age: 45,
            name: 'Mary Anne Smith'
        }
    }
);

db.persons.updateOne(
    {
        _id: ObjectId( "60e74b946ada74cbd67af581" )
    },
    {
        $push: {
            interests: 'Arts'
        }
    }
);

// also try deleteMany
db.persons.deleteOne(
    {
        name: 'John Doe'
    }
)

