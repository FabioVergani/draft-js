(function($){
 'use strict';
 var dummy=function(){},

 w=$,
 wd=w.document,

 at=function(e,s,f,b){
	var g=function(o){f(o);e.removeEventListener(s,g);};
	e.addEventListener(s,g,b&&true);
 },


 isComplete=function(evt){console.log(evt)},
 isReady=function(evt){console.log(evt)},

 end;


//#
 (function(d,r,c){
	var e=d,a=r,b=c,f=false;
	if(e.readyState==='complete'){
	  a(f);
	  b(f);
	}else{
	  e=w;
	  f=at;
	  f(e,'DOMContentLoaded',a);
	  f(e,'load',b);
	};
 })(wd,isReady,isComplete);

})(window);
//END.
