
import { FaPhoneAlt, FaEnvelope, FaLock, FaTrash, FaEdit } from 'react-icons/fa'
import { CgNametag } from 'react-icons/cg'
import { MdTitle } from 'react-icons/md'
import { BsFileEarmarkTextFill } from 'react-icons/bs'

import { useState } from 'react'


export default function DeenAdmin() {

    const [initial] = useState({
        dashboard: false,
        managePost: false,
        manageUser: false,
        createPost: false,
        createUser: false
    })

    const [navButton, setNavButton] = useState({
        ...initial,
        dashboard: true
    })


    return (
        <div>

            <div className="adminPage ">


                <div className="sidebar">

                    <div className="profile-container">
                        <div className="profile">
                            Admin 3334512ed

                        </div>
                    </div>


                    <div className="nav-button-div">
                        <button onClick={() => setNavButton({ ...initial, dashboard: true })}>
                            Dashboard
                        </button>
                    </div>


                    <div className="nav-button-div">
                        <button onClick={() => setNavButton({ ...initial, managePost: true })}>
                            Manage posts
                        </button>
                    </div>


                    <div className="nav-button-div">
                        <button onClick={() => setNavButton({ ...initial, manageUser: true })}>
                            Manage users
                        </button>
                    </div>


                    <div className="nav-button-div">
                        <button onClick={() => setNavButton({ ...initial, createPost: true })}>
                            Create Posts
                        </button>
                    </div>


                    <div className="nav-button-div">
                        <button onClick={() => setNavButton({ ...initial, createUser: true })}>
                            Create Users
                        </button>
                    </div>
                </div>

                <div className="admin-body">


                    {
                        navButton.dashboard && (
                            <div className='dashboard-content'>

                                <div className='flex dashboard-row1'>
                                    <div className='post-count count'>

                                        <center>
                                            <p className='fs-1 base-color'>37</p>
                                            <p>Total posts</p>
                                        </center>

                                    </div>

                                    <div className='users-count count'>
                                        <center>
                                            <p className='fs-1 base-color'>438</p>
                                            <p>Total users</p>
                                        </center>
                                    </div>
                                </div>



                                <div className='post-rank  '>
                                   <p className=' fs-4'> Top ranking posts</p>

                                    <div className='flex post-row'>
                                        <div className='post'>

                                            <div> <b>Post Title :</b> 10 Things to Consider Before Choosing a Career in Tech</div>
                                            <div> <b>Post Author :</b> Deen</div>
                                            <div> <b>Liked By :</b><span className='text-primary'> 76k+</span></div>

                                        </div>


                                        <div className='post'>
                                            <div> <b>Post Title :</b> Why is Google not spelt "Gugu"?</div>
                                            <div> <b>Post Author :</b> Anonymous</div>
                                            <div> <b>Liked By :</b><span className='text-primary'> 51k+</span></div>

                                        </div>
                                         <div className='post'>
                                            <div> <b>Post Title :</b> Why God de help mumu?</div>
                                            <div> <b>Post Author :</b> Emeka Emmanuel</div>
                                            <div> <b>Liked By :</b><span className='text-primary'> 42k+</span></div>

                                        </div>
                                    </div>

                                </div>



                            </div>

                        )
                    }


                    {
                        navButton.createUser && (
                            <div className="create-user-section">
                                <form>
                                    <center><h1>Create User</h1></center>

                                    <div className="input-area">
                                        <div>
                                            <label>
                                                <CgNametag className='icon' />   Name
                                            </label>
                                        </div>
                                        <input type="text" placeholder="Enter full name" className="input" />
                                    </div>
                                    <div className="input-area">
                                        <div>
                                            <label>
                                                <FaEnvelope className='icon' />  Email Address
                                            </label>
                                        </div>
                                        <input type="email" placeholder="Enter email address" className="input" />
                                    </div>
                                    <div className="input-area">
                                        <div>
                                            <label>
                                                <FaPhoneAlt className='icon' />  Phone
                                            </label>
                                        </div>
                                        <input type="number" placeholder="Enter phone number" className="input" />
                                    </div>
                                    <div className="input-area">
                                        <div>
                                            <label>
                                                <FaLock className='icon' /> Password
                                            </label>
                                        </div>
                                        <input type="password" placeholder="Create strong password" className="input" />
                                    </div>

                                    <button className='create-btn'>
                                        Create User
                                    </button>

                                </form>

                            </div>
                        )
                    }


                    {
                        navButton.createPost && (
                            <div className=" create Post create-user-section">
                                <form>
                                    <center><h1>Create Post</h1></center>

                                    <div className="input-area">
                                        <div>
                                            <label>
                                                <MdTitle className='icon' />   Post title
                                            </label>
                                        </div>
                                        <input type="text" placeholder="" className="input" />
                                    </div>

                                    <div className="input-area">
                                        <div>
                                            <label>
                                                <BsFileEarmarkTextFill className='icon' />  Post Body
                                            </label>
                                        </div>

                                        <textarea className='input' rows={10} />
                                    </div>

                                    <button className='create-btn'>
                                        Create Post
                                    </button>




                                </form>

                            </div>
                        )
                    }


                    {
                        navButton.manageUser && (
                            <div className='users-row'>


                                <div className='user'>

                                    <div className='user-text-area'>
                                        <div><b>Name:</b> John Doe</div>
                                        <div><b>Email:</b> John@doe.com</div>
                                        <div><b>Phone:</b> 080123456789</div>
                                    </div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>

                                <div className='user'>
                                    <div><b>Name:</b> John Doe</div>
                                    <div><b>Email:</b> John@doe.com</div>
                                    <div><b>Phone:</b> 080123456789</div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>

                                <div className='user'>
                                    <div><b>Name:</b> John Doe</div>
                                    <div><b>Email:</b> John@doe.com</div>
                                    <div><b>Phone:</b> 080123456789</div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>

                                <div className='user'>
                                    <div><b>Name:</b> John Doe</div>
                                    <div><b>Email:</b> John@doe.com</div>
                                    <div><b>Phone:</b> 080123456789</div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>

                                <div className='user'>
                                    <div><b>Name:</b> John Doe</div>
                                    <div><b>Email:</b> John@doe.com</div>
                                    <div><b>Phone:</b> 080123456789</div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>

                                <div className='user'>
                                    <div><b>Name:</b> John Doe</div>
                                    <div><b>Email:</b> John@doe.com</div>
                                    <div><b>Phone:</b> 080123456789</div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>
                                <div className='user'>
                                    <div><b>Name:</b> Johnathan Amedu Isah</div>
                                    <div><b>Email:</b> jonathan.amedu.i@gmail.com</div>
                                    <div><b>Phone:</b> 080123456789</div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>



                            </div>
                        )
                    }


                    {
                        navButton.managePost && (
                            <div className='users-row'>


                                <div className='user'>

                                    <div className='user-text-area'>

                                        <div><b>Title:   </b> Introduction to Advanced Lipid Metabolism</div>
                                        {/* <div className='post-body-format'><b>Body:</b> <br />
                                            He was abandoned on the highway and hit by a car when
                                            I tried for 45 minutes to save him. In a miserable state
                                            I rushed him to the vet and paid for everything.
                                            I decided that this animal came to stay in my life.
                                            After 3 years he is now fine but with a different look.
                                            I tell him every day that this is not who he is!!!He is
                                            the bravest dog I know.He wants to live and is so happy
                                            to play with me and my other dogs!!!Disabled animals
                                            deserve chances at life and family just like the
                                            disabled person. My child is the most beautiful and
                                            unique in the world!!" ❤

                                        </div> */}
                                    </div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>


                                <div className='user'>

                                    <div className='user-text-area'>

                                        <div><b>Title:   </b> Introduction to Advanced Lipid Metabolism</div>
                                        <div className='post-body-format'><b>Body:</b> <br />
                                            He was abandoned on the highway and hit by a car when
                                            I tried for 45 minutes to save him. In a miserable state
                                            I rushed him to the vet and paid for everything.
                                            I decided that this animal came to stay in my life.
                                            After 3 years he is now fine but with a different look.
                                            I tell him every day that this is not who he is!!!He is
                                            the bravest dog I know.He wants to live and is so happy
                                            to play with me and my other dogs!!!Disabled animals
                                            deserve chances at life and family just like the
                                            disabled person. My child is the most beautiful and
                                            unique in the world!!" ❤

                                        </div>
                                    </div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>


                                <div className='user'>

                                    <div className='user-text-area'>

                                        <div><b>Title:   </b> Introduction to Advanced Lipid Metabolism</div>
                                        <div className='post-body-format'><b>Body:</b> <br />
                                            He was abandoned on the highway and hit by a car when
                                            I tried for 45 minutes to save him. In a miserable state
                                            I rushed him to the vet and paid for everything.
                                            I decided that this animal came to stay in my life.
                                            After 3 years he is now fine but with a different look.
                                            I tell him every day that this is not who he is!!!He is
                                            the bravest dog I know.He wants to live and is so happy
                                            to play with me and my other dogs!!!Disabled animals
                                            deserve chances at life and family just like the
                                            disabled person. My child is the most beautiful and
                                            unique in the world!!" ❤

                                        </div>
                                    </div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>


                                <div className='user'>

                                    <div className='user-text-area'>

                                        <div><b>Title:   </b> Introduction to Advanced Lipid Metabolism</div>
                                        <div className='post-body-format'><b>Body:</b> <br />
                                            He was abandoned on the highway and hit by a car when
                                            I tried for 45 minutes to save him. In a miserable state
                                            I rushed him to the vet and paid for everything.
                                            I decided that this animal came to stay in my life.
                                            After 3 years he is now fine but with a different look.
                                            I tell him every day that this is not who he is!!!He is
                                            the bravest dog I know.He wants to live and is so happy
                                            to play with me and my other dogs!!!Disabled animals
                                            deserve chances at life and family just like the
                                            disabled person. My child is the most beautiful and
                                            unique in the world!!" ❤

                                        </div>
                                    </div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>


                                <div className='user'>

                                    <div className='user-text-area'>

                                        <div><b>Title:   </b> Introduction to Advanced Lipid Metabolism</div>
                                        <div className='post-body-format'><b>Body:</b> <br />
                                            He was abandoned on the highway and hit by a car when
                                            I tried for 45 minutes to save him. In a miserable state
                                            I rushed him to the vet and paid for everything.
                                            I decided that this animal came to stay in my life.
                                            After 3 years he is now fine but with a different look.
                                            I tell him every day that this is not who he is!!!He is
                                            the bravest dog I know.He wants to live and is so happy
                                            to play with me and my other dogs!!!Disabled animals
                                            deserve chances at life and family just like the
                                            disabled person. My child is the most beautiful and
                                            unique in the world!!" ❤

                                        </div>
                                    </div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>


                                <div className='user'>

                                    <div className='user-text-area'>

                                        <div><b>Title:   </b> Introduction to Advanced Lipid Metabolism</div>
                                        <div className='post-body-format'><b>Body:</b> <br />
                                            He was abandoned on the highway and hit by a car when
                                            I tried for 45 minutes to save him. In a miserable state
                                            I rushed him to the vet and paid for everything.
                                            I decided that this animal came to stay in my life.
                                            After 3 years he is now fine but with a different look.
                                            I tell him every day that this is not who he is!!!He is
                                            the bravest dog I know.He wants to live and is so happy
                                            to play with me and my other dogs!!!Disabled animals
                                            deserve chances at life and family just like the
                                            disabled person. My child is the most beautiful and
                                            unique in the world!!" ❤

                                        </div>
                                    </div>

                                    <div className='buttons'>

                                        <button><FaEdit className='icon' /></button>
                                        <button><FaTrash className='icon' /></button>

                                    </div>
                                </div>







                            </div>
                        )
                    }


                </div>


            </div>



        </div>
    )
}