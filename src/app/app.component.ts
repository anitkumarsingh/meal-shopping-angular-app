import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meal-shopping-angular-app';
  loadedFeature ='recipe';

  onReceivedFeature(feature:string){
   console.log('feature',feature);
   this.loadedFeature= feature;
  }
}
