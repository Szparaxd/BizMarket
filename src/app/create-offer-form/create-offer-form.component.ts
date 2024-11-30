import { Component } from '@angular/core';

@Component({
  selector: 'app-create-offer-form',
  standalone: true,
  imports: [],
  templateUrl: './create-offer-form.component.html',
  styleUrl: './create-offer-form.component.css'
})
export class CreateOfferFormComponent {
  currentStep: number = 3;

  steps = [
    { title: 'Tytuł i opis' },
    { title: 'Multimedia' },
    { title: 'Szczegóły ogłoszenia' },
    { title: 'Podsumowanie' }
  ];

  goToStep(index: number) {
    this.currentStep = index;
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }
}
