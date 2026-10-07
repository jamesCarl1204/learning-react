import profilePic from './assets/guy.png'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic}></img>
            <h2 className="card-title">James Carl</h2>
            <p>Im a bscs Student and I learn programming</p>
        </div>
    );
}

export default Card