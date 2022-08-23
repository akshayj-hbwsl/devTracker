const express = require("express")
const router = express.Router()

//GET all module
router.get("/", (req,res)=>{
    res.json({msg:"get all modules"})
})

//GET a single module
router.get("/:id", (req,res)=>{
    res.json({msg: "single module"})
})

//POST a new module
router.post("/",(req,res)=>{
    res.json({msg: "new module posted"})
})

//DELETE a module
router.delete("/:id", (req,res)=>{
    res.json({msg:"Module deleted successfully"})
})

//UPDATE a module
router.patch("/:id", (req,res)=>{
    res.json({msg: "Module Updated"})
})


module.exports = router;