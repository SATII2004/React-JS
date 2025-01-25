import profilepic from './assets/my-image.jpg'

function Card()
{
    return(
        
        <div className="card">
            <img className="card-image" src={profilepic} alt="profile picture" style={{width: "200px", height: "200px"}}/>

            <h2 className="card-title">SATISH</h2>
            <p className="card-text">I am interested in History</p>
        </div>
        
    );
}

export default Card