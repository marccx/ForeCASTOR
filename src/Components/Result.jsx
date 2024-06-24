import 'boxicons';
import sun from '../assets/imgs/sun.png';

function convertEpochToDate(t) {
    const dt = new Date(t * 1000); // Convert seconds to milliseconds
    const hr = dt.getHours();
    const min = dt.getMinutes();
    return `${hr}:${min}`;
}

export const Result = ({Weatherdata}) => {
   return(
        <div className='row justify-content-center weatherdata-row'>
        <div className="col-md-4">
        <div className="card card-weather">
            <div className="card-body">
                <div className="card-header d-flex flex-column">
                <h5 className="card-location">Today</h5>
                <h5 className='current-time'>{Weatherdata.weather_desc.toUpperCase()}</h5>
                </div>
               <div className="card-info">
               <div className="d-flex align-items-center justify-content-between">
               <h2 className='temp'>{Weatherdata.temp}°C</h2>
              <img src={sun} alt="" className='weather-icon' />
               </div>
               
               <div className="d-flex justify-content-between">
               <div className="d-flex">
                    <div className="info d-flex flex-column">
                        <p className='mb-0 feel'>Real Feel</p>
                        <p className='mb-0 feel-temp'>{Weatherdata.feel}°C</p>
                    </div>
                </div>
               <div className="d-flex">
                    <div className="info d-flex flex-column">
                        <p className='mb-0 feel'>Pressure</p>
                        <p className='mb-0 feel-temp'>{Weatherdata.pressure} mbar</p>
                    </div>
                </div>
               <div className="d-flex">
                    <div className="info d-flex flex-column">
                        <p className='mb-0 feel'>Humidity</p>
                        <p className='mb-0 feel-temp'>{Weatherdata.humidity}%</p>
                    </div>
                </div>
               </div>
               <div className="d-flex justify-content-between">
               <div className="d-flex">
                    <div className="info d-flex flex-column">
                        <p className='mb-0 feel'>Wind Speed</p>
                        <p className='mb-0 feel-temp'>{Weatherdata.wind} km/h</p>
                    </div>
                </div>
               <div className="d-flex">
                    <div className="info d-flex flex-column">
                        <p className='mb-0 feel'>Sunrise</p>
                        <p className='mb-0 feel-temp'>{convertEpochToDate(Weatherdata.sunrise)}</p>
                    </div>
                </div>
               <div className="d-flex">
                    <div className="info d-flex flex-column">
                        <p className='mb-0 feel'>Sunset</p>
                        <p className='mb-0 feel-temp'>{convertEpochToDate(Weatherdata.sunset)}</p>
                    </div>
                </div>
               </div>
               </div>
            </div>
            </div>
        </div>
        <div className="col-md-2">
        <div className="card card-weather">
            <div className="card-body">
                <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-location">Tuesday</h5>
                </div>
               <div className="card-info">
               <div className="d-flex">
               <h2 className='temp temp-small'>XX°C</h2>
               </div>
               
               </div>
            </div>
            </div>
        </div>
        <div className="col-md-2">
        <div className="card card-weather">
            <div className="card-body">
                <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-location">Tuesday</h5>
                </div>
               <div className="card-info">
               <div className="d-flex">
               <h2 className='temp temp-small'>XX°C</h2>
               </div>
               
               </div>
            </div>
            </div>
        </div>
        <div className="col-md-2">
        <div className="card card-weather">
            <div className="card-body">
                <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-location">Tuesday</h5>
                </div>
               <div className="card-info">
               <div className="d-flex">
               <h2 className='temp temp-small'>XX°C</h2>
               </div>
               
               </div>
            </div>
            </div>
        </div>
        <div className="col-md-2">
        <div className="card card-weather">
            <div className="card-body">
                <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-location">Tuesday</h5>
                </div>
               <div className="card-info">
               <div className="d-flex">
               <h2 className='temp temp-small'>XX°C</h2>
               </div>
               
               </div>
            </div>
            </div>
        </div>
        </div>   
    ); 
}