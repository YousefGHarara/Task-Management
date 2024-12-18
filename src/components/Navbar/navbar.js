import './navbar.css'

import React from 'react';
import toji from '../../assets/imgs/toji.png'
import AddNew from '../AddNew/addNew';
import { useTask } from '../../assets/Context/taskContext';

const Navbar = () => {

  const {setIsModel} = useTask();

  return (
    <nav>
      <ul>
        <li>
        <button onClick={() => setIsModel(true)} className='btn-new'>+ Add New</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
