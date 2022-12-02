window.addEventListener('DOMContentLoaded',(event)=>{
    getVisitCount();
})

const functionApiUrl ="https://counter20221202151314.azurewebsites.net/api/GetResumeCounter?code=zIXsK6Inpl2BBMrBrNKx-IGeZB3OVGz2lZNHYhWuMMCDAzFuz9WbXw==";
const localfunctionApi = "http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () =>{
    let count = 30;
    fetch(functionApiUrl).then(response=>{
        return response.json()
    }).then(response =>{
        console.log("Function API was called");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}