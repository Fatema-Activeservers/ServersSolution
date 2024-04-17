$(document).ready(function () {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 3300,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  })
})
/*******/







const SubDropdown = document.getElementById("subdropdown3");
SubDropdown.style.display = 'none';

const Product = document.getElementById("product")
product.style.display = 'none';

if (Product.ariaExpanded = "False" || Product.style.display == 'none') {
  SubDropdown.style.display = 'none';
}



function Toggle() {
  SubDropdown.style.display = 'block';
}

function Hide() {
  SubDropdown.style.display = 'none';
}

function Show() {
  SubDropdown.style.display = 'block';
}


	



<!-- Google tag (gtag.js) -->

document.query selector("footer").innerHTML = "<script async src="https://www.googletagmanager.com/gtag/js?id=G-RSGZTQ4SBV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RSGZTQ4SBV');
</script>"


