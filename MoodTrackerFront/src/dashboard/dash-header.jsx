import React, { useState, useEffect }  from 'react';
import { AnimatePresence, motion } from 'framer-motion';

//const dummyName = "Lisa";
let today = new Date().toLocaleDateString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric"});

function Header({userName }){
    return (
        <div className="text-center mt-10 font-[Nunito]" id="header-container">
            <h3 className="text-indigo-500 font-bold text-4xl">Hello, {userName}!</h3>
            <h1 className="text-6xl text-indigo-950 font-extrabold mt-5">How are you feeling today?</h1>
            <AnimatePresence mode="sync">
                <motion.div 
                    key={today}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                <div className="text-gray-500 font-semibold mt-5 text-lg" id="date">
                    <p>{today}</p>
                </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Header;