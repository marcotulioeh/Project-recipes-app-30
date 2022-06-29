import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import determinePageName from '../helpers/determinePageName';
import BasicExplore from '../components/BasicExplore';
import ExploreFoodOrDrink from '../components/ExploreFoodOrDrink';
import ExploreByFilter from '../components/ExploreByFilter';

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
  }, [pathname, history]);

  console.log(pageType);

  return (
    <>
      <Header title={ Title } />
      {pathname !== '/explore/drinks/nationalities' && (
        <>
          { Title === 'Explore' && <BasicExplore /> }
          { pageType
          && (pageType.ingredients === false
          && pageType.nationality === false
          && pageType.type) && <ExploreFoodOrDrink type={ pageType.type } /> }
          { pageType && pageType.ingredients && (
            <ExploreByFilter filterType="ingredients" recipeType={ pageType.type } />) }
          { pageType && pageType.nationality && (
            <ExploreByFilter filterType="nationality" recipeType={ pageType.type } />) }
        </>)}
      <Footer />
    </>
  );
}

export default Explore;
