import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  number = '0';
  oldnumber = '';
  getinput = true;
  lastoperator='';
  buttons = [
    ['C'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '/', '=']]
  onpressbutton(num: any) {

    if (typeof num === "number") {
      console.log("this is a number");
      if (this.getinput === true)
        this.number = '' + num;
      else
        this.number += '' + num;
        this.getinput=false;
     
    }
    else if(num==='='){
        if(this.lastoperator === 'x')
        {
          this.number = '' + (parseInt(this.number) * parseInt(this.oldnumber));
         
        }
        else if(this.lastoperator === '+')
        {
          this.number = '' + (parseInt(this.number)+parseInt(this.oldnumber));
          this.getinput = false;
        }
        else if(this.lastoperator === '-')
        {
          this.number = '' + (parseInt(this.oldnumber) - parseInt(this.number));
        }
        else if (this.lastoperator === '/')
        {
          this.number = '' + (parseInt(this.oldnumber) / parseInt(this.number));
        }
        this.getinput = false;
    }
    else if( num === 'C'){
        this.number =''+'0';
        this.getinput=true;
    } 
    else{
      this.lastoperator = num;
      this.oldnumber =this.number;
      this.number = this.oldnumber;
      this.getinput =true;
    }
  }
}
