import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // providers: [PostService]
})
export class PostComponent implements OnInit {

  form:any;

  get username(){ return this.form.get('username');}
  get email(){ return this.form.get('email');}
  get address(){ return this.form.get('contactDetails.address'); }
  get pincode(){ return this.form.get('contactDetails.pincode'); }
  get phoneNum(){ return this.form.get('contactDetails.phoneNum'); }
  get skills(){ return this.form.get('skills') as FormArray; }

  constructor(fb:FormBuilder){
    // const postService = new PostService();
    // this.postArr = postService.postList;
    // to get rid of FormControl and FormArray class we can use FormBuilder class
    // if a form has lot of controls

    this.form = fb.group({
      username: ['', [Validators.required]],
      email: fb.control('', [Validators.email]),
      contactDetails: fb.group({
        address: ['', [Validators.required]],
        phoneNum: [''],
        pincode: ['']
      }),
      skills: fb.array([])
    })
  }

  ngOnInit(): void {
    /*
    this.form = new FormGroup({
      username:new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.email]),
      contactDetails: new FormGroup({
        address:new FormControl('', [Validators.required]),
        phoneNum: new FormControl(),
        pincode: new FormControl()
      }),
      skills:new FormArray([])
    });
    */
  }

  onSubmit(){
    console.log('>> f',this.form);
    this.form.reset();
  }

  // onSubmit(f:NgForm){
  //   console.log('>> f',f);
  //   f.reset();
  // }

  onNameChange(){
    console.log('>> username',this.username);
    console.log('>> email',this.email);    
  }

  addSkill(skill:HTMLInputElement){
    this.skills.push(new FormControl(skill.value));
    console.log('>> value',this.form.value);
    skill.value = '';    
  }

  removeSkill(index:number){ this.skills.removeAt(index); }
}
