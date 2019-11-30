import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { SearchCollection } from '../../auxillary/SearchCollecion';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  searchQuery = new FormControl('');
  itemCategoryCollection: SearchCollection = null;

  ngOnInit() {

  }

  pullItemsByQuery() {
    this.searchQuery.value;
    /* Placeholder function. Here we call our service to retrieve our data then
     * fill out our variable wich angular uses to pass data to the daughter
     * components. Allowing it to display the item groups. 
     * Item groups will then display their daughter elements. */
  }

}
