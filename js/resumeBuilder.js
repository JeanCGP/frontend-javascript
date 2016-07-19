/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*$("#main").append("Jean Carlos Gomes");*/
/*
var name = "Jean Carlos Gomes"

var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

var skills = ["programming", "teaching", "JS"]
var bio ={
    "name": "Jean",
    "age": 26,
    "skills": skills
};

console.log(bio);

$("#main").append(bio.name);