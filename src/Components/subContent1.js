import React from 'react';

const subContent1 = ({brand, location, kw}) => {
    return(
        <div>
            <h2>{kw}</h2>
            <p>
            When your {location} home needs {kw}, {brand} is here to help. We handle all of your {kw} needs and more. We know how important your home is to you and your family, which is why we pride ourselves on providing you with the best services possible.
            No matter if you’re looking to have repairs done on your home, or you’re just looking to update it, {brand} has your back. </p>
            <h3>Why Would You Want To Repair Or Update Your {location} Home?</h3>
            <p>
            When you repair or update your home, you’re doing a number of things to ensure it stays healthy. Plus, you get a few benefits for you {location} home when you do these things, such as:
                Won’t want to move out of your home.
                Customize your home to fit your lifestyle.
                Better energy efficiency.
                Give your home a general facelift.
                Add value to your home.

                If you’re in need of any of {brand}’s services, {kw}, and getting your {location} home in the best condition possible, contact us today! We’ll help you get your home on back on track to protect you and your family.
                </p>
        </div>
    )
}

export default subContent1;