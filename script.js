
         const quotes=document.getElementById("quotes");
        const author=document.getElementById("author");
        const newQ=document.getElementById("newQ");

let realData = "";
const getNewQuotes  =()=>{
    
    let rnum=Math.floor(Math.random()*10)
    // console.log(rnum)
   
    console.log(realData[rnum].author)
    quotes.innerText=`${realData[rnum].text}`
    author.innerText=`${realData[rnum].author}`
    
    
}

const getQuotes=async()=>{
    const api= "https://type.fit/api/quotes"

try{
let data=await fetch(api)
 realData= await data.json()
getNewQuotes();
// console.log(realData[0].author)
// console.log(realData[0].text)
}
catch(error){

}

}
newQ.addEventListener("click",getNewQuotes)
getQuotes();

   
