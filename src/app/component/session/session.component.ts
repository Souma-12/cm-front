import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SessionServiceService } from 'src/app/service/session-service.service';
import { Session } from 'src/app/model/Session';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { Formation } from 'src/app/model/Formation';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  modalRef: BsModalRef;

  Session: any;
  selectedSession;
  sessionToUpdate;
  sessionToDelete: any;
  indexTodelete;
  filter;
  deleted = false;
  deleteError = false;
  newSession = new Session();
  addingError = false;
  sessionAdded = false;
  sessionUpdated: any;
  updatingError;
  listFormations;
  formation = new Formation();
  selectedFormation: any;
  constructor(private sessionServiceService: SessionServiceService,
    private formationServiceService: FormationServiceService
    , private modalService: BsModalService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.sessionServiceService.getAllSession().subscribe(result => {
      this.Session = result;

    });
  }

  openModal(template: TemplateRef<any>) {
    this.formationServiceService.getAllFormation().subscribe(result => {
      this.listFormations = result;

    });
    this.modalRef = this.modalService.show(template);

  }
  openDetailsModal(template: TemplateRef<any>, session) {
    this.openModal(template);

    this.selectedSession = session;

  }
  openUpdateModal(template: TemplateRef<any>, session) {
    this.openModal(template);
    this.sessionToUpdate = session;
  }
  openDeleteModal(confirmDelete: TemplateRef<any>, session, index) {
    this.sessionToDelete = session;
    this.openModal(confirmDelete);
    this.indexTodelete = index;
  }

  showFilter() {
    this.filter = !this.filter;
  }
  confirm() {
    console.log('+++++', this.sessionToDelete);
    this.sessionServiceService.deleteSession(this.sessionToDelete.id).subscribe(result => {
      this.deleted = true;

    });
  }
  addSession() {
    console.log('++   formation  +++', this.formation);
    this.sessionServiceService.createSession(this.newSession).subscribe(result => {
      this.sessionAdded = true;
      this.Session.push(this.newSession);
      this.getAll();
    }, error => {
      this.sessionAdded = false;
      this.addingError = true;
    });
    this.modalRef.hide();

  }
  updateSession() {
    this.sessionServiceService.createSession(this.sessionToUpdate).subscribe(result => {
      this.sessionUpdated = true;
    }, error => {
      this.sessionUpdated = false;
      this.updatingError = true;
    });
    this.modalRef.hide();
    location.reload();
  }

  getFormationDetails(template: TemplateRef<any>, id) {
    this.formationServiceService.getFormationByID(id).subscribe(result => {
      this.selectedFormation = result;
      console.log('dddddddd', this.selectedFormation)
    });
    this.openModal(template);


  }

}
