import PropTypes from 'prop-types'

const onClick =() => {
    console.log("works")
}
const Header = ({ title }) => {
    return (
        <header className='header'>
           <h1>{title}</h1>
           <button onClick={onClick} className='btn'>Add</button> 
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
