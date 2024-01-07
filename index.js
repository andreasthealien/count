const number = document.querySelector("#number");
const setNumber = document.querySelector("#setNumber");
const countBy = document.querySelector("#countBy");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const setNumberBTN = document.querySelector("#setNumberBTN");
const countByBTN = document.querySelector("#countByBTN");


let countByNumber = 1;

function getNumber() {
    return parseFloat(number.textContent);
};


function setTall(tall) {
    number.innerHTML = String(tall);
};


setNumberBTN.addEventListener("click", () => {
    const numberToSet = parseFloat(setNumber.value);
    setTall(numberToSet);
});

countByBTN.addEventListener("click", () => {
    const numberToSet2 = parseFloat(countBy.value);
    countByNumber = numberToSet2;
});


plus.addEventListener("click", () => {
    setTall(getNumber() + countByNumber)
});

minus.addEventListener("click", () => {
    setTall(getNumber() - countByNumber)
});