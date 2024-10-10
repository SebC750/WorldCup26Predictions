import { useState } from "react";
import Bracket from "./Bracket.jsx";
import "../Styles/BracketTable.css";
import countries from '../teamflag.json';
const BracketTable = () => {
    const [qualifyingCountries, updateQualifyingCountries] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [format, setFormat] = useState('');

    const [brackets, setBrackets] = useState([
        { groupname: 'A', titlecolor: '#1E90FF', teams: [] },
        { groupname: 'B', titlecolor: '#32CD32', teams: [] },
        { groupname: 'C', titlecolor: '#FF4500', teams: [] },
        { groupname: 'D', titlecolor: '#800080', teams: [] },
        { groupname: 'E', titlecolor: '#000000', teams: [] },
        { groupname: 'F', titlecolor: '#FFD700', teams: [] },
        { groupname: 'G', titlecolor: '#FF69B4', teams: [] },
        { groupname: 'H', titlecolor: '#ADFF2F', teams: [] },
        { groupname: 'I', titlecolor: '#00CED1', teams: [] },
        { groupname: 'J', titlecolor: '#FF00FF', teams: [] },
        { groupname: 'K', titlecolor: '#A52A2A', teams: [] },
        { groupname: 'L', titlecolor: '#FFA500', teams: [] },
    ]);

    const handleAddTeam = (groupname, country) => {
        console.log("Group name:", groupname)
        console.log("Group name:", country)
        setBrackets(prevBrackets =>
            prevBrackets.map(bracket =>
                bracket.groupname === groupname ?
                    { ...bracket, teams: [...bracket.teams, country] } :
                    bracket
            )
        );
    };

    const handleRemoveTeam = (groupname, country) => {
        setBrackets(prevBrackets =>
            prevBrackets.map(bracket =>
                bracket.groupname === groupname ?
                    { ...bracket, teams: bracket.teams.filter(team => team !== country) } :
                    bracket
            )
        );
    };

    return (
        <div className="container">
            <div className="settings-buttons">
                <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Change format
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={() => setFormat('wc2026')}>World Cup 2026 48 teams</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setFormat('wc32')}>Standard 32 team World Cup</a></li>
                    </ul>
                </div>
                <div className="btn btn-danger"><a href="#match-schedule" style={{ textDecoration: "none", color: "white" }}>See matches</a></div>
            </div>

            {format === 'wc2026' ? (
                <div className="bracket-table">
                    <div className="group-stage">
                        <h2>Group Stage</h2>
                        {brackets && (
                            <div>
                                {brackets.map((val, index) => (
                                    <div>
                                        <Bracket
                                            key={index}
                                            groupname={val.groupname}
                                            titlecolor={val.titlecolor}
                                            teams={val.teams}
                                            onAddTeam={handleAddTeam}
                                            onRemoveTeam={handleRemoveTeam}
                                        />
                                        <button className="btn btn-primary"> Add team</button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            ) : (
                <div className="bracket-table">
                    <div className="group-stage">
                        <h2>Group Stage</h2>
                        {brackets && (
                            <div>
                                {brackets.slice(0, 8).map((val, index) => (

                                    <div>
                                        {console.log("Bracket stages: ", val.groupname)}
                                        <Bracket
                                            key={index}
                                            groupname={val.groupname}
                                            titlecolor={val.titlecolor}
                                            teams={val.teams}
                                            onAddTeam={handleAddTeam}
                                            onRemoveTeam={handleRemoveTeam}
                                        />

                                        {val.teams.length < 4 && (
                                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#add-country-modal">Add team</button>

                                        )}
                                        <div className="modal fade" id="add-country-modal" tabIndex="-1" aria-labelledby="add-country-label" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="modal-title fs-5" id="add-country-label">Add country</div>
                                                    </div>
                                                    <div className="modal-body">
                                                        {console.log(val.groupname)}
                                                        {selectedTeam ? (
                                                            <div className="selected-country-display">
                                                                <span className={`fi fi-${selectedTeam.country.toLowerCase().replace(' ', '-')}`} style={{ fontSize: "2em" }}> </span>
                                                                <h3>{selectedTeam.name}</h3>
                                                            </div>
                                                        ) : null}

                                                        <div className="selection-window">
                                                            {countries.map((val, index) =>
                                                                <div className="country-option" key={index} onClick={() => setSelectedTeam({ country: val.country, name: val.name })}>
                                                                    <span>{val.name}</span>
                                                                    <span className={`fi fi-${val.country.toLowerCase().replace(' ', '-')}`} style={{ fontSize: '2em' }}> </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                        <button className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleAddTeam(val.groupname, selectedTeam)}>Add country</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                </div>
            )}
            <div id="match-schedule">
                <h2>Matches</h2>

            </div>

        </div>
    );
};

export default BracketTable;
