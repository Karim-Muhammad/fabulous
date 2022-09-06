const statsSection = document.querySelector(".stats .content");
const stats = document.querySelectorAll(".stats .content .box");
let started = false;
// const mountStats =
window.addEventListener("scroll", function () {
    const coord = statsSection.getBoundingClientRect();
    // console.log(coord);
    if (coord.top <= 500 && !started) {
        // console.log("I'm Here");
        stats.forEach((el) => {
            const amount = el.querySelector(".amount");
            amount.textContent = 0;
            countGoal(amount);
            started = true;
        });
    }
});
/** Wrong Approch
stats.forEach((el) => {
            for (
                let i = 0;
                i <=
                el.querySelector(".amount").attributes["data-goal"].nodeValue;
                i++
            ) {
                el.querySelector(".amount").textContent = i;
            }
        });
*/
function countGoal(el) {
    const goal = el.dataset["goal"];
    let counting;
    counting = setInterval((_) => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counting);
        }
    }, 100 / goal);
}
