var express=require('express');
var router=express.Router();

router.post('/result',function(req,res){
	var inp=req.body.inp;
	var start=0,x=0;
	var arr=[];
	for(var i=0;i<inp.length;i++){
		var str=inp.charAt(i);
		if(i==(inp.length)-1){
			arr[x++]=inp.substring(start);
			}
		if(str=='+' || str=='-'|| str=='*'|| str=='/'){
			var num=parseFloat(inp.substring(start,i));
			arr[x++]=num;
			start=i+1;
			}
		}
	var index=0;
	var r=arr[index++];
	for(var i=0;i<inp.length;i++){
		var str=inp.charAt(i);
		if(str=='+')
			r=parseFloat(r)+parseFloat(arr[index++]);
		if(str=='-')
			r=r-arr[index++];
		if(str=='*')
			r=r*arr[index++];
		if(str=='/')
			r=r/arr[index++];
		}
	console.log(r);
	res.status(201).json({output:r});
	});

module.exports=router;