import { Component, OnInit } from '@angular/core';
import { SeoMeta, SeoService } from '../seo.service';

@Component({
  selector: 'app-contacts-us',
  templateUrl: './contacts-us.component.html',
  styleUrls: ['./contacts-us.component.css']
})
export class ContactsUsComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    const seo: SeoMeta = {
      title: 'Contactez-nous - Russiaville Beauty',
      description: 'Contactez Russiaville Beauty pour prendre rendez-vous ou poser vos questions. Nous sommes à votre écoute pour sublimer votre beauté.',
      image: 'assets/images/brand.png',
      keywords: 'contact, rendez-vous, Russiaville Beauty, ongles, cils, sourcils',
      canonical: '/contactez-nous',
      ogType: 'website'
    };
    this.seoService.applySeo(seo);
  }
}
