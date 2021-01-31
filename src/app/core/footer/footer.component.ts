import { Component, OnInit } from '@angular/core';
import { footerConfig } from './footer-config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerItems:any[] = footerConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
