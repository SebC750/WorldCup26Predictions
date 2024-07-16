import "./Bracket.css"
import countries from './teamflag.json'
import { useState } from "react"
const Bracket = ({ groupname, titlecolor, teams }) => {
   
    const [teamList, updateTeams] = useState(teams)
    const [selectedTeam, setSelectedTeam] = useState(null)
    const [num_of_teams, updateNum_of_teams] = useState(0)
    return (
        <div>
            <div className="bracket-card">
                <div className="bracket-title" style={{ backgroundColor: `${titlecolor}` }}>
                    Group {groupname}
                </div>

                <div className="bracket-team">
                    <div className="bracket-table">


                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Team</th>
                                    <th scope="col">MP</th>
                                    <th scope="col">W</th>
                                    <th scope="col">L</th>
                                    <th scope="col">D</th>
                                    <th scope="col">GA</th>
                                    <th scope="col">GF</th>
                                    <th scope="col">GD</th>
                                    <th scope="col">PTS</th>
                                </tr>
                            </thead>
                            <tbody>


                                {teamList.map((val, index) => (

                                    <tr key={index}>

                                        <td> <span className={`fi fi-${val.toLowerCase().replace(' ', '-')}`}></span></td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td> <div className="btn btn-danger"> Remove </div></td>
                                    </tr>

                                ))

                                }





                                {num_of_teams < 3? (
                                    <div className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#add-country-modal"> Add team</div>
                                ) : null}
                            </tbody>
                        </table>


                    </div>
                </div>
                <div className="modal fade" id="add-country-modal" tabIndex="-1" aria-labelledby="add-country-label" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title fs-5" id="add-country-label"> Add country </div>

                            </div>
                            <div className="modal-body">
                                { selectedTeam ? (
                                    <div className="selected-country-display"> <span className={`fi fi-${selectedTeam.country.toLowerCase().replace(' ', '-')}`} style={{fontSize: "2em"}}> </span>
                                        <h3> {selectedTeam.name} </h3> </div>
                                ):null}
                                
                                <div className="selection-window">
                                    {countries.map((val, index) =>
                                        <div className="country-option" key={index} onClick={() => setSelectedTeam({country: val.country, name: val.name})}>
                                            <span> {val.name} </span>
                                            <span className={`fi fi-${val.country.toLowerCase().replace(' ', '-')}`}> </span>
                                        </div>
                                    )}

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" data-bs-dismiss="modal"> Close </button>
                                <button className="btn btn-danger" data-bs-dismiss="modal"> Add country </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bracket;