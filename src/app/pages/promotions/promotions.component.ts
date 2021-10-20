import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'],
})
export class PromotionsComponent implements OnInit {
  offers: Offer[] = [];

  constructor(private router: Router, private offerService: OfferService) {}

  ngOnInit(): void {
    this.loadDataOffer();
  }

  loadDataOffer() {
    this.offerService.getOfferList().subscribe((offers) => {
      console.log(offers);
      this.offers = offers;
      console.log(this.offers);
    });
  }
}
