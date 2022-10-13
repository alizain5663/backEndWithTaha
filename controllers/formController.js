let userData= (req,res )=>{

    try {
        let data = req.body;
    
            res.json({
                message:'You are reached.',
                result: data,
                 
            })
    
        
        
    } catch (error) {
        res.json({
            message: error.message,
            result:null
        })
    }

}
module.exports={userData};