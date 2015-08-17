var CreateRawObject=Object.create.bind(null,null);

CreateRawObject({
	'a':{value:1},//{value:undefined, writable:false, enumerable:false, configurable:false}
	'b':{value:2}
 });
