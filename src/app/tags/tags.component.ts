import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags: Tag[] = []
  constructor(private _foodService: FoodService) { }
  ngOnInit(): void {
    this.tags = this._foodService.getAllTag();
  }

}