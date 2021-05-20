import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<category> = [];
  categoryModel: category = {};

  constructor( private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() :void {
    this.categoryService.getAllCategory().subscribe(
      res => this.categories = res,
      err => console.log(err)
    )
  }

  addCategory() {
    this.categoryService.add(this.categoryModel).subscribe(category => {
      this.getAll();
    } )
    this.categoryModel = {};
  }

  selectionClick(c: category) :void {
    this.categoryModel.id = c.id;
    this.categoryModel.genere = c.genere;
  }

  // delectedClick(c:category): void {
  //   this.categoryService.delete(c.id).subscribe(category => {
  //     this.getAll();
  //   } )
  // }


}
