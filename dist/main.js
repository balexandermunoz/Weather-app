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
  const link = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${geoApiKey}`;
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
  //data.name;data.country;data.lat;data.lon;
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
  console.log(obj)
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
    mainIcon.src = `http://openweathermap.org/img/wn/${currentW.weather[0].icon}@2x.png`

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtCQUFrQixJQUFJLGtCQUFrQixJQUFJLG1CQUFtQjtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUJBQXFCLElBQUkscUJBQXFCLElBQUksc0JBQXNCO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLGtCQUFrQixJQUFJLGtCQUFrQixJQUFJLG1CQUFtQjtBQUNyRztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpQkFBaUIsSUFBSSxpQkFBaUIsSUFBSSxrQkFBa0I7QUFDbkc7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxvQkFBb0IsSUFBSSxvQkFBb0IsSUFBSSxxQkFBcUI7QUFDL0csS0FBSztBQUNMO0FBQ0E7QUFDQSwwQ0FBMEMsaUJBQWlCLElBQUksaUJBQWlCLElBQUksa0JBQWtCO0FBQ3RHLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsT0FBTztBQUNQLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuUkEsaUJBQWlCLG1CQUFPLENBQUMsNERBQWU7QUFDeEM7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNEJBQTRCO0FBQzlELDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BJQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFELDRCQUE0QixnQ0FBZ0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QywwQkFBMEIsZUFBZTtBQUN6QztBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsNkJBQTZCLEdBQUcsYUFBYTtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlNa0M7QUFDUjtBQUNHO0FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQSxpRUFBaUUsU0FBUyxTQUFTLFVBQVU7QUFDN0Y7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWMsYUFBYSxTQUFTO0FBQ3BDO0FBQ0Esc0VBQXNFLElBQUksT0FBTyxJQUFJLHlCQUF5QixLQUFLLFNBQVMsTUFBTSxTQUFTLFVBQVU7QUFDckosc0NBQXNDLGNBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUQ7QUFDYjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxREFBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHlCQUF5QjtBQUNoRjtBQUNBO0FBQ0EsMEJBQTBCLFlBQVksSUFBSSxhQUFhLElBQUksZUFBZTtBQUMxRSw2QkFBNkIsZ0NBQWdDO0FBQzdELGdDQUFnQyxxQkFBcUIsRUFBRSxPQUFPO0FBQzlELGdDQUFnQyxrQkFBa0I7QUFDbEQsZ0NBQWdDLGtCQUFrQjtBQUNsRCxnQ0FBZ0Msb0JBQW9CLEVBQUUsT0FBTztBQUM3RCxnQ0FBZ0Msb0JBQW9CLEVBQUUsT0FBTztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtCQUErQixFQUFFLE9BQU87QUFDbEUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHNCQUFzQixFQUFFLE9BQU87QUFDdkUsd0NBQXdDLFFBQVE7QUFDaEQsdUNBQXVDLHVDQUF1QyxFQUFFLE9BQU87QUFDdkYsdUNBQXVDLHFCQUFxQjtBQUM1RCw4REFBOEQsNEJBQTRCO0FBQzFGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixJQUFJLGFBQWEsSUFBSTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQVEsMEJBQTBCLDZFQUE2RTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kcm9wdGhpbmdzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Ryb3B0aGluZ3MvTWVudS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kcm9wdGhpbmdzL1NsaWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kcm9wdGhpbmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHJvcGRvd24ge1xyXG4gIGNvbnN0cnVjdG9yKGRpdlNlbGVjdG9yLG5hbWUsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgIC8vIHNob3dUeXBlIG9wdGlvbjpcclxuICAgIHRoaXMuc2hvd1R5cGUgPSAob3B0aW9ucy5zaG93VHlwZSA9PT0gJ2NsaWNrJykgPyAnY2xpY2snIDogJ21vdXNlZW50ZXInO1xyXG5cclxuICAgIC8vIGFuaW1hdGlvbiBvcHRpb246XHJcbiAgICBpZih0eXBlb2Yob3B0aW9ucy5hbmltYXRpb24pID09PSAnZnVuY3Rpb24nKSB0aGlzLmFuaW1hdGlvbiA9IG9wdGlvbnMuYW5pbWF0aW9uO1xyXG4gICAgZWxzZSBpZiAob3B0aW9ucy5hbmltYXRpb24gPT09ICdhbmltYXRpb24xJykgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbjE7XHJcbiAgICBlbHNlIGlmIChvcHRpb25zLmFuaW1hdGlvbiA9PT0gJ2FuaW1hdGlvbjInKSB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uMjtcclxuICAgIGVsc2UgaWYgKG9wdGlvbnMuYW5pbWF0aW9uID09PSAnYW5pbWF0aW9uMycpIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb24zO1xyXG4gICAgZWxzZSBpZiAob3B0aW9ucy5hbmltYXRpb24gPT09ICdhbmltYXRpb240JykgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbjQ7XHJcbiAgICBlbHNlIGlmIChvcHRpb25zLmFuaW1hdGlvbiA9PT0gJ2FuaW1hdGlvbjUnKSB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uNTtcclxuICAgIGVsc2UgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbjE7XHJcblxyXG4gICAgLy8gbmF2Q29sb3IgYW5kIGxpQ29sb3Igb3B0aW9uOlxyXG4gICAgdGhpcy5uYXZDb2xvcnMgPSB0aGlzLmNvbG9yVmFsdWVzKG9wdGlvbnMubmF2Q29sb3IpIHx8IHRoaXMuY29sb3JWYWx1ZXMoJyNkZGQnKTtcclxuICAgIHRoaXMubGlDb2xvcnMgPSB0aGlzLmNvbG9yVmFsdWVzKG9wdGlvbnMubGlDb2xvcikgfHwgdGhpcy5jb2xvclZhbHVlcygnIzY2NicpO1xyXG5cclxuICAgIC8vIHdpZHRoIGFuZCBoZWlnaHQgb3B0aW9uczpcclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoIHx8ICcxNTBweCc7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8ICc2NXB4JztcclxuXHJcbiAgICAvLyBmb250c2l6ZSBhbmQgdGV4VHJhbnNmb3JtIG9wdGlvbnM6XHJcbiAgICB0aGlzLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZSB8fCAnMTRweCc7XHJcbiAgICB0aGlzLnRleHRUcmFuc2Zvcm0gPSBvcHRpb25zLnRleHRUcmFuc2Zvcm0gfHwgJ3VwcGVyY2FzZSc7XHJcblxyXG4gICAgLy9cclxuICAgIGxldCBkaXY7XHJcbiAgICBpZih0eXBlb2YoZGl2U2VsZWN0b3IpID09PSAnc3RyaW5nJykgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkaXZTZWxlY3Rvcik7XHJcbiAgICBlbHNlIGRpdiA9IGRpdlNlbGVjdG9yO1xyXG4gICAgY29uc3QgbmF2ID0gdGhpcy5jcmVhdGVOYXYoKVxyXG4gICAgdGhpcy51bCA9IHRoaXMuY3JlYXRlVWwoKVxyXG5cclxuICAgIG5hdi5hcHBlbmRDaGlsZCh0aGlzLnVsKVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKG5hdilcclxuICB9XHJcblxyXG4gIGNyZWF0ZU5hdigpe1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XHJcbiAgICB0aGlzLnN0eWxpbmdOYXYobmF2KTtcclxuXHJcbiAgICByZXR1cm4gbmF2XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVbCgpe1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnZWxlbWVudENvbnRhaW5lcicpO1xyXG4gICAgdGhpcy5zdHlsaW5nVWwodWwpXHJcbiAgICByZXR1cm4gdWxcclxuICB9XHJcblxyXG4gIGFwcGVuZEVsZW1lbnQoZWxlbWVudE5hbWUsbGluaz0naHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUScpe1xyXG4gICAgaWYodHlwZW9mKGVsZW1lbnROYW1lKT09PSAnc3RyaW5nJyl7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIGVsZW1lbnQuaHJlZiA9IGxpbms7XHJcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50TmFtZTtcclxuICAgICAgdGhpcy5zdHlsaW5nTGkoZWxlbWVudClcclxuICAgICAgdGhpcy51bC5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG4gICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsaW5nTGkoZWxlbWVudE5hbWUpXHJcbiAgICB0aGlzLnVsLmFwcGVuZENoaWxkKGVsZW1lbnROYW1lKVxyXG4gICAgcmV0dXJuIGVsZW1lbnROYW1lXHJcbiAgfVxyXG5cclxuICBzdHlsaW5nTmF2KG5hdil7XHJcbiAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgbmF2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XHJcbiAgICBuYXYuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gICAgbmF2LnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgbmF2LnN0eWxlLmJhY2tncm91bmQgPSBgcmdiYSggJHt0aGlzLm5hdkNvbG9yc1swXX0sICR7dGhpcy5uYXZDb2xvcnNbMV19LCAke3RoaXMubmF2Q29sb3JzWzJdfSApYDtcclxuICAgIG5hdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcclxuICAgIG5hdi5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICBuYXYuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICBuYXYuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgbmF2LnN0eWxlLnRleHRUcmFuc2Zvcm0gPSB0aGlzLnRleHRUcmFuc2Zvcm07XHJcbiAgICBuYXYuc3R5bGUuZm9udFNpemUgPSB0aGlzLmZvbnRTaXplO1xyXG4gICAgbmF2LnN0eWxlLmNvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMC43KSc7XHJcbiAgICBuYXYuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5zaG93VHlwZSwgKCk9PnsgXHJcbiAgICAgIG5hdi5zdHlsZS5iYWNrZ3JvdW5kID0gYHJnYmEoICR7dGhpcy5uYXZDb2xvcnNbMF0tNDB9LCAke3RoaXMubmF2Q29sb3JzWzFdLTQwfSwgJHt0aGlzLm5hdkNvbG9yc1syXS00MH0gKWA7XHJcbiAgICAgIC8vSWYgdWwgaGFzIG5vIGVsZW1lbnRzLCByZXR1cm4gdG8gYXZvaWQgZXJyb3JzOlxyXG4gICAgICBpZih0aGlzLnVsLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIHRoaXMudWwubGFzdENoaWxkLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcwcHggMHB4IDVweCA1cHgnXHJcbiAgICAgIHRoaXMudWwuY2hpbGROb2Rlcy5mb3JFYWNoKCAoZWxlbWVudCxpZHgpPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgLy9EZWZhdWx0IHRyaWdnZXJcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbihlbGVtZW50LGlkeCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCk9PntcclxuICAgICAgbmF2LnN0eWxlLmJhY2tncm91bmQgPSBgcmdiYSggJHt0aGlzLm5hdkNvbG9yc1swXX0sICR7dGhpcy5uYXZDb2xvcnNbMV19LCAke3RoaXMubmF2Q29sb3JzWzJdfSApYDtcclxuICAgICAgaWYodGhpcy51bC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLnVsLmNoaWxkTm9kZXMuZm9yRWFjaCggKGVsZW1lbnQpPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdHlsaW5nTGkoZWxlbWVudCl7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPWByZ2JhKCAke3RoaXMubGlDb2xvcnNbMF19LCAke3RoaXMubGlDb2xvcnNbMV19LCAke3RoaXMubGlDb2xvcnNbMl19IClgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvL0RlZmF1bHQgdHJpZ2dlclxyXG4gICAgZWxlbWVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xyXG4gICAgZWxlbWVudC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzAnO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAndG9wIGNlbnRlcidcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpPT57IFxyXG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBgcmdiYSggJHt0aGlzLmxpQ29sb3JzWzBdLTQwfSwgJHt0aGlzLmxpQ29sb3JzWzFdLTQwfSwgJHt0aGlzLmxpQ29sb3JzWzJdLTQwfSApYDtcclxuICAgIH0pXHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCk9PnsgXHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGByZ2JhKCAke3RoaXMubGlDb2xvcnNbMF19LCAke3RoaXMubGlDb2xvcnNbMV19LCAke3RoaXMubGlDb2xvcnNbMl19IClgO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0eWxpbmdVbCh1bCl7XHJcbiAgICB1bC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICB1bC5zdHlsZS50b3AgPSAnMTAwJSc7XHJcbiAgICB1bC5zdHlsZS5sZWZ0ID0gJzAlJztcclxuICAgIHVsLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgdWwuc3R5bGUucGFkZGluZyA9ICcwJztcclxuICAgIHVsLnN0eWxlLm1hcmdpbiA9ICcwJztcclxuICAgIHVsLnN0eWxlLnBlcnNwZWN0aXZlID0gJzEwMDBweCc7XHJcbiAgfVxyXG4gIFxyXG4gIC8vVGhlIGFuaW1hdGlvbnMgc2hvdWxkbid0IGNvbWUgZnJvbSB1cHBlciBzaWRlLCBidXQgcHJvYmFicGxpIGNsaWNraW5nIHRyaWdnZXIgdGhlIGZpcnN0IGxpbmtcclxuICBhbmltYXRpb24xKGVsZW1lbnQsaWR4KXtcclxuICAgIGVsZW1lbnQuYW5pbWF0ZShbXHJcbiAgICAgIC8vIGtleWZyYW1lc1xyXG4gICAgICB7IC8vZnJvbVxyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgzMHB4KScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgLy9Ub1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfVxyXG4gICAgXSwge1xyXG4gICAgICAvLyB0aW1pbmcgb3B0aW9uc1xyXG4gICAgICBkdXJhdGlvbjogMzAwLFxyXG4gICAgICBpdGVyYXRpb25zOiAxLFxyXG4gICAgICBmaWxsOiAnZm9yd2FyZHMnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhbmltYXRpb24yKGVsZW1lbnQsaWR4KSB7XHJcbiAgICBlbGVtZW50LmFuaW1hdGUoW1xyXG4gICAgICB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWSg1MHB4KScsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1pbicsXHJcbiAgICAgICAgb2Zmc2V0OiAwLCAvLzAlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWSgwKScsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgIG9mZnNldDogMSwgLy8xMDAlXHJcbiAgICAgIH1cclxuICAgIF0sIHtcclxuICAgICAgLy8gdGltaW5nIG9wdGlvbnNcclxuICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgZGVsYXk6IDIwMCppZHgsXHJcbiAgICAgIGl0ZXJhdGlvbnM6IDEsXHJcbiAgICAgIGZpbGw6ICdiYWNrd2FyZHMnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhbmltYXRpb24zKGVsZW1lbnQsaWR4KSB7XHJcbiAgICBlbGVtZW50LmFuaW1hdGUoW1xyXG4gICAgICB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDUwcHgpJyxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlLWluJyxcclxuICAgICAgICBvZmZzZXQ6IDAsIC8vMCVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgIG9mZnNldDogMSwgLy8xMDAlXHJcbiAgICAgIH1cclxuICAgIF0sIHtcclxuICAgICAgLy8gdGltaW5nIG9wdGlvbnNcclxuICAgICAgZHVyYXRpb246IDMwMCppZHgrMzAwLFxyXG4gICAgICBkZWxheTogMCxcclxuICAgICAgaXRlcmF0aW9uczogMSxcclxuICAgICAgZmlsbDogJ2JhY2t3YXJkcycsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIFxyXG4gIGFuaW1hdGlvbjQoZWxlbWVudCxpZHgpIHtcclxuICAgIGVsZW1lbnQuYW5pbWF0ZShbXHJcbiAgICAgIHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtMzBkZWcpIHRyYW5zbGF0ZVgoMzBweCknLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2UtaW4nLFxyXG4gICAgICAgIG9mZnNldDogMCwgLy8wJVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZykgdHJhbnNsYXRlWCgwcHgpJyxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgb2Zmc2V0OiAxLCAvLzEwMCVcclxuICAgICAgfVxyXG4gICAgXSwge1xyXG4gICAgICAvLyB0aW1pbmcgb3B0aW9uc1xyXG4gICAgICBkdXJhdGlvbjogMzAwLFxyXG4gICAgICBkZWxheTogMTUwKmlkeCxcclxuICAgICAgaXRlcmF0aW9uczogMSxcclxuICAgICAgZmlsbDogJ2JhY2t3YXJkcycsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGlvbjUoZWxlbWVudCxpZHgpIHtcclxuICAgIGVsZW1lbnQuYW5pbWF0ZShbXHJcbiAgICAgIHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVgoLTkwZGVnKScsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1pbicsXHJcbiAgICAgICAgb2Zmc2V0OiAwLCAvLzAlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVgoMGRlZyknLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgICBvZmZzZXQ6IDEsIC8vMTAwJVxyXG4gICAgICB9XHJcbiAgICBdLCB7XHJcbiAgICAgIC8vIHRpbWluZyBvcHRpb25zXHJcbiAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgIGRlbGF5OiAxNTAqaWR4LFxyXG4gICAgICBpdGVyYXRpb25zOiAxLFxyXG4gICAgICBmaWxsOiAnYmFja3dhcmRzJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29sb3JWYWx1ZXMoY29sb3Ipe1xyXG4gICAgaWYgKCFjb2xvcikgcmV0dXJuO1xyXG4gICAgaWYgKGNvbG9yLnRvTG93ZXJDYXNlKCkgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBbMCwgMCwgMCwgMF07XHJcbiAgICBpZiAoY29sb3JbMF0gPT09ICcjJyl7XHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggPCA3KXtcclxuICAgICAgICBjb2xvciA9ICcjJyArIGNvbG9yWzFdICsgY29sb3JbMV0gKyBjb2xvclsyXSArIGNvbG9yWzJdICtcclxuICAgICAgICBjb2xvclszXSArIGNvbG9yWzNdICsgKGNvbG9yLmxlbmd0aCA+IDQgPyBjb2xvcls0XSArIGNvbG9yWzRdIDogJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBbcGFyc2VJbnQoY29sb3Iuc3Vic3RyKDEsIDIpLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQoY29sb3Iuc3Vic3RyKDMsIDIpLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQoY29sb3Iuc3Vic3RyKDUsIDIpLCAxNiksXHJcbiAgICAgICAgY29sb3IubGVuZ3RoID4gNyA/IHBhcnNlSW50KGNvbG9yLnN1YnN0cig3LCAyKSwgMTYpLzI1NSA6IDFdO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbG9yLmluZGV4T2YoJ3JnYicpID09PSAtMSl7XHJcbiAgICAgIHZhciB0ZW1wX2VsZW0gPSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpY3R1bScpKTtcclxuICAgICAgdmFyIGZsYWcgPSAncmdiKDEsIDIsIDMpJztcclxuICAgICAgdGVtcF9lbGVtLnN0eWxlLmNvbG9yID0gZmxhZztcclxuICAgICAgaWYgKHRlbXBfZWxlbS5zdHlsZS5jb2xvciAhPT0gZmxhZykgcmV0dXJuO1xyXG4gICAgICB0ZW1wX2VsZW0uc3R5bGUuY29sb3IgPSBjb2xvcjtcclxuICAgICAgaWYgKHRlbXBfZWxlbS5zdHlsZS5jb2xvciA9PT0gZmxhZyB8fCB0ZW1wX2VsZW0uc3R5bGUuY29sb3IgPT09ICcnKSByZXR1cm47XHJcbiAgICAgIGNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZSh0ZW1wX2VsZW0pLmNvbG9yO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBfZWxlbSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sb3IuaW5kZXhPZigncmdiJykgPT09IDApe1xyXG4gICAgICBpZiAoY29sb3IuaW5kZXhPZigncmdiYScpID09PSAtMSkgY29sb3IgKz0gJywxJztcclxuICAgICAgcmV0dXJuIGNvbG9yLm1hdGNoKC9bXFwuXFxkXSsvZykubWFwKCAoYSkgPT4gK2EgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERyb3Bkb3duOyIsImNvbnN0IERyb3Bkb3duID0gcmVxdWlyZSgnLi9Ecm9wZG93bi5qcycpO1xyXG5cclxuY2xhc3MgTWVudSB7XHJcbiAgY29uc3RydWN0b3IoZGl2U2VsZWN0b3IsbWVudVR5cGU9J3N0YXRpYycsIG9wdGlvbnM9e30sZHJvcGRvd25PcHRpb25zKXtcclxuXHJcbiAgICB0aGlzLm1lbnVUeXBlID0gbWVudVR5cGUgfHwgJ3N0YXRpYyc7XHJcbiAgICB0aGlzLm1vcmVMaXN0ID0gb3B0aW9ucy5tb3JlTGlzdCB8fCBbXTtcclxuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHJcbiAgICAvLyBuYXZDb2xvciBvcHRpb25zOlxyXG4gICAgdGhpcy5uYXZDb2xvciA9IG9wdGlvbnMubmF2Q29sb3IgfHwgJyNhYWEnO1xyXG5cclxuICAgIC8vIGhlaWdodCBvcHRpb25zOlxyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCAnYXV0byc7XHJcblxyXG4gICAgLy8gZHJvcGRvd24gb3B0aW9uczogXHJcbiAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyA9IGRyb3Bkb3duT3B0aW9ucyB8fCB7d2lkdGg6JzEwMHB4JyxoZWlnaHQ6JzEwMCUnLG5hdkNvbG9yOnRoaXMubmF2Q29sb3J9XHJcblxyXG4gICAgbGV0IGRpdjtcclxuICAgIGlmKHR5cGVvZihkaXZTZWxlY3RvcikgPT09ICdzdHJpbmcnKSBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRpdlNlbGVjdG9yKTtcclxuICAgIGVsc2UgZGl2ID0gZGl2U2VsZWN0b3I7XHJcblxyXG4gICAgY29uc3QgbW9yZUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5tb3JlQnRuRGl2ID0gbW9yZUJ0bkRpdjtcclxuXHJcbiAgICBjb25zdCB0YWJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLnRhYnNEaXYgPSB0YWJzRGl2O1xyXG4gICAgdGhpcy5zdHlsaW5nTmF2KHRhYnNEaXYpXHJcblxyXG4gICAgY29uc3QgbmF2ID0gdGhpcy5jcmVhdGVOYXYoKTtcclxuICAgIHRoaXMubmF2ID0gbmF2O1xyXG5cclxuICAgIG5hdi5hcHBlbmQodGFic0Rpdixtb3JlQnRuRGl2KVxyXG5cclxuICAgIGRpdi5hcHBlbmQobmF2KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU1vcmVFbGVtZW50cygpe1xyXG4gICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IDEwMDtcclxuICAgIGNvbnN0IHNob3dlZEVsZW1lbnRzID0gTWF0aC5mbG9vcih3aW5kb3dXaWR0aC9lbGVtZW50V2lkdGgpOyAvLyAtMSA/XHJcbiAgICB0aGlzLnRhYnNEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgXHJcbiAgICBpZih0aGlzLmVsZW1lbnRzLmxlbmd0aCA8PSBzaG93ZWRFbGVtZW50cyl7XHJcbiAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCggKGVsKT0+IHRoaXMudGFic0Rpdi5hcHBlbmQoZWwpKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICBcclxuICAgIGZvcihsZXQgaSA9IDA7IGk8PXNob3dlZEVsZW1lbnRzLTE7IGkrKyl7XHJcbiAgICAgIHRoaXMudGFic0Rpdi5hcHBlbmQodGhpcy5lbGVtZW50c1tpXSlcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGRyb3AgPSBuZXcgRHJvcGRvd24odGhpcy50YWJzRGl2LCdNb3JlJywgdGhpcy5kcm9wZG93bk9wdGlvbnMpXHJcbiAgICBmb3IobGV0IGkgPSBzaG93ZWRFbGVtZW50cysxOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGgrMTsgaSsrKXtcclxuICAgICAgZHJvcC5hcHBlbmRFbGVtZW50KGAke3RoaXMuZWxlbWVudHNbaS0xXS50ZXh0Q29udGVudH1gLCAnIycpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVOYXYoKXtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcclxuICAgIHRoaXMuc3R5bGluZ05hdihuYXYpO1xyXG5cclxuICAgIGlmKHRoaXMubWVudVR5cGUgPT09ICdzY3JvbGwnKSB0aGlzLnN0eWxpbmdTY3JvbGxOYXYobmF2KTtcclxuICAgIGlmKHRoaXMubWVudVR5cGUgPT09ICdtb3JlJyl7XHJcbiAgICAgIGNvbnN0IG1vcmVCdG4gPSBuZXcgRHJvcGRvd24odGhpcy5tb3JlQnRuRGl2LCdNb3JlJyx0aGlzLmRyb3Bkb3duT3B0aW9ucyk7XHJcbiAgICAgIHRoaXMubW9yZUxpc3QuZm9yRWFjaCggKGUpPT4gbW9yZUJ0bi5hcHBlbmRFbGVtZW50KGUpIClcclxuICAgIH1cclxuICAgIGlmKHRoaXMubWVudVR5cGUgPT09ICdtb3JlQ29sbGFwc2UnKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyx0aGlzLnRvZ2dsZU1vcmVFbGVtZW50cy5iaW5kKHRoaXMpKVxyXG4gICAgXHJcbiAgICByZXR1cm4gbmF2XHJcbiAgfVxyXG5cclxuICBzdHlsaW5nTmF2KG5hdil7XHJcbiAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIG5hdi5zdHlsZS53aWR0aCAgPScxMDB2dyc7XHJcbiAgICBuYXYuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICBuYXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5uYXZDb2xvcjtcclxuICAgIG5hdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1hcm91bmQnO1xyXG4gICAgbmF2LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICAgIG5hdi5zdHlsZS5wYWRkaW5nID0gJzAnO1xyXG4gICAgbmF2LnN0eWxlLm1hcmdpbiA9ICcwJztcclxuICB9XHJcblxyXG4gIHN0eWxpbmdTY3JvbGxOYXYobmF2KXtcclxuICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG5hdi5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgIG5hdi5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XHJcbiAgICBuYXYuc3R5bGUuV2Via2l0T3ZlcmZsb3dTcmNvbGxpbmcgPSAndG91Y2gnO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kRWxlbWVudChlbGVtZW50TmFtZSxsaW5rID0gJyMnKXtcclxuICAgIGxldCBlbGVtZW50O1xyXG4gICAgaWYodHlwZW9mKGVsZW1lbnROYW1lKT09PSAnc3RyaW5nJyl7XHJcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIGVsZW1lbnQuaHJlZiA9IGxpbms7XHJcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50TmFtZTtcclxuICAgIH1cclxuICAgIGVsc2UgZWxlbWVudCA9IGVsZW1lbnROYW1lO1xyXG5cclxuICAgIHRoaXMuc3R5bGluZ0VsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBpZih0aGlzLm1lbnVUeXBlID09PSAnc2Nyb2xsJykgdGhpcy5zdHlsaW5nU2Nyb2xsRWxlbWVudChlbGVtZW50KTtcclxuICAgIFxyXG4gICAgdGhpcy5lbGVtZW50cy5wdXNoKGVsZW1lbnQpXHJcbiAgICB0aGlzLnRhYnNEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudClcclxuICAgIHRoaXMudG9nZ2xlTW9yZUVsZW1lbnRzKCk7XHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG4gIH1cclxuXHJcbiAgc3R5bGluZ0VsZW1lbnQoZWxlbWVudCl7XHJcbiAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuICAgIGVsZW1lbnQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnNXB4IDAnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnNXB4IDAnO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKT0+e1xyXG4gICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gJ2RvdWJsZSAzcHggYmxhY2snO1xyXG4gICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gJzFweCc7XHJcbiAgICB9KVxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+e1xyXG4gICAgICBlbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9ICdub25lJztcclxuICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdHlsaW5nU2Nyb2xsRWxlbWVudChlbGVtZW50KXtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheT0naW5saW5lLWJsb2NrJztcclxuICAgIGVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnNXB4IDMwcHgnXHJcbiAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNZW51OyIsImNsYXNzIFNsaWRlcntcclxuICBjb25zdHJ1Y3RvcihkaXZTZWxlY3RvcixpbWdXaWR0aCxpbWdIZWlnaHQsb3B0aW9ucz17fSl7XHJcblxyXG4gICAgLy8gSW1hZ2Ugd2lkdGggYWRuIGhlaWdodCBvcHRpb25zOiAoaW4gcGl4ZWxzKVxyXG4gICAgdGhpcy5pbWdXaWR0aCA9IGltZ1dpZHRoO1xyXG4gICAgdGhpcy5pbWdIZWlnaHQgPSBpbWdXaWR0aCB8fCBpbWdIZWlnaHQ7XHJcbiAgICBcclxuICAgIC8vIGF1dG9TbGlkZSBvcHRpb25zOiAobm9uZSBvciBudW1iZXIgaW4gbWlsaXNlY29uZHMpXHJcbiAgICB0aGlzLmF1dG9TbGlkZSA9IG9wdGlvbnMuYXV0b1NsaWRlIHx8IDUwMDA7XHJcblxyXG4gICAgLy8gZnJhbWVDb2xvciBvcHRpb25zOiAodmFsaWQgY29sb3IpXHJcbiAgICB0aGlzLmZyYW1lQ29sb3IgPSBvcHRpb25zLmZyYW1lQ29sb3IgfHwgJ3RyYW5zcGFyZW50JztcclxuXHJcbiAgICAvLyBmcmFtZVNpemUgYW5kIGJvcmRlclJhZGl1cyBvcHRpb246IChudW1iZXIgaW4gcGl4ZWxzKTpcclxuICAgIHRoaXMuZnJhbWVTaXplID0gb3B0aW9ucy5mcmFtZVNpemUgfHwgMTA7XHJcbiAgICB0aGlzLmJvcmRlclJhZGl1cyA9IG9wdGlvbnMuYm9yZGVyUmFkaXVzIHx8ICcyMHB4JzsgXHJcblxyXG4gICAgdGhpcy5jdXJySW1nID0gMDtcclxuXHJcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuY3JlYXRlRnJhbWUoKVxyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVDb250YWluZXIoKTtcclxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5pbWFnZUxpc3QgPSBbXTtcclxuICAgIHRoaXMucmFkaW9CdG5zTGlzdCA9IFtdO1xyXG5cclxuICAgIGxldCBkaXY7XHJcbiAgICBpZih0eXBlb2YoZGl2U2VsZWN0b3IpID09PSAnc3RyaW5nJykgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkaXZTZWxlY3Rvcik7XHJcbiAgICBlbHNlIGRpdiA9IGRpdlNlbGVjdG9yO1xyXG5cclxuICAgIGNvbnN0IHN3aXRjaEltYWdlcyA9IHRoaXMuY3JlYXRlU3dpdGNoSW1hZ2VzKCk7XHJcbiAgICB0aGlzLnN3aXRjaEltYWdlcyA9IHN3aXRjaEltYWdlcztcclxuXHJcbiAgICBmcmFtZS5hcHBlbmQoY29udGFpbmVyLHN3aXRjaEltYWdlcyk7XHJcbiAgICBkaXYuYXBwZW5kKGZyYW1lKTtcclxuICAgIFxyXG4gICAgaWYodHlwZW9mKHRoaXMuYXV0b1NsaWRlKT09PSdudW1iZXInKSBzZXRJbnRlcnZhbCh0aGlzLnRyaWdnZXJSaWdodC5iaW5kKHRoaXMpLHRoaXMuYXV0b1NsaWRlKTtcclxuICAgIC8vY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgaWYoZS5rZXlDb2RlID09PSAzNykgdGhpcy50cmlnZ2VyTGVmdCgpXHJcbiAgICAgIGVsc2UgaWYoZS5rZXlDb2RlID09PSAzOSkgdGhpcy50cmlnZ2VyUmlnaHQoKVxyXG4gICAgICBlbHNlIHJldHVybjtcclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRnJhbWUoKXtcclxuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLnN0eWxpbmdGcmFtZShmcmFtZSk7XHJcbiAgICByZXR1cm4gZnJhbWU7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb250YWluZXIoKXtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5zdHlsaW5nQ29udGFpbmVyKGNvbnRhaW5lcik7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kRWxlbWVudChpbWdMaW5rKXtcclxuICAgIGxldCBpbWc7XHJcbiAgICBpZih0eXBlb2YoaW1nTGluayk9PT0nc3RyaW5nJyl7XHJcbiAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBpbWcuc3JjID0gaW1nTGluaztcclxuICAgIH1cclxuICAgIGVsc2UgaW1nID0gaW1nTGluaztcclxuICAgIHRoaXMuc3R5bGluZ0ltZyhpbWcpO1xyXG4gICAgdGhpcy5pbWFnZUxpc3QucHVzaChpbWcpO1xyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGltZyk7XHJcblxyXG4gICAgdGhpcy5mcmFtZS5yZW1vdmVDaGlsZCh0aGlzLnN3aXRjaEltYWdlcyk7XHJcbiAgICB0aGlzLnN3aXRjaEltYWdlcyA9IHRoaXMuY3JlYXRlU3dpdGNoSW1hZ2VzKClcclxuICAgIHRoaXMuZnJhbWUuYXBwZW5kKHRoaXMuc3dpdGNoSW1hZ2VzKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGltZ1xyXG4gIH1cclxuXHJcbiAgc3R5bGluZ0ZyYW1lKGZyYW1lKXtcclxuICAgIGZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBmcmFtZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XHJcbiAgICBmcmFtZS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdDZW50ZXInO1xyXG4gICAgZnJhbWUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgZnJhbWUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmltZ1dpZHRoICsgdGhpcy5mcmFtZVNpemV9cHhgO1xyXG4gICAgZnJhbWUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5pbWdIZWlnaHQgKyB0aGlzLmZyYW1lU2l6ZX1weGA7XHJcbiAgICBmcmFtZS5zdHlsZS5sZWZ0ID0gJzUwJSc7XHJcbiAgICBmcmFtZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtNTAlKSc7XHJcbiAgICBmcmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmZyYW1lQ29sb3I7XHJcbiAgICBmcmFtZS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gdGhpcy5ib3JkZXJSYWRpdXM7XHJcbiAgfVxyXG5cclxuICBzdHlsaW5nQ29udGFpbmVyKGNvbnRhaW5lcil7XHJcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcbiAgICBcclxuICAgIGNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSc7XHJcbiAgICBjb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcuN3MgZWFzZS1pbi1vdXQnO1xyXG4gIH1cclxuXHJcbiAgc3R5bGluZ0ltZyhpbWcpe1xyXG4gICAgaW1nLnN0eWxlLndpZHRoID0gYCR7dGhpcy5pbWdXaWR0aH1weGA7XHJcbiAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5pbWdIZWlnaHR9cHhgO1xyXG4gICAgaW1nLnN0eWxlLmJvcmRlclJhZGl1cyA9IHRoaXMuYm9yZGVyUmFkaXVzO1xyXG4gICAgaW1nLnN0eWxlLnBhZGRpbmcgPSBgJHt0aGlzLmZyYW1lU2l6ZS8yfXB4YDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVN3aXRjaEltYWdlcygpe1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSB0aGlzLmNyZWF0ZUFycm93KCdsZWZ0Jyk7XHJcbiAgICBjb25zdCByaWdodEFycm93ID0gdGhpcy5jcmVhdGVBcnJvdygncmlnaHQnKTtcclxuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IHRoaXMuY3JlYXRlUmFkaW9CdXR0b25zKCk7XHJcbiAgICB0aGlzLnN0eWlsaW5nU3dpdGNoSW1hZ2VzKGRpdik7XHJcblxyXG4gICAgZGl2LmFwcGVuZChsZWZ0QXJyb3cscmFkaW9CdXR0b25zLHJpZ2h0QXJyb3cpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcblxyXG4gIHN0eWlsaW5nU3dpdGNoSW1hZ2VzKGRpdil7XHJcbiAgICBkaXYuc3R5bGUud2lkdGggPSAnODAlJztcclxuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgZGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWFyb3VuZCc7XHJcbiAgICBkaXYuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGRpdi5zdHlsZS5sZWZ0ID0gJzUwJSc7XHJcbiAgICBkaXYuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTUwJSknO1xyXG4gICAgZGl2LnN0eWxlLmJvdHRvbSA9ICcwJztcclxuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDI1NSwgMjU1LCAyNTUsIDAuMyknO1xyXG4gICAgZGl2LnN0eWxlLmJvcmRlclJhZGl1cyA9ICcyMHB4JztcclxuICAgIGRpdi5zdHlsZS5wYWRkaW5nID0gJzVweCc7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVBcnJvdyhzaWRlKXtcclxuICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBpZihzaWRlPT09J2xlZnQnKXtcclxuICAgICAgYXJyb3cudGV4dENvbnRlbnQgPSAn4oypJztcclxuICAgICAgYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHRoaXMudHJpZ2dlckxlZnQoKSk7XHJcbiAgICB9IFxyXG4gICAgZWxzZXtcclxuICAgICAgYXJyb3cudGV4dENvbnRlbnQgPSAn4oyqJztcclxuICAgICAgYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHRoaXMudHJpZ2dlclJpZ2h0KCkpXHJcbiAgICB9IFxyXG4gICAgdGhpcy5zdHlsaW5nQXJyb3coYXJyb3cpO1xyXG4gICAgcmV0dXJuIGFycm93O1xyXG4gIH1cclxuICBcclxuICBzdHlsaW5nQXJyb3coYXJyb3cpe1xyXG4gICAgLy9hcnJvdy5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGRlcic7XHJcbiAgICBhcnJvdy5zdHlsZS5mb250U2l6ZSA9ICcyMHB4J1xyXG4gICAgYXJyb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgIGFycm93LnN0eWxlLmJvcmRlciA9ICdub25lJztcclxuICAgIGFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKCk9PiBhcnJvdy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcicpXHJcblxyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckxlZnQoKXtcclxuICAgIHRoaXMuY3VyckltZy09MTtcclxuICAgIGlmKHRoaXMuY3VyckltZyA8IDApe1xyXG4gICAgICB0aGlzLmN1cnJJbWcgPSB0aGlzLmltYWdlTGlzdC5sZW5ndGgtMTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1Db250YWluZXIoKTtcclxuICAgIH1cclxuICAgIGVsc2UgdGhpcy50cmFuc2Zvcm1Db250YWluZXIoKTtcclxuICAgIHRoaXMucmFkaW9CdG5zTGlzdFt0aGlzLmN1cnJJbWddLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlclJpZ2h0KCl7XHJcbiAgICB0aGlzLmN1cnJJbWcrPTE7XHJcbiAgICBpZih0aGlzLmN1cnJJbWcgPT09IHRoaXMuaW1hZ2VMaXN0Lmxlbmd0aCl7XHJcbiAgICAgIHRoaXMuY3VyckltZyA9IDA7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHRoaXMudHJhbnNmb3JtQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLnJhZGlvQnRuc0xpc3RbdGhpcy5jdXJySW1nXS5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEltZyhpZHgpe1xyXG4gICAgdGhpcy5jdXJySW1nID0gaWR4O1xyXG4gICAgdGhpcy50cmFuc2Zvcm1Db250YWluZXIoKTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybUNvbnRhaW5lcigpe1xyXG4gICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoY2FsYygtJHt0aGlzLmltZ1dpZHRoK3RoaXMuZnJhbWVTaXplfSoke3RoaXMuY3VyckltZ31weCkpYDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVJhZGlvQnV0dG9ucygpe1xyXG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3IobGV0IGk9MDsgaTx0aGlzLmltYWdlTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5jcmVhdGVSYWRpb0J0bigpO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJyx0aGlzLnNlbGVjdEltZy5iaW5kKHRoaXMsaSkgKTtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKCk9PiBidG4gLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJylcclxuXHJcbiAgICAgIHJhZGlvQnV0dG9ucy5hcHBlbmQoYnRuKTtcclxuICAgIH1cclxuICAgIHRoaXMucmFkaW9CdG5zTGlzdCA9IHJhZGlvQnV0dG9ucy5jaGlsZE5vZGVzO1xyXG4gICAgaWYodGhpcy5yYWRpb0J0bnNMaXN0Lmxlbmd0aCAhPT0gMCkgdGhpcy5yYWRpb0J0bnNMaXN0WzBdLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHJhZGlvQnV0dG9ucztcclxuICB9XHJcblxyXG4gIGNyZWF0ZVJhZGlvQnRuKCl7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgYnRuLnR5cGUgPSAncmFkaW8nO1xyXG4gICAgYnRuLm5hbWUgPSAncmFkaW8taW1nJztcclxuICAgIHJldHVybiBidG47XHJcbiAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZXI7IiwiaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL0Ryb3Bkb3duXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9TbGlkZXJcIlxyXG5cclxuZXhwb3J0IHtEcm9wZG93bixNZW51LFNsaWRlcn0iLCJhc3luYyBmdW5jdGlvbiBmZXRjaENvb3JkcyhjaXR5TmFtZSl7XHJcbiAgY29uc3QgZ2VvQXBpS2V5ID0gJzQzZjA0MmIxNjM3YjM5YThlZTkzZDQ0MmFmZWQ1MTRiJztcclxuICBjb25zdCBsaW5rID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHtnZW9BcGlLZXl9YDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaW5rLHsgbW9kZTogXCJjb3JzXCIgfSk7XHJcbiAgICBjb25zdCBkYXRhUmF3ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgZGF0YSA9IGRhdGFSYXdbMF07XHJcbiAgICByZXR1cm4gZGF0YTtcclxuXHJcbiAgfSBjYXRjaChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihsYXQsbG9uLHVuaXRzPSdtZXRyaWMnKXtcclxuICBsZXQgbGFuZyA9ICdlcyc7Ly9mcjogZnJlbmNoLCBlbjogZW5nbGlzaDtcclxuICAvL2RhdGEubmFtZTtkYXRhLmNvdW50cnk7ZGF0YS5sYXQ7ZGF0YS5sb247XHJcbiAgY29uc3QgZ2VvQXBpS2V5ID0gJzQzZjA0MmIxNjM3YjM5YThlZTkzZDQ0MmFmZWQ1MTRiJztcclxuICBjb25zdCBsaW5rID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZleGNsdWRlPW1pbnV0ZWx5Jmxhbmc9JHtsYW5nfSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2dlb0FwaUtleX1gO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobGluayx7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG4gIGNvbnN0IGRhdGFSYXcgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc3QgZGF0YSA9IGRhdGFSYXc7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZmV0Y2hXZWF0aGVyLGZldGNoQ29vcmRzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtmZXRjaFdlYXRoZXIsZmV0Y2hDb29yZHN9IGZyb20gXCIuL3dlYXRoZXJcIjtcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tIFwiZHJvcHRoaW5nc1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2hvd1dlYXRoZXIoY2l0eSwgcG9zLCB1bml0cz0nbWV0cmljJyl7XHJcbiAgbGV0IGNvb3JkcyA9IHBvc1xyXG4gIGxldCBzeW1ib2w7XHJcbiAgaWYodW5pdHMgPT09J21ldHJpYycpIHN5bWJvbCA9ICfCsEMnO1xyXG4gIGVsc2UgIHN5bWJvbCA9ICdGJztcclxuXHJcbiAgaWYoY2l0eSAhPT0gJ25vbmUnKSBjb29yZHMgPSBhd2FpdCBmZXRjaENvb3JkcyhjaXR5KVxyXG4gIGVsc2V7XHJcbiAgICBjb25zdCB1YmkgPSBhd2FpdCByZXZlcnNlR2VvKGNvb3Jkcy5sYXQsY29vcmRzLmxvbik7XHJcbiAgICBjb29yZHMubmFtZSA9IHViaS5sb2NhbGl0eTtcclxuICAgIGNvb3Jkcy5zdGF0ZSA9IHViaS5wcmluY2lwYWxTdWJkaXZpc2lvblxyXG4gICAgY29vcmRzLmNvdW50cnkgPSB1YmkuY291bnRyeU5hbWVcclxuICB9XHJcbiAgY29uc3Qgb2JqID0gYXdhaXQgZmV0Y2hXZWF0aGVyKGNvb3Jkcy5sYXQsY29vcmRzLmxvbix1bml0cyk7XHJcbiAgY29uc29sZS5sb2cob2JqKVxyXG4gIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsJ01vbmRheScsJ1R1ZXNkYXknLCdXZWRuZXNkYXknLCdUaHVyc2RheScsJ0ZyaWRheScsJ1NhdHVyZGF5J107XHJcbiAgY29uc3QgY3VycmVudFcgPSBvYmouY3VycmVudDtcclxuICBjb25zdCBkYWlseVcgPSBvYmouZGFpbHk7XHJcbiAgY29uc3QgaG91cmx5VyA9IG9iai5ob3VybHk7XHJcbiAgc2hvd0N1cnJlbnRXZWF0aGVyKClcclxuICBzaG93SG91cldlYXRoZXIoKVxyXG4gIHNob3dEYWlseVdlYXRoZXIoKVxyXG5cclxuICBmdW5jdGlvbiBzaG93Q3VycmVudFdlYXRoZXIoKXtcclxuICAgIGNvbnN0IGRpdlRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xyXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XHJcbiAgICBjb25zdCBkaXZUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKTtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGV0YWlsJyk7XHJcbiAgICBjb25zdCBtYWluSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWljb24nKTtcclxuICAgIG1haW5JY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2N1cnJlbnRXLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYFxyXG5cclxuICAgIGRpdlRlbXAudGV4dENvbnRlbnQgPSBjdXJyZW50Vy50ZW1wICsgc3ltYm9sO1xyXG4gICAgY2l0eS50ZXh0Q29udGVudCA9IGAke2Nvb3Jkcy5uYW1lfSwgJHtjb29yZHMuc3RhdGV9LCAke2Nvb3Jkcy5jb3VudHJ5fWA7XHJcbiAgICBkaXZUaW1lLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFcud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xyXG4gICAgZGV0YWlsc1swXS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXLmZlZWxzX2xpa2V9ICR7c3ltYm9sfWBcclxuICAgIGRldGFpbHNbMV0udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50Vy5odW1pZGl0eX0lYDtcclxuICAgIGRldGFpbHNbMl0udGV4dENvbnRlbnQgPSBgJHtkYWlseVdbMF0ucG9wKjEwMH0lYDtcclxuICAgIGRldGFpbHNbM10udGV4dENvbnRlbnQgPSBgJHtkYWlseVdbMF0udGVtcC5taW59ICR7c3ltYm9sfWA7XHJcbiAgICBkZXRhaWxzWzRdLnRleHRDb250ZW50ID0gYCR7ZGFpbHlXWzBdLnRlbXAubWF4fSAke3N5bWJvbH1gO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd0hvdXJXZWF0aGVyKCl7XHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VyJyk7XHJcbiAgICBob3Vycy5mb3JFYWNoKCAoZWwsaWR4KSA9PiB7XHJcbiAgICAgIGVsLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChob3VybHlXW2lkeF0udGVtcCl9ICR7c3ltYm9sfWA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dEYWlseVdlYXRoZXIoKXtcclxuICAgIGNvbnN0IG5leHREYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5leHQtZGF5Jyk7XHJcbiAgICBjb25zdCBkYXlEZXRhaWwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheS1kZXRhaWwxJyk7XHJcbiAgICBjb25zdCBkYXlEZXRhaWwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheS1kZXRhaWwyJyk7XHJcbiAgICBjb25zdCBkYXlJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktaWNvbicpXHJcbiAgICBuZXh0RGF5cy5mb3JFYWNoKCAoZWwsaWR4KSA9PiB7XHJcbiAgICAgIGxldCBjdXJyRGF0ZSA9IG5ldyBEYXRlKGRhaWx5V1tpZHhdLmR0KjEwMDApXHJcbiAgICAgIGxldCBjdXJyRGF5ID0gZGF5c1tjdXJyRGF0ZS5nZXREYXkoKV07XHJcbiAgICAgIGVsLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBgJHtkYWlseVdbaWR4XS50ZW1wLmRheX0gJHtzeW1ib2x9YDtcclxuICAgICAgZWwuY2hpbGROb2Rlc1szXS50ZXh0Q29udGVudCA9IGAke2N1cnJEYXl9YDtcclxuICAgICAgZGF5RGV0YWlsMVtpZHhdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYWlseVdbaWR4XS5mZWVsc19saWtlLmRheSl9JHtzeW1ib2x9YDtcclxuICAgICAgZGF5RGV0YWlsMltpZHhdLnRleHRDb250ZW50ID0gYCR7ZGFpbHlXW2lkeF0uaHVtaWRpdHl9JWA7XHJcbiAgICAgIGRheUljb25zW2lkeF0uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGFpbHlXW2lkeF0ud2VhdGhlclswXS5pY29ufUAyeC5wbmdgXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJldmVyc2VHZW8obGF0LGxvbil7XHJcbiAgY29uc3QgbGluayA9IGBodHRwczovL2FwaS5iaWdkYXRhY2xvdWQubmV0L2RhdGEvcmV2ZXJzZS1nZW9jb2RlLWNsaWVudD9sYXRpdHVkZT0ke2xhdH0mbG9uZ2l0dWRlPSR7bG9ufSZsb2NhbGl0eUxhbmd1YWdlPWVzYDtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpbmspXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5sZXQgY3VyclBvcztcclxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb24oKXtcclxuICBpZihuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pe1xyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihjYWxsV2VhdGhlcixzaG93RXJyb3IpLy8oY2FsbFdlYXRoZXIsc2hvd0Vycm9yKVxyXG4gIH1cclxuICBlbHNlIGNvbnNvbGUubG9nKCdnZW9sb2NhdGlvbiBub3Qgc3VwcG9ydGVkJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGxXZWF0aGVyKHBvcyl7XHJcbiAgY3VyclBvcyA9IHsnbGF0Jzpwb3MuY29vcmRzLmxhdGl0dWRlLCdsb24nOnBvcy5jb29yZHMubG9uZ2l0dWRlfVxyXG4gIHNob3dXZWF0aGVyKCdub25lJyxjdXJyUG9zKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RXJyb3IoZXJyKXtcclxuICBpZihlcnIuUEVSTUlTSU9OX0RFTklFRCkgY29uc29sZS5sb2coXCJUaGUgdXNlciBkZW5pZWQgcGVybWlzaW9ucy4uLlwiKVxyXG59XHJcblxyXG5jb25zdCBjaXR5SW1wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1pbnB1dCcpO1xyXG5jb25zdCBlbnRlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlci1idXR0b24nKTtcclxuZW50ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5zaG93V2VhdGhlcihjaXR5SW1wdXQudmFsdWUpKVxyXG5jaXR5SW1wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgc2hvd1dlYXRoZXIoY2l0eUltcHV0LnZhbHVlKVxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCB1bml0c1N3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gnKTtcclxudW5pdHNTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywoZSkgPT57XHJcbiAgbGV0IG1ldHJpYztcclxuICBpZih1bml0c1N3aXRjaC5jaGVja2VkKSBtZXRyaWMgPSAnbWV0cmljJztcclxuICBlbHNlIG1ldHJpYyA9ICdpbXBlcmlhbCc7XHJcblxyXG4gIGlmKGNpdHlJbXB1dC52YWx1ZSA9PT0nJykgc2hvd1dlYXRoZXIoJ25vbmUnLGN1cnJQb3MsbWV0cmljKTtcclxuICBlbHNlIHNob3dXZWF0aGVyKGNpdHlJbXB1dC52YWx1ZSxjdXJyUG9zLG1ldHJpYylcclxufSlcclxuXHJcbmNvbnN0IGxhbmd1YWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmd1YWdlJyk7XHJcbmNvbnN0IGRyb3AgPSBuZXcgRHJvcGRvd24oJy5sYW5ndWFnZScsJ0xhbmd1YWdlJywge2FuaW1hdGlvbjonYW5pbWF0aW9uMicsd2lkdGg6JzgwcHgnLGhlaWdodDonMjBweCcsdGV4dFRyYW5zZm9ybTonY2FwaXRhbGl6ZSd9KTtcclxuZHJvcC5hcHBlbmRFbGVtZW50KCdFbmdsaXNoJyk7XHJcbmRyb3AuYXBwZW5kRWxlbWVudCgnRXNwYcOxb2wnKTtcclxuZHJvcC5hcHBlbmRFbGVtZW50KCdGcmFuw6dhaXMnKTtcclxuXHJcbmdldExvY2F0aW9uKClcclxuXHJcbmRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gJ2JhY2tncm91bmQxJztcclxuZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSAnYmFja2dyb3VuZDInO1xyXG5kb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICdiYWNrZ3JvdW5kNCc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==