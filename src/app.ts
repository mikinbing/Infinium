import { Router, RouteConfig, RouterConfiguration } from 'aurelia-router';
import { Routes } from 'resources/routes/routes';

export class App 
{
	private router: Router;
	private routeArray: Array<RouteConfig>;

	private constructor()
	{
		this.initializeRoutes();
	}

	private configureRouter(config: RouterConfiguration, router: Router)
	{
		config.title 									= 'Inifinium Labs';

		config.options.pushState						= true;
		config.map(this.routeArray);
		this.router 									= router;
	}

	private initializeRoutes()
	{
		let routesObject: Routes   						= Routes.getInstance();
		this.routeArray   								= routesObject.getRoutes();
	}
}
