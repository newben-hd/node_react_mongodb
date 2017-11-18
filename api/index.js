// Manage all api requests on this file

import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    res.send({data:[]});
});

// To enable use this router, we need to export it.

export default router;