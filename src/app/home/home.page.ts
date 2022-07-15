import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'contacts-plugin';
 
const { ContactsPlugin } = Plugins;
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts = [];
 
  constructor() {
  }
 
  async loadContacts() {    
    this.contacts = (await ContactsPlugin.getContacts('somefilter')).results;
    console.log('my contacts: ', this.contacts);    
  }
}