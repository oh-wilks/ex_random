// ex1, replace inner html in p element
// create function to concatenate text

// export const concatText = () => {
//     let htmlText = document.getElementById("ex_1").innerHTML
//     htmlText = `${htmlText} world!`
//     document.getElementById("ex_1").innerHTML = htmlText;
// };

// function to clear text


let count = 0;

export function appendText() {
    let htmlText = document.getElementById("ex_1").innerHTML;
    htmlText = `${htmlText} world!`;
    document.getElementById("ex_1").innerHTML = htmlText;
}

export function concatText() {
    if (count < 3) {
        appendText();
        count++;
    }
}

export function clearText() {
    count = 0;
    document.getElementById("ex_1").innerHTML = "Hello";
}



