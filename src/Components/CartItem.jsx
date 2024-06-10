import React, { useContext, useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { cartContext } from './CartProvider';



const CartItem = () => {

    const { products, handleRemove, handleDecrement, handleIncrement, handleClearCart, totalAmount } = useContext(cartContext)

    return (
        <div className='bg-blue-300'>
            {   products.length == 0 ? <p className='text-center text-5xl mt-10'>"Your Cart is Currently Empty"</p> :
                <>
                    <h1 className='text-center text-5xl pt-20'>Cart Items</h1>
                    <div className='p-20'>
                        {
                            products.map((product, index) => {
                                return <div className='flex  p-10 border-2 m-2 border-black  justify-around' key={index}>
                                    <img src={product.img} width={"430px"} height={"200px"} alt="hello" />
                                    <div className=' flex flex-col justify-center items-center'>
                                        <h1>{product.title}</h1>
                                        <p>Price : $ {Math.ceil(product.price)}</p>
                                        <button onClick={() => { handleRemove(product.id) }} className='border-2 p-2 bg-gray-400'>Remove item</button>
                                    </div>
                                    <div className='flex flex-col justify-evenly'>
                                        <button onClick={() => handleIncrement(product)}> <KeyboardArrowUpIcon fontSize='large' /> </button>
                                        <h1 className='text-center text-2xl'> {product.amount} </h1>
                                        <button onClick={() => handleDecrement(product)}> <KeyboardArrowDownIcon fontSize='large' /> </button>
                                    </div>
                                </div>
                            })
                        }
                        <hr className='mx-10 mb-10 border-2 border-black' />
                        <div className='flex justify-between px-48'>
                            <h1 className='mx-20 font-700 text-[30px] '>Grand Total : $ {Math.ceil(totalAmount)}</h1>
                            <button onClick={() => handleClearCart()} className='border-2 p-4 bg-gray-400'>Clear Cart</button>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default CartItem
