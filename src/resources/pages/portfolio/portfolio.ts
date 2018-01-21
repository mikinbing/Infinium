import { Project } from '../../components/project/project';
import { customElement, bindable, inject } from 'aurelia-framework';

 @inject(Project)
export class Portfolio 
{
  projects =[];
  projectId;

  constructor(private project:Project) { }
 
  created() 
  {
    //set projects array equal to the return value of getProjectList()
  

  // click action event when clicked will tell you where to go 
  
  // project
  }
};
