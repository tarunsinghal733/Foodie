//*Navbar*//
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
}

//*Navbar -hide*//
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click", function(){
navCollapse.classList.remove("show");
    })
})

//*counter*//
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;

                obj.textContent = current;

                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("counter1", 78, 1548, 3000);
    counter("counter2", 26, 2144, 3000);
    counter("counter3", 61, 2891, 3000);
    counter("counter4", 49, 3211, 3000);
});


