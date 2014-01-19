$("./body") {
  $$("#Footer") {
    $$("> p") {
      inject_before(read("footer.html"))
    }
    remove(".//p")
  }
}
