const parseCode = (str) => {
  // your code here
	let [a,b,c] = str.split( /00*/g)
	return{
		firstName : a,
		lastName : b,
		id:c
	}
};

// Do not change the code below
// const str = prompt("Enter str: ");
// alert(JSON.stringify(parseCode(str)));
