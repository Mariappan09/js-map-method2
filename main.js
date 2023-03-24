// using method-2
const users=[
{
	first_name:"mari",
	last_name:"raj",
	age:30
},
{
	first_name:"sri",
	last_name:"ram",
	age:45
},
{
	first_name:"sathish",
	last_name:"kumar",
	age:25
}
];

 var a=users.map(function(mari){
	return mari.last_name;
})
console.log(a)
