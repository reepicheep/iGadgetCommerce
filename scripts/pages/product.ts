$("/html/body") {
  $$("#ProductDetails") {
    $$(".BulkDiscount") {
      remove("input")
      insert_top("input", type: "submit", class: "buttons-AddCartButton")
    }
  }
  $(".//div[@id='ProductReviews']") {
    $$("> a") {
      remove("img")
    }
  }

  $(".//div[@id='SimilarProductsByCustomerViews']") {
    insert_before("div", id: "review-product")
  }

  $$("#review-product") {
    move_here("//div[@id='ProductReviews']/a")
    $$("> a") {
       insert_top("input", type: "submit", class: "buttons-WriteReview")
    }
  }

  add_class("_product")
  remove(".//div[@id='LayoutColumn1']")
  remove(".//a[@id='ImageScrollNext']")
}
