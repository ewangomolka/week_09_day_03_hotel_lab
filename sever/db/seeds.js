use hotel;
db.dropDatabase();

db.guests.insertMany([
    {
    name: "London Tipton",
    email: "tipton.lol@gmail.com",
    checked: true
    },
    {
    name: "Maddie Fitzpatrick",
    email: "nikelodeon@yahoo.com",
    checked: false
    },
    {
    name: "Zack Martin",
    email: "sprouse@bing.com",
    checked: true
    }
]);