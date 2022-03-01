import React from 'react'
import * as faic from "react-icons/fa"
import * as aic from "react-icons/ai"
import * as ioc from "react-icons/io"

export const NavbarData = [
    { title: 'Home', path: '/', icon: <aic.AiFillHome/>, cName: 'nav-text'},
    { title: 'Contact', path: '/contact', icon: <aic.AiFillContacts/>, cName: 'nav-text'},
    { title: 'Search', path: '/search', icon: <faic.FaSearch/>, cName: 'nav-text'},
    { title: 'inbox', path: '/inbox', icon: <faic.FaMailBulk/>, cName: 'nav-text'}
]