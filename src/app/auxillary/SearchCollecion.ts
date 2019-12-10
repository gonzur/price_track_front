import { FacsimilieCollection } from "./FacsimilieCollection";

export class SearchCollection {
  constructor(num: number) {
    this.searchString = "a query that was formed";
    this.searchList = new Array();
    for(let i = 0; i< num; i++) {
      this.searchList.push(new FacsimilieCollection(num));
    }
  }

  searchString: string;

  searchList: FacsimilieCollection[];
}
