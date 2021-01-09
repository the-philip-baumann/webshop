import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;

  constructor() {
    this.checkoutForm = new FormGroup({
      prename: new FormControl('', [Validators.min(3), Validators.max(15)]),
      lastname: new FormControl('', [Validators.min(3), Validators.max(15)]),
      email: new FormControl('', [Validators.email])
    })
  }

  ngOnInit(): void {
  }

  checkout(): void {

  }

}
