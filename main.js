const dayInput = document.getElementById('day'),
monthInput = document.getElementById('month'),
yearInput = document.getElementById('year'),
calculBtn = document.querySelector('.img-container'),
resultYear = document.querySelector('.result-y'),
resultMonth = document.querySelector('.result-m'),
resultDay = document.querySelector('.result-d');

const y1 = new Date().getFullYear();
const m1 = new Date().getMonth() + 1;
const d1 = new Date().getDate();
const lengthM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let dayFlag = true;
let monthFlag =true;
let yearFlag = true;

function styleElem(ele){
    ele.style.border = '1px solid hsl(0, 100%, 67%)';
    ele.parentElement.style.color ='hsl(0, 100%, 67%)';
}

const stylePara = (ele)=>{
    ele.nextElementSibling.classList.toggle('none');
}

function inputVal(inputEle){
    inputEle.addEventListener('change', ()=>{
        if(inputEle.value.length==1){
            let val = inputEle.value;
            inputEle.value = '0' + val;
        }
    })
}

inputVal(dayInput);
inputVal(monthInput);
inputVal(yearInput);

calculBtn.addEventListener('click', ()=>{
    const y2 = +(yearInput.value);
    const m2 = +(monthInput.value);
    const d2 = +(dayInput.value);

    if(dayInput.value ==''){
        stylePara(dayInput);
    }

    if(monthInput.value ==''){
        stylePara(monthInput);
    }

    if(yearInput.value ==''){
        stylePara(yearInput);
    }

    if(+(dayInput.value) >31){
        dayFlag =false;
        styleElem(dayInput);
        stylePara(dayInput);
        dayInput.nextElementSibling.textContent='Must be a valid day'
    }

    if(+(dayInput.value) <1){
        dayFlag =false;
        styleElem(dayInput);
    };

    if(y2 % 400 == 0 || (y2 % 100 != 0 && y2 % 4 == 0)){
        lengthM[1] = 29;
    }else{
        lengthM[1] = 28;
    }

    if(d2 > lengthM[m2-1]){
        dayFlag=false;
        styleElem(dayInput);
        styleElem(monthInput);
        styleElem(yearInput);
        stylePara(dayInput);
        dayInput.nextElementSibling.textContent='Must be a valid date';

        resultYear.textContent = '--';
        resultMonth.textContent = '--';
        resultDay.textContent = '--';
    }

    if(+(monthInput.value)>12){
        monthFlag =false;
        styleElem(monthInput);
        stylePara(monthInput);
        monthInput.nextElementSibling
        .textContent = 'Must be a valid month';
    }

    if(+(monthInput.value)<1){
        monthFlag =false;
        styleElem(monthInput);
    }

    if(+(yearInput.value)>y1){
        yearFlag=false;
        styleElem(yearInput);
        stylePara(yearInput);
        yearInput.nextElementSibling.
        textContent = 'Must be in the past';
    }

    if(+(yearInput.value)<1){
        styleElem(yearInput);
        yearFlag =false;
    }
    if(!dayFlag || !monthFlag || !yearFlag){
        return;
    }
    

    let y = y1 -y2;
    let m = m1 -m2;
    let d = d1 -d2;

    if(d1 < d2){
        m--;
        d = d1-d2 + lengthM[m2];
    }

    if(m<0 ||  m1 < m2){
        y--;
        m = m1-m2 +12;
    }
    resultYear.textContent = `${y}`.length==1?'0'+y:y;
    resultMonth.textContent = `${m}`.length==1?'0'+m :m;
    resultDay.textContent = `${d}`.length==1?'0'+d:d;
   
})





























