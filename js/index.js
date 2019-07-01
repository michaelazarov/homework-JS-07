// hw-07-01---------------------------
// Создайте элемент 'p', при клике на котором появляется 
// картинка размером 100px
// При наведении указателя мышки на картинку ее размер 
// должен плавно увеличиваться до 200px
// При клике на картинке она должна исчезать
// ---------------------------

var body = document.body
while (body.firstChild) body.removeChild(body.firstChild)
var setBodyStyle = function(e){
    e.style = `max-width: 800px;
            margin: 0 auto;
            font-family: sans-serif;
            display: flex;
            justify-content: center; 
            align-items: center;`    
}
setBodyStyle(body)

elemP = body.appendChild(document.createElement('p'))
elemP.innerText = 'Touch me!'
var setElemStyle = function(e){
        e.style = `text-align: center;
               width: 100px; 
               height: 100px;               
               line-height: 100px;
               transition-duration: 0.5s;
               color: red;
               font-weight: 900;
               font-size: 11pt;`            
}
setElemStyle(elemP)


var changeParamStyle1 = function(s){
    s.width = '200px'
    s.height = '200px'    
}
var changeParamStyle2 = function(s){
    s.width = '100px'
    s.height = '100px'    
}
var changeParamStyle3 = function(s){
    s.backgroundImage = 'url(http://alexdev.ru/wp-content/uploads/2015/06/JS-logo.png)'
    s.color = 'transparent'
    s.backgroundSize = 'contain'
    s.border = '0px';
//по идее после клика картинка должна увеличиться. так как курсор остается над ней
//но в задании четко сказано 'при клике на котором появляется картинка размером 100px'            
//  s.width = '200px'
//  s.height = '200px'            
}
var changeParamStyle4 = function(s){
    s.color = 'red' 
    s.backgroundImage = ''
    s.width = '100px'
    s.height = '100px'  
}
var useMouseout = function(s){
    s.cursor = 'default'
    s.color == compare ? changeParamStyle2(s) : s.fontSize = '11pt'    
}
var useMouseover = function(s){
    s.cursor = 'pointer'
    s.color == compare ? changeParamStyle1(s) : s.fontSize = '12pt'
}


var compare = 'transparent'
elemP.onmouseover = elemP.onmouseout = elemP.onclick = mySwitch
function mySwitch(event){
  var type = event.type  
  var style = event.target.style
  event.stopPropagation()
  type == 'mouseover' ? useMouseover(style) : null
  type == 'mouseout' ? useMouseout(style)  : null            
  type == 'click' 
    ? style.color != compare ? changeParamStyle3(style) : changeParamStyle4(style) 
        : null 
}

// hw-07-02---------------------------
// Создайте коллекцию вложенных друг в друга html-элементов 
// с обработчиками событий click, mouseover, mouseout
// var collection = []
// function over ( event ) { ... }
// function out ( event ) { ... }
// function clickHandler ( event ) { ... }
// [ "first", "second", "third", "fourth" ].forEach (
//     function ( tag, index, arr  ) { ... } )
// Установите атрибуты стиля width и height такие, чтобы вложенные 
// элементы были меньше размером, чем родитель
// Установите значение #ff00ff50 атрибута background-color каждому
// элементу.
// Установите значение dotted 1px yellow; атрибута border каждому элементу
// При наступлении события mouseover значение атрибута background-color
// должно меняться на #ffff0050
// При наступлении события mouseout атрибуту background-color должно 
// устанавливаться исходное значение
// При наступлении события click элемент должен быть удален
// При наведении мышки на элемент должна появляться подсказка 
// с его именем ( "first", "second", "third", "fourth" )var body = document.body
// --------------------

var body = document.body
while ( body.firstChild ) body.removeChild( body.firstChild )
var setBodyStyle = function( e ){
    e.style = `max-width: 800px;
            margin: 0 auto;
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;`    
}
setBodyStyle ( body )

var collection = [ 'section', 'div', 'div', 'button' ]
var len = 300
function createElements(){
   [ "first", "second", "third", "fourth" ].forEach (
        function ( item, index, arr ) { 
            elem = body.firstChild === null 
                    ? body.appendChild( document.createElement( collection[index] )) 
                        : elem.appendChild( document.createElement( collection[index] ))           
            currentLen = len - len / arr.length * index
            elem.style = `display: flex;
                          justify-content: center;
                          align-items: center;
                          background-color: #ff00ff50;
                          border: dotted 1px yellow;
                          width: ${currentLen}px;
                          height: ${currentLen}px`
            elem.title = item              
            elem.onclick = clickHandler
            elem.onmouseout = out
            elem.onmouseover = over
        }
    )    
}
function deleteElement ( elem ) {
    elem.parentElement.removeChild( elem )                      
}
function over ( event ) {
    event.stopPropagation()
    this.style.backgroundColor = '#ffff0050'
}
function out ( event ) {
    event.stopPropagation()
    this.style.backgroundColor = '#ff00ff50'
}
function clickHandler ( event ) {
    event.stopPropagation()
    deleteElement ( this )
}
createElements()




// hw-07-03 var-01 (убрал collection)---------------------------
// Условия предыдущего задания изменить так:
// var collection = []
// function enter ( event ) {}
// function leave ( event ) {}
// function clickHandler ( event ) {}
// [ 1, 2, 3, 4, 5, 6, 7 ].forEach ()
// :warning: при удалении элемента его потомки должны оставаться
// --------------------

var body = document.body
while ( body.firstChild ) body.removeChild( body.firstChild )
var setBodyStyle = function( e ){
    e.style = `max-width: 800px;
            margin: 0 auto;
            font-family: sans-serif;
            display: flex;
            justify-content: center; 
            align-items: center;`    
}
setBodyStyle ( body )

var len = 300
function createElements(){
   [ 1, 2, 3, 4, 5, 6, 7 ].forEach (
        function ( item, index, arr ) { 
            elem = body.firstChild === null 
                    ? body.appendChild( document.createElement( 'div' )) 
                        : elem.appendChild( document.createElement( 'div' ))
            currentLen = len - len / arr.length * index
            elem.style = `display: flex;
                          justify-content: center; 
                          align-items: center;
                          background-color: #ff00ff50;
                          border: dotted 1px yellow;
                          width: ${currentLen}px;
                          height: ${currentLen}px`
            elem.title = item              
            elem.onclick = clickHandler
            elem.onmouseout = out
            elem.onmouseover = over
        }
    )    
}
// function deleteElement ( elem ) {
//     firstChild = elem.firstChild
//     parentElement = elem.parentElement
//     parentElement.removeChild( elem )
//     firstChild !== null 
//         ?parentElement.appendChild( firstChild )
//             : null           
// }
function deleteElement ( elem ) {
    firstChild = elem.firstChild
    parentElement = elem.parentElement
    firstChild !== null 
        ?parentElement.replaceChild( firstChild, elem)
            : parentElement.removeChild( elem )  
}
function over ( event ) {
    event.stopPropagation()
    this.style.backgroundColor = '#ffff0050'
}
function out ( event ) {
    event.stopPropagation()
    this.style.backgroundColor = '#ff00ff50'
}
function clickHandler ( event ) {
    event.stopPropagation()
    deleteElement ( this )
}
createElements()

// hw-07-03 var-02 (для разнообразия, чтоб скучно не было)------
// Условия предыдущего задания изменить так:
// var collection = []
// function enter ( event ) {}
// function leave ( event ) {}
// function clickHandler ( event ) {}
// [ 1, 2, 3, 4, 5, 6, 7 ].forEach ()
// :warning: при удалении элемента его потомки должны оставаться
// --------------------

var body = document.body
while ( body.firstChild ) body.removeChild( body.firstChild )
var setBodyStyle = function( e ){
    e.style = `max-width: 800px;
            margin: 0 auto;
            font-family: sans-serif;
            display: flex;
            justify-content: center; 
            align-items: center;`    
}
setBodyStyle ( body )

var collectionObj = []
var len = 300
function createStructureData(){
   [ 1, 2, 3, 4, 5, 6, 7].forEach (
        function ( item, index, arr ) {
            collectionObj.push({tag: 'div', 
                                len: `${len - len / arr.length * index}`,
                                title: `${item}` })          
        }
    )    
}
function createElements(){
   collectionObj.forEach (
        function ( item ) { 
            elem = body.firstChild === null 
                    ? body.appendChild( document.createElement( 'div' )) 
                        : elem.appendChild( document.createElement( 'div' ))
            elem.style = `display: flex;
                          justify-content: center; 
                          align-items: center;
                          background-color: #ff00ff50;
                          border: dotted 1px yellow;
                          width: ${item.len}px;
                          height: ${item.len}px`
            elem.title = item.title              
            elem.onclick = clickHandler
            elem.onmouseout = out
            elem.onmouseover = over
        }
    )    
}
function deleteElement ( elem ) {
    delete collectionObj[elem.title - 1]
    body.removeChild( body.firstChild )
}
function over ( event ) {
    event.stopPropagation()
    this.style.backgroundColor = '#ffff0050'
}
function out ( event ) {
    event.stopPropagation()
    this.style.backgroundColor = '#ff00ff50'
}
function clickHandler ( event ) {
    event.stopPropagation()
    deleteElement ( this )
    createElements()
}
createStructureData()
createElements()

// hw-07-03 var-03 (пробуем через лиссенер)
// Условия предыдущего задания изменить так:
// var collection = []
// function enter ( event ) {}
// function leave ( event ) {}
// function clickHandler ( event ) {}
// [ 1, 2, 3, 4, 5, 6, 7 ].forEach ()
// :warning: при удалении элемента его потомки должны оставаться
// --------------------

var body = document.body
while ( body.firstChild ) body.removeChild( body.firstChild )
var setBodyStyle = function( e ){
    e.style = `max-width: 800px;
            margin: 0 auto;
            font-family: sans-serif;
            display: flex;
            justify-content: center; 
            align-items: center;`    
}
setBodyStyle ( body )

var len = 300
function createElements(){
   [ 1, 2, 3, 4, 5, 6, 7 ].forEach (
        function ( item, index, arr ) { 
            elem = body.firstChild === null 
                    ? body.appendChild( document.createElement( 'div' )) 
                        : elem.appendChild( document.createElement( 'div' ))
            currentLen = len - len / arr.length * index
            elem.style = `display: flex;
                          justify-content: center; 
                          align-items: center;
                          background-color: #ff00ff50;
                          border: dotted 1px yellow;
                          width: ${currentLen}px;
                          height: ${currentLen}px`
            elem.title = item 
            addListeners(elem)                         
        }
    )    
}
function deleteElement ( elem ) {
    parentElement = elem.parentElement
    elem.removeEventListener(event.type, myEvents)
    parentElement.removeChild( elem )
    elem.firstChild !== null 
        ?parentElement.appendChild( elem.firstChild )
            : null           
}
function addListeners(elem){
['click', 'mouseout', 'mouseover'].forEach (
                function ( item ) {
                    elem.addEventListener( item, myEvents )    
                }
            )    
}
function myEvents ( event ) {
    event.stopPropagation()
    event.type === 'click' ? deleteElement ( this ) : null
    this.style.backgroundColor = '#ff00ff50'
    event.type === 'mouseover' ? this.style.backgroundColor = '#ffff0050' : null
}
createElements()

























