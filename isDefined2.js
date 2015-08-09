isDefined(e,{as:'object',not:'empty'})

function isDefined(e,opt){
 var r, o=opt, s=o.as||false, k=typeof(e), u='undefined';
 if(s){
	r=(k===s);
	if(r && (s=o.not)!==u){
		r=false;
		if(k==='object'){
			if(s==='null'){r=(k!==null)}else if(s==='empty'){/**/};
		}else if(k==='string'){
			if(s==='null'){}else if(s==='empty'){/*(e===''||e.trim()==='')*/};
		}else if(k==='number'){
			if(s==='null'){/**/};
		};
	};
 }else{
	r=(k!==u)
 };
 return r
};
