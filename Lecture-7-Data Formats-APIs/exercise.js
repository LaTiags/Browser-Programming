const output = document.getElementById("output")



function log(text){
    output.textContent += text + "\n"
}

function clearOutput(){
    output.textContent = ""
}

document.getElementById("btnLoadUsers").onclick = loadUsers

async function loadUsers(){
        clearOutput()

    // TODO: fetch users from API

    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    if(!response.ok){
        throw new Error("HTTP error: " + response.status)
    }

    const data = await response.json()
    const list =document.getElementById("userList")
    list.innerHTML = ""
    console.log(data)
    data.forEach(function(user){
        const name = user.name
        const email =  user.name 
        const city = user.address.city
        const li = document.createElement("li")
        
        log(name + " - " + email + " - " + city)
        li.textContent = name + " - "+ email + " - " + city
        list.appendChild(li)
    });
}
catch(error){
    log("Error " + error.message )
}



}

/*1️⃣ What does fetch() return?
The fetch() function returns a Promise that resolves into a Response object.
This object represents the entire HTTP response, including the status code, headers,
and the raw body which hasn't been parsed into data yet.

2️⃣ Why do we use response.json()?
We use response.json() because the data sent from the API arrives as a raw string or stream that JavaScript cannot use directly.
This method reads that stream to completion and converts (parses) the JSON text into a usable JavaScript object or array.

3️⃣ Why must we check response.ok?
We check response.ok because fetch() only fails (triggers the catch block) if there is a network error,
like losing your Wi-Fi connection. It will still technically "succeed" if the server returns a 404 Not Found or 500 Server Error,
so we must manually check this property to ensure the data we received is actually valid.
*/