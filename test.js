
let color = ['Red', 'Green', 'Blue', 'Yellow', 'orange', 'tomato', 'brown', 'chocolate', 'cyan', 'darkblue', 'aqua', 'crimson'];


const Colors = document.querySelector(".colors");
const textArea = document.querySelector(".text-area");
const h1 = document.querySelector("#h1");
console.log(h1);
const fontOptions = document.querySelector("#font-options");
const borderOptions = document.querySelector("#border-options");
const fontWeightoptions = document.querySelector("#fontWeight-options");
const fontFamily = document.querySelector("#fontFamily-options");

color.forEach((c) => {



    Colors.innerHTML += `
     <div class="color"  id="Color" >${c}</div>
     `;


    //     red.style.backgroundColor = "red";


    // console.log(red);


    // if (c == "Red") {
    //     let red = document.querySelectorAll(".color");
    //     red.style.backgroundColor = "red";
    // } else {
    //     let red = document.querySelector(".color");
    //     red.style.backgroundColor = "green";

    // }

})
let red = document.querySelectorAll(".color");
console.log(red[0])
red[0].style.backgroundColor = "red";
red[1].style.backgroundColor = "green";
red[2].style.backgroundColor = "blue";
red[3].style.backgroundColor = "Yellow";
red[4].style.backgroundColor = "orange";
red[5].style.backgroundColor = "tomato";
red[6].style.backgroundColor = "brown";
red[7].style.backgroundColor = "chocolate";
red[8].style.backgroundColor = "cyan";
red[9].style.backgroundColor = "darkblue";
red[10].style.backgroundColor = "aqua";
red[11].style.backgroundColor = "crimson";
// red[12].style.backgroundColor = "chocolate";

let Color = document.querySelectorAll("#Color");
// console.log(Color)

Color.forEach((color) => {

    color.addEventListener("click", (e) => {
        console.log(e.target.innerText);


        GetColor(e.target.innerText);


    })

})

const GetColor = (color) => {

    if (color == "Red") {

        textArea.style.backgroundColor = "Red";
    } else if (color == "Green") {
        textArea.style.backgroundColor = "Green";


    } else if (color == "Blue") {
        textArea.style.backgroundColor = "Blue";



    } else if (color == "Yellow") {
        textArea.style.backgroundColor = "Yellow";


    } else if (color == "orange") {
        textArea.style.backgroundColor = "orange";



    } else if (color == "tomato") {
        textArea.style.backgroundColor = "tomato";


    } else if (color == "brown") {
        textArea.style.backgroundColor = "brown";



    } else if (color == "chocolate") {
        textArea.style.backgroundColor = "chocolate";


    } else if (color == "cyan") {
        textArea.style.backgroundColor = "cyan";



    } else if (color == "darkblue") {
        textArea.style.backgroundColor = "darkblue";



    } else if (color == "aqua") {
        textArea.style.backgroundColor = "aqua";


    } else if (color == "crimson") {
        textArea.style.backgroundColor = "crimson";



    } else {
        console.log("unknown color");

    }


}


fontOptions.addEventListener("keyup", (e) => {

    console.log(e.target.value)

    h1.style.fontSize = `${e.target.value}px`;



    // addFontSize(e.target.value);

    // } else {
    //     console.log("Err")
    // }


})
borderOptions.addEventListener("change", (e) => {


    // console.log(e.target.value);

    addBorder(e.target.value);
})

fontWeightoptions.addEventListener("change", (e) => {

    addFontWeight(e.target.value);
})

fontFamily.addEventListener("change", (e) => {

    addFontFamily(e.target.value);
})

const addFontFamily = (fontFamily) => {
    if (fontFamily == 1) {

        h1.style.fontFamily = "Inter, sans-serif";

    }
    if (fontFamily == 2) {

        h1.style.fontFamily = "Roboto , sans-serif";
    }
    if (fontFamily == 3) {

        h1.style.fontFamily = "Poppins, sans-serif";

    }
    if (fontFamily == 4) {

        h1.style.fontFamily = "Anybody, cursive";

    }
}
const addFontWeight = (fontweight) => {
    console.log(fontweight);
    if (fontweight == 1) {

        h1.style.fontWeight = "100";

    }
    if (fontweight == 2) {

        h1.style.fontWeight = "200";

    }
    if (fontweight == 3) {

        h1.style.fontWeight = "300";

    }
    if (fontweight == 4) {

        h1.style.fontWeight = "400";

    }
    if (fontweight == 5) {

        h1.style.fontWeight = "500";

    }

}

const addBorder = (borderRadius) => {
    if (borderRadius == 1) {

        textArea.style.borderTopLeftRadius = "10px";

    } else {
        textArea.style.borderTopLeftRadius = "0px";


    }
    if (borderRadius == 2) {

        textArea.style.borderTopRightRadius = "10px";

    }
    if (borderRadius == 3) {

        textArea.style.borderBottomLeftRadius = "10px";

    }
    if (borderRadius == 4) {

        textArea.style.borderBottomRightRadius = "10px";

    }


}

const addFontSize = (fontSize) => {
    if (fontSize == 10) {

        h1.style.fontSize = "10px";

    }
    if (fontSize == 20) {

        h1.style.fontSize = "20px";

    }
    if (fontSize == 30) {

        h1.style.fontSize = "30px";

    }
    if (fontSize == 40) {

        h1.style.fontSize = "40px";

    }
}














// Color.addEventListener('click', (e) => {



//     textArea.style.backgroundColor = "Red";

//     GetColor(e.value.innerText);
//     console.log(e.target.innerText);




// })