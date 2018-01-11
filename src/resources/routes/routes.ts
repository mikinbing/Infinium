import {Router, RouterConfiguration, RouteConfig} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class Routes 
{
	
	private routeArray: Array<RouteConfig>				= null;
	private static instance: Routes						= null;
	public constructor() 
	{
		this.initializeRoutes();
		PLATFORM.moduleName('resources/pages/home/home');
		PLATFORM.moduleName('resources/pages/projects/projects');
	}

	private initializeRoutes()
	{
		this.routeArray 								= [
		{ route: '', moduleId: 'resources/pages/home/home',	name: 'home', title: 'Home'},
		{ route: 'projects/:name', moduleId: 'resources/pages/projects/projects', name: 'project', title: 'Projects'}
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