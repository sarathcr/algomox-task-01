import { Component, Input, OnInit } from '@angular/core';
import { UserList } from 'src/app/models/user-list.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() data!: UserList[];

  constructor() {}

  ngOnInit(): void {}
}
