// Builds email links when the page loads, so the address never appears in
// the HTML for spam scrapers to find. Each link is written as
//   <a class="email" data-user="name" data-domain="example.com">fallback text</a>
// Visitors see a normal clickable address. With scripts off, they see the
// fallback text, which points them to the PDF instead. Keep the address
// itself out of the fallback text, or scrapers can read it there.
document.querySelectorAll("a.email").forEach(function (link) {
  var address = link.dataset.user + "@" + link.dataset.domain;
  link.href = "mailto:" + address;
  link.textContent = address;
});
