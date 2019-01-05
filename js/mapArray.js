

export function getArray(input){

	var roots = input.map(function(x,i){
		let field = Object.keys(x);
		let value = Object.values(x);
		var returnObj = {}

		value.forEach(function(el,i){
			let key = field[i]
			var value1 = el.split(/ (.+)/)[0]
			var value2 = el.split(/ (.+)/)[1]
			Object.defineProperty(returnObj, key, {
					value: {
						name : value2,
						slug : value1
					}
			});
		})
		
		return returnObj;
	})
	
	return roots;
}

