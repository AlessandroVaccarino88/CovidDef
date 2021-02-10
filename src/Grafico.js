import React from 'react'
import Chart from "react-google-charts";
import useAxios from "axios-hooks";
import './App.css';

function Grafico({country}) {
    const [{data, loading, error}] = useAxios(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`)
    if (loading)
        return(<div>Loading</div>)
    if (error)
        return (<div>Error</div>)
    const dati = Object.keys(data.timeline.cases).map(d=>[d, data.timeline.cases[d]])
    dati.unshift(["data", "contagi"])
    return (<div className="Grafico">
        <h2>Andamento contagi nell'ultimo mese in {data.country}</h2>
        <Chart
            width={'500px'}
            height={'350px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={dati}
            options={{
                hAxis: {
                    title: 'Tempo',
                },
                vAxis: {
                    title: 'Totale',
                },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    </div>)
}
export default Grafico;