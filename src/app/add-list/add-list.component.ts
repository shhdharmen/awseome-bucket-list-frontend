import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  private newList: List;

  constructor(private listService: ListService) { }
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  ngOnInit() {
    this.newList = {
      title: '',
      category: '',
      description: '',
      _id: ''
    };
  }

  public onSubmit() {
    console.log(this.newList.category);
    this.listService.addList(this.newList).subscribe(
      response => {
        console.log(response);
        if (response.success === true) {
          this.addList.emit(this.newList);
        }
      },
    );

  }
}
