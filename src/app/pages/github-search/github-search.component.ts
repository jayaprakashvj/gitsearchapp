import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { GitServicesService } from 'src/app/services/git-services.service';


@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  gitHubSearchResult:any[]=[];
  searchStatus:boolean=false;
  selrepoUrl:number=-1;
  userRepoBranchList:any[]=[];

  constructor(private _fb: FormBuilder,private gitService:GitServicesService) { }
  public searchForm!: FormGroup;

  ngOnInit() {
    this.searchForm = this._fb.group({
  	    searchString:['']
    });
  }

  submitForm(){
   
    if(this.searchForm.value.searchString!=''){
      this.gitService.getGitUserRepo(this.searchForm.value.searchString).subscribe(
        (response)=>{
           this.gitHubSearchResult = response;
           this.searchStatus =true;
           this.selrepoUrl=-1;
           
        },
        (error)=>{
            console.log(error.status);
            this.gitHubSearchResult=[];
            this.searchStatus =true;
        }
      );
    }
    
  }

  async copyGitUrl(){

     if(this.selrepoUrl>=0){
        console.log(this.gitHubSearchResult[this.selrepoUrl].clone_url);
        try{
         await navigator.clipboard.writeText(this.gitHubSearchResult[this.selrepoUrl].clone_url);
         alert(`${this.gitHubSearchResult[this.selrepoUrl].clone_url} Copied to clipboard!`);
         this.fetchRepoBranches();
        }catch(err){
          console.error('Failed to copy: ', err);
        }
     }
  }

  fetchRepoBranches(){
    let payload ={
      username:this.searchForm.value.searchString,
      repo:this.gitHubSearchResult[this.selrepoUrl].name
    }
    this.gitService.getGitUserRepoBranches(payload).subscribe(
      (response)=>{
          console.log(response);
          this.userRepoBranchList =response;
      },
      (error)=>{
          console.log(error);
      }
    );
  }

}
