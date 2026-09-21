document.querySelectorAll(".email").forEach(function (placeholder) {
  var address = placeholder.dataset.user + "@" + placeholder.dataset.domain;
  var link = document.createElement("a");
  link.href = "mailto:" + address;
  link.textContent = address;
  placeholder.replaceWith(link);
});
