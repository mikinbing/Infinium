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
<<<<<<< HEAD
		PLATFORM.moduleName('resources/pages/project/project');
		PLATFORM.moduleName('resources/pages/about/about');
    PLATFORM.moduleName('resources/pages/contact/contact');
    PLATFORM.moduleName('resources/pages/portfolio/portfolio');
=======
		PLATFORM.moduleName('resources/pages/projects/projects');
		PLATFORM.moduleName('resources/pages/services/services');
		PLATFORM.moduleName('resources/pages/contact/contact');
		PLATFORM.moduleName('resources/pages/quotes/quotes');
>>>>>>> master
	}

	private initializeRoutes()
	{
		this.routeArray 								= [
<<<<<<< HEAD
		{ route: ['', 'home'], 	moduleId: 'resources/pages/home/home',			name: 'home', 		title: 'Home'},
		{ route: 'projects', 	moduleId: 'resources/pages/projects/projects', 	name: 'projects', 	title: 'Projects'},
		{ route: 'about',		moduleId: 'resources/pages/about/about',		name: 'about',		title: 'About'},
    { route: 'contact',		moduleId: 'resources/pages/contact/contact',	name: 'contact',	title: 'Contact Us'},
    { route: 'portfolio',		moduleId: 'resources/pages/portfolio/portfolio',	name: 'portfolio',	title: 'Infinium Portfolio'}
=======
		{ route: ['', 'home'], 	moduleId: 'resources/pages/home/home',			name: 'home', 		title: 'Home', 		 icon: 'fa-home'},
		{ route: 'projects', 	moduleId: 'resources/pages/projects/projects', 	name: 'projects', 	title: 'Projects', 	 icon: 'fa-folder'},
		{ route: 'services',	moduleId: 'resources/pages/services/services',	name: 'services',	title: 'Services', 	 icon: 'fa-code'},
		{ route: 'contact',		moduleId: 'resources/pages/contact/contact',	name: 'contact',	title: 'Contact Us', icon: 'fa-phone'},
		{ route: 'quotes', 		moduleId: 'resources/pages/quotes/quotes',		name: 'quotes', 	title: 'Quotes', 	 icon: 'fa-dollar'}
>>>>>>> master
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
