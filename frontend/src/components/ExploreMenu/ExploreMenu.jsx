import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='expolore-menu-text'>Chosse from a diverse menu featuring a delectable array of Choose from a diverse menu. People are always on the lookout to try out something new, particularly when it comes to food. If a restaurant’s menu has not changed for months, then it is probably losing out on potential customers.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}className='explore-menu-list-item'>
                       <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                       <p>{item.menu_name}</p>
                    </div>

                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
