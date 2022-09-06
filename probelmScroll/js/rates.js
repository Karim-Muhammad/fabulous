let ratesDIVs = document.querySelectorAll(".testmonial .rates");
function active() {
    let parent = this.parentNode;
    reset(parent);
    console.log(parent)
    if(this.classList.contains("active")) {
        console.log("I'm Here")
        // do nothing
    }else {
        const index = [...parent.children].indexOf(this, 0);
        for(let i = 0; i <= index; i++) {
            parent.children[i].classList.add("active")
        }
    }
}
ratesDIVs.forEach((rateDIV)=> {
    console.log(rateDIV)
    Array.from(rateDIV.children).forEach((rate)=> {
        rate.addEventListener("click", active)
    })
})

function reset(parent) {
    [...parent.children].forEach((rate)=> {
        rate.classList.remove("active")
    })
}
    
/**

function active() {
    reset();
    console.log(this) // test
    let parent = this.parentNode;
    console.log(parent)
    if(this.classList.contains("active")) {
        console.log("I'm Here")
        // do nothing
    }else {
        const index = [...parent.children].indexOf(this, 0);
        // For Test
        // console.log(index)
        // console.log(this)
        for(let i = 0; i <= index; i++) {
            // console.log(parent, typeof parent) test
            parent.children[i].classList.add("active")
        }
    }
}


*/