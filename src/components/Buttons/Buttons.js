import './Buttons.css';

function Buttons () {
    return (
        <div className="buttons">
            <h2>Buttons</h2>
            <div className="buttons__wrapper">
                <button className='btn' onClick={()=>{console.log('click')}}>Random</button>
                <button className='btn btn__neck' id='neck-thick'>Thick</button>
            </div>

        </div>
    )
};

export default Buttons;

