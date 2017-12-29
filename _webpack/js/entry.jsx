// @flow

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import 'bootstrap';
import 'bigslide';
import 'fotorama/fotorama';
import axios from 'axios';
import { StripeProvider } from 'react-stripe-elements';
import Instagram from './components/instagram';
import PurchaseGift from './components/purchase-gift';
import RedeemGift from './components/redeem-gift';

axios.defaults.baseURL = `${process.env.FLDWRK_API_URL || ''}`;

$('.nav-site .navbar-toggler').bigSlide({
  menu: '.nav-mobile',
  push: '.site-nav-push',
  side: 'right',
  easyClose: true
});

$('[data-href]').on('click', function(e) {
  window.location = $(e.currentTarget).data('href');
});

$('[data-toggle="tooltip"]').tooltip();

const instagramEl = document.getElementById('instagram');
if (instagramEl) render(<Instagram />, instagramEl);

const purchaseGiftEl = document.getElementById('purchase-gift');
if (purchaseGiftEl)
  render(
    <StripeProvider apiKey={process.env.STRIPE_PUBLISHABLE_KEY}>
      <PurchaseGift />
    </StripeProvider>,
    purchaseGiftEl
  );

const redeemGiftEl = document.getElementById('redeem-gift');
if (redeemGiftEl) render(<RedeemGift />, redeemGiftEl);
