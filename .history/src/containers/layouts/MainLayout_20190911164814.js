import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setLocale } from '../../redux/modules/locale';

import Layout from './Layout';
import TopNavigation from './TopNavigation';
import SidebarNavigation from './SidebarNavigation';
import HomePage from '../../pages/Home/HomePage';
import { detectLang } from '../../utils/helper';

const MainLayout = ({ dispatch }) => {
    useEffect(() => {
        const lang = detectLang();
        dispatch(setLocale(lang));
    });

    return (

        <Layout>
            <SidebarNavigation>
                <TopNavigation />
                <Switch>
                    <div className="content container">
                        <Route exact path="/" component={HomePage} />
                    </div>
                </Switch>
            </SidebarNavigation>
        </Layout>
    );
};

MainLayout.propTypes = {
    dispatch: PropTypes.func.isRequired,
};
MainLayout.defaultProps = {};

export default connect()(MainLayout);
