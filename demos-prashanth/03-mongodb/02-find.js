// Q6
{ 
    runtime: { 
      $lt: 60 
    }
}

// 159 (genre is Horror or Drama or both)
{ 
    genres: {
        $in: [ /Horror/i, /Drama/i ]
    }
}

{ 
    genres: {
        $nin: [ /Horror/i, /Drama/i ]
    }
}

{ 
    $or: [
      { genres: /Horror/i },
      { genres: /Drama/i },
    ]
}

// without $and this query is not possible (as the 2 conditions are on the SAME field)
{
    $and: [
      { genres: /Horror/i },
      { genres: /Drama/i }
    ]
}

{
    webChannel: {
      $exists: true
    }
}

{
    "webChannel.country": {
        $exists: true
    }
}