
router.put('/update/:id/:id2/:note', function(req, res, next) {
   var hh=req.params.id2;
    //models.food.findByIdAndUpdate(req.params.id, {$set: {"message.0":{vote: req.params.note}}}, function(err, food){
    models.food.find({"_id":req.params.id}).exec(function(err,food){  
        if(err){
            res.send({error: err});
        }else{
          for (var i = 0; i < food[0].message.length; i++)
          {
            // look for the entry with a matching `code` value
            if (food[0].message[i]._id == req.params.id2){
              food[0].message[i].vote=req.params.note;
              
            }
          }
            food[0].save();
              //res.send(food);
            
        }
    });
});
  
