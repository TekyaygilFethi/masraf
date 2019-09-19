
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';

import { ToastContainer } from 'react-toastify';

import tr from 'react-intl/locale-data/tr';
import en from 'react-intl/locale-data/en';

import translations from '../translations';

addLocaleData([...tr, ...en]);