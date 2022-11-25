import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()
  return (
      <header className='flex justify-between items-center mb-5'>
        <h1 className='text-xl'>{title}</h1>
        {location.pathname === '/' && (<button className='btn' 
        onClick={onAdd}
        style={showAdd ? {backgroundColor:'red'} : {backgroundColor:' green'}}
        >{showAdd ? 'Close' : 'Add'}</button>)}
      </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;