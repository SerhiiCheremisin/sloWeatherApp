
export interface IAppStoorage {
    cityIsChosen: boolean,
    chosenCity: string,
    cityList: []
}

export interface ICityListItem {
    time: string,
    location: string,
    temperature: number
}

export interface ICitySelectorProps {
     list : object
}

export interface IStatsProps {
    currentForecast : ICityListItem[],
    setForecast: Function
}
export interface IOtherDayProps {
    currentForecast : ICityListItem[],
}

export type hotOrCold = "hot" | "cold";
export type modalErrors = "dates" | "empty"

export interface IModalProps {
    error: modalErrors,
    closeFunction: Function
}