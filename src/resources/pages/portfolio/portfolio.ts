import { customElement, bindable, inject } from 'aurelia-framework';


 import {Project} from '../project/project';

 @inject(Project)
export class Portfolio extends Project
{
  heading = 'Infinium';
  projects : Project[] = [];

	
  

  // click action event when clicked will tell you where to go 
  // project
}
