import { inject } from 'aurelia-dependency-injection';
import { HttpService } from './http-service';
import { Utilities } from './utilities';

@inject(HttpService, Utilities)
export class RequestClient
{
	constructor(private http: HttpService, private utils: Utilities)
	{

	}

	/**
	*Generic http request function
	*
	*@param {string} url - The uri for the http request
	*@param {string} requestType - The request type for the http request
	*@param {object[]} [headers] - The array of header objects being sent
	*@param {string} [headers[].name] - The name of the header value
	*@param {string} [headersp[].value] - The header value
	*@param {boolean} [headers[].remove] - Flag to remove the header from the http-client object
	*@param {any} [post] - The post object being sent with posth requests 
	*@param {any} [additionalHeaders] - The post object being sent with posth requests 
	*@param {boolean} [convert=false] - converts the post object to a query string
	*
	*@param {Promise|void}	   
	*/
	public doRequest(url: string, requestType: string, headers?: Array<{name: string, value: string}>, post?: any, convert: boolean = false): Promise<any> | any
	{
		if(!this.utils.isEmpty(headers)) {
			return this.http.setHeaders(headers) 
			.then((data: any) => 
			{
				return this.doRequest(url,requestType,post,convert);
			})
			.catch((err: any) => err);
		}

		switch (requestType) {
			case "post":
				if (convert) {
					post								= this.http.convertToQueryString(post);
				}
				return this.http.post(url,post);
			case "get":
			default:
				return this.http.get(url);
		}
	}
}