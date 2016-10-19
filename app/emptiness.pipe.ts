import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], desiredFullness) {
    var output: Keg[] = [];
    for(var i = 0; i < input.length; i++){
      if(input[i].pintsLeft <= 0){
        console.log("Warning! " + input[i].name + " is empty")
      }
    }
    if(desiredFullness === "almostEmpty"){
      for(var i = 0; i < input.length; i++){
        if(input[i].pintsLeft < 10){
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredFullness === "full"){
      for(var i = 0; i <input.length; i++){
        if(input[i].pintsLeft >= 10){
          output.push(input[i]);
        }
      }
      return output;
    }else{
      return input;
    }
  }
}
