$("/html/body") {
  add_class("mw_category")
  $$("#SideCategoryList, #SideCategoryShopByPrice, #SideShopByBrand") {
    attribute("data-ur-set", "toggler")
    $$("> h2") {
      attribute("data-ur-toggler-component", "button")
    }
    $$("> div") {
      attribute("data-ur-toggler-component", "content")
    }
    $$("> h2") {
      attribute("data-ur-toggler-component", "button")
      insert("div", class: "mw_indicator")
    }
    $$("> div") {
      attribute("data-ur-toggler-component", "content")
      $$("a") {
        insert("div", class: "sprites-menu_go")
      }
    }
  }
  remove(".//div[@id='SideNewsletterBox']")
}
