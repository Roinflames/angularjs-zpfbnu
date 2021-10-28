class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = 'TECSOS';
    this.title = 'Recomendación Técnica Computacional';
    this.edad = '32';
    this.fechaHoy = new Date();
  }
}

export default HomeCtrl;
