import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../Redux/slice/cartSlice';
import { useNavigate } from "react-router-dom";
const AddtocartPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.carts.cart)
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>

            {cartItems.length === 0 ? (
                <div className='w-full text-gray-600'>
                    <p className=" text-3xl">Your cart is empty.</p>
                    <button
                        onClick={() => navigate(-1)}
                        className=" text-blue-500 underline"
                    >
                        Go Back
                    </button>

                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="border border-blue-500 rounded-lg overflow-hidden shadow-md bg-white"
                        >
                            <img
                                src={item.images?.[2]}
                                alt={item.title}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg text-black font-semibold mb-2">{item.title}</h3>

                                <div className='flex gap-[3rem]'>
                                    <div className="flex items-center gap-4 mb-3">
                                        <button
                                            onClick={() => dispatch(decreaseQuantity(item.id))}
                                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded"
                                            title={`${item.quantity === 1 ? "Delete The Item " : "Substract The Item"}`}
                                        >
                                            {
                                                item.quantity === 1 ? <span>🗑️</span> : <span>➖</span>
                                            }
                                        </button>
                                        <span className="text-black font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => dispatch(increaseQuantity(item.id))}
                                            className={`${item.quantity >= 3 ? "" : "px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded"}`}
                                            title='Add The Itme'
                                        >
                                            {
                                                item.quantity >= 3 ? "" : <span>➕</span>
                                            }
                                        </button>
                                    </div>
                                    <div className='text-black'>
                                        <span>Price :- {item.price}</span>
                                        <p>totalPrice:-</p>
                                        <p>{item.price} X {item.quantity} = {item.totalPrice}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}

export default AddtocartPage