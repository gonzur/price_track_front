import { Injectable } from '@angular/core';
import { SearchCollection } from '../../auxillary/SearchCollecion'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ItemDataFetchService {

  constructor(private http: HttpClient ) { 

  }

  //administrative values
  private baseUrl = "this is a base url/";
  private endPoint: string;
  private position: number;
  private limit: number;
  private route = "search/";


  getSearchCollection(queryString: string) {
    return this.http.get<SearchCollection>( this.baseUrl + this.route + "?query=" + queryString ); 
  }

  getLimit(): number {
    return this.limit;
  }

  getPosition(): number {
    return this.position;
  }

  getEndPoint(): string {
    return this.endPoint;
  }

  getBaseURl() {
    return this.baseUrl;
  }

}
