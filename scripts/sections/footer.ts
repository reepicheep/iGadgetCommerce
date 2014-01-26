$("./body") {
  $$("#Footer") {
    $$("> p") {
      inject_before(read("footer.html"))
    }

      $("./div[@class='mw_footer_before']") {
        insert_after("div", class: "sprites-moovweb")
      }

    remove(".//p")
  }
}
