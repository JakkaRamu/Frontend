import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleOnClick = (getCurId) => {
        setRating(getCurId);
    };

    const handleMouseEnter = (getCurId) => {
        setHover(getCurId);
    };

    const handleMouseLeave = () => {
        setHover(rating);
    };

    return (
        <div className="container">
            {[...Array(numStars)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        key={index}
                        onClick={() => handleOnClick(index)}
                        onMouseMove={() => handleMouseEnter(index)} 
                        onMouseLeave={() => handleMouseLeave()} 
                        size={40}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
