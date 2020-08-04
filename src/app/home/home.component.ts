import { Component, OnInit } from '@angular/core';
/**Importo el servicio DataService */
import { DataService} from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  /**Variable que encapsula el arreglo de departamentos */
  departamentos = [];
  selectedDepartamento: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) =>{
      console.log(data);
      this.departamentos = data;
    } )
  }
}
