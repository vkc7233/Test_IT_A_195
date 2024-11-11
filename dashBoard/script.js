async function fetchdata() {
    try {
        const response = await fetch("https://api.github.com/users");
        const users = await response.json();
        const topUsers = users.slice(0, 10);
        displayUsers(topUsers);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

function displayUsers(users) {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach(user => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = user.html_url;
        link.target = "_blank";
        link.textContent = user.login;
        listItem.appendChild(link);
        userList.appendChild(listItem);
    });
}

function sort() {
    const dropdown = document.getElementById("sort-dropdown");
    const sortType = dropdown.value;

    const userList = document.getElementById("userList");
    const usersArray = Array.from(userList.children);

    if (sortType === "alphabetical") {
        usersArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
    }

    userList.innerHTML = ""; 
    usersArray.forEach(user => userList.appendChild(user));
}

function logout() {
    window.location.href = "login.html";
}
