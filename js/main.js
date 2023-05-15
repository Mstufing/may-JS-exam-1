// ? Task #1

function hackerSpeak(str) {
    return str.replaceAll("a", "4").replaceAll("e", "3").replaceAll("i", "1").replaceAll("o", "0").replaceAll("s", "5")
}

let myBtn = document.querySelector(".btn");

myBtn.onclick = () => {
    let myInp = document.querySelector(".inp");
    let myResult = document.querySelector(".result");

    myResult.innerHTML = hackerSpeak(myInp.value);
}