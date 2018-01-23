import { inject } from 'aurelia-dependency-injection';
import { customElement, bindable } from 'aurelia-templating';

import { Utilities } from '../../services/utilities';
import { ServiceModel } from '../../models/service/service';


@inject(ServiceModel,Utilities)
@customElement('page-services')
export class Services
{
	
	public servicesList: string[]						= [];
	constructor(private serviceModel: ServiceModel, private utils: Utilities)
	{
		/*this.servicesList 								= [
															'Consulting',
															'Custom Development',
															'Maintenance and Support',
															'Mobile Development',
															'Quality Assurance',
															'Web Design',
														];*/

		this.serviceModel.getServices();
		this.servicesList								= this.utils.convertToTable(this.servicesList);


	}
} 