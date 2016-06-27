import {items} from "./items";
import $ from "jquery";

var item = items.results[0];
var count = items.count;

function resultsTemplate(num){
  return `<span>${items.count}</span>`;
};

function addResults(num){
  var result = $('.main');
  var resultsTemplate = resultsTemplate(num);
  console.log(num);
  result.append(resultsTemplate);
};

function etsyTemplate(item){
  return `<div class="item-container">
    <div class="item-image">
      <a href="${item.url}"><img src="${item.Images[0].url_170x135}"></a>
    </div>
    <div class="item-info">
      <a class="itemTitle" href="${item.url}">${item.title}</a>
      <div class="shopAndprice">
        <a class="shopName" href="${item.url}">${item.Shop.shop_name}</a>
        <a class="itemPrice" href="${item.url}">$${item.price}</a>
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
