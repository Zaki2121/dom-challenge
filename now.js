// const input = document.querySelector("#font-size");
const input = document.querySelector("#options");
const textArea = document.querySelector(".text-area");
const h1 = document.querySelector("#h1");
const inputdata = document.querySelector("#inputdata");



// input.addEventListener("input", (e) => {

//     console.log(e.target.value);

// })
options.addEventListener("change", (e) => {

    console.log(e.target.value);

    if (e.target.value == 1) {


        inputdata.addEventListener("input", (e) => {

            // console.log(e.target.value);

            h1.style.fontSize = `${e.target.value}px`;

        })



    }
    if (e.target.value == 2) {


        inputdata.addEventListener("input", (e) => {

            // console.log(e.target.value);

            // h1.style.fontFamily = "Inter, sans-serif";
            h1.style.fontFamily = `${e.target.value}, sans-serif`;

        })



    }
    if (e.target.value == 3) {


        inputdata.addEventListener("input", (e) => {

            // console.log(e.target.value);

            // h1.style.fontFamily = "Inter, sans-serif";
            h1.style.fontWeight = `${e.target.value}`;

        })



    }
    if (e.target.value == 4) {


        inputdata.addEventListener("input", (e) => {

            // console.log(e.target.value);

            // h1.style.fontFamily = "Inter, sans-serif";
            h1.style.color = `${e.target.value.toLowerCase()}`;

        })

    }


    if (e.target.value == 5) {


        inputdata.addEventListener("input", (e) => {

            // console.log(e.target.value);

            // h1.style.fontFamily = "Inter, sans-serif";
            textArea.style.margin = `${e.target.value}`;

        })



    }

})

