import useAxios from "axios-hooks";

function DatiGenerali ({country}) {
    const [{data, loading, error}] = useAxios("https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=false")
    if (loading)
        return ("Loading")
    if (error)
        return ("Error")
    return (
            <div className="row">
                <div style={{flex: 1}}>
                    <h2>Contagi Mondiali</h2>
                    <h3>{data.cases}</h3>
                </div>
                <div style={{flex: 1}}>
                    <h2>Morti Mondiali</h2>
                    <h3>{data.deaths}</h3>
                </div>
                <div style={{flex: 1}}>
                    <h2>Guariti Mondiali</h2>
                    <h3>{data.recovered}</h3>
                </div>
            </div>
        )
}

function Dati ({country}){
    const [{data, loading, error}] = useAxios(`https://disease.sh/v3/covid-19/countries/${country}?yesterday=false&twoDaysAgo=false&strict=true`)
    if (loading)
        return("Loading")
    if (error)
        return("Error")
    return(
        <div className="Dati">
            <DatiGenerali/>
            <div className="row">
                <div style={{flex: 1}}>
                    <h2>Contagi in {data.country}</h2>
                    <h3>{data.cases}</h3>
                </div>
                <div style={{flex: 1}}>
                    <h2>Morti in {data.country}</h2>
                    <h3>{data.deaths}</h3>
                </div>
                <div style={{flex: 1}}>
                    <h2>Guariti in {data.country}</h2>
                    <h3>{data.recovered}</h3>
                </div>
            </div>
        </div>
    )
}

export default Dati;