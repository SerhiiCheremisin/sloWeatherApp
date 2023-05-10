import { ICityListItem, hotOrCold } from "../utils/types";

export const getData = async (param:string):Promise<any>  => {
      try{
         const request = await fetch(`http://localhost:5170/${param}`)
         const respond = await request.json();
         return respond;  
      }
      catch (e) {
        console.log(e);
      }
}

export const getCelsius = (kelvin: number): number => {
   const celsius = Math.round(kelvin - 273.15);
   return celsius
}

export const getAverageDegrees = (array: ICityListItem[]):number => {
   const temperatureArray:number[] = array.map( (el: ICityListItem) => {
      return el.temperature; 
   })
   const sum:number = temperatureArray.reduce( (accum, current) => accum + getCelsius(current), 0);
   const averageDegrees: number = Math.round(sum/temperatureArray.length);
   return averageDegrees;
}

const convertToCelciusArrray = (array: ICityListItem[]): number[] => {
   const numberArray:number[] = array.map( (el: ICityListItem) => {
    return getCelsius(el.temperature); 
  })
  return numberArray;
}

export const getMostCommonTemperature = (array: ICityListItem[]):number => {
  const temperatureArray = convertToCelciusArrray(array);
  let temp;
  const tempArray = []
  const freqs = {};
  for (let i = temperatureArray.length; i--; ) { 
    temp = temperatureArray[i];
      if (freqs[temp]) freqs[temp] += 1;
      else freqs[temp] = 1;
  }
   
  for (const [key, value] of Object.entries(freqs)) {
    tempArray.push(value);
  }
   
  const higherNumber = Math.max(...tempArray);
  let returnDegree;
  for (const [key, value] of Object.entries(freqs)) {
    if (value === higherNumber) {
      returnDegree = key;
    }
  }
 return Number(returnDegree);
}


export const getAboveAverageDays = (array: ICityListItem[]):number => {
 const temperatureArray = convertToCelciusArrray(array);
 const average = getAverageDegrees(array);
 const aboveAverageArrray : number[] = temperatureArray.filter( (el) => el > average )
 return aboveAverageArrray.length;
}


export const hotAndColdDaysCounter = (array: ICityListItem[], condition: hotOrCold):number => {
  const temperatureArray = convertToCelciusArrray(array);
  if (condition === 'hot') {
    const hotDays: number[] = [];
    temperatureArray.map( (el:number) => {
      if (el > 15) {
        hotDays.push(el);
      }
      return
    })
    return hotDays.length;
  }
  const coldDays: number[] = [];
  temperatureArray.map( (el:number) => {
    if (el <= 5) {
      coldDays.push(el);
    }
    return
  })
  return coldDays.length;
}

export const checkDates = (dateFrom : string, dateTo:string) => {
  const date1 = new Date(dateFrom);
  const date2 = new Date(dateTo);
  date1.getSeconds();
  date2.getSeconds();
  if (date1 > date2) {
    return false
  }
  return true
}
