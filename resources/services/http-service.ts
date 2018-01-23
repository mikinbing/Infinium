import { HttpClient, Headers, RequestBuilder } from 'aurelia-http-client';

export class HttpService 
{
	private builder: RequestBuilder;
	private baseUrl: string;
	private headers: Array<Headers>						= [];
	private http: HttpClient;

	public constructor()
	{
		this.http										= new HttpClient();
	}

	public convertToQueryString(data: any): string
	{
		let params 									   	= new URLSearchParams();
		for(let key in data) {
			if (data[key].constructor == Array) {
				for (var i = data[key].length - 1; i >= 0; i--) {
					params.append(key,data[key][i]);
				}
			}
			else {
				params.set(key, data[key]); 
			}
		}
		return params.toString();
	}

	public configure()
	{
		console.log(this.http);
		this.http.configure(
			config => 
			{
				if (this.baseUrl) {
					config.withBaseUrl(this.baseUrl);
				}

				for (var header of this.headers) {
					config.withHeader(header['key'],header['value']);
				}
			}
		);
	}

	public setHeaders(headers?: Array<{name: string, value: string}>)
	{
		return new Promise((resolve,reject) => 
		{
			if (headers.length < 1) {
				return reject("Error: no headers to set.");
			}

			for (var i = 0; i < headers.length; i++) {
				let header: Headers;

				header.add(headers[i].name,headers[i].value);
				this.headers.push(header);

				if (i === headers.length - 1) {
					return resolve(`Success: ${headers.length} headers set`);
				}
			}
		});	
	}

	public removeHeader(key: string)
	{
		for (var header of this.headers) {
			if (header.has(key)) {
				let index: number						= this.headers.indexOf(header);
				this.headers.splice(index,1);
			}
		}
	}

	public resetHeaders()
	{
		this.headers									= [];
	}

	public get(url: string): Promise<any>
	{
		this.configure();
		return this.http.get(url);
	}

	public post(url: string, data: any = ''): Promise<any>
	{
		this.configure();
		return this.http.post(url,data);
	}
}