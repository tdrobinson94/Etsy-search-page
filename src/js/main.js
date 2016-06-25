import {items} from "./items";
import $ from "jquery";

var item = items.results[0];
var count = items.count;

function resultsTemplate(num){
  return `<p class="results">
  ${items.count}</p>`;
};
function addResults (num){
  var resultsHTML = resultsTemplate(num);
  $('.main').append(resultsHTML + 'Results');
};

function etsyTemplate(item){
  return `<div class="item-container">
    <div class="item-image">
      <img src="${item.Images[0].url_170x135}">
    </div>
    <div class="item-info">
      <a class="itemTitle">${item.title}</a>
      <div class="shopAndprice">
        <a class="shopName">${item.Shop.shop_name}</a>
        <a class="itemPrice">$${item.price}</a>
      </div>
    </div>
  </div>`;
};

function addToPage (item) {
  var node = $('.item-content');
  var etsyHTML = etsyTemplate(item);
  console.log(item);
  node.append(etsyHTML);
};

items.results.forEach(addToPage);
