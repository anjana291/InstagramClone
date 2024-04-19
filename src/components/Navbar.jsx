import { faCompass, faHeart} from '@fortawesome/free-regular-svg-icons'
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Navbar() {
  return (
    <>
        <div className='grid grid-cols-2 fixed h-screen '>
            <div className='h-screen border-slate-300 border-r' style={{width:'266px'}}>
                <img src="https://www.dafont.com/forum/attach/orig/7/3/737566.png?1" alt="" className='w-28 ml-6 mt-10'/>
                <div className='flex mt-10 ml-6'>
                    <FontAwesomeIcon icon={faHouse} size='xl'/>
                    <h1 className='font-bold ml-3'>Home</h1>
                </div>
                <div className='flex mt-7 ml-6'>
                     <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
                    <h1 className='ml-3'>Search</h1>
                </div>
                <div className='flex mt-7 ml-6'>
                <FontAwesomeIcon icon={faCompass} size="xl"/>
                    <h1 className='ml-3'>Explore</h1>
                </div>
                <div className='flex mt-7 ml-6'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK99kQfxNV7wgkKp27bMlHf1n-tYYvKFlRGJ1xC7WKKQ&s" alt="" className='w-6'/>
                    <h1 className='ml-3'>Reels</h1>
                </div>
                <div className='flex mt-7 ml-6'>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-messenger-mono-1856780-1576511.png?f=webp" alt="" className='w-6'/>
                    <h1 className='ml-3'>Messages</h1>
                </div>
                <div className='flex mt-7 ml-6'>
                <FontAwesomeIcon icon={faHeart} size="xl"/>
                    <h1 className='ml-3'>Notifications</h1>
                </div>
                <div className='flex mt-7 ml-6'>
                    <img src="https://cdn-icons-png.flaticon.com/512/6488/6488582.png" alt="" className='w-6'/>
                    <h1 className='ml-3'>Create</h1>
                </div> 
                <div className='flex mt-7 ml-6'>
                    <img src="https://static.toiimg.com/thumb/90345950.cms?width=400&height=300&resizemode=4&imgsize=18594" alt="" className='w-6 h-6 rounded-full'/>
                    <h1 className='ml-3'>Profile</h1>
                </div>
                <div className='flex mt-7 ml-6'>
                    <img src="https://static.vecteezy.com/system/resources/previews/032/047/910/original/hamburger-menu-line-three-lines-3-web-navigation-app-ux-ui-uxui-more-list-application-user-site-bar-icon-black-white-outline-shape-sign-symbol-vector.jpg" alt="" className='w-6'/>
                    <h1 className='ml-3'>More</h1>
                </div>              
            </div>
            <div>

            </div>
            
        </div>
    </>
  )
}

export default Navbar