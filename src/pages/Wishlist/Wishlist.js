import React from 'react'
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
//import { resetCart } from "../../redux/shopSlice";
import { emptyCart } from "../../assets/images/index";
import WishItem from './WishItem';

const Wishlist = () => {
    //const dispatch = useDispatch();
    const products = useSelector((state) => state.shopReducer.wishProducts);
    return (
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs title="Wishlist" />
            {products.length > 0 ? (
                <div className="pb-20">
                    <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
                        <h2 className="col-span-2">Product</h2>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                        {products.map((item) => (
                            <div key={item._id}>
                                <WishItem item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
                >
                    <div>
                        <img
                            className="w-80 rounded-lg p-4 mx-auto"
                            src={emptyCart}
                            alt="emptyCart"
                        />
                    </div>
                    <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                        <h1 className="font-titleFont text-xl font-bold uppercase">
                            Your Wishlist feels lonely.
                        </h1>
                        <p className="text-sm text-center px-10 -mt-2">
                            Your Shopping wishlist lives to serve. Give it purpose - fill it with
                            books, electronics, videos, etc. and make it happy.
                        </p>
                        <Link to="/shop">
                            <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default Wishlist