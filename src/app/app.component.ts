import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'wishlist_standalone';

  newWishText ='';

  Items : WishItem[] = [
 
    new WishItem('To learn angular'),
    new WishItem("Get Coffee",true),
    new WishItem("Get Skyline")
 
  ]

  addNewWish(){
      this.Items.push(new WishItem(this.newWishText));
  }

  toggleItem(i:WishItem) { 
    i.isComplete = !i.isComplete;
    console.log(i.wishText + " " + i.isComplete); 
  }
}