const render = require('../index');
const tpl = 
`<div>
  <div><%= name %></div>
</div>`;

console.log(render(tpl,{name:'tiny-template'}));