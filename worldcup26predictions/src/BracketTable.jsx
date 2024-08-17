import { useState } from "react";
import Bracket from "./Bracket.jsx";
import "./BracketTable.css";

const BracketTable = () => {
    const [qualifyingCountries, updateQualifyingCountries] = useState([])
    const [format, setFormat] = useState('')
    const [brackets, setBrackets] = useState([
        {
            groupname: 'A',
            titlecolor: '#1E90FF',
            teams: []
        },
        {
            groupname: 'B',
            titlecolor: '#32CD32',
            teams: []
        },
        {
            groupname: 'C',
            titlecolor: '#FF4500',
            teams: []
        },
        {
            groupname: 'D',
            titlecolor: '#800080',
            teams: []
        },
        {
            groupname: 'E',
            titlecolor: '#000000',
            teams: []
        },
        {
            groupname: 'F',
            titlecolor: '#FFD700',
            teams: []
        },
        {
            groupname: 'G',
            titlecolor: '#FF69B4',
            teams: []
        },
        {
            groupname: 'H',
            titlecolor: '#ADFF2F',
            teams: []
        },
        {
            groupname: 'I',
            titlecolor: '#00CED1',
            teams: []
        },
        {
            groupname: 'J',
            titlecolor: '#FF00FF',
            teams: []
        },
        {
            groupname: 'K',
            titlecolor: '#A52A2A',
            teams: []
        },
        {
            groupname: 'L',
            titlecolor: '#FFA500',
            teams: []
        }

    ]);

    return (
        <div>
            <div class="settings-buttons">
                <div class="btn-group">
                    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Change format
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" onClick={() => setFormat('wc2026')}> World Cup 2026 48 teams </a></li>
                        <li><a class="dropdown-item" href="#" onClick={() => setFormat('wc32')}> Standard 32 team World Cup </a></li>

                    </ul>
                </div>
                <div className="btn btn-danger"> <a href="#match-schedule" style={{ textDecoration: "none", color: "white" }}> See matches </a></div>
            </div>

            {format === 'wc2026' ? (
                <div className="bracket-table">


                    <div className="group-stage">
                        <h2> Group Stage </h2>
                        {brackets && (
                            <div>
                                {brackets.map((val, index) => (
                                    <Bracket key={index} groupname={val.groupname} titlecolor={val.titlecolor} teams={val.teams} />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="knockout-out-stage">
                        <h2> Round of 32</h2>

                    </div>
                    <div className="knockout-out-stage">
                        <h2> Round of 16</h2>
                    </div>
                    <div className="knockout-out-stage">
                        <h2> Quarterfinals</h2>
                    </div>
                    <div className="knockout-out-stage">
                        <h2> Semifinals</h2>
                    </div>
                    <div className="knockout-out-stage">

                    </div>
                    <div className="knockout-out-stage">
                        <h2> Finals</h2>
                    </div>

                </div>
            ) : <div className="bracket-table">


                <div className="group-stage">
                    <h2> Group Stage </h2>
                    {brackets && (
                        <div>
                            {brackets.slice(0, 8).map((val, index) => (
                                <Bracket key={index} groupname={val.groupname} titlecolor={val.titlecolor} teams={val.teams} />
                            ))}
                        </div>
                    )}
                </div>
                <div className="knockout-out-stage">
                    <h2> Round of 32</h2>
                </div>
                <div className="knockout-out-stage">
                    <h2> Round of 16</h2>
                </div>
                <div className="knockout-out-stage">
                    <h2> Quarterfinals</h2>
                </div>
                <div className="knockout-out-stage">
                    <h2> Semifinals</h2>
                </div>
                <div className="knockout-out-stage">

                </div>
                <div className="knockout-out-stage">
                    <h2> Finals</h2>
                </div>

            </div>}
            <div id="match-schedule">
                <h2> Matches </h2>
                
            </div>
        </div>
    );
};

export default BracketTable;