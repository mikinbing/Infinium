
export class DataStore
{
	public getItem(key: string)
	{
		window.localStorage.getItem(key);
	}

	public setItem(key: string, value: string)
	{
		window.localStorage.setItem(key,value);
		window.localStorage.
	}

	public removeItem(key: string)
	{
		window.localStorage.removeItem(key);
	}

	public clearStorage()
	{
		window.localStorage.clear();
	}

	public getCookie(cname: string) 
	{
	    var name: string								= cname + "=";
	    var decodedCookie: string						= decodeURIComponent(document.cookie);
	    var ca = decodedCookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c: string								= ca[i];
	        while (c.charAt(0) == ' ') {
	            c 										= c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}

	public setCookie(cname: string, cvalue: string, exdays: number, path: string = "/") : void
	{
		var d 										    = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires 								    = "expires="+ d.toUTCString();
		document.cookie 							    = cname + "=" + cvalue + ";" + expires + ";path=" + path;
	}
}