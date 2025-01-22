//prompt the user to enter flavors
//split the sting on the commas
// push the splitted into an array
// create an empty object
// loop through the array 
  // if key is undefined 
    // key:1
  //else 
   //key[value] + 1
   
  const flavorPrompt = prompt(`Please enter your flavors seperated by a comma`)
  const flavorArray = flavorPrompt.split(`,`);
  //console.log(flavorArray);

  const customerOrder = {

  }
  const flavorFunction =(array) => {
    for( let i=0; i < flavorArray.length; i++){
    if(customerOrder[flavorArray[i]] === undefined) {
    customerOrder[flavorArray[i]] = 1;
   } else{
    customerOrder[flavorArray[i]]++;
   }
  }
  console.log(customerOrder); 
}
flavorFunction(flavorArray);

