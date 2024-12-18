let username = prompt("Enter the name")
let product = prompt("Enter product name")
let price = prompt("Enter price")
let day = prompt("Enter Date")
let occation = prompt("Enter occation")
let platform = prompt("Enter platform")
let obj={
    name:username,
    product:product,
    price:price,
    day:day,
    occation:occation,
    platform:platform
}
alert(`${obj.name} has purchased a ${obj.product} which costs ${obj.price} on ${obj.day} on the occation of ${obj.occation} in ${obj.platform}`)

let studentname = prompt("Enter student name")
let companyname = prompt("Enter company name")
let package = prompt("Enter your package")
let domain = prompt("Enter domain name")
let joiningdate = prompt("Enter your joining date")

let obj1={
    name:studentname,
    company:companyname,
    salary:package,
    domain:domain,
    date:joiningdate
}
alert(`${obj1.name} got placed in ${obj1.company} company as a ${obj1.domain} with package of ${obj1.salary} and joining on ${obj1.date} `)
