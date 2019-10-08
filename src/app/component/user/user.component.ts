import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  modalRef: BsModalRef;

  User: any;
  selectedUser: any;
  userToUpdate: any;
  UserToDelete: any;
  indexTodelete;
  filter;
  deleted = false;
  deleteError = false;
  newUser = new User();
  addingError=false;
  userAdded=false;
  userUpdated: any;
  updatingError;
  constructor( private userServiceService: UserServiceService
    ,private modalService: BsModalService ) { }

  ngOnInit()
   {
    this.getAll();
  }

  getAll() {
    this.userServiceService.getAllUser().subscribe(result => {
      this.User = result;

    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

  }
  openDetailsModal(template: TemplateRef<any>, user) {
    this.openModal(template);

    this.selectedUser = user;

  }
  openUpdateModal(template: TemplateRef<any>,user) {
    this.openModal(template);
    this.userToUpdate = user;
  }
  openDeleteModal(confirmDelete:  TemplateRef<any>, user, index) {
    this.UserToDelete = user;
    this.openModal(confirmDelete);
    this.indexTodelete = index;
  }

  showFilter() {
    this.filter = !this.filter;
  }
  confirm(){
    console.log('+++++',this.UserToDelete);
    this.userServiceService.deleteUser(this.UserToDelete.id).subscribe(result => {
      this.deleted = true;

    });
  }
  adduser(){
    this.userServiceService.createUser(this.newUser).subscribe(result => {
      this.userAdded = true;
      this.User.push(this.newUser);
      this.getAll();
    }, error => {
      this.userAdded = false;
      this.addingError = true;
    });
    this.modalRef.hide();

  }
  updateUser(){
    this.userServiceService.createUser(this.userToUpdate).subscribe(result => {
      this.userUpdated = true;
    }, error => {
      this.userUpdated = false;
      this.updatingError = true;
    });
    this.modalRef.hide();
    location.reload();
  }
}



