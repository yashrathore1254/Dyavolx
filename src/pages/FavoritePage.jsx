import React from 'react';
import { Productsdata } from '../Utils/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../Redux/slice/favoritesSlice.jsx';
import { addToCart } from '../Redux/slice/cartSlice.jsx';
import { useNavigate } from "react-router-dom";

const FavoritePage = () => {
    const navigate = useNavigate();
    const favoriteIds = useSelector((state) => state.favorites.items);
    const dispatch = useDispatch();

    const favoriteCards = Productsdata.filter(card => favoriteIds.includes(card.id));

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Favorites</h2>

            {favoriteCards.length === 0 ? (
                <div className="text-gray-600">
                    <p className='text-3xl'>No favorites yet.</p>
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-2 text-blue-500 underline"
                    >
                        Go Back
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {favoriteCards.map((card) => (
                        <div
                            key={card.id}
                            className="border border-red-500 rounded-lg overflow-hidden shadow-md bg-white"
                        >
                            <img
                                src={card.images?.[2]}
                                alt={card.title}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg text-black font-semibold mb-2">{card.title}</h3>
                                <span className='text-black'>Price :- {card.price}</span>
                                <p></p>
                                <button
                                    onClick={() => dispatch(removeFromFavorites(card.id))}
                                    className="text-red-600 hover:text-red-800 font-medium"
                                >
                                    ❌ Remove
                                </button>
                            </div>
                            <div className='w-full flex items-center justify-center bg-black p-1 rounded-[10px]'>
                                <button className="cursor-pointer text-white  active:scale-95" onClick={() => dispatch(addToCart(card))} title='Add To Card'>Add To Click</button>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritePage;
