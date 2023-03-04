document.querySelector("#example1").innerHTML = ""
const data = [
    ['150', '643', '0.32', '11', '=A1*(B1*C1)+D1'],
    ['172', '474', '0.51', '11', '=A2*(B2*C2)+D2'],
    ['188', '371', '0.59', '11', '=A3*(B3*C3)+D3'],
    ['162', '731', '0.21', '10', '=A4*(B4*C4)+D4'],
    ['133', '682', '0.81', '9', '=A5*(B5*C5)+D5'],
    ['87', '553', '0.66', '10', '=A6*(B6*C6)+D6'],
    ['26', '592', '0.62', '11', '=A7*(B7*C7)+D7'],
    ['110', '461', '0.73', '9', '=A8*(B8*C8)+D8'],
    ['50', '346', '0.52', '15', '=A9*(B9*C9)+D9'],
    ['160', '423', '0.82', '11', '=A10*(B10*C10)+D10'],
    ['Sum', 'Average', 'Average', 'Sum', 'Sum'],
    ['=SUM(A1:A10)', '=AVERAGE(B1:B10)', '=AVERAGE(C1:C10)', '=SUM(D1:D10)', '=SUM(E1:E10)']
  ];
  
  const container = document.querySelector('#example1');
  const hot = new Handsontable(container, {
    data: data,
    formulas: {
      engine: HyperFormula,
    },
    colHeaders: ['Qty', 'Unit price', 'Discount', 'Freight', 'Total due (fx)'],
    fixedRowsBottom: 2,
    stretchH: 'all',
    height: 286,
    licenseKey: 'non-commercial-and-evaluation'
  });
  