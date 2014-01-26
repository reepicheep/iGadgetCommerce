$("./body") {
  $$("#Header") {
    attribute("data-ur-set", "toggler")
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

    $("..//div[@class='mw_menu_btn']") {
      attribute("data-ur-toggler-component", "button")
    }

    move_here("../div[@id='Menu']", "bottom") {
      attribute("data-ur-toggler-component", "content")
      move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
    }

    $(".//div[@id='Menu']/ul/li/a/span") {
      insert_after("span", class: "mw_indicator sprites-menu_go")
    }

    $$("div.SideCategoryListClassic ul.category-list li a") {
      insert("span", class: "mw_indicator sprites-menu_go")
    }

    remove("./br")
  }

  remove(".//div[@id='AjaxLoading']")
  remove(".//div[@id='TopMenu']")
  remove(".//div[@id='Menu']/ul/li[3]")
  remove(".//div[@id='LayoutColumn1']")
  remove(".//div[@id='SideNewsletterBox']")
  remove(".//span[@class='FeedLink FloatRight']//ancestor::h2")
}

