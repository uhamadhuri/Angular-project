import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-services';
  public nove:any="VBM";
  handlerename(){
    this.title="uha"
  }
  handlereset(){
    this.title="madhuri"
  }


}
