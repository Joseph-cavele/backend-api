

export const errorHandle=(err,req,res,next)=>{

    console.error('error:',err.message)
    res.status(err.status || 500)
    .json({
        success:false,
        message:err.message || "server error"
    })


}