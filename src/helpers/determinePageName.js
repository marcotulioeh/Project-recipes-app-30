function determinePageName(pathname) {
  switch (pathname) {
  case '/explore/foods/nationalities':
    return 'Explore Nationalities';
  case '/explore/foods':
    return 'Explore Foods';
  case '/explore/drinks':
    return 'Explore Drinks';
  case '/explore':
    return 'Explore';
  default:
    return 'Explore Ingredients';
  }
}

export default determinePageName;
