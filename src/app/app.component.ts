import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SimpleCalculatorService } from './simple-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  modalPopupTitle:string | undefined;
  result:number;
  form : FormGroup;
  submitted = false;
  
  constructor(private modalService: NgbModal,private formBuilder: FormBuilder, private simpleCalulatorService: SimpleCalculatorService) {
    
  }

  ngOnInit() {
    this.form  = this.formBuilder.group({
      start: ['', Validators.required,Validators.pattern("^[0-9]*$")],
      amount: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  //only number will be add
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  
  public open(modal: any, operation: string): void {
    this.modalPopupTitle = operation;
    this.result = null;
    this.form.reset();
    this.form.controls['start'].setErrors(null);
    this.form.controls['amount'].setErrors(null);

    this.modalService.open(modal);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    let start:number = this.form.value.start;
    let amount:number = this.form.value.amount;

    if(this.modalPopupTitle == 'Add')
    {
      this.simpleCalulatorService.add(start, amount).subscribe(  
        data => {  
          this.result = data as number;  
        }  
      );
    }
    else
    {
      this.simpleCalulatorService.subtract(start, amount).subscribe(  
        data => {  
          this.result = data as number;  
        }  
      );
    }
  }
}