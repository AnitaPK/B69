const dbConnect = require('../config/db')

async function totalPopulation(req, res) {
    const q1 = 'SELECT SUM(Population) AS TotalPopulation FROM country;';

    dbConnect.query(q1, (er, result) => {
        const tp = result[0].TotalPopulation;
        console.log(tp);
        return res.status(200).send({ TotalPopulation: tp });
    });
}

function topTenPopCountry(req, res) {
    const q2 = 'select name, population from country order by Population Desc limit 10;'

    dbConnect.query(q2, (err, result) => {
        const topTenCountry = result;
        console.log(topTenCountry)
        res.status(200).send({ success: true, topTenCountry: topTenCountry })
    })
}

function TotalCountryCount(req, res) {
    const q3 = 'select count(*) as countCountry from country;'

    // [{countCountry:567}]

    dbConnect.query(q3, (err, result) => {
        const totalCountryCounts = result[0]
        res.status(200).send({ success: true, totalCountryCounts: totalCountryCounts })
    })
}

module.exports = {
    totalPopulation,
    topTenPopCountry,
    TotalCountryCount
}