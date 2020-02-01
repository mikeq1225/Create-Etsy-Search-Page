const html = items.results
  .map(function(item) {
    var currencySymbol = ""
    if (item.currency_code === "GBP") {
      currencySymbol += "&pound;"
    } else if (item.currency_code === "USD") {
      currencySymbol += "$"
    } else {
      currencySymbol += "&euro;"
    }
    return `
  <a href=""><div class="productDisplay">
    <img src=${item.Images[0].url_170x135} />
    <p class="title">${item.title}</p>
    <p class="shopName">${item.Shop.shop_name}</p>
    <p class="price">${currencySymbol}${item.price}</p>
  </div></a>
  `
  })
  .join("")

document.querySelector(".products").innerHTML = html
