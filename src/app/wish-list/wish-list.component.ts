import { Component , OnInit, Input} from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
 

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
 


export class WishListComponent {


   @Input() wishes : WishItem[] = [];
   constructor(){}

   ngOnInit():void{

    
   }

  toggleItem(i:WishItem) { 
    i.isComplete = !i.isComplete;
    console.log(i.wishText + " " + i.isComplete); 
  }


}
