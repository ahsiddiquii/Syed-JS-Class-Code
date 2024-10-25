let kareena = () => {
    let wazan = parseInt(document.querySelector("#Weight").value);
    let qad = parseInt(document.querySelector("#Height").value);
    let Results = document.querySelector("#Results");
    const pattern = /^\d+$/;
    if (wazan && qad) {
        if (pattern.test(wazan) || pattern.test(qad)) {
            let qadinmeter = qad / 100
            let result = wazan / qadinmeter ** 2
            let bobby = result.toFixed(1)
            Results.innerHTML = bobby
        }
    } else {
        console.log("Please Enter in number");
    }

}