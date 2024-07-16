import "./legend.css"
const LegendTable = () => {
    return (
        <div>
            <div className="legend-table">
                <div className="row">
                    <div className="legend-items">

                    <div className="legend-item">
                        Qualified
                        <div className="legend-color" style={{backgroundColor: "#2196F3"}}/>
                    </div>
                    <div className="legend-item" >
                        Disqualified
                        <div className="legend-color" style={{backgroundColor: "#FF9800"}}/>
                    </div>
                    <div className="legend-item">
                        Win
                        <div className="legend-color" style={{backgroundColor: "#4CAF50"}}/>
                    </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="legend-items">
                    <div className="legend-item">
                        Loss
                        <div className="legend-color" style={{backgroundColor: "#F44336"}}/>
                    </div>
                    <div className="legend-item">
                        Draw
                        <div className="legend-color" style={{backgroundColor: "#9E9E9E"}}/>

                    </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
export default LegendTable;