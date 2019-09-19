import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setLocale } from '../../redux/modules/locale';

import Layout from './Layout';
import TopNavigation from './TopNavigation';
import SidebarNavigation from './SidebarNavigation';
import { detectLang } from '../../utils/helper';
import Helmet from 'react-helmet';

import { authControl } from '../../utils/helper';
import PrivateRoute from '../../routers/PrivateRoute'
import PublicRoute from '../../routers/PublicRoute'




import HomePage from '../../pages/Home/HomePage';
import Saved from '../../pages/Saved';
import Login from '../../pages/Login';

function HomePageComponent() { return <><Helmet><title>Idecon Danışmanlık - Masraf Bildirim Formu</title></Helmet><HomePage /></> }
function LoginPageComponent() { return <><Helmet><title>Idecon Danışmanlık - Giriş </title></Helmet><Login /></> }
function SavedPageComponent() { return <><Helmet><title>Idecon Danışmanlık - Giriş </title></Helmet><Saved /></> }


const MainLayout = ({ dispatch }) => {
    useEffect(() => {
        const lang = detectLang();
        dispatch(setLocale(lang));
    });

    return (
        <Layout>
            {
                authControl ? (
                    <SidebarNavigation>
                        <TopNavigation />
                        <Switch>
                            <div className="content-full container-fluid">
                                <PrivateRoute exact path="/" component={HomePageComponent} />
                                <PrivateRoute exact path="/login" component={LoginPageComponent} />
                                <PrivateRoute exact path="/saved" component={SavedPageComponent} />
                            </div>
                        </Switch>
                    </SidebarNavigation>
                ) : (
                        <Switch>
                            <PrivateRoute exact path="/" component={HomePageComponent} />
                            <PrivateRoute exact path="/" component={LoginPageComponent} />
                            <PrivateRoute exact path="/saved" component={SavedPageComponent} />
                        </Switch>
                    )
            }

        </Layout>
    );
};

MainLayout.propTypes = {
    dispatch: PropTypes.func.isRequired,
};
MainLayout.defaultProps = {};

export default connect()(MainLayout);
