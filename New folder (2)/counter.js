const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let count = 0;
btns.forEach( function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
    if (styles.contains('decrease') ) {
         if (count == 0) {
          return 0;
         }
         count--;
    } 
    else if (styles.contains ("increase")) {
        count++;
    } else {
        count = 0;
    }
    value.textContent = count;
    if (count > 0) {
        value.style.color = "green"
    }
    else   {
        value.style.color = "red";
    } 
});
});
