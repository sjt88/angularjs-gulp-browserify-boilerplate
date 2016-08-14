const routes = {
  Home: {
    name: 'home',
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  },
  About: {
    name: 'about',
    url: '/about',
    templateUrl: 'about.html',
    controller: 'AboutCtrl as about',
    title: 'About'
  }
};

export default routes;
