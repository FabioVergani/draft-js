(function($w){
 'use strict';
 var dummy=function(){},supportDCL=false,isValidable=false, blankgif='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
 w=$w,//log=w.log=(function(c){return c?function(){var o=c;o.log.apply(o,arguments);}:dummy;})(w.console),
 //
 on=(function(e,g){var f=e;return f?f:function(s,r){g('on'+s,r);};})(w.addEventListener,w.attachEvent),
 stopListen=(function(e,g){var f=e;return f?f:function(s,r){g('on'+s,r);};})(w.removeEventListener,w.detachEvent),
 at=function(s,f,b){var g=function(o){f(o);stopListen(s,g);};on(s,g,b&&true);},
 //
 debounce=function(fn,wait,go){
	var n,f=fn;
	return function(){
		var c=this, a=arguments, k=go && !n, later=function(){n=null;if(!go){f.apply(c,a);};};
		clearTimeout(n);
		if(k){f.apply(c,a);}else{n=setTimeout(later,wait);};
	};
 },
 //
 $d=(function($w){
	var $=$w,d=$.document,o,p,f,P,e;
	d.createElement('header');
	d.createElement('main');
	d.createElement('figure');
	d.createElement('figcaption');
	d.createElement('footer');
	f=function(o,p){return ((p in o) && !(o[p]))===false;};
	//§:trim
	o=$.String.prototype;
	p='trim';
	if(f(o,p)){o[p]=(function(p){return function(){return this.replace(p,'');};})(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g);};
   o=d.createElement('input');
	supportDCL=f(o,'ondomcontentloaded');
	isValidable=f(o,'checkValidity');
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
     //§:indexOf
     o=$.Array.prototype;
     p='indexOf';
     if(f(o,p)){o[p]=function(x,i){var k,o,l,n,e=this,v=-1;if(e!=null){o=Object(e);l=o.length>>>0;if(l!==0){e=Math;if((k=e.abs((n=(+i)||0)))===Infinity){n=0;};if(n<l){for(k=e.max((n>=0)?n:l-k,0),e=x;k<l;k++){if((k in o)&&(o[k]===e)){v=k;break;};};};};};return v;};};
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
 $id=function(s){return $d.getElementById(s);},//$tags=function(){return $d.getElementsByTagName('html');},//usage:$tags('html')[0]
 //
 ClickAt=function(e){var o=$d.createEvent('MouseEvents'),t=true,f=false;o.initMouseEvent('click',t,t,w,1,0,0,0,0,f,f,f,f,0,null);e.dispatchEvent(o);},
 //
 $root=$id('html'),
 $classes=$root.classList,
 //
 go2Ancor=function(s){var w=window,l=w.location,u=l.href;l.href="#"+s;w.history.replaceState(null,null,u);},
 //
 isReady=function(evt){
	var w=window,c=$classes,field,resetValidity,invia,markfield,form=w.form=$id('form'),sl1=$id('i1'),pict=$id('pict');

	c.replace('loading','ready');

	w.addEventListener('resize', debounce(function() {
		if(sl1 && w.innerWidth < 361){ClickAt(sl1);}
	},250));

	if(pict && pict.src===""){pict.setAttribute('src',blankgif);}
	$id('tab1').setAttribute('src',blankgif);
	$id('tab2').setAttribute('src',blankgif);

	if(form){
	 if(field=form.mainfield=$id('inserisci')){
		w.addEventListener('orientationchange',function(){var n=window.orientation;if(n===90||n===-90){n='breadcrumbs';}else{n='content';};go2Ancor(n);});
		resetValidity=function(evt){var e=evt.target;e.setCustomValidity('');e.classList.remove('invalid');if(e.className.trim()===''){e.removeAttribute('class');};e.removeEventListener('keyup',resetValidity);e.blur();e.focus();};
		if(isValidable){
		  c.add('validable');
		  field.addEventListener('invalid',function(evt){
			var e=evt.target,o=e.validity,s,f,x=e.dataset;
			if(o.valueMissing){s=x.msg1;}else{if(o.patternMismatch){s=x.msg2;};};
			if(s){e.setCustomValidity(s);e.classList.add('invalid');e.addEventListener('keyup',resetValidity);e.value='';};
		  });
		  form.addEventListener('submit',function(evt){var o=evt.target.mainfield;o.value=o.value.trim();});
		}else{//§handleinvalid
			field.rgx=new RegExp(field.getAttribute('pattern'),'ig');
			form.addEventListener('submit',function(evt){
				var e=evt,o=evt.target.mainfield,v=o.value.trim();
				if(o.rgx.test(v)===false){o.classList.add('invalid');e.addEventListener('keyup',resetValidity);e.preventDefault();e.stopPropagation();alert(o.getAttribute('data-msg1'));return false;};
				o.value=v;
			});
		};
	 };
	 if(invia=w.pulsanteinvio=$id('invia')){
		markfield=function(evt){field.focus();};
		invia.addEventListener('blur',markfield);
		invia.addEventListener('mouseover',function(evt){invia.removeEventListener('blur',markfield);});
		invia.addEventListener('mouseout',function(evt){invia.addEventListener('blur',markfield);});
	 };
	};
 },
 //
 isComplete=function(){
	function isOutViewport(e){var w=window,o=e.getBoundingClientRect();return o.bottom<0||o.top>w.innerHeight||o.right <0||o.left>w.innerWidth;}
	w.clearInterval(w.titleAni);
	var sl2,invia=w.pulsanteinvio,i=parseInt($root.getAttribute('data-num')),o=['','\u25CB','\u25CB','\u25CB'];
	$d.title=(i && i<o.length)?(o[i]='\u25CF',o.join(''))+' '+$d.originaltitle:$d.originaltitle;
	(o=$root.classList).replace('ready','loaded');
	if(!o.contains('error')){o.add('no-error');};

	if(invia && isOutViewport(invia)){w.form.scrollIntoView();};

	if(w.innerWidth > 360 && (sl2=$id("i2"))){setTimeout(function(){ClickAt(sl2);},2000);};

 };
 //Run:
 on('error',function(evt){alert(evt.message);var o=$classes;o.replace('no-error','error',true);o.add('runtime-js');});
 //
 (function(r,c,x){
	var a=r,b=c,f=at,s=$classes;
   s.replace=function(a,b,k){var e=this,v=e.contains(a);if(v){e.remove(a);e.add(b);}else if(k===true){e.add(b);v=k;};return v;};
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
})(window);
//END.
