import React from 'react';
import SubContent1 from './subContent1';
const Content = ({brand, location, kws, manu, }) => {
    const content = []
    return(
        <div>
            {
                kws.map(k => 
                    <SubContent1 kw={k} location={location} brand={brand}/>
                    )
            }
        </div>
    )
}

export default Content;