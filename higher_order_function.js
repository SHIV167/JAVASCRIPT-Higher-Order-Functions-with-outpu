//Higher Order Function


//1. ForEach

//2. filter

//3. map

//4. sort

//5. reduce


const companies= [

{name: "Google", category: "Product Based", start: 1981, end: 2004},
{name: "Amazon", category: "Product Based", start: 1992, end: 2008},
{name: "Paytm", category: "Product Based", start: 1999, end: 2007},
{name: "coforge", category: "Service Based", start: 1989, end: 2010},
{name: "MindTree", category: "Service Based", start: 1989, end: 2010}


];


const ages = [33, 12, 17, 56, 34, 54, 66, 87, 23, 42, 45, 22, 44, 77, 88];

//1. ForEach

/*for(let i=0;i<companies.length;i++)
{
	
	console.log(companies[i])
}
*/
/*
companies.forEach(function(company,index)

{
	
console.log(company)	
	
});
*/

/*
companies.forEach((company,index)=> (console.log(company.name)));
*/


//2. filter
/*
for (let i=0;i<=ages.length;i++)
{
if(ages[i] >= 20)
{
console.log(ages[i])	
	
}	
	
	
}
*/

/*
const age=ages.filter(function(age){
if(age >= 20){
	
return true;
}	
	
})

console.log(age)

*/



const finalAge=ages.filter((age,index)=> age >= 30)

console.log(finalAge)

/* const sb=companies.filter(function(company)
{
	
if(company.category === "Service Based")
{return true; }
	
})
console.log(sb)

*/

const sb=companies.filter(company => company.category === "Service Based" );
console.log(sb)

//3. map
const dummy=companies.map((company,index)=>{
	return `${company.name} ${company.category}`
	
	
})
console.log(dummy)

//4. sort
/*
const sorted=companies.sort(function(c1,c2)
{
if(c1.start < c2.start)	
{
return 1;	
}	
else{
	
	return -1;
}	
	
})
console.log(sorted);

*/

const sorted=companies.sort((c1,c2) => (c1.start < c2.start ? 1 : -1));
console.log(sorted);

const sortedAges=ages.sort((a,b) => (b-a));
console.log(sortedAges);


//5. reduce

let total=0;
for(let i=0;i<ages.length;i++){
	
	
	total+=ages[i];
}
console.log(total);



const sumage=ages.reduce(function(total,age){
	return total+age;	
})
console.log(sumage);

const sumage1=ages.reduce((total,age)=> total+age ,0);
console.log(sumage1)