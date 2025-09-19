var pet = ""
// Ask if they are allergic, store in a boolean variable with OK/Cancel
var allergic = confirm("Are you alergic to fur?")
var active = confirm("Do you have an active lifestyle?")
if (allergic == false && active==true) pet = "dog";
else if (allergic == false && active ==false) pet = "cat";
else pet = "fish";
alert("Try a " + pet);




var cute = confirm("Do you want a cute pet?")
if (cute==true) pet = "hamster"
else pet ="rat"
alert("Try a " + pet)