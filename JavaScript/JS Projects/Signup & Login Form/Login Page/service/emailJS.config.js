
(function(){
    emailjs.init({
      publicKey: "nxxptvoVw6p3o2Qd-",
    });
 })();
function sendPasswordEmail() {
    // Retrieve the JSON string from localStorage
    const userStr = localStorage.getItem("user");

    // Convert the JSON string back into an object
    const user = JSON.parse(userStr);
    emailjs.send(
        'service_lnj6wyc',
        'template_77yiwe1',
        {
            to_name: user.name,
            from_name: "EmailJS",
            message: `${user.name}, your password is ${user.password}`,
        },
        "nxxptvoVw6p3o2Qd-"
    )
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                title: "Check Your Email",
                text: "Password is sent on your email",
                icon: "success"
              });
        }, (error) => {
            console.log(error.text);
            alert('Failed to send password email.');
        });
}
