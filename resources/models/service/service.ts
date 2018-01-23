import { inject } from 'aurelia-dependency-injection';
import { RequestClient } from '../../services/request-client';


@inject(RequestClient)
export class ServiceModel
{
	name: string;
	blurb: string;
	imageUrl: string;
	link: string;

	constructor(private client: RequestClient)
	{

	}

	public getServices()
	{
		let url: string, requestType: string;
		url												= "dist/service-model.json";
		this.client.doRequest(url,requestType)
		.then((data: any) => 
		{
			console.log(data);
		})
		.catch((err: any) => 
		{
			console.log(err);
		});
	}

	public setServices()
	{

	}

}