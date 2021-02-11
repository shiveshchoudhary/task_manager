import PropTypes from 'prop-types'

const Header = ({ title,onAdd,showAdd }) => {
    return (
        <header className='header'>
           <h1>{title}</h1>
           <button onClick={onAdd} className='btn'>{showAdd ? 'Close' : 'Add'}</button> 
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header
