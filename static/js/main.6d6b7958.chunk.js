(this["webpackJsonpheroscape-simulator"]=this["webpackJsonpheroscape-simulator"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"skull":"\ud83d\udc80","shield":"\u26e8","blank":" "}')},17:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(10),c=a.n(s),r=(a(9),a(2)),o=a(3),i=a(5),u=a(4),d=a(7),h=a(6);function b(e,t){for(var a=[],n=0;n<e;n++)a.push(Math.floor(Math.random()*t)+1);return a}function m(e,t){var a=0;return null===e||void 0===e||e.forEach((function(e){t.includes(e)&&a++})),a}function j(e,t){return m(e,h.ATTACK_HITS)-m(t,h.DEFENCE_HITS)}function v(e){return e<0?0:e}function g(e){var t=0,a=0;return e.forEach((function(e){t+=v(e),a++})),t/a}function p(e,t){return Math.round((e+Number.EPSILON)*Math.pow(10,t))/Math.pow(10,t)}var f=a(11),O=a(0),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},h.ATTACK_HITS.includes(n.props.value)?(n.side="skull",n.borderColor="attack"===n.props.diceType?"red":"black"):h.DEFENCE_HITS.includes(n.props.value)?(n.side="shield",n.borderColor="defence"===n.props.diceType?"blue":"black"):(n.side="blank",n.borderColor="black"),n.symbol=f[n.side],n}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"unit-container post-spaced square-die ".concat(this.borderColor,"-border"),children:this.symbol})}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleRollsAmountChange=function(e){n.setState({rollsAmount:e.target.value})},n.handleAttackAmountChange=function(e){n.setState({attackAmount:e.target.value})},n.handleDefenceAmountChange=function(e){n.setState({defenceAmount:e.target.value})},n.handleHistoryLengthChange=function(e){n.setState({historyLength:e.target.value})},n.handleRunSingleBattleClick=function(){var e=n.runSingleBattle();n.setState({avgDamage:v(e)})},n.handleRunBattlesClick=function(){for(var e=[],t=0;t<n.state.rollsAmount;t++)e.push(n.runSingleBattle());n.setState({avgDamage:g(e)})},n.handleClearClick=function(){n.rollHistory=[],n.damageTracker=[],n.battleCounter=0,n.latestBattleRoll=void 0,n.setState({attackRoll:void 0,defenceRoll:void 0,battleCounter:n.battleCounter,avgDamage:0,damageTracker:[],cumAvgDamage:void 0})},n.state={rollsAmount:10,attackAmount:3,defenceAmount:3,historyLength:3,battleCounter:0,singleBattleDamage:0,damageTracker:[]},n.rollHistory=[],n.damageTracker=[],n.battleCounter=0,n}return Object(o.a)(a,[{key:"render",value:function(){var e,t;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Heroscape Simulator"}),Object(O.jsxs)("div",{className:"container-row",children:[Object(O.jsxs)("div",{className:"unit-container",children:[Object(O.jsx)("h3",{className:"label",children:"Rolls:"}),Object(O.jsx)("input",{id:"rollsAmount",className:"input-parameter",type:"number",value:this.state.rollsAmount,onChange:this.handleRollsAmountChange})]}),Object(O.jsxs)("div",{className:"unit-container red-border",children:[Object(O.jsx)("h3",{className:"label",children:"Attack:"}),Object(O.jsx)("input",{id:"attackAmount",className:"input-parameter",type:"number",value:this.state.attackAmount,onChange:this.handleAttackAmountChange})]}),Object(O.jsxs)("div",{className:"unit-container blue-border",children:[Object(O.jsx)("h3",{className:"label",children:"Defence:"}),Object(O.jsx)("input",{id:"defenceAmount",className:"input-parameter",type:"number",value:this.state.defenceAmount,onChange:this.handleDefenceAmountChange})]}),Object(O.jsxs)("div",{className:"unit-container",children:[Object(O.jsx)("h3",{className:"label",children:"History Length:"}),Object(O.jsx)("input",{id:"historyLength",className:"input-parameter",type:"number",value:this.state.historyLength,onChange:this.handleHistoryLengthChange})]})]}),Object(O.jsxs)("div",{className:"container-row",children:[Object(O.jsx)("button",{id:"run-single-battle-button",className:"button-control",type:"button",onClick:this.handleRunSingleBattleClick,children:"Single Battle"}),Object(O.jsx)("button",{id:"run-battles-button",className:"button-control",type:"button",onClick:this.handleRunBattlesClick,children:"Run Battles"}),Object(O.jsx)("button",{id:"clear-button",className:"button-control",type:"button",onClick:this.handleClearClick,children:"Clear"})]}),Object(O.jsx)("div",{className:"spacer"}),Object(O.jsxs)("div",{className:"container-row",children:[Object(O.jsx)("h3",{className:"label",children:"Average Damage:"}),Object(O.jsx)("p",{className:"result-value",children:p(null!==(e=this.state.avgDamage)&&void 0!==e?e:0,6)}),Object(O.jsx)("h3",{className:"label",children:"Cumulative Average Damage:"}),Object(O.jsx)("p",{className:"result-value",children:p(null!==(t=this.state.cumAvgDamage)&&void 0!==t?t:0,6)})]}),this.renderRoll(this.state.attackRoll,this.state.defenceRoll,"currentRoll",!0),Object(O.jsx)("div",{className:"spacer"}),Object(O.jsx)("div",{className:"spacer"}),this.renderPreviousRolls()]})}},{key:"runSingleBattle",value:function(){var e,t,a,n;this.rollHistory.unshift({attackRoll:Object(d.a)(null!==(e=null===(t=this.latestBattleRoll)||void 0===t?void 0:t.attackRoll)&&void 0!==e?e:[]),defenceRoll:Object(d.a)(null!==(a=null===(n=this.latestBattleRoll)||void 0===n?void 0:n.defenceRoll)&&void 0!==a?a:[])});var l,s,c=(l=this.state.attackAmount,s=this.state.defenceAmount,{attackRoll:b(l,6),defenceRoll:b(s,6)}),r=c.attackRoll,o=c.defenceRoll;this.latestBattleRoll={attackRoll:r,defenceRoll:o},this.rollHistory.length>this.state.historyLength&&(this.rollHistory=this.rollHistory.slice(0,this.state.historyLength)),this.battleCounter++;var i=j(r,o);return 0===this.damageTracker.length?this.damageTracker=[i]:this.damageTracker.push(i),this.setState({attackRoll:r,defenceRoll:o,battleCounter:this.battleCounter,damageTracker:this.damageTracker,cumAvgDamage:g(this.damageTracker)}),i}},{key:"renderRoll",value:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=j(e,t);return(null===e||void 0===e?void 0:e.length)>0||(null===t||void 0===t?void 0:t.length)>0?Object(O.jsxs)("div",{className:"container-row unit-container side-spaced no-border ".concat(n?"":"no-background"),children:[Object(O.jsx)("div",{className:"container-row row-double-spaced leading-list",children:this.displayDice("attack",e)}),Object(O.jsx)("div",{className:"label row-auto-spaced",children:"--\x3e"}),Object(O.jsx)("div",{className:"container-row row-double-spaced leading-list",children:this.displayDice("defence",t)}),Object(O.jsx)("h3",{className:"label",children:"Damage:"}),Object(O.jsx)("p",{className:"result-value",children:v(l)})]},a):null}},{key:"renderPreviousRolls",value:function(){var e=this,t=this.rollHistory.map((function(t,a){return e.renderRoll(t.attackRoll,t.defenceRoll,"previousRoll-".concat(a))}));return[].concat(Object(d.a)(t),[this.state.battleCounter>this.state.historyLength+1?Object(O.jsx)("div",{className:"label elipsis",children:". . . . . "},"elipsis"):null])}},{key:"displayDice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=[];return t.forEach((function(t,n){a.push(Object(O.jsx)(k,{diceType:e,value:t},"".concat(n,"-").concat(e,"-").concat(t)))})),a}}]),a}(n.Component),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={result:""},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"component-body",children:Object(O.jsx)(C,{})})})}}]),a}(n.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),s(e),c(e)}))};c.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root")),y()},6:function(e){e.exports=JSON.parse('{"ATTACK_HITS":[1,3,5],"DEFENCE_HITS":[2,4]}')},9:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.6d6b7958.chunk.js.map