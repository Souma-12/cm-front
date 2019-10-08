import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Responsable } from 'src/app/model/Responsable';
import { ResponsableServiceService } from 'src/app/service/responsable-service.service';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent implements OnInit {
  modalRef: BsModalRef;

  responsable: any;
  selectedResponsable: any;
  responsableToUpdate;
  responsableToDelete: any;
  indexTodelete;
  filter;
  deleted = false;
  deleteError = false;
  newResponsable = new Responsable();
  addingError=false;
  responsableAdded=false;
  responsableUpdated: any;
  updatingError;
  constructor( private responsableServiceService: ResponsableServiceService
    ,private modalService: BsModalService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.responsableServiceService.getAllResponsable().subscribe(result => {
      this.responsable = result;

    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

  }
  openDetailsModal(template: TemplateRef<any>, responsable) {
    this.openModal(template);

    this.selectedResponsable = responsable;

  }
  openUpdateModal(template: TemplateRef<any>,fresponsable) {
    this.openModal(template);
    this.responsableToUpdate = this.responsable;
  }
  openDeleteModal(confirmDelete:  TemplateRef<any>, formation, index) {
    this.responsableToDelete = this.responsable;
    this.openModal(confirmDelete);
    this.indexTodelete = index;
  }

  showFilter() {
    this.filter = !this.filter;
  }
  confirm(){
    console.log('+++++',this.responsableToDelete);
    this.responsableServiceService.deleteResponsable(this.responsableToDelete.id).subscribe(result => {
      this.deleted = true;

    });
  }
  addResponsable(){
    this.responsableServiceService.createResponsable(this.newResponsable).subscribe(result => {
      this.responsableAdded = true;
      this.responsable.push(this.newResponsable);
      this.getAll();
    }, error => {
      this.responsableAdded = false;
      this.addingError = true;
    });
    this.modalRef.hide();

  }
  updateResponsable(){
    this.responsableServiceService.createResponsable(this.responsableToUpdate).subscribe(result => {
      this.responsableUpdated = true;
    }, error => {
      this.responsableUpdated = false;
      this.updatingError = true;
    });
    this.modalRef.hide();
    location.reload();
  }
}


  

