import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Formation } from 'src/app/model/Formation';
import { FormationServiceService } from 'src/app/service/formation-service.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  
    modalRef: BsModalRef;

    formations: any;
    selectedFormation;
    formationToUpdate;
    formationToDelete;
    indexTodelete;
    filter;
    deleted = false;
    deleteError = false;
    newFormation = new Formation();
    addingError=false;
    formationAdded=false;
    formationUpdated: any;
    updatingError;
    constructor( private formationServiceService: FormationServiceService
      ,private modalService: BsModalService ) { }
  
    ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this.formationServiceService.getAllFormation().subscribe(result => {
        this.formations = result;
      });
    }
  
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  
    }
    openDetailsModal(template: TemplateRef<any>, formation) {
      this.openModal(template);
  
      this.selectedFormation = formation;
  
    }
    openUpdateModal(template: TemplateRef<any>,formation) {
      this.openModal(template);
      console.log('+++++formation 999 ++++',formation);

      this.formationToUpdate = formation;
    }
    openDeleteModal(confirmDelete:  TemplateRef<any>, formation, index) {
      this.formationToDelete = formation;
      this.openModal(confirmDelete);
      this.indexTodelete = index;
    }
  
    showFilter() {
      this.filter = !this.filter;
    }
    confirm(){
      this.formationServiceService.deleteFormation(this.formationToDelete.id).subscribe(result => {
        this.deleted = true;
  
      });
    }
    addFormation(){
      this.formationServiceService.createFormation(this.newFormation).subscribe(result => {
        this.formationAdded = true;
        console.log('+ newFormation ++++',this.newFormation);

        this.formations.push(this.newFormation);
        this.getAll();
      }, error => {
        this.formationAdded = false;
        this.addingError = true;
      });
      this.modalRef.hide();
  
    }
    updateFormation(){
      this.formationServiceService.createFormation(this.formationToUpdate).subscribe(result => {
        this.formationUpdated = true;

      }, error => {
        this.formationUpdated = false;
        this.updatingError = true;
      });
      this.modalRef.hide();
      location.reload();
    }
  }
  
