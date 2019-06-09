var todo = ["Buy a new dress"];

var input = prompt("What you want to do?");

while(input !== "quit")
{
	if(input === "list")
	{
		console.log("**********");
		todo.forEach(function(todo,i)
			{

				console.log(i+ ": " +todo);
			});
		console.log("**********");
	}
	else if(input === "new")
	{
		
		var newInput = prompt("Wht you want to add?");
	
		todo.push(newInput);

		console.log("added to do");
	}
	else if(input === "delete")
	{
		//take index num from user
		var index = prompt("Enter index you want to delete");
		//delete index from list specified by user 
		todo.splice(index,1);
		//display some feedback
		console.log("deleted todo");
	}

	//ask again for new input
	input = prompt("What you want to do?");
}

console.log("OK,YOU QUIT THE APP!!");