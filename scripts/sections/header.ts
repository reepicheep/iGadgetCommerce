# $('./body') {
#   insert_top("header", class: "_header") {
#     Move stuff here
#   }
# }

$("./body") {
  $$("#Header") {
    $$("> #Logo") {
      move_here("//div[@id='TopMenu']/ul/li[@class='First']")
      move_here("//div[@id='TopMenu']/ul/li[@class='CartLink']")
      inject_after(read("header.html"))
    }
    $(".//div[@class='mw_search']") {
      move_here("//div[@id='SearchForm']") {
        remove("./p")
        $("./form") {
          remove("./label")
          $("./input[@type='text']") {
            attribute("placeholder", "Search...")
          }
          $("./input[@type='image']") {
            wrap("div", class: "mw_search_btn buttons-search")
          }
        }
      }
    }
    remove("./br")
  }
  remove(".//div[@id='AjaxLoading']")
  remove(".//div[@id='TopMenu']")
  remove(".//div[@id='Menu']")
  remove(".//div[@id='LayoutColumn1']")
  remove(".//span[@class='FeedLink FloatRight']//ancestor::h2")
}
