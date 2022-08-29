import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { codeqr } from 'src/app/interfaces/codeqr.interface';
import { ResultsService } from './results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
   usuSesion:any;
   listaCodesQr: codeqr[]=[];
  constructor(private cookies: CookieService, private resultsService: ResultsService) { }

  ngOnInit(): void {
      this.usuSesion = this.cookies.get("usuarioSesion");
      this.resultsService.getHistory(this.usuSesion.id_usuario).subscribe(data =>{
        this.listaCodesQr = data.codes;
      },
      err =>{
        console.log(err)
      }
      );
  }
}