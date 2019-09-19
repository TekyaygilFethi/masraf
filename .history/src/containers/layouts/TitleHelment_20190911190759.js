import React from 'react';
import Helmet from 'react-helmet';

const prefixTitle = "Idecon Danışmanlık"
const TitleHelment = (Component, title) => {
    return class Title extends Component {
        render() {
            return (<>
                <Helmet>
                    <title>{prefixTitle}-{title}</title>
                </Helmet>
                <Component />
            </>
            )
        }
    }
};




export default TitleHelment;
