import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.css'
})
export class NewsletterFormComponent {

  newsletterForms!: FormGroup;

  constructor() {
    this.newsletterForms = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onSubmit() {
     console.log(this.newsletterForms.value) 
  }

}
