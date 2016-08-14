function AboutCtrl(AppSettings, AboutService) {
  this.x = AppSettings.X;
  this.info = '';

  AboutService.get().then(data => {
  	this.info = data.info;
  });
};

export default {
  name: 'AboutCtrl',
  fn: ['AppSettings', 'AboutService', AboutCtrl]
};
