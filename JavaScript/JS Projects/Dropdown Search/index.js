let data = {
    mobiles: {
        iphone: {
            iphoneX: {
                name: "IphoneX",
                price: 900,
                camera: "12 MP",
                display: "6.1 inches"
            },
            iphoneXR: {
                name: "Iphone XR",
                price: 800,
                camera: "12 MP + 12 MP",
                display: "6.1 inches"
            },
            iphone12: {
                name: "Iphone 12",
                price: 1000,
                camera: "12 MP + 12 MP",
                display: "6.1 inches"
            },
            iphone11: {
                name: "Iphone 11",
                price: 800,
                camera: "12 MP + 12 MP",
                display: "6.1 inches"
            },
        },
        samsung: {
            galaxyS21: {
                name: "Galaxy S21",
                price: 1200,
                camera: "12 MP + 12 MP",
                display: "6.8 inches"
            },
            galaxyA51: {
                name: "Galaxy A51",
                price: 800,
                camera: "12 MP + 12 MP",
                display: "6.7 inches"
            },
            galaxyA71: {
                name: "Galaxy A71",
                price: 1000,
                camera: "12 MP + 12 MP",
                display: "6.9 inches"
            },
        },
        oppo: {
            oppoV21: {
                name: "Oppo V21",
                price: 1000,
                camera: "12 MP + 12 MP",
                display: "6.5 inches",
            },
            oppoA33: {
                name: "Oppo A33",
                price: 800,
                camera: "12 MP + 12 MP",
                display: "6.5 inches"
            },
            oppoA53: {
                name: "Oppo A53",
                price: 1000,
                camera: "12 MP + 12 MP",
                display: "6.7 inches"
            },
        },
        lenovo: {
            lenovoK40: {
                name: "Lenovo K40",
                price: 1000,
                camera: "12 MP + 12 MP",
                display: "6.5 inches"
            },
            lenovoZ9: {
                name: "Lenovo Z9",
                price: 800,
                camera: "12 MP + 12 MP",
                display: "6.5 inches"
            },
            lenovoY55: {
                name: "Lenovo Y55",
                price: 1000,
                camera: "12 MP + 12 MP",
                display: "6.5 inches"
            },
        },
    },
};

const mobile = document.querySelector("#mobile");
const model = document.querySelector("#model");
const key = document.querySelector("#key");
const value = document.querySelector("#value");
const error = document.querySelector(".error");

for (const value in data.mobiles) {
    mobile.innerHTML = mobile.innerHTML + `<option>${value}</option>`
};

let areYouSaleem = () => {
    model.innerHTML = "";
    for (const value in data.mobiles[mobile.value]) {
        model.innerHTML = model.innerHTML + `<option>${value}</option>`
    }
};

let onBtnClick = () => {
    if (mobile.value) {
        value.innerHTML = "";
        key.innerHTML = "";
        error.innerHTML = "";
        let mobileData = data.mobiles[mobile.value][model.value];
        let keys = Object.keys(mobileData);
        let values = Object.values(mobileData);
        keys.map((value) => {
            key.innerHTML = key.innerHTML + `<li>${value}</li>`;
        })
        values.map((val) => {
            value.innerHTML = value.innerHTML + `<li>${val}</li>`;
        })
    } else {
        error.style.display = "block";
        error.style.color = "red";
        error.innerHTML = "Please select a mobile model";

    }
};
