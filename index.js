// Your code here
function greet() {
    var username = prompt("What is your name?")

    if (username && username.trim()) {
        alert("Hello, " + username.trim())
    } else {
        alert('Hello')
    }

    const userAge = prompt("How old are you?")
        console.log(parseInt(userAge));
    
    
    var Birthday = window.confirm("Has your birthday passed this year? \nOK for yes or Cancel for no.");
    if (true) {
        alert("You were born in " + [(Date().getFullYear)-(userAge)])
    } else  {
        alert("You were born in " + [(Date().getFullYear)-(userAge)+1])
    }
}

