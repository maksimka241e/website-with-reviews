// open - close
let  CreateContent = document.querySelector('.CreateContent')
let createBlockContent = document.querySelector('.createBlockContent')
CreateContent.addEventListener('click', function NewBlock(){
    createBlockContent.classList.toggle('active')
    let check = createBlockContent.classList.contains('active')
    if(check){
        CreateContent.innerHTML =''
        document.body.style.overflowY = 'hidden'
    }else{
        CreateContent.innerHTML = '<img src="message.png" class="createImgBl">'
        document.body.style.overflowY = 'initial'
    }
})
// open - close
let BlockNot = document.querySelector('.BlockNot')
BlockNot.addEventListener('click', function BlockNot(){
    createBlockContent.classList.toggle('active')
    CreateContent.innerHTML = '<img src="message.png" class="createImgBl">'
    document.body.style.overflowY = 'initial'
})


// adding blocks
let Add = document.querySelector('.Add')
let contentBlock2 = document.querySelector('.contentBlock2')
Add.addEventListener('click', NewContent)
function NewContent(){
    if(contentBlock2.childElementCount <= 5){
    if(contentBlock2.childElementCount == 3){
        if(localStorage.getItem('img')  == '' || localStorage.getItem('img') == null){
    const img = `
    <div class="Block b4">
            <h3 class="block1Title1"><img src="Vector.png" class="block1TitleImg1"> ${ZeroInput.value}</h3>
            <p class="block1Title2">“${ContentInput.value}”</p>
            <img src="anonim.jpg" class="block1TitleImg2">
            <h3 class="block1Title3">${NamesInput.value}</h3>
            <p class="block1Title4">Visitor</p>
            <div class="btnBlockCR1">
            <p class="removeBl1">Удалить</p>
            <button class="btnBlock1">...</button>
            </div>
        </div>
    `
    localStorage.setItem('img', img)
    contentBlock2.insertAdjacentHTML('beforeend', localStorage.getItem('img')) 
    createBlockContent.classList.remove('active')
    CreateContent.innerHTML = '<img src="message.png" class="createImgBl">'
    document.body.style.overflowY = 'initial'
    ContentInput.value = ''
    ZeroInput.value = 0
    location.reload();
}else if(localStorage.getItem('img1')  == '' || localStorage.getItem('img1') == null){
    const img1 = `
    <div class="Block b5">
            <h3 class="block2Title1"><img src="Vector.png"  class="block2TitleImg1"> ${ZeroInput.value}</h3>
            <p class="block2Title2">“${ContentInput.value}”</p>
            <img src="anonim.jpg" class="block2TitleImg2">
            <h3 class="block2Title3">${NamesInput.value}</h3>
            <p class="block2Title4">Visitor</p>
            <div class="btnBlockCR2">
            <p class="removeBl2">Удалить</p>
            <button class="btnBlock2">...</button>
            </div>
        </div>
    `
    localStorage.setItem('img1', img1)
    contentBlock2.insertAdjacentHTML('beforeend', localStorage.getItem('img1')) 
    createBlockContent.classList.remove('active')
    CreateContent.innerHTML = '<img src="message.png" class="createImgBl">'
    document.body.style.overflowY = 'initial'
    ContentInput.value = ''
    ZeroInput.value = 0
    location.reload();
}else if(localStorage.getItem('img2')  == '' || localStorage.getItem('img2') == null){
    const img2 = `
    <div class="Block b6">
            <h3 class="block3Title1"><img src="Vector.png"  class="block3TitleImg1"> ${ZeroInput.value}</h3>
            <p class="block3Title2">“${ContentInput.value}”</p>
            <img src="anonim.jpg" class="block3TitleImg2">
            <h3 class="block3Title3">${NamesInput.value}</h3>
            <p class="block3Title4">Visitor</p>
            <div class="btnBlockCR3">
            <p class="removeBl3">Удалить</p>
            <button class="btnBlock3">...</button>
            </div>
        </div>
    `
    localStorage.setItem('img2', img2)
    contentBlock2.insertAdjacentHTML('beforeend', localStorage.getItem('img2')) 
    createBlockContent.classList.remove('active')
    CreateContent.innerHTML = '<img src="message.png" class="createImgBl">'
    document.body.style.overflowY = 'initial'
    ContentInput.value = ''
    ZeroInput.value = 0
    location.reload();
}
}else if(contentBlock2.childElementCount == 4){
    if(localStorage.getItem('img1')  == '' || localStorage.getItem('img1') == null){
    const img1 = `
    <div class="Block b5">
            <h3 class="block2Title1"><img src="Vector.png"  class="block2TitleImg1"> ${ZeroInput.value}</h3>
            <p class="block2Title2">“${ContentInput.value}”</p>
            <img src="anonim.jpg" class="block2TitleImg2">
            <h3 class="block2Title3">${NamesInput.value}</h3>
            <p class="block2Title4">Visitor</p>
            <div class="btnBlockCR2">
            <p class="removeBl2">Удалить</p>
            <button class="btnBlock2">...</button>
            </div>
        </div>
    `
    localStorage.setItem('img1', img1)
    contentBlock2.insertAdjacentHTML('beforeend', localStorage.getItem('img1')) 
    createBlockContent.classList.remove('active')
    CreateContent.innerHTML = '<img src="message.png" class="createImgBl">'
    document.body.style.overflowY = 'initial'
    ContentInput.value = ''
    ZeroInput.value = 0
    location.reload();
}else if(localStorage.getItem('img')  == '' || localStorage.getItem('img') == null){
    const img = `
    <div class="Block b4">
            <h3 class="block1Title1"><img src="Vector.png" class="block1TitleImg1"> ${ZeroInput.value}</h3>
            <p class="block1Title2">“${ContentInput.value}”</p>
            <img src="anonim.jpg" class="block1TitleImg2">
            <h3 class="block1Title3">${NamesInput.value}</h3>
            <p class="block1Title4">Visitor</p>
            <div class="btnBlockCR1">
            <p class="removeBl1">Удалить</p>
            <button class="btnBlock1">...</button>
            </div>
        </div>
    `
    localStorage.setItem('img', img)
    contentBlock2.insertAdjacentHTML('beforeend', localStorage.getItem('img')) 
    createBlockContent.classList.remove('active')
    CreateContent.innerHTML = '<img src="message.png" class="createImgBl">'
    document.body.style.overflowY = 'initial'
    ContentInput.value = ''
    ZeroInput.value = 0
    location.reload();
}else if(localStorage.getItem('img2')  == '' || localStorage.getItem('img2') == null){
    const img2 = `
    <div class="Block b6">
            <h3 class="block3Title1"><img src="Vector.png"  class="block3TitleImg1"> ${ZeroInput.value}</h3>
            <p class="block3Title2">“${ContentInput.value}”</p>
            <img src="anonim.jpg" class="block3TitleImg2">
            <h3 class="block3Title3">${NamesInput.value}</h3>
            <p class="block3Title4">Visitor</p>
            <div class="btnBlockCR3">
            <p class="removeBl3">Удалить</p>
            <button class="btnBlock3">...</button>
            </div>
        </div>
    `
    localStorage.setItem('img2', img2)
    contentBlock2.insertAdjacentHTML('beforeend', localStorage.getItem('img2')) 
    createBlockContent.classList.remove('active')
    CreateContent.innerHTML = '<img src="message.png" class="createImgBl">'
    document.body.style.overflowY = 'initial'
    ContentInput.value = ''
    ZeroInput.value = 0
    location.reload();
}
}else if(contentBlock2.childElementCount == 5){
    if(localStorage.getItem('img2')  == '' || localStorage.getItem('img2') == null){
    const img2 = `
    <div class="Block b6">
            <h3 class="block3Title1"><img src="Vector.png"  class="block3TitleImg1"> ${ZeroInput.value}</h3>
            <p class="block3Title2">“${ContentInput.value}”</p>
            <img src="anonim.jpg" class="block3TitleImg2">
            <h3 class="block3Title3">${NamesInput.value}</h3>
            <p class="block3Title4">Visitor</p>
            <div class="btnBlockCR3">
            <p class="removeBl3">Удалить</p>
            <button class="btnBlock3">...</button>
            </div>
        </div>
    `
    localStorage.setItem('img2', img2)
    contentBlock2.insertAdjacentHTML('beforeend', localStorage.getItem('img2')) 
    createBlockContent.classList.remove('active')
    CreateContent.innerHTML = '<img src="message.png" class="createImgBl">'
    document.body.style.overflowY = 'initial'
    ContentInput.value = ''
    ZeroInput.value = 0
    location.reload();
}else if(localStorage.getItem('img1')  == '' || localStorage.getItem('img1') == null){
    const img1 = `
    <div class="Block b4">
            <h3 class="block1Title1"><img src="Vector.png" class="block1TitleImg1"> ${ZeroInput.value}</h3>
            <p class="block1Title2">“${ContentInput.value}”</p>
            <img src="anonim.jpg" class="block1TitleImg2">
            <h3 class="block1Title3">${NamesInput.value}</h3>
            <p class="block1Title4">Visitor</p>
            <div class="btnBlockCR1">
            <p class="removeBl1">Удалить</p>
            <button class="btnBlock1">...</button>
            </div>
        </div>
    `
    localStorage.setItem('img1', img1)
    contentBlock2.insertAdjacentHTML('beforeend', localStorage.getItem('img1')) 
    createBlockContent.classList.remove('active')
    CreateContent.innerHTML = '<img src="message.png" class="createImgBl">'
    document.body.style.overflowY = 'initial'
    ContentInput.value = ''
    ZeroInput.value = 0
    location.reload();
}else if(localStorage.getItem('img')  == '' || localStorage.getItem('img') == null){
    const img = `
    <div class="Block b4">
            <h3 class="block1Title1"><img src="Vector.png" class="block1TitleImg1"> ${ZeroInput.value}</h3>
            <p class="block1Title2">“${ContentInput.value}”</p>
            <img src="anonim.jpg" class="block1TitleImg2">
            <h3 class="block1Title3">${NamesInput.value}</h3>
            <p class="block1Title4">Visitor</p>
            <div class="btnBlockCR1">
            <p class="removeBl1">Удалить</p>
            <button class="btnBlock1">...</button>
            </div>
        </div>
    `
    localStorage.setItem('img', img)
    contentBlock2.insertAdjacentHTML('beforeend', localStorage.getItem('img')) 
    createBlockContent.classList.remove('active')
    CreateContent.innerHTML = '<img src="message.png" class="createImgBl">'
    document.body.style.overflowY = 'initial'
    ContentInput.value = ''
    ZeroInput.value = 0
    location.reload();
}
}
}else{
// the screen is small
setTimeout(YesBLockRemove,10)
function YesBLockRemove(){
    let NoCreateBlock = document.querySelector('.NoCreateBlock')
    NoCreateBlock.classList.add('active')
    if (document.documentElement.clientWidth < 1160) {
        NoCreateBlock.classList.add('active')
        createBlockContent.classList.toggle('active')
    }
}
// the screen is small
setTimeout(NoBLockRemove,4000)
function NoBLockRemove(){
    let NoCreateBlock = document.querySelector('.NoCreateBlock')
    NoCreateBlock.classList.remove('active')
    if (document.documentElement.clientWidth < 1160) {
        NoCreateBlock.classList.remove('active')
        createBlockContent.classList.toggle('active')
    }
}
}
}


// checking data inputs
let as = document.querySelector('.as')
as.addEventListener('input', CheckInputs)
let NamesInput = document.querySelector('.Names')
let ContentInput = document.querySelector('.Content')
let ZeroInput = document.querySelector('.Zero')
function CheckInputs(){
if(NamesInput.value === ''){
    Add.disabled = true;
}else if(NamesInput.value != ''){
    Add.disabled = false;
        if(ZeroInput.value == '' || ZeroInput.value == null){
            let sum = 1
            ZeroInput.value = `${sum}`
        }
    }
}
CheckInputs()


// visibility on reboot
contentBlock2.insertAdjacentHTML('beforeend',localStorage.getItem('img')  || '')
contentBlock2.insertAdjacentHTML('beforeend',localStorage.getItem('img1') || '' )
contentBlock2.insertAdjacentHTML('beforeend',localStorage.getItem('img2') || '')


// limit of reviews
let CreateSpan = document.querySelector('.CreateSpan')
function createSpans(){
    if(contentBlock2.childElementCount == 3){
     CreateSpan.style.visibility = 'initial'
     CreateSpan.style.opacity = '1'   
    }else{
        console.log("Лимит исчерпан");
    }
    
}
setTimeout(createSpans,4000)


// delete a post
let removeBl1 = document.querySelector('.removeBl1')
let removeBl2 = document.querySelector('.removeBl2')
let removeBl3 = document.querySelector('.removeBl3')
// toggle active block1
window.addEventListener("DOMContentLoaded", (event) => {
    let btnBlock1 = document.querySelector('.btnBlock1') 
    if (btnBlock1) {
        btnBlock1.addEventListener('click',function RemoveBlock1(){
            removeBl1.classList.toggle('active')
        });
    }
});
// toggle active block2
window.addEventListener("DOMContentLoaded", (event) => {
    let btnBlock2 = document.querySelector('.btnBlock2') 
    if (btnBlock2) {
        btnBlock2.addEventListener('click', function RemoveBlock2(){
            removeBl2.classList.toggle('active')
        });
    }
});
// toggle active block3
window.addEventListener("DOMContentLoaded", (event) => {
    let btnBlock3 = document.querySelector('.btnBlock3') 
    if (btnBlock3) {
        btnBlock3.addEventListener('click',function RemoveBlock3(){
            removeBl3.classList.toggle('active')
        });
    }
});
// remove localStroge(img)
window.addEventListener("DOMContentLoaded", (event) => {
    let removeBl1 = document.querySelector('.removeBl1')
    if (removeBl1) {
        removeBl1.addEventListener('click',function RemoveYesBlock1(){
            localStorage.removeItem('img')
            location.reload();
        });
    }
});
// remove localStroge(img1)
window.addEventListener("DOMContentLoaded", (event) => {
    let removeBl2 = document.querySelector('.removeBl2')
    if (removeBl2) {
        removeBl2.addEventListener('click',function RemoveYesBlock2(){
            localStorage.removeItem('img1')
            location.reload();
        });
    }
});
// remove localStroge(img2)
window.addEventListener("DOMContentLoaded", (event) => {
    let removeBl3 = document.querySelector('.removeBl3')
    if (removeBl3) {
        removeBl3.addEventListener('click',function RemoveYesBlock3(){
            localStorage.removeItem('img2')
            location.reload();
        });
    }
})


// checking the value
ZeroInput.addEventListener('keydown', function(e){
    if(e.key.match(/^0/g,)) return e.preventDefault();
})
// name without numbers
NamesInput.addEventListener('keydown', function(e){
    if(e.key.match(/[0-9]/)) return e.preventDefault();
})
// name without numbers
NamesInput.addEventListener('input', function(e){
    NamesInput.value = NamesInput.value.replace(/[0-9]/g, "")
})
