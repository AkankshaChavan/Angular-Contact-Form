import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      query: ['', Validators.required],
      message: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    this.submitted = true;
  
    if (this.contactForm.valid) {
      this.success = true;
  
      console.log(`First Name: ${this.contactForm.get('firstName')?.value}`);
      console.log(`Last Name: ${this.contactForm.get('lastName')?.value}`);
      console.log(`Email: ${this.contactForm.get('email')?.value}`);
      console.log(`Query Type: ${this.contactForm.get('query')?.value}`);
      console.log(`Message: ${this.contactForm.get('message')?.value}`);
      console.log(
        `Terms & Conditions Accepted: ${this.contactForm.get('terms')?.value}`
      );
  
      this.contactForm.reset();
      this.submitted = false;
    } else {
      this.success = false;
      console.log('Form is invalid');
    }
  }

  
  
}
