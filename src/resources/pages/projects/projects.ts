import { customElement, bindable, inject } from 'aurelia-framework';

// // change to ./portfolio.ts
// import {Project} from './portfolio';


export class Projects
{
  heading = 'Infinium';
    projects : Project[] = [];
    projectName:string;
    projectCompletion:string;
    projectUrl:string;
    projectSrc:string;
	
  constructor(){
    this.projects = [
      {
        // change to match data members type Project
        id:1,
        projectName:'project1',
        projectCompletion:'11/11/19',
        projectUrl:'http://placehold.it/400x300',
        projectSrc:'http://placehold.it/400x300'
      },
      {
        id:2,
        projectName:'project2',
        projectCompletion:'11/11/19',
        projectUrl:'http://placehold.it/400x300',
        projectSrc:'http://placehold.it/400x300'
      },
      {
        id:3,
        projectName:'project3',
        projectCompletion:'11/11/19',
        projectUrl:'http://placehold.it/400x300',
        projectSrc:'http://placehold.it/400x300'
      },
      {
        id:4,
        projectName:'project4',
        projectCompletion:'11/11/19',
        projectUrl:'http://placehold.it/400x300',
        projectSrc:'http://placehold.it/400x300'
      },
      {
        id:5,
        projectName:'project5',
        projectCompletion:'11/11/19',
        projectUrl:'http://placehold.it/400x300',
        projectSrc:'http://placehold.it/400x300'
      }
    ];
  }
}
