// Find number of shows for each network, and list only those with more than 10 shows, in descending order of number of shows
db.shows.aggregate(
    [
        {
            $group: {
                _id: "$network.name",
                numShows: {
                    $sum: 1
                }
            }
        },
        {
            $match: {
                numShows: {
                    $gte: 10
                }
            }
        },
        {
            $sort: {
                numShows: -1
            }
        }
    ]
)