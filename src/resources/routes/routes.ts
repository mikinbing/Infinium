import {Router, RouterConfiguration, RouteConfig} from 'aurelia-router';

export class Routes 
{
	
	private routeArray: Array<RouteConfig>				= null;
	private static instance: Routes						= null;

	private constructor() 
	{
		this.initializeRoutes();
	}

	private initializeRoutes()
	{
		this.routeArray 								= [
		{ route: '', moduleId: './pages/home/home',	name: 'home', title: 'Home'},
		{ route: 'projects/:name', moduleId: '../pages/projects/projects', name: 'project', title: 'Projects'}
		];
	}

	public getRoutes()
	{
		return this.routeArray;
	}

	static getInstance()
	{
		if(!this.instance)
		{
			this.instance								= new Routes();
		}
		return this.instance;
	}
}