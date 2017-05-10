
//when the page is ready, do this 

// premade  
// $(document).ready();


var existingUsers = [
	// array of objects to store existing user data
	{
		user: "user1",
		pass: "apple"
	},
	{
		user: "user2",
		pass: "orange"
	},
	{
		user: "user13",
		pass: "password3"
	}
]

// function to determine if the user exists and the password matchs that user, function fires on user clicking button line 28 index.html
function login() {
	// store the tag with id="sign" in var username
	var username = document.getElementById("username")
	// store the tag with id="sign" in var password
	var password = document.getElementById("password")
	// store the tag with id="results" in var results
	var results = document.getElementById('results')

	// confirm the element exists and then what value the user submits
	console.log(username, password, results)
	console.log("username value is: " + username.value)
	console.log("password value is: " + password.value)
	
	// loop through existing users array one item at a time 
	for(i = 0; i < existingUsers.length; i = i + 1) {
		// check each user as you loop through the array of objects
		console.log(existingUsers[i])
		if(username.value === existingUsers[i].user && password.value === existingUsers[i].pass) {
			// check to see if the IF statement code block executed
			console.log("if statement ran, so we have a match!")
			//Login Succesful (in real world it would just take you to the home page) 
			results.className = 'success'
			//Login Succesful (in real world it would just take you to the home page) 
			results.textContent = "Welcome to RocNation " + username.value + "!"
			//stop the function from running continuing.
			return
		} 
	}
	
	//run failure for if the  username and password don't match
	console.log("no match was found :/")
	//changes the  class of results to let the person know it the info provided doesnt match
	results.className = 'failure'
	//will display rresults element to display login failed
	results.textContent = "!! username or password don't match"
}