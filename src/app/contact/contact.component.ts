//联系我们
import { Component, OnInit } from '@angular/core';
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService:ContactService) {
    this.contactService.get().subscribe(contact=>console.log(contact))
  }

  ngOnInit() {
  }

}
