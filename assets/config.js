// ---- Edit only this block -------------------------------------------
// pay:   Razorpay pre-order pages (Pre-order Pro button)
// links: optional waitlist form per app ("" = email sign-up)
var FB = {
  email: "touseefsk19+fahbuilds@gmail.com",
  pay: {
    reviewreply: "https://rzp.io/rzp/cikgYVF2",
    listingwriter: "https://rzp.io/rzp/rtrv1PDh",
    tutordesk: "https://rzp.io/rzp/fazsGmTl"
  },
  links: {
    reviewreply: "",
    listingwriter: "",
    tutordesk: ""
  }
};
// ---------------------------------------------------------------------

(function () {
  function mail(app) {
    return "mailto:" + FB.email + "?subject=" + encodeURIComponent("Waitlist: " + app) +
      "&body=" + encodeURIComponent("Hi Fah, please add me to the " + app + " waitlist.\n\nName:\nBusiness / use:\nPhone (optional):");
  }
  document.querySelectorAll("[data-app]").forEach(function (a) {
    var key = a.getAttribute("data-app"), name = a.getAttribute("data-name") || key;
    a.href = FB.links[key] || mail(name);
    if (FB.links[key]) { a.target = "_blank"; a.rel = "noopener"; }
  });
  document.querySelectorAll("[data-pay]").forEach(function (a) {
    var url = FB.pay[a.getAttribute("data-pay")];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; } else { a.style.display = "none"; }
  });
  document.querySelectorAll("[data-email]").forEach(function (a) {
    a.href = "mailto:" + FB.email; a.textContent = FB.email;
  });
  var y = document.getElementById("yr"); if (y) y.textContent = new Date().getFullYear();
})();
