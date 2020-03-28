

exports.mapErrorToMessage = function(res, error){
    console.log(error);
    
    if(error.status === undefined){
        res.status(500).json({data : null, error : "Internal server error"})
        return;
    }
    res.status(error.status).json({data : null, error : error.error})
}

exports.mapDataToMessage = function(res, data){
    res.json({data : data, error : null});
}