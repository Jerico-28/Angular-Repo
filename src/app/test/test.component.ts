import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
    .green {
    background-color: green;
    }

    .red {
        background-color: red;
    }
  `]
})
export class TestComponent implements OnInit {

  // Property
  public myId = "IdTest";
  public isDisabled = true;

  // Classes
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  // Two Way Binding
  public myVal = "";

  // Event Binding
  toggle = true;
  status = 'Enable'
  enableDisableRule(){
    this.toggle = !this.toggle;
                    //   IF  then True  Else  False
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isDisabled = false;
  }

}
