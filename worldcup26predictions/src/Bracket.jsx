import "./Bracket.css";

import { useState, useEffect } from "react";

const Bracket = ({ groupname, titlecolor, teams }) => {
    
    const [teamList, updateTeams] = useState([]);
    
    const [num_of_teams, updateNum_of_teams] = useState(0);
    const [currentBracket, setCurrentBracket] = useState('');

    useEffect(() => {
        updateTeams(teams);
        updateNum_of_teams(teams.length);
    }, [teams]);


    return (
        <div>
            <div className="bracket-card">
                <div className="bracket-title" style={{ backgroundColor: `${titlecolor}` }}>
                    Group {groupname}
                </div>

                <div className="bracket-team">
                    <div className="bracket-table">
                        <table className="table">
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
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams.map((val, index) => (
                                    <tr key={index}>
                                        <td>
                                            <span className={`fi fi-${val.country.toLowerCase().replace(' ', '-')}`} style={{fontSize: "2em"}}></span>
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Bracket;
