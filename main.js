/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dropthings/Dropdown.js":
/*!*********************************************!*\
  !*** ./node_modules/dropthings/Dropdown.js ***!
  \*********************************************/
/***/ ((module) => {

class Dropdown {
  constructor(divSelector,name, options = {}){
    this.name = name;

    // showType option:
    this.showType = (options.showType === 'click') ? 'click' : 'mouseenter';

    // animation option:
    if(typeof(options.animation) === 'function') this.animation = options.animation;
    else if (options.animation === 'animation1') this.animation = this.animation1;
    else if (options.animation === 'animation2') this.animation = this.animation2;
    else if (options.animation === 'animation3') this.animation = this.animation3;
    else if (options.animation === 'animation4') this.animation = this.animation4;
    else if (options.animation === 'animation5') this.animation = this.animation5;
    else this.animation = this.animation1;

    // navColor and liColor option:
    this.navColors = this.colorValues(options.navColor) || this.colorValues('#ddd');
    this.liColors = this.colorValues(options.liColor) || this.colorValues('#666');

    // width and height options:
    this.width = options.width || '150px';
    this.height = options.height || '65px';

    // fontsize and texTransform options:
    this.fontSize = options.fontSize || '14px';
    this.textTransform = options.textTransform || 'uppercase';

    //
    let div;
    if(typeof(divSelector) === 'string') div = document.querySelector(divSelector);
    else div = divSelector;
    const nav = this.createNav()
    this.ul = this.createUl()

    nav.appendChild(this.ul)
    div.appendChild(nav)
  }

  createNav(){
    const nav = document.createElement('nav');
    nav.textContent = this.name;
    this.stylingNav(nav);

    return nav
  }

  createUl(){
    const ul = document.createElement('ul');
    ul.classList.add('elementContainer');
    this.stylingUl(ul)
    return ul
  }

  appendElement(elementName,link='https://www.youtube.com/watch?v=dQw4w9WgXcQ'){
    if(typeof(elementName)=== 'string'){
      const element = document.createElement('a');
      element.href = link;
      element.textContent = elementName;
      this.stylingLi(element)
      this.ul.appendChild(element)
      return element
    }
    this.stylingLi(elementName)
    this.ul.appendChild(elementName)
    return elementName
  }

  stylingNav(nav){
    nav.style.display = 'flex'
    nav.style.justifyContent = 'center';
    nav.style.alignItems = 'center';
    nav.style.textAlign = 'center';
    nav.style.background = `rgba( ${this.navColors[0]}, ${this.navColors[1]}, ${this.navColors[2]} )`;
    nav.style.borderRadius = '5px';
    nav.style.width = this.width;
    nav.style.height = this.height;
    nav.style.position = 'relative';
    nav.style.textTransform = this.textTransform;
    nav.style.fontSize = this.fontSize;
    nav.style.color = 'rgba(0, 0, 0, 0.7)';
    nav.style.cursor = 'pointer';
    nav.addEventListener(this.showType, ()=>{ 
      nav.style.background = `rgba( ${this.navColors[0]-40}, ${this.navColors[1]-40}, ${this.navColors[2]-40} )`;
      //If ul has no elements, return to avoid errors:
      if(this.ul.childNodes.length === 0) return;
      this.ul.lastChild.style.borderRadius = '0px 0px 5px 5px'
      this.ul.childNodes.forEach( (element,idx)=> {
        element.style.display = 'flex'; //Default trigger
        this.animation(element,idx);
      })
    })

    nav.addEventListener('mouseleave', ()=>{
      nav.style.background = `rgba( ${this.navColors[0]}, ${this.navColors[1]}, ${this.navColors[2]} )`;
      if(this.ul.childNodes.length === 0) return;
      this.ul.childNodes.forEach( (element)=> {
        element.style.display = 'none';
      })
    })
  }

  stylingLi(element){
    element.style.background =`rgba( ${this.liColors[0]}, ${this.liColors[1]}, ${this.liColors[2]} )`;
    element.style.color = 'rgba(255, 255, 255, 0.7)';
    element.style.display = 'none'; //Default trigger
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    element.style.opacity = '1';
    element.style.textDecoration = 'none';
    element.style.height = this.height;
    element.style.margin = '0';
    element.style.transformOrigin = 'top center'
    element.addEventListener('mouseenter', ()=>{ 
      element.style.background = `rgba( ${this.liColors[0]-40}, ${this.liColors[1]-40}, ${this.liColors[2]-40} )`;
    })

    element.addEventListener('mouseleave', ()=>{ 
      element.style.background = `rgba( ${this.liColors[0]}, ${this.liColors[1]}, ${this.liColors[2]} )`;
    })
  }

  stylingUl(ul){
    ul.style.position = 'absolute';
    ul.style.top = '100%';
    ul.style.left = '0%';
    ul.style.width = '100%';
    ul.style.padding = '0';
    ul.style.margin = '0';
    ul.style.perspective = '1000px';
  }
  
  //The animations shouldn't come from upper side, but probabpli clicking trigger the first link
  animation1(element,idx){
    element.animate([
      // keyframes
      { //from
        opacity: 0,
        transform: 'translateY(30px)',
      },
      { //To
        opacity: 1,
        transform: 'translateY(0)' }
    ], {
      // timing options
      duration: 300,
      iterations: 1,
      fill: 'forwards',
    });
  }

  animation2(element,idx) {
    element.animate([
      {
        opacity: 0,
        transform: 'rotateY(-90deg) translateY(50px)',
        easing: 'ease-in',
        offset: 0, //0%
      },
      {
        opacity: 1,
        transform: 'rotateY(0deg) translateY(0)',
        easing: 'ease-out',
        offset: 1, //100%
      }
    ], {
      // timing options
      duration: 500,
      delay: 200*idx,
      iterations: 1,
      fill: 'backwards',
    });
  }

  animation3(element,idx) {
    element.animate([
      {
        opacity: 0,
        transform: 'translateY(50px)',
        easing: 'ease-in',
        offset: 0, //0%
      },
      {
        opacity: 1,
        transform: 'translateY(0)',
        easing: 'ease-out',
        offset: 1, //100%
      }
    ], {
      // timing options
      duration: 300*idx+300,
      delay: 0,
      iterations: 1,
      fill: 'backwards',
    });
  }

  
  animation4(element,idx) {
    element.animate([
      {
        opacity: 0,
        transform: 'rotate(-30deg) translateX(30px)',
        easing: 'ease-in',
        offset: 0, //0%
      },
      {
        opacity: 1,
        transform: 'rotate(0deg) translateX(0px)',
        easing: 'ease-out',
        offset: 1, //100%
      }
    ], {
      // timing options
      duration: 300,
      delay: 150*idx,
      iterations: 1,
      fill: 'backwards',
    });
  }

  animation5(element,idx) {
    element.animate([
      {
        opacity: 0,
        transform: 'rotateX(-90deg)',
        easing: 'ease-in',
        offset: 0, //0%
      },
      {
        opacity: 1,
        transform: 'rotateX(0deg)',
        easing: 'ease-out',
        offset: 1, //100%
      }
    ], {
      // timing options
      duration: 300,
      delay: 150*idx,
      iterations: 1,
      fill: 'backwards',
    });
  }

  colorValues(color){
    if (!color) return;
    if (color.toLowerCase() === 'transparent') return [0, 0, 0, 0];
    if (color[0] === '#'){
      if (color.length < 7){
        color = '#' + color[1] + color[1] + color[2] + color[2] +
        color[3] + color[3] + (color.length > 4 ? color[4] + color[4] : '');
      }
      return [parseInt(color.substr(1, 2), 16),
        parseInt(color.substr(3, 2), 16),
        parseInt(color.substr(5, 2), 16),
        color.length > 7 ? parseInt(color.substr(7, 2), 16)/255 : 1];
    }
    if (color.indexOf('rgb') === -1){
      var temp_elem = document.body.appendChild(document.createElement('fictum'));
      var flag = 'rgb(1, 2, 3)';
      temp_elem.style.color = flag;
      if (temp_elem.style.color !== flag) return;
      temp_elem.style.color = color;
      if (temp_elem.style.color === flag || temp_elem.style.color === '') return;
      color = getComputedStyle(temp_elem).color;
      document.body.removeChild(temp_elem);
    }
    if (color.indexOf('rgb') === 0){
      if (color.indexOf('rgba') === -1) color += ',1';
      return color.match(/[\.\d]+/g).map( (a) => +a );
    }
  }

}

module.exports = Dropdown;

/***/ }),

/***/ "./node_modules/dropthings/Menu.js":
/*!*****************************************!*\
  !*** ./node_modules/dropthings/Menu.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Dropdown = __webpack_require__(/*! ./Dropdown.js */ "./node_modules/dropthings/Dropdown.js");

class Menu {
  constructor(divSelector,menuType='static', options={},dropdownOptions){

    this.menuType = menuType || 'static';
    this.moreList = options.moreList || [];
    this.elements = [];

    // navColor options:
    this.navColor = options.navColor || '#aaa';

    // height options:
    this.height = options.height || 'auto';

    // dropdown options: 
    this.dropdownOptions = dropdownOptions || {width:'100px',height:'100%',navColor:this.navColor}

    let div;
    if(typeof(divSelector) === 'string') div = document.querySelector(divSelector);
    else div = divSelector;

    const moreBtnDiv = document.createElement('div');
    this.moreBtnDiv = moreBtnDiv;

    const tabsDiv = document.createElement('div');
    this.tabsDiv = tabsDiv;
    this.stylingNav(tabsDiv)

    const nav = this.createNav();
    this.nav = nav;

    nav.append(tabsDiv,moreBtnDiv)

    div.append(nav);
  }

  toggleMoreElements(){
    const windowWidth = window.innerWidth;
    const elementWidth = 100;
    const showedElements = Math.floor(windowWidth/elementWidth); // -1 ?
    this.tabsDiv.innerHTML = '';
  
    if(this.elements.length <= showedElements){
      this.elements.forEach( (el)=> this.tabsDiv.append(el))
      return
    }
  
    for(let i = 0; i<=showedElements-1; i++){
      this.tabsDiv.append(this.elements[i])
    }
  
    const drop = new Dropdown(this.tabsDiv,'More', this.dropdownOptions)
    for(let i = showedElements+1; i < this.elements.length+1; i++){
      drop.appendElement(`${this.elements[i-1].textContent}`, '#')
    }
  }

  createNav(){
    const nav = document.createElement('nav');
    nav.classList.add('tabs');
    this.stylingNav(nav);

    if(this.menuType === 'scroll') this.stylingScrollNav(nav);
    if(this.menuType === 'more'){
      const moreBtn = new Dropdown(this.moreBtnDiv,'More',this.dropdownOptions);
      this.moreList.forEach( (e)=> moreBtn.appendElement(e) )
    }
    if(this.menuType === 'moreCollapse') window.addEventListener('resize',this.toggleMoreElements.bind(this))
    
    return nav
  }

  stylingNav(nav){
    nav.style.display = 'flex';
    nav.style.width  ='100vw';
    nav.style.height = this.height;
    nav.style.backgroundColor = this.navColor;
    nav.style.justifyContent = 'space-around';
    nav.style.alignItems = 'center';
    nav.style.padding = '0';
    nav.style.margin = '0';
  }

  stylingScrollNav(nav){
    nav.style.display = 'block';
    nav.style.overflow = 'auto';
    nav.style.whiteSpace = 'nowrap';
    nav.style.WebkitOverflowSrcolling = 'touch';
  }

  appendElement(elementName,link = '#'){
    let element;
    if(typeof(elementName)=== 'string'){
      element = document.createElement('a');
      element.href = link;
      element.textContent = elementName;
    }
    else element = elementName;

    this.stylingElement(element);
    if(this.menuType === 'scroll') this.stylingScrollElement(element);
    
    this.elements.push(element)
    this.tabsDiv.appendChild(element)
    this.toggleMoreElements();
    return element
  }

  stylingElement(element){
    element.style.color = 'black';
    element.style.textDecoration = 'none';
    element.style.padding = '5px 0';
    element.style.margin = '5px 0';
    element.addEventListener('mouseenter',()=>{
     element.style.borderBottom = 'double 3px black';
     element.style.marginBottom = '1px';
    })
    element.addEventListener('mouseleave',()=>{
      element.style.borderBottom = 'none';
      element.style.marginBottom = '0px';
    })
  }

  stylingScrollElement(element){
    element.style.display='inline-block';
    element.style.textAlign = 'center';
    element.style.padding = '5px 30px'
  }

}

module.exports = Menu;

/***/ }),

/***/ "./node_modules/dropthings/Slider.js":
/*!*******************************************!*\
  !*** ./node_modules/dropthings/Slider.js ***!
  \*******************************************/
/***/ ((module) => {

class Slider{
  constructor(divSelector,imgWidth,imgHeight,options={}){

    // Image width adn height options: (in pixels)
    this.imgWidth = imgWidth;
    this.imgHeight = imgWidth || imgHeight;
    
    // autoSlide options: (none or number in miliseconds)
    this.autoSlide = options.autoSlide || 5000;

    // frameColor options: (valid color)
    this.frameColor = options.frameColor || 'transparent';

    // frameSize and borderRadius option: (number in pixels):
    this.frameSize = options.frameSize || 10;
    this.borderRadius = options.borderRadius || '20px'; 

    this.currImg = 0;

    const frame = this.createFrame()
    const container = this.createContainer();
    this.frame = frame;
    this.container = container;
    this.imageList = [];
    this.radioBtnsList = [];

    let div;
    if(typeof(divSelector) === 'string') div = document.querySelector(divSelector);
    else div = divSelector;

    const switchImages = this.createSwitchImages();
    this.switchImages = switchImages;

    frame.append(container,switchImages);
    div.append(frame);
    
    if(typeof(this.autoSlide)==='number') setInterval(this.triggerRight.bind(this),this.autoSlide);
    //clearInterval(this.interval);

    document.addEventListener('keydown', (e) => {
      if(e.keyCode === 37) this.triggerLeft()
      else if(e.keyCode === 39) this.triggerRight()
      else return;
    })

  }

  createFrame(){
    const frame = document.createElement('div');
    this.stylingFrame(frame);
    return frame;
  }

  createContainer(){
    const container = document.createElement('div');
    this.stylingContainer(container);
    return container;
  }

  appendElement(imgLink){
    let img;
    if(typeof(imgLink)==='string'){
      img = document.createElement('img');
      img.src = imgLink;
    }
    else img = imgLink;
    this.stylingImg(img);
    this.imageList.push(img);
    this.container.append(img);

    this.frame.removeChild(this.switchImages);
    this.switchImages = this.createSwitchImages()
    this.frame.append(this.switchImages);
    
    return img
  }

  stylingFrame(frame){
    frame.style.display = 'flex';
    frame.style.flexDirection = 'column';
    frame.style.justifyContent = 'Center';
    frame.style.position = 'absolute';
    frame.style.width = `${this.imgWidth + this.frameSize}px`;
    frame.style.height = `${this.imgHeight + this.frameSize}px`;
    frame.style.left = '50%';
    frame.style.transform = 'translateX(-50%)';
    frame.style.backgroundColor = this.frameColor;
    frame.style.overflow = 'hidden';
    frame.style.borderRadius = this.borderRadius;
  }

  stylingContainer(container){
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    
    container.style.transform = 'translateX(0)';
    container.style.transition = '.7s ease-in-out';
  }

  stylingImg(img){
    img.style.width = `${this.imgWidth}px`;
    img.style.height = `${this.imgHeight}px`;
    img.style.borderRadius = this.borderRadius;
    img.style.padding = `${this.frameSize/2}px`;
  }

  createSwitchImages(){
    const div = document.createElement('div');
    const leftArrow = this.createArrow('left');
    const rightArrow = this.createArrow('right');
    const radioButtons = this.createRadioButtons();
    this.styilingSwitchImages(div);

    div.append(leftArrow,radioButtons,rightArrow);
    return div;
  }

  styilingSwitchImages(div){
    div.style.width = '80%';
    div.style.display = 'flex';
    div.style.justifyContent = 'space-around';
    div.style.alignItems = 'center';
    div.style.position = 'absolute';
    div.style.left = '50%';
    div.style.transform = 'translateX(-50%)';
    div.style.bottom = '0';
    div.style.backgroundColor = 'rgb(255, 255, 255, 0.3)';
    div.style.borderRadius = '20px';
    div.style.padding = '5px';
  }

  createArrow(side){
    const arrow = document.createElement('button');
    if(side==='left'){
      arrow.textContent = '〈';
      arrow.addEventListener('click',() => this.triggerLeft());
    } 
    else{
      arrow.textContent = '〉';
      arrow.addEventListener('click',() => this.triggerRight())
    } 
    this.stylingArrow(arrow);
    return arrow;
  }
  
  stylingArrow(arrow){
    //arrow.style.fontWeight = 'bolder';
    arrow.style.fontSize = '20px'
    arrow.style.backgroundColor = 'transparent';
    arrow.style.border = 'none';
    arrow.addEventListener('mouseover',()=> arrow.style.cursor = 'pointer')

  }

  triggerLeft(){
    this.currImg-=1;
    if(this.currImg < 0){
      this.currImg = this.imageList.length-1;
      this.transformContainer();
    }
    else this.transformContainer();
    this.radioBtnsList[this.currImg].checked = true;
  }

  triggerRight(){
    this.currImg+=1;
    if(this.currImg === this.imageList.length){
      this.currImg = 0;
      this.transformContainer();
    }
    else this.transformContainer();
    this.radioBtnsList[this.currImg].checked = true;
  }

  selectImg(idx){
    this.currImg = idx;
    this.transformContainer();
  }

  transformContainer(){
    this.container.style.transform = `translateX(calc(-${this.imgWidth+this.frameSize}*${this.currImg}px))`;
  }

  createRadioButtons(){
    const radioButtons = document.createElement('div');
    for(let i=0; i<this.imageList.length;i++){
      const btn = this.createRadioBtn();
      btn.addEventListener( 'click',this.selectImg.bind(this,i) );
      btn.addEventListener('mouseover',()=> btn .style.cursor = 'pointer')

      radioButtons.append(btn);
    }
    this.radioBtnsList = radioButtons.childNodes;
    if(this.radioBtnsList.length !== 0) this.radioBtnsList[0].checked = true;
    return radioButtons;
  }

  createRadioBtn(){
    const btn = document.createElement('input');
    btn.type = 'radio';
    btn.name = 'radio-img';
    return btn;
  }

}

module.exports = Slider;

/***/ }),

/***/ "./node_modules/dropthings/index.js":
/*!******************************************!*\
  !*** ./node_modules/dropthings/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dropdown": () => (/* reexport default from dynamic */ _Dropdown__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "Menu": () => (/* reexport default from dynamic */ _Menu__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "Slider": () => (/* reexport default from dynamic */ _Slider__WEBPACK_IMPORTED_MODULE_2___default.a)
/* harmony export */ });
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/dropthings/Dropdown.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Dropdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./node_modules/dropthings/Menu.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider */ "./node_modules/dropthings/Slider.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider__WEBPACK_IMPORTED_MODULE_2__);






/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeather": () => (/* binding */ fetchWeather),
/* harmony export */   "fetchCoords": () => (/* binding */ fetchCoords)
/* harmony export */ });
async function fetchCoords(cityName){
  const geoApiKey = '43f042b1637b39a8ee93d442afed514b';
  const link = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${geoApiKey}`;
  try {
    const response = await fetch(link,{ mode: "cors" });
    const dataRaw = await response.json();
    const data = dataRaw[0];
    return data;

  } catch(err) {
    console.log(err)
  }
}

async function fetchWeather(lat,lon,units='metric'){
  let lang = 'es';//fr: french, en: english;
  const geoApiKey = '43f042b1637b39a8ee93d442afed514b';
  const link = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&lang=${lang}&units=${units}&appid=${geoApiKey}`;
  const response = await fetch(link,{ mode: "cors" });
  const dataRaw = await response.json();
  const data = dataRaw;
  return data;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var dropthings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dropthings */ "./node_modules/dropthings/index.js");



async function showWeather(city, pos, units='metric'){
  let coords = pos
  let symbol;
  if(units ==='metric') symbol = '°C';
  else  symbol = 'F';

  if(city !== 'none') coords = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.fetchCoords)(city)
  else{
    const ubi = await reverseGeo(coords.lat,coords.lon);
    coords.name = ubi.locality;
    coords.state = ubi.principalSubdivision
    coords.country = ubi.countryName
  }
  const obj = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(coords.lat,coords.lon,units);
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const currentW = obj.current;
  const dailyW = obj.daily;
  const hourlyW = obj.hourly;
  showCurrentWeather()
  showHourWeather()
  showDailyWeather()

  function showCurrentWeather(){
    const divTemp = document.querySelector('.temp');
    const city = document.querySelector('.city');
    const divTime = document.querySelector('.time');
    const details = document.querySelectorAll('.detail');
    const mainIcon = document.querySelector('.main-icon');
    mainIcon.src = `https://openweathermap.org/img/wn/${currentW.weather[0].icon}@2x.png`

    divTemp.textContent = currentW.temp + symbol;
    city.textContent = `${coords.name}, ${coords.state}, ${coords.country}`;
    divTime.textContent = `${currentW.weather[0].description}`;
    details[0].textContent = `${currentW.feels_like} ${symbol}`
    details[1].textContent = `${currentW.humidity}%`;
    details[2].textContent = `${dailyW[0].pop*100}%`;
    details[3].textContent = `${dailyW[0].temp.min} ${symbol}`;
    details[4].textContent = `${dailyW[0].temp.max} ${symbol}`;
  }

  function showHourWeather(){
    const hours = document.querySelectorAll('.hour');
    hours.forEach( (el,idx) => {
      el.textContent = `${Math.round(hourlyW[idx].temp)} ${symbol}`;
    });
  }

  function showDailyWeather(){
    const nextDays = document.querySelectorAll('.next-day');
    const dayDetail1 = document.querySelectorAll('.day-detail1');
    const dayDetail2 = document.querySelectorAll('.day-detail2');
    const dayIcons = document.querySelectorAll('.day-icon')
    nextDays.forEach( (el,idx) => {
      let currDate = new Date(dailyW[idx].dt*1000)
      let currDay = days[currDate.getDay()];
      el.childNodes[1].textContent = `${dailyW[idx].temp.day} ${symbol}`;
      el.childNodes[3].textContent = `${currDay}`;
      dayDetail1[idx].textContent = `${Math.round(dailyW[idx].feels_like.day)}${symbol}`;
      dayDetail2[idx].textContent = `${dailyW[idx].humidity}%`;
      dayIcons[idx].src = `http://openweathermap.org/img/wn/${dailyW[idx].weather[0].icon}@2x.png`
    });
  }
}

async function reverseGeo(lat,lon){
  const link = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=es`;
  const response = await fetch(link)
  const data = await response.json()
  return data;
}

let currPos;
async function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(callWeather,showError)//(callWeather,showError)
  }
  else console.log('geolocation not supported');
}

function callWeather(pos){
  currPos = {'lat':pos.coords.latitude,'lon':pos.coords.longitude}
  showWeather('none',currPos)
}

function showError(err){
  if(err.PERMISION_DENIED) console.log("The user denied permisions...")
}

const cityImput = document.getElementById('city-input');
const enterBtn = document.getElementById('enter-button');
enterBtn.addEventListener('click',()=>showWeather(cityImput.value))
cityImput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    showWeather(cityImput.value)
  }
});

const unitsSwitch = document.getElementById('switch');
unitsSwitch.addEventListener('change',(e) =>{
  let metric;
  if(unitsSwitch.checked) metric = 'metric';
  else metric = 'imperial';

  if(cityImput.value ==='') showWeather('none',currPos,metric);
  else showWeather(cityImput.value,currPos,metric)
})

const languageDiv = document.querySelector('.language');
const drop = new dropthings__WEBPACK_IMPORTED_MODULE_1__.Dropdown('.language','Language', {animation:'animation2',width:'80px',height:'20px',textTransform:'capitalize'});
drop.appendElement('English');
drop.appendElement('Español');
drop.appendElement('Français');

getLocation()

document.body.className = 'background1';
document.body.className = 'background2';
document.body.className = 'background4';

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtCQUFrQixJQUFJLGtCQUFrQixJQUFJLG1CQUFtQjtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUJBQXFCLElBQUkscUJBQXFCLElBQUksc0JBQXNCO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLGtCQUFrQixJQUFJLGtCQUFrQixJQUFJLG1CQUFtQjtBQUNyRztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpQkFBaUIsSUFBSSxpQkFBaUIsSUFBSSxrQkFBa0I7QUFDbkc7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxvQkFBb0IsSUFBSSxvQkFBb0IsSUFBSSxxQkFBcUI7QUFDL0csS0FBSztBQUNMO0FBQ0E7QUFDQSwwQ0FBMEMsaUJBQWlCLElBQUksaUJBQWlCLElBQUksa0JBQWtCO0FBQ3RHLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsT0FBTztBQUNQLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuUkEsaUJBQWlCLG1CQUFPLENBQUMsNERBQWU7QUFDeEM7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNEJBQTRCO0FBQzlELDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BJQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFELDRCQUE0QixnQ0FBZ0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QywwQkFBMEIsZUFBZTtBQUN6QztBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsNkJBQTZCLEdBQUcsYUFBYTtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlNa0M7QUFDUjtBQUNHO0FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQSxrRUFBa0UsU0FBUyxTQUFTLFVBQVU7QUFDOUY7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esc0VBQXNFLElBQUksT0FBTyxJQUFJLHlCQUF5QixLQUFLLFNBQVMsTUFBTSxTQUFTLFVBQVU7QUFDckosc0NBQXNDLGNBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUQ7QUFDYjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxREFBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCx5QkFBeUI7QUFDakY7QUFDQTtBQUNBLDBCQUEwQixZQUFZLElBQUksYUFBYSxJQUFJLGVBQWU7QUFDMUUsNkJBQTZCLGdDQUFnQztBQUM3RCxnQ0FBZ0MscUJBQXFCLEVBQUUsT0FBTztBQUM5RCxnQ0FBZ0Msa0JBQWtCO0FBQ2xELGdDQUFnQyxrQkFBa0I7QUFDbEQsZ0NBQWdDLG9CQUFvQixFQUFFLE9BQU87QUFDN0QsZ0NBQWdDLG9CQUFvQixFQUFFLE9BQU87QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQkFBK0IsRUFBRSxPQUFPO0FBQ2xFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxzQkFBc0IsRUFBRSxPQUFPO0FBQ3ZFLHdDQUF3QyxRQUFRO0FBQ2hELHVDQUF1Qyx1Q0FBdUMsRUFBRSxPQUFPO0FBQ3ZGLHVDQUF1QyxxQkFBcUI7QUFDNUQsOERBQThELDRCQUE0QjtBQUMxRixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsSUFBSSxhQUFhLElBQUk7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFRLDBCQUEwQiw2RUFBNkU7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZHJvcHRoaW5ncy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kcm9wdGhpbmdzL01lbnUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZHJvcHRoaW5ncy9TbGlkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZHJvcHRoaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERyb3Bkb3duIHtcclxuICBjb25zdHJ1Y3RvcihkaXZTZWxlY3RvcixuYW1lLCBvcHRpb25zID0ge30pe1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAvLyBzaG93VHlwZSBvcHRpb246XHJcbiAgICB0aGlzLnNob3dUeXBlID0gKG9wdGlvbnMuc2hvd1R5cGUgPT09ICdjbGljaycpID8gJ2NsaWNrJyA6ICdtb3VzZWVudGVyJztcclxuXHJcbiAgICAvLyBhbmltYXRpb24gb3B0aW9uOlxyXG4gICAgaWYodHlwZW9mKG9wdGlvbnMuYW5pbWF0aW9uKSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5hbmltYXRpb24gPSBvcHRpb25zLmFuaW1hdGlvbjtcclxuICAgIGVsc2UgaWYgKG9wdGlvbnMuYW5pbWF0aW9uID09PSAnYW5pbWF0aW9uMScpIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb24xO1xyXG4gICAgZWxzZSBpZiAob3B0aW9ucy5hbmltYXRpb24gPT09ICdhbmltYXRpb24yJykgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbjI7XHJcbiAgICBlbHNlIGlmIChvcHRpb25zLmFuaW1hdGlvbiA9PT0gJ2FuaW1hdGlvbjMnKSB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uMztcclxuICAgIGVsc2UgaWYgKG9wdGlvbnMuYW5pbWF0aW9uID09PSAnYW5pbWF0aW9uNCcpIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb240O1xyXG4gICAgZWxzZSBpZiAob3B0aW9ucy5hbmltYXRpb24gPT09ICdhbmltYXRpb241JykgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbjU7XHJcbiAgICBlbHNlIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb24xO1xyXG5cclxuICAgIC8vIG5hdkNvbG9yIGFuZCBsaUNvbG9yIG9wdGlvbjpcclxuICAgIHRoaXMubmF2Q29sb3JzID0gdGhpcy5jb2xvclZhbHVlcyhvcHRpb25zLm5hdkNvbG9yKSB8fCB0aGlzLmNvbG9yVmFsdWVzKCcjZGRkJyk7XHJcbiAgICB0aGlzLmxpQ29sb3JzID0gdGhpcy5jb2xvclZhbHVlcyhvcHRpb25zLmxpQ29sb3IpIHx8IHRoaXMuY29sb3JWYWx1ZXMoJyM2NjYnKTtcclxuXHJcbiAgICAvLyB3aWR0aCBhbmQgaGVpZ2h0IG9wdGlvbnM6XHJcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAnMTUwcHgnO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCAnNjVweCc7XHJcblxyXG4gICAgLy8gZm9udHNpemUgYW5kIHRleFRyYW5zZm9ybSBvcHRpb25zOlxyXG4gICAgdGhpcy5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemUgfHwgJzE0cHgnO1xyXG4gICAgdGhpcy50ZXh0VHJhbnNmb3JtID0gb3B0aW9ucy50ZXh0VHJhbnNmb3JtIHx8ICd1cHBlcmNhc2UnO1xyXG5cclxuICAgIC8vXHJcbiAgICBsZXQgZGl2O1xyXG4gICAgaWYodHlwZW9mKGRpdlNlbGVjdG9yKSA9PT0gJ3N0cmluZycpIGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGl2U2VsZWN0b3IpO1xyXG4gICAgZWxzZSBkaXYgPSBkaXZTZWxlY3RvcjtcclxuICAgIGNvbnN0IG5hdiA9IHRoaXMuY3JlYXRlTmF2KClcclxuICAgIHRoaXMudWwgPSB0aGlzLmNyZWF0ZVVsKClcclxuXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQodGhpcy51bClcclxuICAgIGRpdi5hcHBlbmRDaGlsZChuYXYpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVOYXYoKXtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xyXG4gICAgdGhpcy5zdHlsaW5nTmF2KG5hdik7XHJcblxyXG4gICAgcmV0dXJuIG5hdlxyXG4gIH1cclxuXHJcbiAgY3JlYXRlVWwoKXtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnRDb250YWluZXInKTtcclxuICAgIHRoaXMuc3R5bGluZ1VsKHVsKVxyXG4gICAgcmV0dXJuIHVsXHJcbiAgfVxyXG5cclxuICBhcHBlbmRFbGVtZW50KGVsZW1lbnROYW1lLGxpbms9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1EnKXtcclxuICAgIGlmKHR5cGVvZihlbGVtZW50TmFtZSk9PT0gJ3N0cmluZycpe1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICBlbGVtZW50LmhyZWYgPSBsaW5rO1xyXG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudE5hbWU7XHJcbiAgICAgIHRoaXMuc3R5bGluZ0xpKGVsZW1lbnQpXHJcbiAgICAgIHRoaXMudWwuYXBwZW5kQ2hpbGQoZWxlbWVudClcclxuICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuICAgIHRoaXMuc3R5bGluZ0xpKGVsZW1lbnROYW1lKVxyXG4gICAgdGhpcy51bC5hcHBlbmRDaGlsZChlbGVtZW50TmFtZSlcclxuICAgIHJldHVybiBlbGVtZW50TmFtZVxyXG4gIH1cclxuXHJcbiAgc3R5bGluZ05hdihuYXYpe1xyXG4gICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIG5hdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xyXG4gICAgbmF2LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICAgIG5hdi5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIG5hdi5zdHlsZS5iYWNrZ3JvdW5kID0gYHJnYmEoICR7dGhpcy5uYXZDb2xvcnNbMF19LCAke3RoaXMubmF2Q29sb3JzWzFdfSwgJHt0aGlzLm5hdkNvbG9yc1syXX0gKWA7XHJcbiAgICBuYXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzVweCc7XHJcbiAgICBuYXYuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgbmF2LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgbmF2LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIG5hdi5zdHlsZS50ZXh0VHJhbnNmb3JtID0gdGhpcy50ZXh0VHJhbnNmb3JtO1xyXG4gICAgbmF2LnN0eWxlLmZvbnRTaXplID0gdGhpcy5mb250U2l6ZTtcclxuICAgIG5hdi5zdHlsZS5jb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDAuNyknO1xyXG4gICAgbmF2LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKHRoaXMuc2hvd1R5cGUsICgpPT57IFxyXG4gICAgICBuYXYuc3R5bGUuYmFja2dyb3VuZCA9IGByZ2JhKCAke3RoaXMubmF2Q29sb3JzWzBdLTQwfSwgJHt0aGlzLm5hdkNvbG9yc1sxXS00MH0sICR7dGhpcy5uYXZDb2xvcnNbMl0tNDB9IClgO1xyXG4gICAgICAvL0lmIHVsIGhhcyBubyBlbGVtZW50cywgcmV0dXJuIHRvIGF2b2lkIGVycm9yczpcclxuICAgICAgaWYodGhpcy51bC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLnVsLmxhc3RDaGlsZC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMHB4IDBweCA1cHggNXB4J1xyXG4gICAgICB0aGlzLnVsLmNoaWxkTm9kZXMuZm9yRWFjaCggKGVsZW1lbnQsaWR4KT0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7IC8vRGVmYXVsdCB0cmlnZ2VyXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24oZWxlbWVudCxpZHgpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpPT57XHJcbiAgICAgIG5hdi5zdHlsZS5iYWNrZ3JvdW5kID0gYHJnYmEoICR7dGhpcy5uYXZDb2xvcnNbMF19LCAke3RoaXMubmF2Q29sb3JzWzFdfSwgJHt0aGlzLm5hdkNvbG9yc1syXX0gKWA7XHJcbiAgICAgIGlmKHRoaXMudWwuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgdGhpcy51bC5jaGlsZE5vZGVzLmZvckVhY2goIChlbGVtZW50KT0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3R5bGluZ0xpKGVsZW1lbnQpe1xyXG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID1gcmdiYSggJHt0aGlzLmxpQ29sb3JzWzBdfSwgJHt0aGlzLmxpQ29sb3JzWzFdfSwgJHt0aGlzLmxpQ29sb3JzWzJdfSApYDtcclxuICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJztcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy9EZWZhdWx0IHRyaWdnZXJcclxuICAgIGVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcclxuICAgIGVsZW1lbnQuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgZWxlbWVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwJztcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ3RvcCBjZW50ZXInXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKT0+eyBcclxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYHJnYmEoICR7dGhpcy5saUNvbG9yc1swXS00MH0sICR7dGhpcy5saUNvbG9yc1sxXS00MH0sICR7dGhpcy5saUNvbG9yc1syXS00MH0gKWA7XHJcbiAgICB9KVxyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpPT57IFxyXG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBgcmdiYSggJHt0aGlzLmxpQ29sb3JzWzBdfSwgJHt0aGlzLmxpQ29sb3JzWzFdfSwgJHt0aGlzLmxpQ29sb3JzWzJdfSApYDtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdHlsaW5nVWwodWwpe1xyXG4gICAgdWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgdWwuc3R5bGUudG9wID0gJzEwMCUnO1xyXG4gICAgdWwuc3R5bGUubGVmdCA9ICcwJSc7XHJcbiAgICB1bC5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgIHVsLnN0eWxlLnBhZGRpbmcgPSAnMCc7XHJcbiAgICB1bC5zdHlsZS5tYXJnaW4gPSAnMCc7XHJcbiAgICB1bC5zdHlsZS5wZXJzcGVjdGl2ZSA9ICcxMDAwcHgnO1xyXG4gIH1cclxuICBcclxuICAvL1RoZSBhbmltYXRpb25zIHNob3VsZG4ndCBjb21lIGZyb20gdXBwZXIgc2lkZSwgYnV0IHByb2JhYnBsaSBjbGlja2luZyB0cmlnZ2VyIHRoZSBmaXJzdCBsaW5rXHJcbiAgYW5pbWF0aW9uMShlbGVtZW50LGlkeCl7XHJcbiAgICBlbGVtZW50LmFuaW1hdGUoW1xyXG4gICAgICAvLyBrZXlmcmFtZXNcclxuICAgICAgeyAvL2Zyb21cclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMzBweCknLFxyXG4gICAgICB9LFxyXG4gICAgICB7IC8vVG9cclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH1cclxuICAgIF0sIHtcclxuICAgICAgLy8gdGltaW5nIG9wdGlvbnNcclxuICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgaXRlcmF0aW9uczogMSxcclxuICAgICAgZmlsbDogJ2ZvcndhcmRzJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0aW9uMihlbGVtZW50LGlkeCkge1xyXG4gICAgZWxlbWVudC5hbmltYXRlKFtcclxuICAgICAge1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVkoNTBweCknLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2UtaW4nLFxyXG4gICAgICAgIG9mZnNldDogMCwgLy8wJVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVkoMCknLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgICBvZmZzZXQ6IDEsIC8vMTAwJVxyXG4gICAgICB9XHJcbiAgICBdLCB7XHJcbiAgICAgIC8vIHRpbWluZyBvcHRpb25zXHJcbiAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgIGRlbGF5OiAyMDAqaWR4LFxyXG4gICAgICBpdGVyYXRpb25zOiAxLFxyXG4gICAgICBmaWxsOiAnYmFja3dhcmRzJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0aW9uMyhlbGVtZW50LGlkeCkge1xyXG4gICAgZWxlbWVudC5hbmltYXRlKFtcclxuICAgICAge1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSg1MHB4KScsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1pbicsXHJcbiAgICAgICAgb2Zmc2V0OiAwLCAvLzAlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgICBvZmZzZXQ6IDEsIC8vMTAwJVxyXG4gICAgICB9XHJcbiAgICBdLCB7XHJcbiAgICAgIC8vIHRpbWluZyBvcHRpb25zXHJcbiAgICAgIGR1cmF0aW9uOiAzMDAqaWR4KzMwMCxcclxuICAgICAgZGVsYXk6IDAsXHJcbiAgICAgIGl0ZXJhdGlvbnM6IDEsXHJcbiAgICAgIGZpbGw6ICdiYWNrd2FyZHMnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBcclxuICBhbmltYXRpb240KGVsZW1lbnQsaWR4KSB7XHJcbiAgICBlbGVtZW50LmFuaW1hdGUoW1xyXG4gICAgICB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTMwZGVnKSB0cmFuc2xhdGVYKDMwcHgpJyxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlLWluJyxcclxuICAgICAgICBvZmZzZXQ6IDAsIC8vMCVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpIHRyYW5zbGF0ZVgoMHB4KScsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgIG9mZnNldDogMSwgLy8xMDAlXHJcbiAgICAgIH1cclxuICAgIF0sIHtcclxuICAgICAgLy8gdGltaW5nIG9wdGlvbnNcclxuICAgICAgZHVyYXRpb246IDMwMCxcclxuICAgICAgZGVsYXk6IDE1MCppZHgsXHJcbiAgICAgIGl0ZXJhdGlvbnM6IDEsXHJcbiAgICAgIGZpbGw6ICdiYWNrd2FyZHMnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhbmltYXRpb241KGVsZW1lbnQsaWR4KSB7XHJcbiAgICBlbGVtZW50LmFuaW1hdGUoW1xyXG4gICAgICB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGVYKC05MGRlZyknLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2UtaW4nLFxyXG4gICAgICAgIG9mZnNldDogMCwgLy8wJVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGVYKDBkZWcpJyxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgb2Zmc2V0OiAxLCAvLzEwMCVcclxuICAgICAgfVxyXG4gICAgXSwge1xyXG4gICAgICAvLyB0aW1pbmcgb3B0aW9uc1xyXG4gICAgICBkdXJhdGlvbjogMzAwLFxyXG4gICAgICBkZWxheTogMTUwKmlkeCxcclxuICAgICAgaXRlcmF0aW9uczogMSxcclxuICAgICAgZmlsbDogJ2JhY2t3YXJkcycsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbG9yVmFsdWVzKGNvbG9yKXtcclxuICAgIGlmICghY29sb3IpIHJldHVybjtcclxuICAgIGlmIChjb2xvci50b0xvd2VyQ2FzZSgpID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gWzAsIDAsIDAsIDBdO1xyXG4gICAgaWYgKGNvbG9yWzBdID09PSAnIycpe1xyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoIDwgNyl7XHJcbiAgICAgICAgY29sb3IgPSAnIycgKyBjb2xvclsxXSArIGNvbG9yWzFdICsgY29sb3JbMl0gKyBjb2xvclsyXSArXHJcbiAgICAgICAgY29sb3JbM10gKyBjb2xvclszXSArIChjb2xvci5sZW5ndGggPiA0ID8gY29sb3JbNF0gKyBjb2xvcls0XSA6ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gW3BhcnNlSW50KGNvbG9yLnN1YnN0cigxLCAyKSwgMTYpLFxyXG4gICAgICAgIHBhcnNlSW50KGNvbG9yLnN1YnN0cigzLCAyKSwgMTYpLFxyXG4gICAgICAgIHBhcnNlSW50KGNvbG9yLnN1YnN0cig1LCAyKSwgMTYpLFxyXG4gICAgICAgIGNvbG9yLmxlbmd0aCA+IDcgPyBwYXJzZUludChjb2xvci5zdWJzdHIoNywgMiksIDE2KS8yNTUgOiAxXTtcclxuICAgIH1cclxuICAgIGlmIChjb2xvci5pbmRleE9mKCdyZ2InKSA9PT0gLTEpe1xyXG4gICAgICB2YXIgdGVtcF9lbGVtID0gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWN0dW0nKSk7XHJcbiAgICAgIHZhciBmbGFnID0gJ3JnYigxLCAyLCAzKSc7XHJcbiAgICAgIHRlbXBfZWxlbS5zdHlsZS5jb2xvciA9IGZsYWc7XHJcbiAgICAgIGlmICh0ZW1wX2VsZW0uc3R5bGUuY29sb3IgIT09IGZsYWcpIHJldHVybjtcclxuICAgICAgdGVtcF9lbGVtLnN0eWxlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgIGlmICh0ZW1wX2VsZW0uc3R5bGUuY29sb3IgPT09IGZsYWcgfHwgdGVtcF9lbGVtLnN0eWxlLmNvbG9yID09PSAnJykgcmV0dXJuO1xyXG4gICAgICBjb2xvciA9IGdldENvbXB1dGVkU3R5bGUodGVtcF9lbGVtKS5jb2xvcjtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wX2VsZW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbG9yLmluZGV4T2YoJ3JnYicpID09PSAwKXtcclxuICAgICAgaWYgKGNvbG9yLmluZGV4T2YoJ3JnYmEnKSA9PT0gLTEpIGNvbG9yICs9ICcsMSc7XHJcbiAgICAgIHJldHVybiBjb2xvci5tYXRjaCgvW1xcLlxcZF0rL2cpLm1hcCggKGEpID0+ICthICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEcm9wZG93bjsiLCJjb25zdCBEcm9wZG93biA9IHJlcXVpcmUoJy4vRHJvcGRvd24uanMnKTtcclxuXHJcbmNsYXNzIE1lbnUge1xyXG4gIGNvbnN0cnVjdG9yKGRpdlNlbGVjdG9yLG1lbnVUeXBlPSdzdGF0aWMnLCBvcHRpb25zPXt9LGRyb3Bkb3duT3B0aW9ucyl7XHJcblxyXG4gICAgdGhpcy5tZW51VHlwZSA9IG1lbnVUeXBlIHx8ICdzdGF0aWMnO1xyXG4gICAgdGhpcy5tb3JlTGlzdCA9IG9wdGlvbnMubW9yZUxpc3QgfHwgW107XHJcbiAgICB0aGlzLmVsZW1lbnRzID0gW107XHJcblxyXG4gICAgLy8gbmF2Q29sb3Igb3B0aW9uczpcclxuICAgIHRoaXMubmF2Q29sb3IgPSBvcHRpb25zLm5hdkNvbG9yIHx8ICcjYWFhJztcclxuXHJcbiAgICAvLyBoZWlnaHQgb3B0aW9uczpcclxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgJ2F1dG8nO1xyXG5cclxuICAgIC8vIGRyb3Bkb3duIG9wdGlvbnM6IFxyXG4gICAgdGhpcy5kcm9wZG93bk9wdGlvbnMgPSBkcm9wZG93bk9wdGlvbnMgfHwge3dpZHRoOicxMDBweCcsaGVpZ2h0OicxMDAlJyxuYXZDb2xvcjp0aGlzLm5hdkNvbG9yfVxyXG5cclxuICAgIGxldCBkaXY7XHJcbiAgICBpZih0eXBlb2YoZGl2U2VsZWN0b3IpID09PSAnc3RyaW5nJykgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkaXZTZWxlY3Rvcik7XHJcbiAgICBlbHNlIGRpdiA9IGRpdlNlbGVjdG9yO1xyXG5cclxuICAgIGNvbnN0IG1vcmVCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMubW9yZUJ0bkRpdiA9IG1vcmVCdG5EaXY7XHJcblxyXG4gICAgY29uc3QgdGFic0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy50YWJzRGl2ID0gdGFic0RpdjtcclxuICAgIHRoaXMuc3R5bGluZ05hdih0YWJzRGl2KVxyXG5cclxuICAgIGNvbnN0IG5hdiA9IHRoaXMuY3JlYXRlTmF2KCk7XHJcbiAgICB0aGlzLm5hdiA9IG5hdjtcclxuXHJcbiAgICBuYXYuYXBwZW5kKHRhYnNEaXYsbW9yZUJ0bkRpdilcclxuXHJcbiAgICBkaXYuYXBwZW5kKG5hdik7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVNb3JlRWxlbWVudHMoKXtcclxuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBjb25zdCBlbGVtZW50V2lkdGggPSAxMDA7XHJcbiAgICBjb25zdCBzaG93ZWRFbGVtZW50cyA9IE1hdGguZmxvb3Iod2luZG93V2lkdGgvZWxlbWVudFdpZHRoKTsgLy8gLTEgP1xyXG4gICAgdGhpcy50YWJzRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gIFxyXG4gICAgaWYodGhpcy5lbGVtZW50cy5sZW5ndGggPD0gc2hvd2VkRWxlbWVudHMpe1xyXG4gICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goIChlbCk9PiB0aGlzLnRhYnNEaXYuYXBwZW5kKGVsKSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpPD1zaG93ZWRFbGVtZW50cy0xOyBpKyspe1xyXG4gICAgICB0aGlzLnRhYnNEaXYuYXBwZW5kKHRoaXMuZWxlbWVudHNbaV0pXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBkcm9wID0gbmV3IERyb3Bkb3duKHRoaXMudGFic0RpdiwnTW9yZScsIHRoaXMuZHJvcGRvd25PcHRpb25zKVxyXG4gICAgZm9yKGxldCBpID0gc2hvd2VkRWxlbWVudHMrMTsgaSA8IHRoaXMuZWxlbWVudHMubGVuZ3RoKzE7IGkrKyl7XHJcbiAgICAgIGRyb3AuYXBwZW5kRWxlbWVudChgJHt0aGlzLmVsZW1lbnRzW2ktMV0udGV4dENvbnRlbnR9YCwgJyMnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTmF2KCl7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XHJcbiAgICB0aGlzLnN0eWxpbmdOYXYobmF2KTtcclxuXHJcbiAgICBpZih0aGlzLm1lbnVUeXBlID09PSAnc2Nyb2xsJykgdGhpcy5zdHlsaW5nU2Nyb2xsTmF2KG5hdik7XHJcbiAgICBpZih0aGlzLm1lbnVUeXBlID09PSAnbW9yZScpe1xyXG4gICAgICBjb25zdCBtb3JlQnRuID0gbmV3IERyb3Bkb3duKHRoaXMubW9yZUJ0bkRpdiwnTW9yZScsdGhpcy5kcm9wZG93bk9wdGlvbnMpO1xyXG4gICAgICB0aGlzLm1vcmVMaXN0LmZvckVhY2goIChlKT0+IG1vcmVCdG4uYXBwZW5kRWxlbWVudChlKSApXHJcbiAgICB9XHJcbiAgICBpZih0aGlzLm1lbnVUeXBlID09PSAnbW9yZUNvbGxhcHNlJykgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsdGhpcy50b2dnbGVNb3JlRWxlbWVudHMuYmluZCh0aGlzKSlcclxuICAgIFxyXG4gICAgcmV0dXJuIG5hdlxyXG4gIH1cclxuXHJcbiAgc3R5bGluZ05hdihuYXYpe1xyXG4gICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBuYXYuc3R5bGUud2lkdGggID0nMTAwdncnO1xyXG4gICAgbmF2LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgbmF2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMubmF2Q29sb3I7XHJcbiAgICBuYXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcclxuICAgIG5hdi5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcbiAgICBuYXYuc3R5bGUucGFkZGluZyA9ICcwJztcclxuICAgIG5hdi5zdHlsZS5tYXJnaW4gPSAnMCc7XHJcbiAgfVxyXG5cclxuICBzdHlsaW5nU2Nyb2xsTmF2KG5hdil7XHJcbiAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBuYXYuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICBuYXYuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xyXG4gICAgbmF2LnN0eWxlLldlYmtpdE92ZXJmbG93U3Jjb2xsaW5nID0gJ3RvdWNoJztcclxuICB9XHJcblxyXG4gIGFwcGVuZEVsZW1lbnQoZWxlbWVudE5hbWUsbGluayA9ICcjJyl7XHJcbiAgICBsZXQgZWxlbWVudDtcclxuICAgIGlmKHR5cGVvZihlbGVtZW50TmFtZSk9PT0gJ3N0cmluZycpe1xyXG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICBlbGVtZW50LmhyZWYgPSBsaW5rO1xyXG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudE5hbWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGVsZW1lbnQgPSBlbGVtZW50TmFtZTtcclxuXHJcbiAgICB0aGlzLnN0eWxpbmdFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgaWYodGhpcy5tZW51VHlwZSA9PT0gJ3Njcm9sbCcpIHRoaXMuc3R5bGluZ1Njcm9sbEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBcclxuICAgIHRoaXMuZWxlbWVudHMucHVzaChlbGVtZW50KVxyXG4gICAgdGhpcy50YWJzRGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcbiAgICB0aGlzLnRvZ2dsZU1vcmVFbGVtZW50cygpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICB9XHJcblxyXG4gIHN0eWxpbmdFbGVtZW50KGVsZW1lbnQpe1xyXG4gICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzVweCAwJztcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzVweCAwJztcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PntcclxuICAgICBlbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9ICdkb3VibGUgM3B4IGJsYWNrJztcclxuICAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxcHgnO1xyXG4gICAgfSlcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PntcclxuICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSAnbm9uZSc7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gJzBweCc7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3R5bGluZ1Njcm9sbEVsZW1lbnQoZWxlbWVudCl7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXk9J2lubGluZS1ibG9jayc7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzVweCAzMHB4J1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWVudTsiLCJjbGFzcyBTbGlkZXJ7XHJcbiAgY29uc3RydWN0b3IoZGl2U2VsZWN0b3IsaW1nV2lkdGgsaW1nSGVpZ2h0LG9wdGlvbnM9e30pe1xyXG5cclxuICAgIC8vIEltYWdlIHdpZHRoIGFkbiBoZWlnaHQgb3B0aW9uczogKGluIHBpeGVscylcclxuICAgIHRoaXMuaW1nV2lkdGggPSBpbWdXaWR0aDtcclxuICAgIHRoaXMuaW1nSGVpZ2h0ID0gaW1nV2lkdGggfHwgaW1nSGVpZ2h0O1xyXG4gICAgXHJcbiAgICAvLyBhdXRvU2xpZGUgb3B0aW9uczogKG5vbmUgb3IgbnVtYmVyIGluIG1pbGlzZWNvbmRzKVxyXG4gICAgdGhpcy5hdXRvU2xpZGUgPSBvcHRpb25zLmF1dG9TbGlkZSB8fCA1MDAwO1xyXG5cclxuICAgIC8vIGZyYW1lQ29sb3Igb3B0aW9uczogKHZhbGlkIGNvbG9yKVxyXG4gICAgdGhpcy5mcmFtZUNvbG9yID0gb3B0aW9ucy5mcmFtZUNvbG9yIHx8ICd0cmFuc3BhcmVudCc7XHJcblxyXG4gICAgLy8gZnJhbWVTaXplIGFuZCBib3JkZXJSYWRpdXMgb3B0aW9uOiAobnVtYmVyIGluIHBpeGVscyk6XHJcbiAgICB0aGlzLmZyYW1lU2l6ZSA9IG9wdGlvbnMuZnJhbWVTaXplIHx8IDEwO1xyXG4gICAgdGhpcy5ib3JkZXJSYWRpdXMgPSBvcHRpb25zLmJvcmRlclJhZGl1cyB8fCAnMjBweCc7IFxyXG5cclxuICAgIHRoaXMuY3VyckltZyA9IDA7XHJcblxyXG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmNyZWF0ZUZyYW1lKClcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMuaW1hZ2VMaXN0ID0gW107XHJcbiAgICB0aGlzLnJhZGlvQnRuc0xpc3QgPSBbXTtcclxuXHJcbiAgICBsZXQgZGl2O1xyXG4gICAgaWYodHlwZW9mKGRpdlNlbGVjdG9yKSA9PT0gJ3N0cmluZycpIGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGl2U2VsZWN0b3IpO1xyXG4gICAgZWxzZSBkaXYgPSBkaXZTZWxlY3RvcjtcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hJbWFnZXMgPSB0aGlzLmNyZWF0ZVN3aXRjaEltYWdlcygpO1xyXG4gICAgdGhpcy5zd2l0Y2hJbWFnZXMgPSBzd2l0Y2hJbWFnZXM7XHJcblxyXG4gICAgZnJhbWUuYXBwZW5kKGNvbnRhaW5lcixzd2l0Y2hJbWFnZXMpO1xyXG4gICAgZGl2LmFwcGVuZChmcmFtZSk7XHJcbiAgICBcclxuICAgIGlmKHR5cGVvZih0aGlzLmF1dG9TbGlkZSk9PT0nbnVtYmVyJykgc2V0SW50ZXJ2YWwodGhpcy50cmlnZ2VyUmlnaHQuYmluZCh0aGlzKSx0aGlzLmF1dG9TbGlkZSk7XHJcbiAgICAvL2NsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICAgIGlmKGUua2V5Q29kZSA9PT0gMzcpIHRoaXMudHJpZ2dlckxlZnQoKVxyXG4gICAgICBlbHNlIGlmKGUua2V5Q29kZSA9PT0gMzkpIHRoaXMudHJpZ2dlclJpZ2h0KClcclxuICAgICAgZWxzZSByZXR1cm47XHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZUZyYW1lKCl7XHJcbiAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5zdHlsaW5nRnJhbWUoZnJhbWUpO1xyXG4gICAgcmV0dXJuIGZyYW1lO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29udGFpbmVyKCl7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuc3R5bGluZ0NvbnRhaW5lcihjb250YWluZXIpO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGFwcGVuZEVsZW1lbnQoaW1nTGluayl7XHJcbiAgICBsZXQgaW1nO1xyXG4gICAgaWYodHlwZW9mKGltZ0xpbmspPT09J3N0cmluZycpe1xyXG4gICAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgaW1nLnNyYyA9IGltZ0xpbms7XHJcbiAgICB9XHJcbiAgICBlbHNlIGltZyA9IGltZ0xpbms7XHJcbiAgICB0aGlzLnN0eWxpbmdJbWcoaW1nKTtcclxuICAgIHRoaXMuaW1hZ2VMaXN0LnB1c2goaW1nKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChpbWcpO1xyXG5cclxuICAgIHRoaXMuZnJhbWUucmVtb3ZlQ2hpbGQodGhpcy5zd2l0Y2hJbWFnZXMpO1xyXG4gICAgdGhpcy5zd2l0Y2hJbWFnZXMgPSB0aGlzLmNyZWF0ZVN3aXRjaEltYWdlcygpXHJcbiAgICB0aGlzLmZyYW1lLmFwcGVuZCh0aGlzLnN3aXRjaEltYWdlcyk7XHJcbiAgICBcclxuICAgIHJldHVybiBpbWdcclxuICB9XHJcblxyXG4gIHN0eWxpbmdGcmFtZShmcmFtZSl7XHJcbiAgICBmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgZnJhbWUuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xyXG4gICAgZnJhbWUuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnQ2VudGVyJztcclxuICAgIGZyYW1lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGZyYW1lLnN0eWxlLndpZHRoID0gYCR7dGhpcy5pbWdXaWR0aCArIHRoaXMuZnJhbWVTaXplfXB4YDtcclxuICAgIGZyYW1lLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaW1nSGVpZ2h0ICsgdGhpcy5mcmFtZVNpemV9cHhgO1xyXG4gICAgZnJhbWUuc3R5bGUubGVmdCA9ICc1MCUnO1xyXG4gICAgZnJhbWUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTUwJSknO1xyXG4gICAgZnJhbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5mcmFtZUNvbG9yO1xyXG4gICAgZnJhbWUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIGZyYW1lLnN0eWxlLmJvcmRlclJhZGl1cyA9IHRoaXMuYm9yZGVyUmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgc3R5bGluZ0NvbnRhaW5lcihjb250YWluZXIpe1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBjb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gICAgXHJcbiAgICBjb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSAnLjdzIGVhc2UtaW4tb3V0JztcclxuICB9XHJcblxyXG4gIHN0eWxpbmdJbWcoaW1nKXtcclxuICAgIGltZy5zdHlsZS53aWR0aCA9IGAke3RoaXMuaW1nV2lkdGh9cHhgO1xyXG4gICAgaW1nLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaW1nSGVpZ2h0fXB4YDtcclxuICAgIGltZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSB0aGlzLmJvcmRlclJhZGl1cztcclxuICAgIGltZy5zdHlsZS5wYWRkaW5nID0gYCR7dGhpcy5mcmFtZVNpemUvMn1weGA7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTd2l0Y2hJbWFnZXMoKXtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbGVmdEFycm93ID0gdGhpcy5jcmVhdGVBcnJvdygnbGVmdCcpO1xyXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IHRoaXMuY3JlYXRlQXJyb3coJ3JpZ2h0Jyk7XHJcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSB0aGlzLmNyZWF0ZVJhZGlvQnV0dG9ucygpO1xyXG4gICAgdGhpcy5zdHlpbGluZ1N3aXRjaEltYWdlcyhkaXYpO1xyXG5cclxuICAgIGRpdi5hcHBlbmQobGVmdEFycm93LHJhZGlvQnV0dG9ucyxyaWdodEFycm93KTtcclxuICAgIHJldHVybiBkaXY7XHJcbiAgfVxyXG5cclxuICBzdHlpbGluZ1N3aXRjaEltYWdlcyhkaXYpe1xyXG4gICAgZGl2LnN0eWxlLndpZHRoID0gJzgwJSc7XHJcbiAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGRpdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1hcm91bmQnO1xyXG4gICAgZGl2LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBkaXYuc3R5bGUubGVmdCA9ICc1MCUnO1xyXG4gICAgZGl2LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC01MCUpJztcclxuICAgIGRpdi5zdHlsZS5ib3R0b20gPSAnMCc7XHJcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTUsIDI1NSwgMjU1LCAwLjMpJztcclxuICAgIGRpdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMjBweCc7XHJcbiAgICBkaXYuc3R5bGUucGFkZGluZyA9ICc1cHgnO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQXJyb3coc2lkZSl7XHJcbiAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgaWYoc2lkZT09PSdsZWZ0Jyl7XHJcbiAgICAgIGFycm93LnRleHRDb250ZW50ID0gJ+KMqSc7XHJcbiAgICAgIGFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB0aGlzLnRyaWdnZXJMZWZ0KCkpO1xyXG4gICAgfSBcclxuICAgIGVsc2V7XHJcbiAgICAgIGFycm93LnRleHRDb250ZW50ID0gJ+KMqic7XHJcbiAgICAgIGFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB0aGlzLnRyaWdnZXJSaWdodCgpKVxyXG4gICAgfSBcclxuICAgIHRoaXMuc3R5bGluZ0Fycm93KGFycm93KTtcclxuICAgIHJldHVybiBhcnJvdztcclxuICB9XHJcbiAgXHJcbiAgc3R5bGluZ0Fycm93KGFycm93KXtcclxuICAgIC8vYXJyb3cuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkZXInO1xyXG4gICAgYXJyb3cuc3R5bGUuZm9udFNpemUgPSAnMjBweCdcclxuICAgIGFycm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICBhcnJvdy5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCgpPT4gYXJyb3cuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInKVxyXG5cclxuICB9XHJcblxyXG4gIHRyaWdnZXJMZWZ0KCl7XHJcbiAgICB0aGlzLmN1cnJJbWctPTE7XHJcbiAgICBpZih0aGlzLmN1cnJJbWcgPCAwKXtcclxuICAgICAgdGhpcy5jdXJySW1nID0gdGhpcy5pbWFnZUxpc3QubGVuZ3RoLTE7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHRoaXMudHJhbnNmb3JtQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLnJhZGlvQnRuc0xpc3RbdGhpcy5jdXJySW1nXS5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJSaWdodCgpe1xyXG4gICAgdGhpcy5jdXJySW1nKz0xO1xyXG4gICAgaWYodGhpcy5jdXJySW1nID09PSB0aGlzLmltYWdlTGlzdC5sZW5ndGgpe1xyXG4gICAgICB0aGlzLmN1cnJJbWcgPSAwO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybUNvbnRhaW5lcigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB0aGlzLnRyYW5zZm9ybUNvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5yYWRpb0J0bnNMaXN0W3RoaXMuY3VyckltZ10uY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbWcoaWR4KXtcclxuICAgIHRoaXMuY3VyckltZyA9IGlkeDtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29udGFpbmVyKCk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1Db250YWluZXIoKXtcclxuICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKGNhbGMoLSR7dGhpcy5pbWdXaWR0aCt0aGlzLmZyYW1lU2l6ZX0qJHt0aGlzLmN1cnJJbWd9cHgpKWA7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSYWRpb0J1dHRvbnMoKXtcclxuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy5pbWFnZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgIGNvbnN0IGJ0biA9IHRoaXMuY3JlYXRlUmFkaW9CdG4oKTtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsdGhpcy5zZWxlY3RJbWcuYmluZCh0aGlzLGkpICk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCgpPT4gYnRuIC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcicpXHJcblxyXG4gICAgICByYWRpb0J1dHRvbnMuYXBwZW5kKGJ0bik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhZGlvQnRuc0xpc3QgPSByYWRpb0J1dHRvbnMuY2hpbGROb2RlcztcclxuICAgIGlmKHRoaXMucmFkaW9CdG5zTGlzdC5sZW5ndGggIT09IDApIHRoaXMucmFkaW9CdG5zTGlzdFswXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHJldHVybiByYWRpb0J1dHRvbnM7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSYWRpb0J0bigpe1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGJ0bi50eXBlID0gJ3JhZGlvJztcclxuICAgIGJ0bi5uYW1lID0gJ3JhZGlvLWltZyc7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2xpZGVyOyIsImltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9Ecm9wZG93blwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4vU2xpZGVyXCJcclxuXHJcbmV4cG9ydCB7RHJvcGRvd24sTWVudSxTbGlkZXJ9IiwiYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb29yZHMoY2l0eU5hbWUpe1xyXG4gIGNvbnN0IGdlb0FwaUtleSA9ICc0M2YwNDJiMTYzN2IzOWE4ZWU5M2Q0NDJhZmVkNTE0Yic7XHJcbiAgY29uc3QgbGluayA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHlOYW1lfSZhcHBpZD0ke2dlb0FwaUtleX1gO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpbmsseyBtb2RlOiBcImNvcnNcIiB9KTtcclxuICAgIGNvbnN0IGRhdGFSYXcgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBkYXRhID0gZGF0YVJhd1swXTtcclxuICAgIHJldHVybiBkYXRhO1xyXG5cclxuICB9IGNhdGNoKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKGxhdCxsb24sdW5pdHM9J21ldHJpYycpe1xyXG4gIGxldCBsYW5nID0gJ2VzJzsvL2ZyOiBmcmVuY2gsIGVuOiBlbmdsaXNoO1xyXG4gIGNvbnN0IGdlb0FwaUtleSA9ICc0M2YwNDJiMTYzN2IzOWE4ZWU5M2Q0NDJhZmVkNTE0Yic7XHJcbiAgY29uc3QgbGluayA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mZXhjbHVkZT1taW51dGVseSZsYW5nPSR7bGFuZ30mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHtnZW9BcGlLZXl9YDtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpbmsseyBtb2RlOiBcImNvcnNcIiB9KTtcclxuICBjb25zdCBkYXRhUmF3ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnN0IGRhdGEgPSBkYXRhUmF3O1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQge2ZldGNoV2VhdGhlcixmZXRjaENvb3Jkc307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7ZmV0Y2hXZWF0aGVyLGZldGNoQ29vcmRzfSBmcm9tIFwiLi93ZWF0aGVyXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcImRyb3B0aGluZ3NcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNob3dXZWF0aGVyKGNpdHksIHBvcywgdW5pdHM9J21ldHJpYycpe1xyXG4gIGxldCBjb29yZHMgPSBwb3NcclxuICBsZXQgc3ltYm9sO1xyXG4gIGlmKHVuaXRzID09PSdtZXRyaWMnKSBzeW1ib2wgPSAnwrBDJztcclxuICBlbHNlICBzeW1ib2wgPSAnRic7XHJcblxyXG4gIGlmKGNpdHkgIT09ICdub25lJykgY29vcmRzID0gYXdhaXQgZmV0Y2hDb29yZHMoY2l0eSlcclxuICBlbHNle1xyXG4gICAgY29uc3QgdWJpID0gYXdhaXQgcmV2ZXJzZUdlbyhjb29yZHMubGF0LGNvb3Jkcy5sb24pO1xyXG4gICAgY29vcmRzLm5hbWUgPSB1YmkubG9jYWxpdHk7XHJcbiAgICBjb29yZHMuc3RhdGUgPSB1YmkucHJpbmNpcGFsU3ViZGl2aXNpb25cclxuICAgIGNvb3Jkcy5jb3VudHJ5ID0gdWJpLmNvdW50cnlOYW1lXHJcbiAgfVxyXG4gIGNvbnN0IG9iaiA9IGF3YWl0IGZldGNoV2VhdGhlcihjb29yZHMubGF0LGNvb3Jkcy5sb24sdW5pdHMpO1xyXG4gIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsJ01vbmRheScsJ1R1ZXNkYXknLCdXZWRuZXNkYXknLCdUaHVyc2RheScsJ0ZyaWRheScsJ1NhdHVyZGF5J107XHJcbiAgY29uc3QgY3VycmVudFcgPSBvYmouY3VycmVudDtcclxuICBjb25zdCBkYWlseVcgPSBvYmouZGFpbHk7XHJcbiAgY29uc3QgaG91cmx5VyA9IG9iai5ob3VybHk7XHJcbiAgc2hvd0N1cnJlbnRXZWF0aGVyKClcclxuICBzaG93SG91cldlYXRoZXIoKVxyXG4gIHNob3dEYWlseVdlYXRoZXIoKVxyXG5cclxuICBmdW5jdGlvbiBzaG93Q3VycmVudFdlYXRoZXIoKXtcclxuICAgIGNvbnN0IGRpdlRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xyXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XHJcbiAgICBjb25zdCBkaXZUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKTtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGV0YWlsJyk7XHJcbiAgICBjb25zdCBtYWluSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWljb24nKTtcclxuICAgIG1haW5JY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtjdXJyZW50Vy53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2BcclxuXHJcbiAgICBkaXZUZW1wLnRleHRDb250ZW50ID0gY3VycmVudFcudGVtcCArIHN5bWJvbDtcclxuICAgIGNpdHkudGV4dENvbnRlbnQgPSBgJHtjb29yZHMubmFtZX0sICR7Y29vcmRzLnN0YXRlfSwgJHtjb29yZHMuY291bnRyeX1gO1xyXG4gICAgZGl2VGltZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXLndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDtcclxuICAgIGRldGFpbHNbMF0udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50Vy5mZWVsc19saWtlfSAke3N5bWJvbH1gXHJcbiAgICBkZXRhaWxzWzFdLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFcuaHVtaWRpdHl9JWA7XHJcbiAgICBkZXRhaWxzWzJdLnRleHRDb250ZW50ID0gYCR7ZGFpbHlXWzBdLnBvcCoxMDB9JWA7XHJcbiAgICBkZXRhaWxzWzNdLnRleHRDb250ZW50ID0gYCR7ZGFpbHlXWzBdLnRlbXAubWlufSAke3N5bWJvbH1gO1xyXG4gICAgZGV0YWlsc1s0XS50ZXh0Q29udGVudCA9IGAke2RhaWx5V1swXS50ZW1wLm1heH0gJHtzeW1ib2x9YDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dIb3VyV2VhdGhlcigpe1xyXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cicpO1xyXG4gICAgaG91cnMuZm9yRWFjaCggKGVsLGlkeCkgPT4ge1xyXG4gICAgICBlbC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoaG91cmx5V1tpZHhdLnRlbXApfSAke3N5bWJvbH1gO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93RGFpbHlXZWF0aGVyKCl7XHJcbiAgICBjb25zdCBuZXh0RGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXh0LWRheScpO1xyXG4gICAgY29uc3QgZGF5RGV0YWlsMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktZGV0YWlsMScpO1xyXG4gICAgY29uc3QgZGF5RGV0YWlsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktZGV0YWlsMicpO1xyXG4gICAgY29uc3QgZGF5SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5LWljb24nKVxyXG4gICAgbmV4dERheXMuZm9yRWFjaCggKGVsLGlkeCkgPT4ge1xyXG4gICAgICBsZXQgY3VyckRhdGUgPSBuZXcgRGF0ZShkYWlseVdbaWR4XS5kdCoxMDAwKVxyXG4gICAgICBsZXQgY3VyckRheSA9IGRheXNbY3VyckRhdGUuZ2V0RGF5KCldO1xyXG4gICAgICBlbC5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gYCR7ZGFpbHlXW2lkeF0udGVtcC5kYXl9ICR7c3ltYm9sfWA7XHJcbiAgICAgIGVsLmNoaWxkTm9kZXNbM10udGV4dENvbnRlbnQgPSBgJHtjdXJyRGF5fWA7XHJcbiAgICAgIGRheURldGFpbDFbaWR4XS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGFpbHlXW2lkeF0uZmVlbHNfbGlrZS5kYXkpfSR7c3ltYm9sfWA7XHJcbiAgICAgIGRheURldGFpbDJbaWR4XS50ZXh0Q29udGVudCA9IGAke2RhaWx5V1tpZHhdLmh1bWlkaXR5fSVgO1xyXG4gICAgICBkYXlJY29uc1tpZHhdLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhaWx5V1tpZHhdLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZXZlcnNlR2VvKGxhdCxsb24pe1xyXG4gIGNvbnN0IGxpbmsgPSBgaHR0cHM6Ly9hcGkuYmlnZGF0YWNsb3VkLm5ldC9kYXRhL3JldmVyc2UtZ2VvY29kZS1jbGllbnQ/bGF0aXR1ZGU9JHtsYXR9JmxvbmdpdHVkZT0ke2xvbn0mbG9jYWxpdHlMYW5ndWFnZT1lc2A7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaW5rKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxubGV0IGN1cnJQb3M7XHJcbmFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKCl7XHJcbiAgaWYobmF2aWdhdG9yLmdlb2xvY2F0aW9uKXtcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oY2FsbFdlYXRoZXIsc2hvd0Vycm9yKS8vKGNhbGxXZWF0aGVyLHNob3dFcnJvcilcclxuICB9XHJcbiAgZWxzZSBjb25zb2xlLmxvZygnZ2VvbG9jYXRpb24gbm90IHN1cHBvcnRlZCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxsV2VhdGhlcihwb3Mpe1xyXG4gIGN1cnJQb3MgPSB7J2xhdCc6cG9zLmNvb3Jkcy5sYXRpdHVkZSwnbG9uJzpwb3MuY29vcmRzLmxvbmdpdHVkZX1cclxuICBzaG93V2VhdGhlcignbm9uZScsY3VyclBvcylcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Vycm9yKGVycil7XHJcbiAgaWYoZXJyLlBFUk1JU0lPTl9ERU5JRUQpIGNvbnNvbGUubG9nKFwiVGhlIHVzZXIgZGVuaWVkIHBlcm1pc2lvbnMuLi5cIilcclxufVxyXG5cclxuY29uc3QgY2l0eUltcHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktaW5wdXQnKTtcclxuY29uc3QgZW50ZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXItYnV0dG9uJyk7XHJcbmVudGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+c2hvd1dlYXRoZXIoY2l0eUltcHV0LnZhbHVlKSlcclxuY2l0eUltcHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgIHNob3dXZWF0aGVyKGNpdHlJbXB1dC52YWx1ZSlcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgdW5pdHNTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoJyk7XHJcbnVuaXRzU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsKGUpID0+e1xyXG4gIGxldCBtZXRyaWM7XHJcbiAgaWYodW5pdHNTd2l0Y2guY2hlY2tlZCkgbWV0cmljID0gJ21ldHJpYyc7XHJcbiAgZWxzZSBtZXRyaWMgPSAnaW1wZXJpYWwnO1xyXG5cclxuICBpZihjaXR5SW1wdXQudmFsdWUgPT09JycpIHNob3dXZWF0aGVyKCdub25lJyxjdXJyUG9zLG1ldHJpYyk7XHJcbiAgZWxzZSBzaG93V2VhdGhlcihjaXR5SW1wdXQudmFsdWUsY3VyclBvcyxtZXRyaWMpXHJcbn0pXHJcblxyXG5jb25zdCBsYW5ndWFnZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZScpO1xyXG5jb25zdCBkcm9wID0gbmV3IERyb3Bkb3duKCcubGFuZ3VhZ2UnLCdMYW5ndWFnZScsIHthbmltYXRpb246J2FuaW1hdGlvbjInLHdpZHRoOic4MHB4JyxoZWlnaHQ6JzIwcHgnLHRleHRUcmFuc2Zvcm06J2NhcGl0YWxpemUnfSk7XHJcbmRyb3AuYXBwZW5kRWxlbWVudCgnRW5nbGlzaCcpO1xyXG5kcm9wLmFwcGVuZEVsZW1lbnQoJ0VzcGHDsW9sJyk7XHJcbmRyb3AuYXBwZW5kRWxlbWVudCgnRnJhbsOnYWlzJyk7XHJcblxyXG5nZXRMb2NhdGlvbigpXHJcblxyXG5kb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICdiYWNrZ3JvdW5kMSc7XHJcbmRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gJ2JhY2tncm91bmQyJztcclxuZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSAnYmFja2dyb3VuZDQnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=