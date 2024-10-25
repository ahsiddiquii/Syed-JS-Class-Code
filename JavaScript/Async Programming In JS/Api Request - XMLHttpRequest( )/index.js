// https://api.github.com/users/ehti0110

// METHODS:
// GET
// POST
// UPDATE
// PUT
// DELETED

// XMLHttRequest();
const requestURL = "https://api.github.com/users/ehti0110";
// Way to request an API:
const apiRequest = new XMLHttpRequest();

apiRequest.open('GET', requestURL);
// console.log(apiRequest.readyState);
apiRequest.onreadystatechange = () => {
    // console.log(apiRequest.readyState);
    // console.log(apiRequest.status);
    if (apiRequest.readyState === 4 && apiRequest.status === 200) {
        const userDetails = JSON.parse(apiRequest.responseText);
        console.log(userDetails);
        // NAME
        document.getElementById('name').innerText = userDetails.name;
        // USERNAME
        document.getElementById('login').innerText = userDetails.login;
        // AVATAR
        document.getElementById('avatar').src = userDetails.avatar_url;
        // BUTTON 
        document.getElementById('gitHubProfile').href = userDetails.html_url;
    }
}
apiRequest.send();
