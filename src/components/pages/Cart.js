import { IoInformationCircleSharp, IoShieldCheckmark } from 'react-icons/io5'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ApiCallsContext } from '../context/ApiCallsContext'
import Navigation from '../Navigation'
export default function Cart() {

    const Navigate = useNavigate()
    const {
        flipkart,
        setFlipKart,
        kartItems,
        setKartItems,
        total,
        setTotal,
        success_msg,
        error_msg,
        ToastContainer,
        loginBtn,
        setLoginBtn,
        logged_in,
        setLoggedIn
    } = useContext(ApiCallsContext)

    const handleRemove = (index) => {

        const thisItem = flipkart[index]
        const filteredFlipkart = flipkart.filter((allitems) => allitems !== thisItem)
        const newPrice = filteredFlipkart.reduce((a, b) => a + b.price, 0)


        setTotal(newPrice)
        setFlipKart(filteredFlipkart)
        localStorage.setItem('flipkart', JSON.stringify(filteredFlipkart))
        success_msg('Item removed')

        if (flipkart.length <= 1) {
            setKartItems(false)

        }


    }


    return (

        <div>
            {
                logged_in ? (
                    <div className="cart-container">
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                        <Navigation />
                        <div className="cart-page d-flex">
                            <div className="cart-item-details">
                                <div className=" cart-grocery-header flex justify-content-evenly p-2 ">
                                    <div>Flipcart ({flipkart.length})</div>
                                    <div>Grocery</div>
                                </div>
                                <div className=" cart-grocery-header flex justify-content-between p-2  mt-3 mb-3 p-3">
                                    <div>From Saved Addresses</div>
                                    <div><button className="bg-light  p-2"><strong className='text-primary f13'>Enter Delivery Pincode</strong></button></div>
                                </div>


                                {
                                    kartItems ? (
                                        flipkart.map((item, i) => {
                                            return (
                                                <div className='flex justify-content-evenly  cart-gap align-items-start mt-2 mb-2 cart-grocery-header p-3 ' key={i}>
                                                    <div className="image " style={{ width: '25%' }}>
                                                        <img src={`http://159.65.21.42:9000${item.image}`} alt="" />
                                                        <div className='flex mt-2 gap-2 bg-white'>
                                                            <span className='question-mark'> - </span> <span><input type="number" style={{ width: '40px' }} /></span> <span className='question-mark'> + </span>
                                                        </div>

                                                    </div>

                                                    <div className="text " style={{ width: '50%' }}>
                                                        <h5 className='fs-6'>{item.name}</h5>
                                                        <p className='f14'>Finish Color - BROWN, DIY (Do-It-Yourself)</p>
                                                        <p className='f14'>Seller: Restomatt</p>

                                                        <span><s>N28000</s> <span><b>{item.price}</b></span> <span className='green f14'> 39% off 3 offers applied <IoInformationCircleSharp className='f15' /> </span></span>

                                                        <div className='d-flex gp-4 mt-4 mobile-button'>
                                                            <button><strong >SAVE FOR LATER</strong></button>
                                                            <button onClick={() => handleRemove(i)}><strong>REMOVE</strong></button>
                                                        </div>

                                                    </div>
                                                    <div className="delivery-date " style={{ width: '25%' }}>
                                                        Delivery by Fri Oct 7 | Free
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className='empty-cart-message'>
                                            No items in cart, <Link to="/furniture">Continue Shopping</Link> to add items to your cart.
                                        </div>
                                    )
                                }




                                <div className='d-flex justify-content-end box-shadow p-3'>
                                    <button className='place-order-btn'>PLACE ORDER</button>
                                </div>

                            </div>



                            <div className="item-price-details p-3">
                                <div>
                                    <p>PRICE DETAILS</p>
                                    <div className='d-flex justify-content-between'>
                                        <b>Price ({flipkart.length} item)</b> <p>N{total}</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <b>Discount</b> <p className='green'>0</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <b>Delivery Charges</b> <p className='green'>FREE</p>
                                    </div>
                                    <div className='d-flex justify-content-between total'>
                                        <h4 ><b>Total Amount</b></h4> <h4><b>N{total}</b></h4>
                                    </div>
                                    <div>
                                        <p className='green'>You will save 39% on this order</p>
                                    </div>


                                </div>
                                <div className='safe f14'>
                                    <IoShieldCheckmark className='fs-3 text-dark' /> Safe and Secure Payments. Easy returns. 100% Authentic products.
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <Navigation />
                        <div className='redirect-message fs-3 m-3'>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                            <button className='btn btn-primary text-primar fs-3' onClick={() => {
                                setLoginBtn(true)
                                console.log(loginBtn);
                            }}

                            >Log in</button> to view cart or checkout
                        </div>
                    </>
                )
            }
        </div>
    )
}