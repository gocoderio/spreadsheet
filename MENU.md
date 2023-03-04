<input id="runButtonMenu" type="button" name="button" value="Run" style="width:80px" onclick="document.querySelector('#output').innerHTML = '';setTimeout(function() {runner('run')}, 0);">
<br>
<span>Welcome to the spreadsheets demo</span>
                    <ul>
                        <li >
                            <a id="home/src/github.com/gocoderpro/spreadsheet/datagrid" onclick="pathOpen(this.id)">datagrid</a>
                        </li>
						<li>
                            <a id="home/src/github.com/gocoderpro/spreadsheet/multipage-formulas" onclick="pathOpen(this.id)">multipage-formulas</a>
                        </li>
						<li>
                            <a id="home/src/github.com/gocoderpro/spreadsheet/sortable" onclick="pathOpen(this.id)">sortable</a>
                        </li>
                    </ul>
                    