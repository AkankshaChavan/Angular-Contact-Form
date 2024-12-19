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
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      terms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    console.log('Submit button clicked');
    this.submitted = true;
  
    if (this.contactForm.valid) {
      this.success = true;
  
      // Log the form values with labels
      console.log('Form Submitted with the following values:');
      console.log(`First Name: ${this.contactForm.get('firstName')?.value}`);
      console.log(`Last Name: ${this.contactForm.get('lastName')?.value}`);
      console.log(`Email: ${this.contactForm.get('email')?.value}`);
      console.log(`Gender: ${this.contactForm.get('gender')?.value}`);
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
