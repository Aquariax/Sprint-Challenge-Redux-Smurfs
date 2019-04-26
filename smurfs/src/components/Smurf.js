import React from "react";

 const Smurf = (props) => {
    return(
        <div className="smurfs">
        { props.smurf.map ( smurf => (
                <div id={smurf.id} key={smurf.id}>
                    <div>
                    <p> {smurf.name} </p>
                    <p> {smurf.age} </p>
                    <p> {smurf.height} </p>
                    </div>
                    <button onClick={(event, id = smurf.id) => props.delete(event, id)} >Delete</button>
                </div>
            ))
        }
        </div>
    );
}

 export default Smurf; 