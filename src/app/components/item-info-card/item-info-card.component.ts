import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../auxillary/Item';

@Component({
  selector: 'app-item-info-card',
  templateUrl: './item-info-card.component.html',
  styleUrls: ['./item-info-card.component.css']
})



export class ItemInfoCardComponent implements OnInit {

  constructor() {

  }

  //values filling out item information
  @Input("item") itemInfoBlock: Item;
  
  ngOnInit() {
  }

  redirectToEbayPage() {
    if(this.itemInfoBlock != null && this.itemInfoBlock.ebayURL != null)
      window.open(this.itemInfoBlock.ebayURL);
  }
}
