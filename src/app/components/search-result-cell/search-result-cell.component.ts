import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-cell',
  templateUrl: './search-result-cell.component.html',
  styleUrls: ['./search-result-cell.component.scss']
})
export class SearchResultCellComponent implements OnInit {
  constructor() {}

  @Input() word: string;
  @Input() description: string;

  ngOnInit() {}
}
