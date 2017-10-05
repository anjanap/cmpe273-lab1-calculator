var express=require('express');
var router=express.Router();

router.post('/result',function(req,res){
	var num1=req.body.inp1;
	var num2=req.body.inp2;
	var op=req.body.op;
	if(op=='+')
		r=parseFloat(num1)+parseFloat(num2);
	if(op=='-')
		r=num1-num2;
	if(op=='*')
		r=num1*num2;
	if(op=='/')
		r=num1/num2;
	res.status(201).json({output:r});
	});

module.exports=router;