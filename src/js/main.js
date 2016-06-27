import {items} from "./items";
import $ from "jquery";

var item = items.results[0];
var count = items.count;

// function resultsTemplate(count){
//   return `<div>${items.count}</div>`;
// };
//
// function addResults(count){
//   var result = $('.main');
//   var resultsHTML = resultsTemplate(count);
//   console.log(count);
//   result.append(resultsHTML);
// };
$(".main").append(items.count + " Results");


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
