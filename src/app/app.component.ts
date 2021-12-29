import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{

  // constructor(public route:ActivatedRoute ) {}

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(paramMap=>{
  //     console.log(paramMap);
  //   }

  //   )

  // }
  
}
