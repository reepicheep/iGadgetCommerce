$("/html/body") {
  add_class("_home")
  $$("#Wrapper") {
    $(".//div[@id='HomeFeaturedProducts']") {
      insert_before("h2", "Featured Products")
    }
    $(".//div[@id='HomeNewProducts']") {
      insert_before("h2", "New Products")
    }
  }
}
