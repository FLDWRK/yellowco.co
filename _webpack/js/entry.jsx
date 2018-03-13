import React from "react";
import { render } from "react-dom";
import $ from "jquery";
import "bootstrap";
import "bigslide";
import "fotorama/fotorama";
import Instagram from "./components/instagram";
import Masonry from "masonry-layout";

$(".nav-site .navbar-toggler").bigSlide({
  menu: ".nav-mobile",
  push: ".site-nav-push",
  side: "right",
  easyClose: true
});

$("[data-href]").on("click", function(e) {
  window.location = $(e.currentTarget).data("href");
});

$('[data-toggle="tooltip"]').tooltip();

if (document.getElementById("instagram"))
  render(<Instagram />, document.getElementById("instagram"));

new Masonry(".masonry-cards", {
  horizontalOrder: true,
  itemSelector: ".card",
  gutter: ".card-gutter"
});
