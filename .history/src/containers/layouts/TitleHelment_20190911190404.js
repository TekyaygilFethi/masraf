import React from 'react';
import Helmet from 'react-helmet';

const prefixTitle = "Idecon Danışmanlık"
const TitleHelment = (Component, title) => {
    return (<>
        <Helmet>
            <title>{prefixTitle}-{title}</title>
        </Helmet>
        <Component />
    </>
    );
};




export default TitleHelment;
