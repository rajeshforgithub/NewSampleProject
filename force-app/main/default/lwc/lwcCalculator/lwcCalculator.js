import { LightningElement } from 'lwc';

export default class LwcCalculator extends LightningElement {
    number1;
    number2;
    
    changeEvent(event){
     const val=event.target.value;
     const name=event.target.name;
      if(name==='Number1'){
          this.number1=val;
      }else{
          this.number2=val;
      }
    }
    addvalues(){
        const sum=parseInt(this.number1)+parseInt(this.number2);
        alert(sum);

    }
    substractvalues(){
        const sub=parseInt(this.number1)-parseInt(this.number2);
        alert(sub);
    }
    divideValues(){
        const division=parseInt(this.number1)/parseInt(this.number2);
        alert(division);
    }
    multiplyValues(){
        const multiplication=parseInt(this.number1)*parseInt(this.number2);
        alert(multiplication);
    }
}