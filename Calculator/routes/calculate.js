var express=require('express');
var router=express.Router();

router.post('/result',function(req,res){
	var inp1=req.body.inp1;
	var inp2=req.body.inp2;
	var op=req.body.op;
	if(op=='+')
		r=parseFloat(inp1)+parseFloat(inp2);
	if(op=='-')
		r=inp1-inp2;
	if(op=='*')
		r=inp1*inp2;
	if(op=='/')
		r=inp1/inp2;
	//console.log(r);
	res.status(201).json({output:r});
	});

module.exports=router;