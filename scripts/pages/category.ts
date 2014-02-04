$("/html/body") {
  add_class("mw_category")
  $$("#Wrapper") {

    $(".//div[@class='CategoryDescription']") {
      move_here("//*[@id='CategoryHeading']/div/div[1]", "after")
    }
  }
}
