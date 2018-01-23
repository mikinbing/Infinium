
export class Utilities 
{ 
	public convertToTable(array: any[], rowSize: number = 3): any[]
	{
		var table: any[]								= [];
		while(array.length) table.push(array.splice(0,3));
		return table;
	}

	/**
	*Check to see if supplied variable is empty
	*
	*@param {any} obj - The object being supplied
	*
	*@returns {Boolean} - The result of the function
	*/
	public isEmpty(obj: any): boolean
	{
		let result: boolean;
		switch (true) {   
			case (obj === null):
			  	result 								    = true;
			  	break;
			case (obj === "null"):
			  	result 								    = true;
			  	break;
			case (typeof obj === "undefined"):
			  	result 								    = true;
			  	break;
			case (obj === ''):
			  	result 								    = true;
			  	break;
			default:
			  	result 								    = false;
		}
		return result;
	}

	/**
	*Used to add random query strings to prevent webpage caching
	*
	*@param {Number} min - Minimum random number
	*@param {Number} max - Maximum random number
	*
	*@returns {Number} - The random number
	*/
	public cacheBuster(min: number,max: number): Number
	{
		return Math.random() * (max - min) + min;
	}
}