import { useState } from "react";
import Bracket from "./Bracket.jsx";
import "./BracketTable.css";
import countries from "./teamflag.json"
const BracketTable = () => {

    const [brackets, setBrackets] = useState([
        {
            groupname: 'A',
            titlecolor: '#1E90FF',
            teams: ["co", "br", "py", "cr"]
        },
        {
            groupname: 'B',
            titlecolor: '#32CD32',
            teams: ["ar", "cl", "ec", "uy"]
        },
        {
            groupname: 'C',
            titlecolor: '#FF4500',
            teams: ["fr", "de", "es", "it"]
        },
        {
            groupname: 'D',
            titlecolor: '#800080',
            teams: ["gb", "nl", "be", "se"]
        },
        {
            groupname: 'E',
            titlecolor: '#000000',
            teams: ["ng", "sn", "gh", "ma"]
        },
        {
            groupname: 'F',
            titlecolor: '#FFD700',
            teams: ["jp", "kr", "au", "ir"]
        },
        {
            groupname: 'G',
            titlecolor: '#FF69B4',
            teams: ["us", "mx", "ca", "hn"]
        },
        {
            groupname: 'H',
            titlecolor: '#ADFF2F',
            teams: ["pt", "ch", "at", "dk"]
        },
        {
            groupname: 'I',
            titlecolor: '#00CED1',
            teams: ["ru", "ua", "pl", "cz"]
        },
        {
            groupname: 'J',
            titlecolor: '#FF00FF',
            teams: ["tr", "gr", "hr", "rs"]
        },
        {
            groupname: 'K',
            titlecolor: '#A52A2A',
            teams: ["ci", "dz", "cm", "eg"]
        },
        {
            groupname: 'L',
            titlecolor: '#FFA500',
            teams: ["nz", "sa", "qa", "iq"]
        }

    ]);

    return (
        <div>
            <div className="bracket-table">
                <div className="group-stage">
                    {brackets && (
                        <div>
                            {brackets.map((val, index) => (
                                <Bracket key={index} groupname={val.groupname} titlecolor={val.titlecolor} teams={val.teams} />
                            ))}
                        </div>
                    )}
                </div>
                <div className="round-of-32">

                </div>
                <div className="round-of-16">

                </div>
                <div className="quarterfinals">

                </div>
                <div className="semifinals">

                </div>
                <div className="third-place">

                </div>
                <div className="finals">

                </div>
                
            </div>
        </div>
    );
};

export default BracketTable;