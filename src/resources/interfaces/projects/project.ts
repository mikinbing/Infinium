export interface Project
{
	id: string;
	projectName: string;
	client: string;
	clientField: string;
	work: string;
	backgroundImage: string;
	blurb: string;
	description: string;
	links?: string[];
	customHTML?: string;
	customCSS?: string;
}