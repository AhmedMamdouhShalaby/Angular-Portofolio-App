import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  inputs: NodeListOf<HTMLInputElement>;

  constructor() {
    this.inputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
  }
  searchName: any = '';
  searchAge: any = '';
  searchEmail: any = '';
  searchPassword: any = '';
  userName: string = 'userName';
  userAge: string = 'userAge';
  userEmail: string = 'userEmail';
  userPassword: string = 'userPassword';


}
