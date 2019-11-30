import { Component, Input, OnInit } from '@angular/core';
import { FacsimilieCollection } from "../../auxillary/FacsimilieCollection";

@Component({
  selector: 'app-item-info-collection',
  templateUrl: './item-info-collection.component.html',
  styleUrls: ['./item-info-collection.component.css']
})
export class ItemInfoCollectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() itemCollection: FacsimilieCollection;
}
