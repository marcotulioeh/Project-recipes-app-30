import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import determinePageName from '../helpers/determinePageName';
import BasicExplore from '../components/BasicExplore';
import ExploreFoodOrDrink from '../components/ExploreFoodOrDrink';

function Explore() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const Title = determinePageName(pathname);

  const [pageType, setPageType] = useState();

  useEffect(() => {
    const pathnameDetails = pathname.split('/');
    const pageDetails = {
      type: pathnameDetails[2] || false,
      ingredients: pathnameDetails[3] === 'ingredients',
      nationality: pathnameDetails[3] === 'nationalities',
    };
    setPageType(pageDetails);
  }, [pathname]);

  console.log(pageType);

  return (
    <>
      <Header title={ Title } />
      { Title === 'Explore' && <BasicExplore /> }
      { pageType
        && (pageType.ingredients === false
        && pageType.nationality === false
        && pageType.type) && <ExploreFoodOrDrink type={ pageType.type } /> }
      <Footer />
    </>
  );
}

export default Explore;
