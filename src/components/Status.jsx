import React from 'react'

function Status() {
  return (
    <>
        <div className='grid grid-cols-8'>
                    <div className=''>
                        <div className='bg-gradient-to-l from-purple-500 to-orange-500 rounded-full mt-7 ml-1 flex justify-center items-center' style={{height:'73px', width:'73px'}}>
                            <div className='rounded-full bg-white flex justify-center items-center' style={{height:'66px', width:'66px'}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboCxmgQ-L8qgODM7m1wjk34MJ6j7I835Mtht6qeNYOQ&s" alt="" className='rounded-full' style={{height:'61px', width:'61px'}}/>
                            </div>
                        </div>
                        <p className='text-sm ml-3'>mohanlal</p>
                    </div>

                    <div className='ml-8'>
                        <div className='bg-gradient-to-l from-purple-500 to-orange-500 rounded-full mt-7 ml-1 flex justify-center items-center' style={{height:'73px', width:'73px'}}>
                            <div className='rounded-full bg-white flex justify-center items-center' style={{height:'66px', width:'66px'}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboCxmgQ-L8qgODM7m1wjk34MJ6j7I835Mtht6qeNYOQ&s" alt="" className='rounded-full' style={{height:'61px', width:'61px'}}/>
                            </div>
                        </div>
                        <p className='text-sm ml-2'>mammootty</p>
                    </div>

                    {/* <div className='ml-10'>
                        <div className='w-20 h-20 bg-gradient-to-l from-purple-500 to-orange-500 rounded-full mt-7 ml-1 flex justify-center items-center' >
                            <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center' style={{height:'73px', width:'73px'}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboCxmgQ-L8qgODM7m1wjk34MJ6j7I835Mtht6qeNYOQ&s" alt="" className='rounded-full' style={{height:'71px', width:'71px'}}/>
                            </div>
                        </div>
                        <p className='text-sm ml-1'>mohanlal</p>
                    </div>

                    <div className='ml-20'>
                        <div className='w-20 h-20 bg-gradient-to-l from-purple-500 to-orange-500 rounded-full mt-7 ml-1 flex justify-center items-center' >
                            <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center' style={{height:'73px', width:'73px'}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboCxmgQ-L8qgODM7m1wjk34MJ6j7I835Mtht6qeNYOQ&s" alt="" className='rounded-full' style={{height:'71px', width:'71px'}}/>
                            </div>
                        </div>
                        <p className='text-sm ml-1'>mohanlal</p>
                    </div>

                    <div className='' style={{marginLeft:'120px'}}>
                        <div className='w-20 h-20 bg-gradient-to-l from-purple-500 to-orange-500 rounded-full mt-7 ml-1 flex justify-center items-center' >
                            <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center' style={{height:'73px', width:'73px'}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboCxmgQ-L8qgODM7m1wjk34MJ6j7I835Mtht6qeNYOQ&s" alt="" className='rounded-full' style={{height:'71px', width:'71px'}}/>
                            </div>
                        </div>
                        <p className='text-sm ml-1'>mohanlal</p>
                    </div>

                    <div className='ml-40'>
                        <div className='w-20 h-20 bg-gradient-to-l from-purple-500 to-orange-500 rounded-full mt-7 ml-1 flex justify-center items-center' >
                            <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center' style={{height:'73px', width:'73px'}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboCxmgQ-L8qgODM7m1wjk34MJ6j7I835Mtht6qeNYOQ&s" alt="" className='rounded-full' style={{height:'71px', width:'71px'}}/>
                            </div>
                        </div>
                        <p className='text-sm ml-1'>mohanlal</p>
                    </div>

                    <div className='' style={{marginLeft:'198px'}}>
                        <div className='w-20 h-20 bg-gradient-to-l from-purple-500 to-orange-500 rounded-full mt-7 ml-1 flex justify-center items-center' >
                            <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center' style={{height:'73px', width:'73px'}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboCxmgQ-L8qgODM7m1wjk34MJ6j7I835Mtht6qeNYOQ&s" alt="" className='rounded-full' style={{height:'71px', width:'71px'}}/>
                            </div>
                        </div>
                        <p className='text-sm ml-1'>mohanlal</p>
                    </div>

                    <div className='ml-60'>
                        <div className='w-20 h-20 bg-gradient-to-l from-purple-500 to-orange-500 rounded-full mt-7 ml-1 flex justify-center items-center' >
                            <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center' style={{height:'73px', width:'73px'}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboCxmgQ-L8qgODM7m1wjk34MJ6j7I835Mtht6qeNYOQ&s" alt="" className='rounded-full' style={{height:'71px', width:'71px'}}/>
                            </div>
                        </div>
                        <p className='text-sm ml-1'>mohanlal</p>
                    </div>

                    <div className='' style={{marginLeft:'278px'}}>
                        <div className='w-20 h-20 bg-gradient-to-l from-purple-500 to-orange-500 rounded-full mt-7 ml-1 flex justify-center items-center' >
                            <div className='w-16 h-16 rounded-full bg-white flex justify-center items-center' style={{height:'73px', width:'73px'}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboCxmgQ-L8qgODM7m1wjk34MJ6j7I835Mtht6qeNYOQ&s" alt="" className='rounded-full' style={{height:'71px', width:'71px'}}/>
                            </div>
                        </div>
                        <p className='text-sm ml-1'>mohanlal</p>
                    </div> */}

                </div>
    </>
  )
}

export default Status