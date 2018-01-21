import {ProjectInterface} from '../../interfaces/ProjectInterface/projectInterface';
import { inject } from 'aurelia-framework';
import { projectList } from '../../models/projectList.json';

export class Project implements ProjectInterface 
{
  id: string;
	projectName: string;
	client: string;
	clientField: string;
	work: string;
	backgroundImage: string;
	blurb: string;
	description: string;
	links: string[];
	customHTML: string;
  customCSS: string;

  constructor (pid, pname, c, cf, w, bi, b, desc, l, chtml, ccss)
  {
    this.id = pid;
    this.projectName = pname;
    this.client = c;
    this.work = w;
    this.backgroundImage = bi;
    this.blurb = b;
    this.description = desc;
    this.links = l;
    this.customHTML = chtml;
    this.customHTML = ccss;

  }

 

}
