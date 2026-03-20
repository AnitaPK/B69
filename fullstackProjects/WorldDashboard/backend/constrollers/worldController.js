const dbConnect = require('../config/db')


function totalPopulation (req,res){
    try {
        const q1 = 'SELECT SUM(Population) AS TotalPopulation FROM country;'

       const  totalPopulation = dbConnect.query(q1, (error,result)=>{
            if (error) throw error 
            console.log(result[0].TotalPopulation)
            return result[0].totalPopulation
        })
        res.status(200).send({totalPopulation:totalPopulation})
    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
}


module.exports = {
    totalPopulation
}