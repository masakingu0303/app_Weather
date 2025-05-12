import { useState, useEffect } from 'react'

const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [])

  if (!weather) return <div>読み込み中...</div>;

  return (
    <div>
      <h1>天気アプリ</h1>
      <h2>{weather.title}</h2>
      <div className="container">

        <div className='weatherBox'>
          <p>今日</p>
          <p>{weather.forecasts[0].telop}</p>
          <img src={weather.forecasts[0].image.url} alt="" />
        </div>

        <div className='weatherBox'>
          <p>明日</p>
          <p>{weather.forecasts[1].telop}</p>
          <img src={weather.forecasts[1].image.url} alt="" />
        </div>

        <div className='weatherBox'>
          <p>明後日</p>
          <p>{weather.forecasts[2].telop}</p>
          <img src={weather.forecasts[2].image.url} alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default App
