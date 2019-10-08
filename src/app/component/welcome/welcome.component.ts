import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { setTheme } from 'ngx-bootstrap/utils';
import { Candidats } from 'src/app/model/Candidats';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  modalRef: BsModalRef;
  newCandidats = new Candidats();

  constructor(private modalService: BsModalService) {
    setTheme('bs3'); // or 'bs4'

   }

  ngOnInit() {
  }


    getInscriptionModel(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  
    }
  
}
