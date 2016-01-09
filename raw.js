var CreateRawObject=Object.create.bind(null,null);

CreateRawObject({
	'a':{value:1},//{value:undefined, writable:false, enumerable:false, configurable:false}
	'b':{value:2}
 });
 
 
 
 /*
  var cssOf=function(aDoc){
	var found=(function(){
	 var a=CreateRawArray,f=function(){
		var c=CreateRawObject,o={},m=arguments,i=m.length+0,e;
		while(i--){e=m[i];o[e[0]]={value:e[1]};};
		return c(o);
	 };
	 return f([
		'sheets',f(
		 ['external',f(
			['link',a()],
			['imported',f(
			 ['fromLinked',a()],
			 ['fromImported',a()],
			 ['fromEmbedded',a()]
			)]
		 )],
		 ['internal',f(
			['embedded',a()],
			['inline',a()]
		)])
	 ]);
	})();
	return found;
 },
 cssfounded=cssOf($d);
 */
