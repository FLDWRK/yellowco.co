import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import 'bootstrap';
import 'bigslide';
import HelloWorld from './components/hello-world';
import Instagram from './components/instagram';

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

if (document.getElementById('hello-world'))
  render(<HelloWorld />, document.getElementById('hello-world'));

if (document.getElementById('instagram'))
  render(<Instagram />, document.getElementById('instagram'));
