import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  errors;

  constructor(private http: HttpClient) {
    this.checkoutForm = new FormGroup({
      prename: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.email, Validators.required, Validators.maxLength(50)])
    });
  }

  ngOnInit(): void {
  }

  async checkout(): Promise<void> {
    console.log('test2');
    try {
      await this.http.post(environment.host + 'checkout/', {
          prename: this.checkoutForm.value.prename,
          lastname: this.checkoutForm.value.lastname,
          email: this.checkoutForm.value.email
        },
        {
          withCredentials: true
        }).toPromise();
    } catch (e) {
      this.errors = e.error.message;
    }
  }

}
