function deepFreeze (object) {
	
	if(typeof object !== 'object'){
		throw new Error(`argument must be type of object, ${typeof object} given.`);
	}

	for(let prop in object){
		
		if( typeof object[prop] === 'object' ){

			deepFreeze(object[prop]);
		}

		let descriptor = Object.getOwnPropertyDescriptor(object, prop);
	
		descriptor.writable = false;
		descriptor.enumerable = false;

		Object.defineProperty(object, prop, descriptor);

	}
}

const nana = {
	name : "nana",
	age : 19,
	friends : [
		{
			name : "tanya",
			age : 45, 
			hobby : ["baking", "racing"]
		},
		{
			name : "alex",
			age : 22, 
			parents : [ "mama", "papa" ]
		}

	]};

deepFreeze(nana);