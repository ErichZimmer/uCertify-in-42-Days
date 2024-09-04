const myLocation = {
    city: {
        id: 2643743,
        name: 'London',
        country: 'GB',
        population: 9820000,
        timezone: 3600,
    }
};

for (const location in myLocation) {
    const locationObj = myLocation['city'];
    
    for (const property in locationObj) {
        console.log(`${property}: ${locationObj[property]}`);
    }
}