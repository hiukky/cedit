(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/storybook-addon-sass-postcss/node_modules/postcss-loader/dist/cjs.js!./src/styled.scss":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".top-start{justify-content:flex-start;align-items:flex-start}.top-start div{text-align:left}.top-center{justify-content:flex-start;align-items:center}.top-center div{text-align:center}.top-center div:empty{text-align:left}.top-end{justify-content:flex-start;align-items:flex-end}.top-end div{text-align:right}.middle-start{justify-content:center;align-items:flex-start}.middle-start div{text-align:left}.middle-center{justify-content:center;align-items:center}.middle-center div{text-align:center}.middle-center div:empty{text-align:left}.middle-end{justify-content:center;align-items:flex-end}.middle-end div{text-align:right}.bottom-start{justify-content:flex-end;align-items:flex-start}.bottom-start div{text-align:left}.bottom-center{justify-content:flex-end;align-items:center}.bottom-center div{text-align:center}.bottom-center div:empty{text-align:left}.bottom-end{justify-content:flex-end;align-items:flex-end}.bottom-end div{text-align:right}.cedit{display:flex;flex-direction:column;box-sizing:border-box;border:1.5px solid #e5e5ea;outline:3px solid transparent;padding:2px 4px;border-radius:4px;min-height:80px;transition:.3s}.cedit:hover{border-color:#70a1ff}.cedit:focus-within{border-color:#79a4f3;outline-color:#a6e9ff}.cedit__content{font-family:Arial,Helvetica,sans-serif;border:none !important;outline:none !important;line-height:1.3;word-wrap:break-word;word-break:break-all;white-space:pre-line}.cedit__content:empty::before{position:relative;content:attr(placeholder);background-color:transparent !important;opacity:.45}",""]),module.exports=exports},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./cedit.stories.tsx":"./src/cedit.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/cedit.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"InitialValue",(function(){return InitialValue}));__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");__webpack_require__("./src/styled.scss"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js");function caretRangeFromPoint(x,y){if(document.caretPositionFromPoint){var position=document.caretPositionFromPoint(x,y);if(position){var range=document.createRange(),offsetNode=position.offsetNode,shadowRoots=function getShadowRoots(node){for(var roots=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],iter=node;iter.parentNode||iter.host;)iter instanceof ShadowRoot?(roots.push(iter),iter=iter.host):iter=iter.parentNode;return roots}(offsetNode);return shadowRoots.length&&(offsetNode=shadowRoots[shadowRoots.length-1].host),range.setStart(offsetNode,position.offset),range.setEnd(offsetNode,position.offset),range}return null}return document.caretRangeFromPoint(x,y)}var CLEAR_FIX=["<div><br></div>","<br>","\n",""],PLACEMENT={topStart:"top-start",topCenter:"top-center",topEnd:"top-end",middleStart:"middle-start",middleCenter:"middle-center",middleEnd:"middle-end",bottomStart:"bottom-start",bottomCenter:"bottom-center",bottomEnd:"bottom-end"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),cedit_Cedit=function Cedit(_ref){var id=_ref.id,value=_ref.value,_ref$editable=_ref.editable,editable=void 0===_ref$editable||_ref$editable,_ref$multiLine=_ref.multiLine,multiLine=void 0===_ref$multiLine||_ref$multiLine,_ref$spellCheck=_ref.spellCheck,spellCheck=void 0!==_ref$spellCheck&&_ref$spellCheck,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,placeholder=_ref.placeholder,_ref$autoFocus=_ref.autoFocus,autoFocus=void 0!==_ref$autoFocus&&_ref$autoFocus,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"topStart":_ref$placement,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,_ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?function(){return{}}:_ref$onChange,_ref$onFocus=_ref.onFocus,_onFocus=void 0===_ref$onFocus?function(){return{}}:_ref$onFocus,_ref$onBlur=_ref.onBlur,_onBlur=void 0===_ref$onBlur?function(){return{}}:_ref$onBlur,_ref$onKeyUp=_ref.onKeyUp,_onKeyUp=void 0===_ref$onKeyUp?function(){return{}}:_ref$onKeyUp,_ref$onKeyDown=_ref.onKeyDown,_onKeyDown=void 0===_ref$onKeyDown?function(){return{}}:_ref$onKeyDown,_ref$onKeyPress=_ref.onKeyPress,_onKeyPress=void 0===_ref$onKeyPress?function(){return{}}:_ref$onKeyPress,_ref$onPaste=_ref.onPaste,_onPaste=void 0===_ref$onPaste?function(){return{}}:_ref$onPaste,ref=Object(react.useRef)(null),contentRef=Object(react.useRef)({value:value,editable:!1}),_useCedit=function useCedit(node){var focus=function focus(){var _node$current2;null===(_node$current2=node.current)||void 0===_node$current2||_node$current2.focus()};return{moveCaretOn:function moveCaretOn(event,autofocus){if(event.target.firstChild===node.current){event.preventDefault();var selection=window.getSelection(),range=caretRangeFromPoint(event.clientX,event.clientY);range&&(null==selection||selection.removeAllRanges(),null==selection||selection.addRange(range),autofocus&&focus())}},setCaret:function setCaret(){if(node.current){var selection=window.getSelection(),range=document.createRange();null==selection||selection.removeAllRanges(),range.selectNodeContents(node.current),range.collapse(!1),null==selection||selection.addRange(range),document.activeElement!==node.current&&focus()}},append:function append(data){node.current&&(node.current.innerHTML=data)},focus:focus,blur:function blur(){var _node$current;null===(_node$current=node.current)||void 0===_node$current||_node$current.blur()},empty:function empty(){node.current&&(node.current.innerHTML="",node.current.innerText="")},get:function get(event){var _target$innerText,_target$innerHTML,target=event.target,text=null!==(_target$innerText=target.innerText)&&void 0!==_target$innerText?_target$innerText:"",html=null!==(_target$innerHTML=target.innerHTML)&&void 0!==_target$innerHTML?_target$innerHTML:"";if("paste"===event.type){var _clip$clipboardData$g,_clip$clipboardData,_clip$clipboardData$g2,_clip$clipboardData2,clip=event;text=null!==(_clip$clipboardData$g=null===(_clip$clipboardData=clip.clipboardData)||void 0===_clip$clipboardData?void 0:_clip$clipboardData.getData("text/plain"))&&void 0!==_clip$clipboardData$g?_clip$clipboardData$g:"",html=null!==(_clip$clipboardData$g2=null===(_clip$clipboardData2=clip.clipboardData)||void 0===_clip$clipboardData2?void 0:_clip$clipboardData2.getData("text/html"))&&void 0!==_clip$clipboardData$g2?_clip$clipboardData$g2:""}return{event:event,html:html,text:text}}}}(ref),get=_useCedit.get,append=_useCedit.append,setCaret=_useCedit.setCaret,empty=_useCedit.empty,blur=_useCedit.blur,moveCaretOn=_useCedit.moveCaretOn;return Object(react.useEffect)((function(){ref.current&&contentRef.current&&(contentRef.current.editable||append(value),CLEAR_FIX.includes(value)&&empty())}),[append,empty,value]),Object(jsx_runtime.jsx)("div",{"data-cedit":!0,"data-autofocus":autoFocus,role:"presentation",className:("cedit "+PLACEMENT[placement]+" "+className).trim(),style:Object.assign({},style,{cursor:editable?"text":"default",outlineColor:editable?"":"transparent"}),onClick:function onClick(event){return moveCaretOn(event,!0)},onMouseDown:function onMouseDown(event){return moveCaretOn(event)},onBlur:function onBlur(){contentRef.current.editable=!1,blur()},onFocus:function onFocus(){contentRef.current.editable=!0,setCaret()},children:Object(jsx_runtime.jsx)("div",{id:null==id?void 0:id.toString(),ref:ref,role:"textbox",tabIndex:editable?0:-1,contentEditable:editable,spellCheck:spellCheck,className:"cedit__content",placeholder:placeholder,suppressContentEditableWarning:!0,dangerouslySetInnerHTML:{__html:contentRef.current.value},onInput:function onInput(event){return onChange(get(event))},onKeyUp:function onKeyUp(event){return _onKeyUp(get(event))},onKeyDown:function onKeyDown(event){"Enter"!==event.key||multiLine||event.preventDefault(),_onKeyDown(get(event))},onKeyPress:function onKeyPress(event){return _onKeyPress(get(event))},onBlur:function onBlur(event){contentRef.current.editable=!1,_onBlur(get(event))},onFocus:function onFocus(event){contentRef.current.editable=!0,setCaret(),_onFocus(get(event))},onPaste:function onPaste(event){setCaret(),_onPaste(get(event))}})})};cedit_Cedit.displayName="Cedit";try{cedit_Cedit.displayName="Cedit",cedit_Cedit.__docgenInfo={description:"",displayName:"Cedit",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},spellCheck:{defaultValue:{value:"false"},description:"",name:"spellCheck",required:!1,type:{name:"boolean"}},editable:{defaultValue:{value:"true"},description:"",name:"editable",required:!1,type:{name:"boolean"}},multiLine:{defaultValue:{value:"true"},description:"",name:"multiLine",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},autoFocus:{defaultValue:{value:"false"},description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"topStart"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topStart"'},{value:'"topCenter"'},{value:'"topEnd"'},{value:'"middleStart"'},{value:'"middleCenter"'},{value:'"middleEnd"'},{value:'"bottomStart"'},{value:'"bottomCenter"'},{value:'"bottomEnd"'}]}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onKeyUp:{defaultValue:{value:"() => ({})"},description:"",name:"onKeyUp",required:!1,type:{name:'((data: Maybe<"key">) => void)'}},onKeyDown:{defaultValue:{value:"() => ({})"},description:"",name:"onKeyDown",required:!1,type:{name:'((data: Maybe<"key">) => void)'}},onKeyPress:{defaultValue:{value:"() => ({})"},description:"",name:"onKeyPress",required:!1,type:{name:'((data: Maybe<"key">) => void)'}},onBlur:{defaultValue:{value:"() => ({})"},description:"",name:"onBlur",required:!1,type:{name:'((data: Maybe<"focus">) => void)'}},onFocus:{defaultValue:{value:"() => ({})"},description:"",name:"onFocus",required:!1,type:{name:'((data: Maybe<"focus">) => void)'}},onChange:{defaultValue:{value:"() => ({})"},description:"",name:"onChange",required:!1,type:{name:'((data: Maybe<"form">) => void)'}},onPaste:{defaultValue:{value:"() => ({})"},description:"",name:"onPaste",required:!1,type:{name:'((data: Maybe<"clip">) => void)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/cedit.tsx#Cedit"]={docgenInfo:cedit_Cedit.__docgenInfo,name:"Cedit",path:"src/cedit.tsx#Cedit"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/core-js/modules/es.array.filter.js");var _templateObject,_templateObject2,_templateObject3,provider_CeditProvider=function CeditProvider(_ref){var children=_ref.children,ref=Object(react.useRef)(null);return Object(react.useEffect)((function(){var _ref$current,focusableEditor=Array.from((null===(_ref$current=ref.current)||void 0===_ref$current?void 0:_ref$current.querySelectorAll('div[data-cedit="true"]'))||[]).filter((function(editor){return"true"===editor.getAttribute("data-autofocus")})).map((function(editor){return editor.firstChild})).at(-0);focusableEditor&&focusableEditor.focus()}),[]),Object(jsx_runtime.jsx)("div",{ref:ref,children:children})};provider_CeditProvider.displayName="CeditProvider";try{provider_CeditProvider.displayName="CeditProvider",provider_CeditProvider.__docgenInfo={description:"",displayName:"CeditProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/provider.tsx#CeditProvider"]={docgenInfo:provider_CeditProvider.__docgenInfo,name:"CeditProvider",path:"src/provider.tsx#CeditProvider"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var Container=styled_components_browser_esm.a.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  position: relative;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 20px;\n  color: #2f3542;\n\n  .cedit {\n    margin-top: 10px;\n  }\n\n  span {\n    font-weight: bolder;\n    font-size: 0.9rem;\n  }\n"]))),Content=styled_components_browser_esm.a.div(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  min-height: 80px;\n  margin-bottom: 20px;\n"]))),Preview=styled_components_browser_esm.a.div(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding: 20px 0;\n  gap: 20px;\n\n  span {\n    display: inline-flex;\n    margin-bottom: 20px;\n  }\n"]))),cedit_stories_Template=(__webpack_exports__.default={title:"Cedit Editor",component:cedit_Cedit,argTypes:{value:{control:{disable:!0}},placeholder:{control:{disable:!0}}}},function Template(args){var _useState2=_slicedToArray(Object(react.useState)({text:args.value||"",html:args.value||""}),2),value=_useState2[0],setValue=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(!1),2),editable=_useState4[0],setEditable=_useState4[1];return Object(jsx_runtime.jsx)(provider_CeditProvider,{children:Object(jsx_runtime.jsxs)(Container,{children:[Object(jsx_runtime.jsxs)(Content,{children:[Object(jsx_runtime.jsx)("span",{children:"Editor"}),Object(jsx_runtime.jsx)(cedit_Cedit,Object.assign({},args,{value:value.text,onChange:setValue,onPaste:setValue}))]}),Object(jsx_runtime.jsx)(Preview,{children:["text","html"].map((function(type,idx){return Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsxs)("span",{children:["Preview (",type.toUpperCase()," ",!!idx&&"Readonly",")"]}),Object(jsx_runtime.jsx)(cedit_Cedit,{placeholder:"Preview",value:value[type],editable:!idx&&editable,onFocus:function onFocus(){return setEditable(!0)},onBlur:function onBlur(){return setEditable(!1)}})]},type)}))})]})})});cedit_stories_Template.displayName="Template";var Default=cedit_stories_Template.bind({});Default.args={placeholder:"Type here...",autoFocus:!0};var InitialValue=cedit_stories_Template.bind({});InitialValue.args={placeholder:"Type here...",value:"Hello world!",autoFocus:!0},Default.parameters=Object.assign({storySource:{source:"args => {\n  const [value, setValue] = useState({\n    text: args.value || '',\n    html: args.value || ''\n  })\n\n  const [editable, setEditable] = useState(false)\n\n  return (\n    <CeditProvider>\n      <Container>\n        <Content>\n          <span>Editor</span>\n          <Cedit\n            {...args}\n            value={value.text}\n            onChange={setValue}\n            onPaste={setValue}\n          />\n        </Content>\n\n        <Preview>\n          {['text', 'html'].map((type, idx) => (\n            <div key={type}>\n              <span>\n                Preview ({type.toUpperCase()} {!!idx && 'Readonly'})\n              </span>\n              <Cedit\n                placeholder=\"Preview\"\n                value={value[type as keyof typeof value]}\n                editable={!idx && editable}\n                onFocus={() => setEditable(true)}\n                onBlur={() => setEditable(false)}\n              />\n            </div>\n          ))}\n        </Preview>\n      </Container>\n    </CeditProvider>\n  )\n}"}},Default.parameters),InitialValue.parameters=Object.assign({storySource:{source:"args => {\n  const [value, setValue] = useState({\n    text: args.value || '',\n    html: args.value || ''\n  })\n\n  const [editable, setEditable] = useState(false)\n\n  return (\n    <CeditProvider>\n      <Container>\n        <Content>\n          <span>Editor</span>\n          <Cedit\n            {...args}\n            value={value.text}\n            onChange={setValue}\n            onPaste={setValue}\n          />\n        </Content>\n\n        <Preview>\n          {['text', 'html'].map((type, idx) => (\n            <div key={type}>\n              <span>\n                Preview ({type.toUpperCase()} {!!idx && 'Readonly'})\n              </span>\n              <Cedit\n                placeholder=\"Preview\"\n                value={value[type as keyof typeof value]}\n                editable={!idx && editable}\n                onFocus={() => setEditable(true)}\n                onBlur={() => setEditable(false)}\n              />\n            </div>\n          ))}\n        </Preview>\n      </Container>\n    </CeditProvider>\n  )\n}"}},InitialValue.parameters)},"./src/styled.scss":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/storybook-addon-sass-postcss/node_modules/postcss-loader/dist/cjs.js!./src/styled.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);