import { Router, RouteConfig, RouterConfiguration } from 'aurelia-router';
import { Routes } from 'resources/routes/routes';

export class App 
{
	private router: Router;
	private routeArray: Array<RouteConfig>;

	public constructor()
	{
		this.initializeRoutes();
	}

	private configureRouter(config: RouterConfiguration, router: Router)
	{
		this.router 									= router;
		config.title 									= 'Inifinium Labs';
		config.options.pushState						= true;
		config.map(this.routeArray);
	}

	/** 
	 * assigns the routeArray property
	 */
	private initializeRoutes()
	{
		let routesObject: Routes   						= Routes.getInstance();
		this.routeArray   								= routesObject.getRoutes();
	}

	/**
	 * gets the routeArray
	 * @returns the routeArray
	 */
	public getRouteArray()
	{
		return this.routeArray;
	}
}
