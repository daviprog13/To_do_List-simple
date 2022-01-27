/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (() => {

eval("var novaTarefa = document.querySelector('#inputNovaTarefa');\nvar addTarefa = document.querySelector('#btn_add_tarefa');\nvar lista = document.querySelector('#lista_tarefas');\n\nfunction gerarId() {\n  return Math.floor(Math.random() * 3000);\n}\n\nfunction adiciTarefa(e) {\n  if (e.keyCode === 13) {\n    var tarefa = {\n      nome: novaTarefa.value,\n      id: gerarId()\n    };\n    adicionarTarefa(tarefa);\n  }\n}\n\nnovaTarefa.addEventListener('keypress', adiciTarefa);\n\nfunction ligarHTML(e) {\n  var tarefa = {\n    nome: novaTarefa.value,\n    id: gerarId()\n  };\n  adicionarTarefa(tarefa);\n}\n\naddTarefa.addEventListener('click', ligarHTML);\n\nfunction adicionarTarefa(tarefa) {\n  var novaLi = criarTagLi(tarefa);\n  lista.appendChild(novaLi);\n  novaTarefa.value = '';\n}\n\nfunction criarTagLi(tarefa) {\n  var li = document.createElement('li');\n  li.id = tarefa.id;\n  var span = document.createElement('span');\n  span.classList.add('textoTarefa');\n  span.innerHTML = tarefa.nome;\n  var div = document.createElement('div');\n  var btnExluir = document.createElement('button');\n  btnExluir.classList.add('btnAcao');\n  btnExluir.innerHTML = ' <i class=\"far fa-trash-alt\"></i>';\n  btnExluir.setAttribute('onclick', 'excluir(' + tarefa.id + ')');\n  div.appendChild(btnExluir);\n  li.appendChild(span);\n  li.appendChild(div);\n  return li;\n}\n/* fechar */\n\n\nfunction excluir(idTarefa) {\n  var confirmacao = window.confirm(\"Tecm certeza que deseja excluir?\");\n\n  if (confirmacao) {\n    var li = document.getElementById('' + idTarefa + '');\n\n    if (li) {\n      lista.removeChild(li);\n    }\n  }\n}\n\n//# sourceURL=webpack://to_do_simple/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/index.js"]();
/******/ 	
/******/ })()
;