import { Component } from '@angular/core';

@Component({
  selector: 'app-infos-pratiques-faq',
  templateUrl: './infos-pratiques-faq.component.html',
  styleUrls: ['./infos-pratiques-faq.component.scss']
})
export class InfosPratiquesFaqComponent {
  title = 'infos pratiques & faq';
  public map: any = { lat: 51.678418, lng: 7.809007 };
}
