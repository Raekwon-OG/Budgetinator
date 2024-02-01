import { Link } from 'react-router-dom';

function Expense () {
    return(
    <>
    <div className="page">
        <div className="page-title-div">
        <div className="page-title"><h3>All expenses</h3></div>
        <div className="page-title-create">
            <Link to="/expenses/add">
            <button type="button" class="create-btn btn btn-primary">Create</button>
            </Link>
        </div>
        </div>
        <div className="page-content">
            <br/>
            Hello

        </div>
    </div>
    </>
    )}
    
export default Expense;