/* Pet Advice Kata */

/* Var, Prompt, Confirm, Alert, Compound Conditional */

// Create pet variable, set equal to empty quotes ("")
var pet = ""
// Ask if they are allergic, store in a boolean variable with OK/Cancel
var allergic = confirm("Are you alergic to fur?")
var active = confirm("Do you have an active lifestyle?")
if (allergic == false && active==true) pet = "dog";
else if (allergic == false && active ==false) pet = "cat";
else pet = "fish";
alert("Try a " + pet);
// If they are allergic, ask if they want a cute pet, store in a boolean variable with OK/Cancel
// If they are not allergic, ask if they want to be outdoors with their pet.  Store it in a boolean with OK/Cancel.
// If allergic and cute, pet =  bird
// Else if allergic and not cute,  pet =  tarantula
// Else if not allergic and outdoors,  pet =  dog
// Else if not allergic and indoors,  pet =  cat 
// Display the type of pet: You would do well with a pet
// Ask for a pet name for the pet starting with the same letter as the pet starts with
// Display petname the pet says hi. 
