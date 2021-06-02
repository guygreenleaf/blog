import React from 'react'
import { useParams} from 'react-router-dom';
import {paramsInterface} from './utils/clientInterfaces'
import PageNotFound from './components/global/PageNotFound';

const generatePage = (name: string) => {

    console.log(name);
    const component = () => require(`./pages/${name}`).default 


try {
    return React.createElement(component())
  } catch (err) {
    return <PageNotFound />;
  }

}

const PageRender = () => {
    const {page, payload}: paramsInterface = useParams();


    let name = '';

    if(page){
        name = payload ? `${page}/[payload]` : `${page}`;

    }

    return generatePage(name)
}

export default PageRender
