(function($w){
 'use strict';
 var dummy=function(){},
 supportDCL=false,
 w=$w,
 wls=w.location.search,
 on=(function(e){var w=e,f=w.addEventListener;return f?f:function(s,r){w.attachEvent('on'+s,r);};})(w),
 stopListen=(function(e){var w=e,f=w.removeEventListener;return f?f:function(s,r){w.detachEvent('on'+s,r);};})(w),
 at=function(s,f,b){var g=function(o){f(o);stopListen(s,g);};on(s,g,b&&true);},
 //
 $d=(function($w){
	var $=$w,d=$.document,o,p,f,P,e;
	f=function(o,p){return ((p in o) && !(o[p]))===false;};
	//§:indexOf
	o=$.Array.prototype;
	p='indexOf';
	if(f(o,p)){o[p]=function(x,i){var k,o,l,n,e=this,v=-1;if(e!=null){o=Object(e);l=o.length>>>0;if(l!==0){e=Math;if((k=e.abs((n=(+i)||0)))===Infinity){n=0;};if(n<l){for(k=e.max((n>=0)?n:l-k,0),e=x;k<l;k++){if((k in o)&&(o[k]===e)){v=k;break;};};};};};return v;};};
	//§:trim
	o=$.String.prototype;
	p='trim';
	if(f(o,p)){o[p]=(function(p){return function(){return this.replace(p,'');};})(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g);};
   o=d.createElement('input');
	supportDCL=f(o,'ondomcontentloaded');
	o=o.classList;
	if(o){
     if(f=$.DOMTokenList){
        P=f.prototype;
        p='b';
        o.add('a',p);
        if(!o.contains(p)){(function(f){f('add');f('remove');})(function(s){var o=P,p=s,g=o[p];o[p]=function(){for(var f=g,e=this,m=arguments,i=m.length-1;i>=0;i--){f.call(e,m[i]);};};});};
        o.remove('a',p);
        p='toggle';
        o[p](p,false);
        if(o.contains(p)){P[p]=(function(g){var f=g;return function(s,k){var e=this;return ((arguments.length>0)&&(e.contains(s)===k))?k:f.call(e,s);};})(P[p]);};
     };
	}else{
    //§:classList
     f=function(i){this.element=i;};
     P=f.prototype;
     P.s=function(e){return e.element.className.trim().split(/\s+/);};
     P.item=function(i){var e=this;return e.s(e)[i];};
     P.contains=function(i){var e=this;return -1!==e.s(e).indexOf(i);};
     P.add=function(){var r=[],e=this,f=e.s;for(var v,m=r,c=f(e),a=arguments,i=a.length-1;i>=0;i--){v=a[i];if (-1 === c.indexOf(v)){m[m.length]=v;};};if(r.length>0){e.element.className=(f(e).concat(r)).join('\u0020');};};
     P.remove=function(){var e=this,c=e.s(e);for(var j,a=arguments,i=a.length-1;i>=0;i--){j=c.indexOf(a[i]);if(-1!==j){c=c.splice(j,1);};};e.element.className=c.join('\u0020');};
     P.toggle=function(v,b){var i=v,k=b,e=this,x=e.contains(i);if(x!==k){e[x?'remove':'add'](i);x=!x;};return x;};
     P.length=0;
     e=Element.prototype;
     o=(function(i,f){return f?function(e,p,g){f(e,p,{get:g});}:function(e,p,g){i.__defineGetter__(p,g);};})(e,$.Object.defineProperty);
     o(e,'classList',function(){return new f(this);});
     o(P,'length',function(){var e=this;return e.s(e).length;});
	};
   //
	o=Element.prototype;
	if(!o.scrollIntoView){o.scrollIntoView=dummy;};
	//...
	o=['\u25CC','\u25D4','\u25D1','\u25D5','\u25CF'];
   o.i=0;
	d.originaltitle=d.title;
   d.title='loading...';
	$.titleAni=$.setInterval(function(){var m=o,i=m.i++;d.title=m[i];if(i>3){m.i=0;};},500);
   return d;
 })(w),
 //
 $id=function(s){return $d.getElementById(s);},
 $root=$id('html'),
 $classes=$root.classList,
 //
 isReady=function(evt){
	var w=window,c=$classes, $logo=$id('logo');
	c.replace('loading','ready');

	if(sessionStorage.lastslidecol){c.add('concluso');};

	$id('quiz').scrollIntoView();

	//...

 },
 //
 isComplete=function(){
	var f,w=window,d=w.document,o=$root.classList;
	if(!o.contains('error')){o.add('no-error');};
	w.clearInterval(w.titleAni);
	d.title=d.originaltitle;
	o.replace('ready','loaded');
	//$initslide
	f=function(a,b){
		var o=$id(a).getElementsByTagName('input');
		for(var i=0,l=o.length,html=$root;i<l ;i++){o[i].addEventListener('click',function(){
			html.classList.add(b);
			sessionStorage.lastslidecol=true;
			$id($id(b).getAttribute('for')).checked=true;
		});};
	};
	f('stage1','d2');
	f('stage2','d3');



	var trackanswer=function(evt){
		var e=evt.target;
		ga('send',{
		  hitType:'event',
		  eventCategory: window.prelandingId,
		  eventAction: 'clicksurisposta',
		  eventLabel:e.getAttribute('for')
		});
	};

	o=$id('slides').getElementsByTagName('label');
	for(var i=0,l=o.length,e;i<l ;i++){
		e=o[i];
		e.addEventListener('click',trackanswer);
	};




	var tracklinkout=function(evt){
		var e=evt.target;
		ga('send',{
		  hitType:'event',
		  eventCategory: window.prelandingId,
		  eventAction: 'clicksulinkout',
		  eventLabel:e.getAttribute('for')
		});
	};


	//§appendquery
	if(wls!==''){
		o=$id('prodotti').getElementsByTagName('a');
		for(var i=0,l=o.length,s=wls,e;i<l ;i++){
		 e=o[i];
		 e.setAttribute('href',e.href+s);
		 e.addEventListener('click',tracklinkout);
		};
	};




 };


 //Run,NoAlter:
 on('error',function(evt){alert(evt.message);var o=$classes;o.replace('no-error','error',true);o.add('runtime-js');});
 //
 (function(r,c,x){
	var a=r,b=c,f=at,s=$classes;
   s.replace=function(a,b,k){var e=this, v=e.contains(a);if(v){e.remove(a);e.add(b);}else if(k===true){e.add(b);v=k;};return v;};
	s.replace('no-js','js',true);
	s.add('loading');
	if($d.readyState==='complete'){
	  a(false);
	  b(false);
	}else{
	  s='load';
	  if(x){
		f('DOMContentLoaded',a);
		f(s,b);
	 }else{
		f(s,function(o){a(false),b(o);});
	 };
	};
 })(isReady,isComplete,false);
//
})(window);
//END.








/*
//d.createElement('header');


$tags=function(){return $d.getElementsByTagName('html');},//usage:$tags('html')[0]

 go2Ancor=function(s){var w=window,l=w.location,u=l.href;l.href="#"+s;w.history.replaceState(null,null,u);},
	function isOutViewport(e){var w=window,o=e.getBoundingClientRect();return o.bottom<0||o.top>w.innerHeight||o.right <0||o.left>w.innerWidth;}
	if(§ && isOutViewport(§)){§.scrollIntoView();};


  //log=w.log=(function(c){return c?function(){var o=c;o.log.apply(o,arguments);}:dummy;})(w.console),

//§


 debounce=function(fn,wait,go){
	var n,f=fn;
	return function(){
		var c=this, a=arguments, k=go && !n, later=function(){n=null;if(!go){f.apply(c,a);};};
		clearTimeout(n);
		if(k){f.apply(c,a);}else{n=setTimeout(later,wait);};
	};
 },

	w.addEventListener('orientationchange',function(){
		var n=window.orientation;
		if(n===90||n===-90){
			n='breadcrumbs';
		}else{n='content';};
		go2Ancor(n);

	});

	//w.addEventListener('resize', debounce(function(){},250));//if(sl1 && w.innerWidth < 361){ClickAt(sl1);}
	//w.addEventListener('orientationchange',function(){});


//§
 ClickAt=function(e){var o=$d.createEvent('MouseEvents'),t=true,f=false;o.initMouseEvent('click',t,t,w,1,0,0,0,0,f,f,f,f,0,null);e.dispatchEvent(o);},


//§


 function getParameterByName(name,qs) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(qs);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '))||null;
 }

   var lpurl=false, lpn=getParameterByName('lpn',wls);

	if(lpn){
		switch(parseInt(lpn)){
		 case 1:lpurl="http://go.fuelmobi.com/imobimusicgame/landing/00101/step1.jsp";break;
		 case 2:lpurl="http://go.fuelmobi.com/imobimusicgame/landing/00020/step1.jsp";break;
		 case 3:lpurl="http://go.fuelmobi.com/supergame/landing/00020/step1.jsp";break;

		};
		if(lpurl){
			o=$id('stage3').getElementsByTagName('a');
			for(var i=0,l=o.length,s=wls;i<l ;i++){
				o[i].setAttribute('href',lpurl+s);
			};
		};
	};




*/
