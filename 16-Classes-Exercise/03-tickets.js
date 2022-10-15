function tickets(ticketDescArr, sortingCriteria) {
    let res = [];
    
    for (let ticketDesc of ticketDescArr) {
        let [destination, price, status ] = ticketDesc.split('|');
        price = Number(price);
        
        res.push({
            destination,
            price,
            status
        })
    }

    res.sort((a, b) => {
        let criteriaA = a[sortingCriteria],
            criteriaB = b[sortingCriteria];
        
        if (criteriaA < criteriaB) {
            return -1;
        }

        if (criteriaA > criteriaB) {
            return 1;
        }
        return 0;
    })

    return res;
    
}

console.log(JSON.stringify(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))
)
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
)