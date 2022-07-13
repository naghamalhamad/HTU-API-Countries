const request=new XMLHttpRequest();
request.addEventListener('readystatechange',function(){
 if (request.readyState == 4 ){
     var data = JSON.parse(this.response);
     console.log(data);


     const divcontainer=document.getElementById('container');

     for (i=5;i<=16;i++){
         const divcard= document.createElement('div');
         divcard.classList.add('card');
         divcontainer.appendChild(divcard); 

        /*create image*/
         const flagid= document.createElement('img');
        flagid.id='flag';
        flagid.src=data[i].flags.png;
        divcard.appendChild(flagid);
     
       /*add name*/
       var nameid=document.createElement('p');
       nameid.id='name';
       divcard.appendChild(nameid);
       nameid.innerText=data[i].name;

       /* add capital, languages, region*/
       const capitalid =document.createElement('p');
       capitalid.id='text';
       capitalid.innerText='Capital: '+data[i].capital;
       divcard.appendChild(capitalid);

       /*language*/ 
       const languagesid =document.createElement('p');
       languagesid.id='text';
       languagesid.id='languages';

       var alllanguages=data[i].languages.map(languages=>{
         return languages.name;
       })
       languagesid.innerText='Languages: '+alllanguages;
       divcard.appendChild(languagesid);

       /*region*/ 
       const regionid =document.createElement('p');
       regionid.id='text';
       regionid.innerText='Region: '+data[i].region;
       divcard.appendChild(regionid);};

 }
});   
request.open('GET','https://restcountries.com/v2/all');
request.send();
