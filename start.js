document.querySelector("#example1").innerHTML = ""
const container = document.querySelector('#example1');

const data = [
  ['Travel ID', 'Destination', 'Base price', 'Price with extra cost'],
  ['154', 'Rome', 400, '=ROUND(ADDITIONAL_COST+C2,0)'],
  ['155', 'Athens', 300, '=ROUND(ADDITIONAL_COST+C3,0)'],
  ['156', 'Warsaw', 150, '=ROUND(ADDITIONAL_COST+C4,0)']
];

const hotNamedExpressions = new Handsontable(container, {
  data: data,
  colHeaders: true,
  rowHeaders: true,
  height: 'auto',
  formulas: {
    engine: HyperFormula,
    namedExpressions: [
      {
        name: 'ADDITIONAL_COST',
        expression: 100
      }
    ]
  },
  licenseKey: 'non-commercial-and-evaluation'
});

const input = document.getElementById('named-expressions-input');
const formulasPlugin = hotNamedExpressions.getPlugin('formulas');
const button = document.getElementById('named-expressions-button');

button.addEventListener('click', (event) => {
  formulasPlugin.engine.changeNamedExpression('ADDITIONAL_COST', input.value);
  hotNamedExpressions.render();
});
