import { Component } from '@angular/core';
import { PostService } from '../services/post.service'

@Component({
	moduleId:module.id,
  	selector: 'user',
  	templateUrl: 'user.component.html',
  	providers:[PostService]
})
export class UserComponent  
{ 
	name : string; 
	email : string;
	address :address;
	hobbies :string[];
	showHobbies :boolean;
	posts:post[];

	constructor(private postService: PostService){
		this.name = 'Dinesh'; 
		this.email = 'dinesh@emdsys.com';
		this.address = {
			street:'Ambrosa apartment',
			city:'Chennai',
			state:'TN'
		};
		this.hobbies = ['Tennis', 'Cricket','Workout'];
		this.showHobbies = false;
		this.postService.getPost().subscribe(posts=>{
			this.posts = posts;
		});
	}
	toogleHobbies(){
		this.showHobbies = !this.showHobbies;
	}
	addHobby(hobby: string){
		this.hobbies.push(hobby);
	}
	deleteHobby(index: number){
		this.hobbies.splice(index,1);
	}
}
interface address{
	street : string,
	city : string,
	state : string
}
interface post{
	body:string,
	id:number,
	title:string
}
