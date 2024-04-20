import { faHeart, faComment, faBookmark, faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Home() {
  return (
    <>
        
            <div className='ml-20' style={{width:'555px'}}>

                {/* First post */}
                <div className='border-b-2 border-slate-500' style={{height:'800px'}}>
                    <div className='grid grid-cols-3'>
                            <div className='flex mt-12'>
                                <img src="https://static.toiimg.com/thumb/90345950.cms?width=400&height=300&resizemode=4&imgsize=18594" alt="" className='w-10 h-10 rounded-full'/>
                            </div>
                            <div className='mt-10' style={{marginLeft:'-135px'}}>
                            <h1 className='font-bold'>_profile <span className='font-normal text-slate-500'>• 2 min</span></h1>
                            <h1 className='text-slate-500 text-sm'>Profile</h1>
                            </div>
                            <div className='mt-12' style={{marginLeft:'150px'}}>
                              <span className='cursor-pointer'><FontAwesomeIcon icon={faEllipsis} size='lg'/></span>
                            </div>
        
                    </div>
                    <div className='bg-black mt-4' style={{width:'555px', height:'520px'}}>
                        <img src="" alt="" />
                    </div>
                    <div className='grid grid-cols-4 mt-4' style={{width:'555px'}}>
                        <div><FontAwesomeIcon icon={faHeart} size='xl'/></div>
                        <div style={{marginLeft:'-100px'}}><FontAwesomeIcon icon={faComment} size='xl'/></div>
                        <div style={{marginLeft:'-200px'}}><img src="https://cdn-icons-png.freepik.com/256/786/786205.png" alt="" className='w-6 h-6'/></div> 
                        <div style={{marginLeft:'120px'}}><FontAwesomeIcon icon={faBookmark} size='xl'/></div>
                    </div>
                    <div className='mt-3' >
                            <h1 className='font-semibold'>19,561 likes</h1>
                            <p className='font-semibold mt-1'>profile <span className='font-normal'>the caption here is...</span><span className='text-slate-500'>more</span></p>
                            <p className='text-slate-500 text-base mt-1'>View all 201 comments</p>
                            <div className='grid grid-cols-2 mt-1'>
                                <div className='text-slate-500'>
                                    Add a comment...
                                </div>
                                <div style={{marginLeft:'260px'}}>
                                <FontAwesomeIcon icon={faFaceSmile} className='text-slate-500'/>
                                </div>
                            </div>
                    </div>
                </div>

                {/* Second post */}
                <div className='border-b-2 border-slate-500' style={{height:'800px'}}>
                    <div className='grid grid-cols-3'>
                            <div className='flex mt-12'>
                                <img src="https://static.toiimg.com/thumb/90345950.cms?width=400&height=300&resizemode=4&imgsize=18594" alt="" className='w-10 h-10 rounded-full'/>
                            </div>
                            <div className='mt-10' style={{marginLeft:'-135px'}}>
                            <h1 className='font-bold'>_profile</h1>
                            <h1 className='text-slate-500'>Profile</h1>
                            </div>
                            <div className='mt-12' style={{marginLeft:'150px'}}>
                              <span className='cursor-pointer'><FontAwesomeIcon icon={faEllipsis} size='lg'/></span>
                            </div>
        
                    </div>
                    <div className='bg-black mt-4' style={{width:'555px', height:'520px'}}>
                        <img src="" alt="" />
                    </div>
                    <div className='grid grid-cols-4 mt-4' style={{width:'555px'}}>
                        <div><FontAwesomeIcon icon={faHeart} size='xl'/></div>
                        <div style={{marginLeft:'-100px'}}><FontAwesomeIcon icon={faComment} size='xl'/></div>
                        <div style={{marginLeft:'-200px'}}><img src="https://cdn-icons-png.freepik.com/256/786/786205.png" alt="" className='w-6 h-6'/></div> 
                        <div style={{marginLeft:'120px'}}><FontAwesomeIcon icon={faBookmark} size='xl'/></div>
                    </div>
                    <div className='mt-3' >
                            <h1 className='font-semibold'>19,561 likes</h1>
                            <p className='font-semibold mt-1'>profile <span className='font-normal'>the caption here is...</span><span className='text-slate-500'>more</span></p>
                            <p className='text-slate-500 text-base mt-1'>View all 201 comments</p>
                            <div className='grid grid-cols-2 mt-1'>
                                <div className='text-slate-500'>
                                    Add a comment...
                                </div>
                                <div style={{marginLeft:'260px'}}>
                                <FontAwesomeIcon icon={faFaceSmile} className='text-slate-500'/>
                                </div>
                            </div>
                    </div>
                </div>

                {/* Third post */}
                <div className='border-b-2 border-slate-500 mb-6' style={{height:'700px'}}>
                    <div className='grid grid-cols-3'>
                            <div className='flex mt-12'>
                                <img src="https://static.toiimg.com/thumb/90345950.cms?width=400&height=300&resizemode=4&imgsize=18594" alt="" className='w-10 h-10 rounded-full'/>
                            </div>
                            <div className='mt-10' style={{marginLeft:'-135px'}}>
                            <h1 className='font-bold'>_profile</h1>
                            <h1 className='text-slate-500'>Profile</h1>
                            </div>
                            <div className='mt-12' style={{marginLeft:'150px'}}>
                              <span className='cursor-pointer'><FontAwesomeIcon icon={faEllipsis} size='lg'/></span>
                            </div>
        
                    </div>
                    <div className='bg-black mt-4' style={{width:'555px', height:'420px'}}>
                        <img src="" alt="" />
                    </div>
                    <div className='grid grid-cols-4 mt-4' style={{width:'555px'}}>
                        <div><FontAwesomeIcon icon={faHeart} size='xl'/></div>
                        <div style={{marginLeft:'-100px'}}><FontAwesomeIcon icon={faComment} size='xl'/></div>
                        <div style={{marginLeft:'-200px'}}><img src="https://cdn-icons-png.freepik.com/256/786/786205.png" alt="" className='w-6 h-6'/></div> 
                        <div style={{marginLeft:'120px'}}><FontAwesomeIcon icon={faBookmark} size='xl'/></div>
                    </div>
                    <div className='mt-3' >
                            <h1 className='font-semibold'>19,561 likes</h1>
                            <p className='font-semibold mt-1'>profile <span className='font-normal'>the caption here is...</span><span className='text-slate-500'>more</span></p>
                            <p className='text-slate-500 text-base mt-1'>View all 201 comments</p>
                            <div className='grid grid-cols-2 mt-1'>
                                <div className='text-slate-500'>
                                    Add a comment...
                                </div>
                                <div style={{marginLeft:'260px'}}>
                                <FontAwesomeIcon icon={faFaceSmile} className='text-slate-500'/>
                                </div>
                            </div>
                    </div>
                </div>

                {/* Fourth post */}
                <div className='border-b-2 border-slate-500 mb-6' style={{height:'700px'}}>
                    <div className='grid grid-cols-3'>
                            <div className='flex mt-12'>
                                <img src="https://static.toiimg.com/thumb/90345950.cms?width=400&height=300&resizemode=4&imgsize=18594" alt="" className='w-10 h-10 rounded-full'/>
                            </div>
                            <div className='mt-10' style={{marginLeft:'-135px'}}>
                            <h1 className='font-bold'>_profile</h1>
                            <h1 className='text-slate-500'>Profile</h1>
                            </div>
                            <div className='mt-12' style={{marginLeft:'150px'}}>
                              <span className='cursor-pointer'><FontAwesomeIcon icon={faEllipsis} size='lg'/></span>
                            </div>
        
                    </div>
                    <div className='bg-black mt-4' style={{width:'555px', height:'420px'}}>
                        <img src="" alt="" />
                    </div>
                    <div className='grid grid-cols-4 mt-4' style={{width:'555px'}}>
                        <div><FontAwesomeIcon icon={faHeart} size='xl'/></div>
                        <div style={{marginLeft:'-100px'}}><FontAwesomeIcon icon={faComment} size='xl'/></div>
                        <div style={{marginLeft:'-200px'}}><img src="https://cdn-icons-png.freepik.com/256/786/786205.png" alt="" className='w-6 h-6'/></div> 
                        <div style={{marginLeft:'120px'}}><FontAwesomeIcon icon={faBookmark} size='xl'/></div>
                    </div>
                    <div className='mt-3' >
                            <h1 className='font-semibold'>19,561 likes</h1>
                            <p className='font-semibold mt-1'>profile <span className='font-normal'>the caption here is...</span><span className='text-slate-500'>more</span></p>
                            <p className='text-slate-500 text-base mt-1'>View all 201 comments</p>
                            <div className='grid grid-cols-2 mt-1'>
                                <div className='text-slate-500'>
                                    Add a comment...
                                </div>
                                <div style={{marginLeft:'260px'}}>
                                <FontAwesomeIcon icon={faFaceSmile} className='text-slate-500'/>
                                </div>
                            </div>
                    </div>
                </div>

                {/* Fifth post Carousel */}
                <div className='border-b-2 border-slate-500 mb-6' style={{height:'700px'}}>
                    <div className='grid grid-cols-3'>
                            <div className='flex mt-12'>
                                <img src="https://static.toiimg.com/thumb/90345950.cms?width=400&height=300&resizemode=4&imgsize=18594" alt="" className='w-10 h-10 rounded-full'/>
                            </div>
                            <div className='mt-10' style={{marginLeft:'-135px'}}>
                            <h1 className='font-bold'>_profile</h1>
                            <h1 className='text-slate-500'>Profile</h1>
                            </div>
                            <div className='mt-12' style={{marginLeft:'150px'}}>
                              <span className='cursor-pointer'><FontAwesomeIcon icon={faEllipsis} size='lg'/></span>
                            </div>
        
                    </div>
                    <div className='bg-black mt-4' style={{width:'555px', height:'420px'}}>
                        <img src="" alt="" />
                    </div>
                    <div className='grid grid-cols-4 mt-4' style={{width:'555px'}}>
                        <div><FontAwesomeIcon icon={faHeart} size='xl'/></div>
                        <div style={{marginLeft:'-100px'}}><FontAwesomeIcon icon={faComment} size='xl'/></div>
                        <div style={{marginLeft:'-200px'}}><img src="https://cdn-icons-png.freepik.com/256/786/786205.png" alt="" className='w-6 h-6'/></div> 
                        <div style={{marginLeft:'120px'}}><FontAwesomeIcon icon={faBookmark} size='xl'/></div>
                    </div>
                    <div className='mt-3' >
                            <h1 className='font-semibold'>19,561 likes</h1>
                            <p className='font-semibold mt-1'>profile <span className='font-normal'>the caption here is...</span><span className='text-slate-500'>more</span></p>
                            <p className='text-slate-500 text-base mt-1'>View all 201 comments</p>
                            <div className='grid grid-cols-2 mt-1'>
                                <div className='text-slate-500'>
                                    Add a comment...
                                </div>
                                <div style={{marginLeft:'260px'}}>
                                <FontAwesomeIcon icon={faFaceSmile} className='text-slate-500'/>
                                </div>
                            </div>
                    </div>
                </div>




            </div>
            

    </>
  )
}

export default Home