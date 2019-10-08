import { Component, OnInit, TemplateRef } from '@angular/core';
import { CandidatsServiceService } from 'src/app/service/candidats-service.service';
import { Candidats } from 'src/app/model/Candidats';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {

  modalRef: BsModalRef;

  candidats;
  selectedCandidats;
  candidatToUpdate;
  candidatToDelete;
  indexTodelete;
  filter;
  candidat;
  deleted = false;
  deleteError = false;
  newCandidats = new Candidats();
  addingError=false;
  candidatAdded=false;
  candidatUpdated;
  updatingError;
  constructor( private candidatsServiceService: CandidatsServiceService
    ,private modalService: BsModalService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.candidatsServiceService.getAllCandidats().subscribe(result => {
      this.candidats = result;

    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

  }
  openDetailsModal(template: TemplateRef<any>, actualitecandidats) {
    this.openModal(template);

    this.selectedCandidats = this.candidats;

  }
  openUpdateModal(template: TemplateRef<any>, candidat) {
    this.openModal(template);
    this.candidatToUpdate = this.candidats;
  }
  openDeleteModal(confirmDelete:  TemplateRef<any>, candidats, index) {
    this.candidatToDelete = candidats;
    this.openModal(confirmDelete);
    this.indexTodelete = index;
  }

  showFilter() {
    this.filter = !this.filter;
  }
  confirm(){
    console.log('+++++',this.candidatToDelete);
    this.candidatsServiceService.deleteCandidats(this.candidatToDelete.id).subscribe(result => {
      this.deleted = true;

    });
  }
  addActualite(){
    this.candidatsServiceService.createCandidats(this.newCandidats).subscribe(result => {
      this.candidatAdded = true;
      this.candidats.push(this.newCandidats);
      this.getAll();
    }, error => {
      this.candidatAdded = false;
      this.addingError = true;
    });
    this.modalRef.hide();

  }
  updatecandidats(){
    this.candidatsServiceService.createCandidats(this.candidatToUpdate).subscribe(result => {
      this.candidatUpdated = true;
    }, error => {
      this.candidatUpdated = false;
      this.updatingError = true;
    });
    this.modalRef.hide();
    location.reload();
  }
}

