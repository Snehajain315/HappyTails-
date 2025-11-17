import petModel from '../Models/petModel.js';

let petController= {
   
    async getPets(req,res)
    {
    try{
      let Pets= await petModel.find({});
      res.status(200).json(Pets);
    }
    catch(err){
      res.status(500).json({message:err})
    }
    },

    async getPetById(req,res)
    {
        try{
            let Pet= await petModel.findById(req.params.id);
            res.status(200).json(Pet);
        }
        catch(err){
            res.status(500).json({message:err})
        }
    },

    async addPet(req,res)
    {
        try{
            let NewPet = new petModel(req.body);
            await NewPet.save();
            res.status(201).json({data: NewPet, message:"Data added Successfully!"})
        }
        catch(err){
            res.status(500).json({message:err})
        }
    },

    async updatePet(req,res)
    {
      try{
        let changePet= await petModel.findByIdAndUpdate(req.params.id, req.body ,{new:true}) 
        if(!changePet)
        {
            res.status(500).json({message: 'Course not found!'})
        }
        res.status(200).json(changePet);
      }
      catch(err)
      {
        res.status(500).json({message:err})
      }
    },

    async deletePet(req,res) 
    {
       try{
        let removePet= await petModel.findByIdAndDelete(req.params.id);
        if(!removePet)
            {
                res.status(500).json({message: 'Course not found!'})
            }
        res.status(200).json(removePet)
       } 
       catch(err)
       {
        res.status(500).json({message:err})
       }
    }
}

export default petController;