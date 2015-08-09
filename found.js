void((function(global,ns){'use strict';

 var f,
 w=global,
 found=(function(obj,prop,s){
	var e, o=obj, p=prop;
	return o.Object.create,(null,{'valueOf':{value:(p in o) && o.hasOwnProperty(p) && typeof(e=o[p])===s},'item':{value:e}});
 })(w,ns,'function');
 if(found){//

 }else{

 };
 console.dir(found);
})(window,'UniqueId'));
//
