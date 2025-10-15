import React from 'react';

const Heading = (props) => {
    return (
        <div className="w-fit mx-auto text-center">
            <h2 className={`text-[2rem] md:text-5xl font-bold ${props.headingClass || ""}`}>
                <span className="text-orange-600 text-3xl md:text-7xl font-bold">
                   {props.highlight}
                </span> {props.heading}
            </h2>
            <div className="w-20 md:w-36 h-1 bg-orange-300 mt-3 md:mt-6 mx-auto"></div>
        </div>
    );
}

export default Heading;
