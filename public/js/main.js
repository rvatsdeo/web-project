const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal==="")
    {
        city_name.innerText=`please write a city's name`;
    }else{
        try{
            let url=`api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0cb1c419719bc3b147944e5aa0d818cf`;
        const response=await fetch(url);
        const data= await response.json();
        // console.log(data);
        console.log(response);
        // const arrData=[data];
        // temp.innerText=arrData[0].main.temp;
        // temp_status.innerText=arrData[0].weather[0].temp;
        }
        catch{
            city_name.innerText=`please write a correct city's name `;
        }
        
    }
}
submitBtn.addEventListener('click',getInfo);

