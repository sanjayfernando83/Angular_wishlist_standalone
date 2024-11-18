import { Component , OnInit, input} from '@angular/core';
import { WishItem } from './shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
 
  title = 'wishlist_standalone';

  newWishText ='';

  listFilter :String ="0";

   


  updateFilter(value:any){
    
    if (value =='0'){
      this.visibleItems = this.Wishes;
    }
    else if (value =='1'){
      this.visibleItems = this.Wishes.filter(item=> item.isComplete);      
    }
    else  if (value =='2'){
      this.visibleItems = this.Wishes.filter(item=> !item.isComplete);      
    }

  }

  visibleItems : WishItem[] = this.Wishes;

  addNewWish(){
      
      this.Wishes.push(new WishItem(this.newWishText));
      this.newWishText =""; //clear text
  }

  clearWishes(){
      this.Wishes = [];
  }
}