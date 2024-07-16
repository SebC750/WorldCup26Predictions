import "./Navbar.css"
const Navbar = () =>{
return (
    <div>
        <header>
            <div className="navbar"> 
                <div className="navbar-logo">
                    <h1 className="navbar-logo-title"> World Cup 26 </h1> <img src="./world-cup.svg" alt="world-cup-logo" height="80px" weight="80px"/>
                </div>
                <div className="navbar-items">
                    <div className="navbar-item">
                        <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#new-prediction-modal"> New Prediction </button>
                    </div>
                    
                </div>
            </div>
        </header>
        <div className="modal fade" id="new-prediction-modal" tabIndex="-1" aria-labelledby="new-prediction-label" aria-hidden="true"> 
           <div className="modal-dialog">
                 <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title fs-5" id="new-prediction-label"> Warning! </div>

                    </div>
                    <div className="modal-body">
                        If you choose to create a new prediction, all of your previous changes will be erased.
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-danger" data-bs-dismiss="modal"> Go back </button>
                        <button className="btn btn-danger" data-bs-dismiss="modal"> Create new </button>
                    </div>

                 </div>
           </div>
        </div>
    </div>
)
}
export default Navbar;