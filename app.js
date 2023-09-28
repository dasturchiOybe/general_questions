//using selectors inside the element
// traversing the dom
// const questionText = document.querySelectorAll('.question-text')


//   -------- buni uzim qildim kodi kop bolib ketdi lekin   ----------

// const plus = document.querySelectorAll('.plus-icon')
// const minus = document.querySelectorAll('.minus-icon')

// const questionTextList = document.querySelectorAll('.question-text');

// const birinchiElement = questionTextList[0];
// const ikkinchiElement = questionTextList[1];
// const uchinchiElement = questionTextList[2];

// plus[0].addEventListener('click' , () => {
//     birinchiElement.style.display = 'inline-block';
//     (minus[0]).style.display = 'inline-block';
//     (plus[0]).style.display = 'none';

// });

// minus[0].addEventListener('click' , () => {
//     birinchiElement.style.display = 'none';
//     (plus[0]).style.display = 'inline-block';
//     (minus[0]).style.display = 'none';

// });


// plus[1].addEventListener('click' , () => {
//     ikkinchiElement.style.display = 'inline-block';
//     (minus[1]).style.display = 'inline-block';
//     (plus[1]).style.display = 'none';
    
// });

// minus[1].addEventListener('click' , () => {
//     ikkinchiElement.style.display = 'none';
//     (plus[1]).style.display = 'inline-block';
//     (minus[1]).style.display = 'none';

// });


// plus[2].addEventListener('click' , () => {
//     uchinchiElement.style.display = 'inline-block';
//     (minus[2]).style.display = 'inline-block';
//     (plus[2]).style.display = 'none';

// });

// minus[2].addEventListener('click' , () => {
//     uchinchiElement.style.display = 'none';
//     (plus[2]).style.display = 'inline-block';
//     (minus[2]).style.display = 'none';

// });


// plus[0].addEventListener('click', () => {
//     birinchiElement.style.display = 'inline-block';
//     minus[0].style.display = 'inline-block';
//     plus[0].style.display = 'none';
    
//     ikkinchiElement.style.display = 'none';
//     minus[1].style.display = 'none';
//     plus[1].style.display = 'inline-block';
    
//     uchinchiElement.style.display = 'none';
//     minus[2].style.display = 'none';
//     plus[2].style.display = 'inline-block';
//   });
  
//   plus[1].addEventListener('click', () => {
//     ikkinchiElement.style.display = 'inline-block';
//     minus[1].style.display = 'inline-block';
//     plus[1].style.display = 'none';
  
//     birinchiElement.style.display = 'none';
//     minus[0].style.display = 'none';
//     plus[0].style.display = 'inline-block';
  
//     uchinchiElement.style.display = 'none';
//     minus[2].style.display = 'none';
//     plus[2].style.display = 'inline-block';
//   });
  
//   plus[2].addEventListener('click', () => {
//     uchinchiElement.style.display = 'inline-block';
//     minus[2].style.display = 'inline-block';
//     plus[2].style.display = 'none';
  
//     birinchiElement.style.display = 'none';
//     minus[0].style.display = 'none';
//     plus[0].style.display = 'inline-block';
  
//     ikkinchiElement.style.display = 'none';
//     minus[1].style.display = 'none';
//     plus[1].style.display = 'inline-block';
//   });
  
//   minus[0].addEventListener('click', () => {
//     birinchiElement.style.display = 'none';
//     plus[0].style.display = 'inline-block';
//     minus[0].style.display = 'none';
//   });
  
//   minus[1].addEventListener('click', () => {
//     ikkinchiElement.style.display = 'none';
//     plus[1].style.display = 'inline-block';
//     minus[1].style.display = 'none';
//   });
  
//   minus[2].addEventListener('click', () => {
//     uchinchiElement.style.display = 'none';
//     plus[2].style.display = 'inline-block';
//     minus[2].style.display = 'none';
//   });





// --------- buni internetdan korib qildim lekin uncha tushunolmadim ----------


const questionTextList = document.querySelectorAll('.question-text');
const plus = document.querySelectorAll('.plus-icon');
const minus = document.querySelectorAll('.minus-icon');

questionTextList.forEach((question, index) => {
  const plusBtn = plus[index];
  const minusBtn = minus[index];

  plusBtn.addEventListener('click', () => {
    question.style.display = 'inline-block';
    minusBtn.style.display = 'inline-block';
    plusBtn.style.display = 'none';

    questionTextList.forEach((q, i) => {
      if (i !== index) {
        q.style.display = 'none';
        minus[i].style.display = 'none';
        plus[i].style.display = 'inline-block';
      }
    });
  });

  minusBtn.addEventListener('click', () => {
    question.style.display = 'none';
    plusBtn.style.display = 'inline-block';
    minusBtn.style.display = 'none';
  });
});

