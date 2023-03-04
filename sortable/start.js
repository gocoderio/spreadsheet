const container = document.querySelector('#example');
const hot = new Handsontable(container, {
  data: [
    ['Tesla', 'Model 3', 'BlueStar', 'USA', '★★★★'],
    ['Tesla', 'Model S', 'WhiteStar', 'USA', '★★★★★'],
    ['Mitsubishi', 'iMiEV', '', 'Japan', '★★'],
    ['Ford', 'Focus EV', '', 'USA', '★★'],
    ['Mitsubishi', 'iMiEV Sport', '', 'Japan', '★★'],
    ['Tesla', 'Roadster', 'DarkStar', 'USA', '★★★★★'],
    ['Volkswagen', 'e-Golf','', 'Germany', '★★'],
    ['Volkswagen', 'E-Up!', '', 'Germany', '★★'],
    ['Ford', 'C-Max Energi', '', 'USA', '★'],
    ['BYD', 'Denza', '', 'China', '★★★'],
    ['BYD', 'e5', '', 'China', '★★★'],
    ['BYD', 'e6', '', 'China', '★★★★']
  ],
  colHeaders: ['Brand', 'Model', 'Code name', 'Country of origin', 'Rank'],
  columnSorting: true,
  height: 'auto',
  licenseKey: 'non-commercial-and-evaluation'
});
