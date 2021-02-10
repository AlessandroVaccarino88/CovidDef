import React from "react"
import "./App.css"
import { WorldMap } from "react-svg-worldmap"
import  useAxios from "axios-hooks"
import Taiwan from "@svg-maps/taiwan"
import {SVGMap} from "react-svg-map"
import "react-svg-map/lib/index.css"

function InteractiveMap({onClick}) {
    const [{data, loading, error}] = useAxios("https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases")
    if (loading)
        return (<div>Loading...</div>)
    if (error)
        return (<div>Errore...</div>)
    const num = data.filter(d=>d.countryInfo&&d.countryInfo.iso2).map(d => ({country: d.countryInfo.iso2, value: d.cases}))
    const stylingFunction = (context) => {
        const val = ((context.countryValue - context.minValue) / (context.maxValue - context.minValue))**0.25
        const l = (1-val)*50+50
        return {
            fill: `hsl(220,100%, ${l}%)`,
            fillOpacity: 1,
            stroke: "black",
            strokeWidth: 1,
            strokeOpacity: 0.2,
            cursor: "pointer"
        }
    }
    return (
        <div className="App" >
            <h1>Mappa mondiale dei contagi da Covid-19</h1>
            <WorldMap color="purple" value-suffix="people" size="lg"
                      data={num}
                      onClickFunction={(a,ab,country)=>onClick(country)}
                      stylingFunction={stylingFunction}
            />
        </div>
    )
}
export default InteractiveMap;