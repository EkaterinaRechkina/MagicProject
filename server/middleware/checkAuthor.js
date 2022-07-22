const session = require("express-session");
const { Story, User } = require("../db/models");

const checkIsAutor = async (req, res, next) => {
  try{
      const userId = req.session.userId
     let entry = await Story.findOne({where:{id:req.params.id}});
    let author = await User.findOne({where: {id: entry.user_id}}) 

    if(author.id === userId ) {
      next()
    } else {
      res.json( {
        message: 'Нет прав!.',
        error: {}
      });
    } 

  }catch(err){
    console.log(err)
  }

  }

  module.exports=checkIsAutor