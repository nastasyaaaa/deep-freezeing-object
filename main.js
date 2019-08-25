function deepFreeze (object) {
	
	if(typeof object !== 'object'){
		throw new Error(`argument must be type of object, ${typeof object} given.`);
	}


	Object.entries(object).forEach(([propName, propValue]) => {

		if( typeof object[propName] === 'object' ){

			deepFreeze(object[propName]);
		}

		Object.defineProperty(object, propName, {
			value : propValue,
			writable : false,
			enumerable : false
		});

	});
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