// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Otman" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

  //** Gingerbread (+), (-) btn
let gbVote = document.querySelector('#qty-gb')
// add event to plus btn
let gbPlusBtn = document.querySelector('#add-gb');

 gbPlusBtn.addEventListener('click', function(e){
     let gbPlusBtn = parseInt(gbVote.textContent);
    gbPlusBtn = gbPlusBtn + 1;
    gbVote.textContent = gbPlusBtn
 
});
// add event to Gingerbread minus btn
let gbMinusBtn = document.querySelector('#minus-gb');

 gbMinusBtn.addEventListener('click', function(e){
     let gbMinusBtn = parseInt(gbVote.textContent);
    gbMinusBtn = gbMinusBtn - 1;
    gbVote.textContent = gbMinusBtn
 
});

// add event to CC (+), (-) btn.
let ccVote = document.querySelector('#qty-cc')

// cc minus btn
let ccMinusBtn = document.querySelector('#minus-cc');

ccMinusBtn.addEventListener('click', function(e) {
    let ccMinusBtn = parseInt(ccVote.textContent);
    ccMinusBtn = ccMinusBtn - 1;
    ccVote.textContent = ccMinusBtn;
})
  
// cc plus btn
let ccPlusBtn = document.querySelector('#add-cc');

ccPlusBtn.addEventListener('click', function(e) {
    let ccPlusBtn = parseInt(ccVote.textContent);
    ccPlusBtn = ccPlusBtn + 1;
    ccVote.textContent = ccPlusBtn;
})
 
// add event to sugar (+), (-) btn.
let sugarVote = document.querySelector('#qty-sugar')

// Sugar minus btn
let sugarMinusBtn = document.querySelector('#minus-sugar');

sugarMinusBtn.addEventListener('click', function(e) {
    let sugarMinusBtn = parseInt(sugarVote.textContent);
    sugarMinusBtn = sugarMinusBtn - 1;
    sugarVote.textContent = sugarMinusBtn;
})

// Sugar plus btn
let sugarPlusBtn = document.querySelector('#add-sugar');

sugarPlusBtn.addEventListener('click', function(e) {
    let sugarPlusBtn = parseInt(sugarVote.textContent);
    sugarPlusBtn = sugarPlusBtn + 1;
    sugarVote.textContent = sugarPlusBtn;
})

