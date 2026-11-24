// ---- Edit only this block -------------------------------------------
// Paste a Gumroad / Razorpay / Google Form link for each app.
// Leave "" to fall back to an email sign-up.
var FB = {
  email: "touseefsk19+fahbuilds@gmail.com",
  links: {
    reviewreply: "",
    listingwriter: "",
    tutordesk: ""
  }
};
// ---------------------------------------------------------------------

(function () {
  function mail(app) {
    return "mailto:" + FB.email + "?subject=" + encodeURIComponent("Early access: " + app) +
      "&body=" + encodeURIComponent("Hi Fah, please add me to the " + app + " early access list.\n\nName:\nBusiness / use:\nPhone (optional):");
  }
  document.querySelectorAll("[data-app]").forEach(function (a) {
    var key = a.getAttribute("data-app"), name = a.getAttribute("data-name") || key;
    a.href = FB.links[key] || mail(name);
    if (FB.links[key]) { a.target = "_blank"; a.rel = "noopener"; }
  });
  document.querySelectorAll("[data-email]").forEach(function (a) {
    a.href = "mailto:" + FB.email; a.textContent = FB.email;
  });
  var y = document.getElementById("yr"); if (y) y.textContent = new Date().getFullYear();
})();
