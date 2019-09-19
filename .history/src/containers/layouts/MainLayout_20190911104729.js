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

import Sidebar from "react-sidebar";


const MainLayout = ({ dispatch }) => {
    useEffect(() => {
        const lang = detectLang();
        dispatch(setLocale(lang));
    });

    return (
        <Layout>
            <Sidebar
                sidebar={SidebarNavigation}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
            >
                <TopNavigation />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>

            </Sidebar>



        </Layout>
    );
};

MainLayout.propTypes = {
    dispatch: PropTypes.func.isRequired,
};
MainLayout.defaultProps = {};

export default connect()(MainLayout);
