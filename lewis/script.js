const variantsContainer = document.getElementById('variants');
const questionContainer = document.getElementById('question');
const container = document.getElementById('container');
const allData = [
    {type: "acidic", substance: `Li${toSup("+")}`},
    {type: "acidic", substance: `Na${toSup("+")}`},
    {type: "acidic", substance: `K${toSup("+")}`},
    {type: "acidic", substance: `Ca${toSup("2+")}`},
    {type: "acidic", substance: `Mg${toSup("2+")}`},
    {type: "acidic", substance: `Ba${toSup("2+")}`},
    {type: "acidic", substance: `BH${toSub("3")}`},
    {type: "acidic", substance: `AlH${toSub("3")}`},
    {type: "acidic", substance: `GaH${toSub("3")}`},
    {type: "acidic", substance: `NH${toSub("4")}${toSup('+')}`},
    {type: "acidic", substance: `H${toSub("3")}O${toSup('+')}`},
    {type: "acidic", substance: `SnCl${toSub("4")}`},
   

    {type: "basic", substance: `H${toSup("-")}`},
    {type: "basic", substance: `H${toSub('3')}N`},
    {type: "basic", substance: `H${toSub('3')}P`},
    {type: "basic", substance: `PH${toSub('3')}`},
    {type: "basic", substance: `NH${toSub('3')}`},
    {type: "basic", substance: `CH${toSub("3")}NH${toSup('2')}`},
    {type: "basic", substance: `AlH${toSub("4")}${toSup('-')}`},
    {type: "basic", substance: `BH${toSub("4")}${toSup('-')}`},
    {type: "basic", substance: `B${toSup('-')}`},
    {type: "basic", substance: `ClO${toSub("4")}${toSup('-')}`},
    
]

const questData = [
    {question: "Льюис қышқылдарды анықтаңыз", type:"acidic"},
    {question: `Электрон жұбын қабылдай алатын заттарды анықтаңыз`, type:"acidic"},
    {question: `Электрон жұбы акцепторы бола алатын заттарды анықтаңыз`, type:"acidic"},
    {question: "Льюис негіздерін анықтаңыз", type:"basic"},
    {question: `Электрон жұбын бере алатын заттарды анықтаңыз`, type:"basic"},
    {question: `Электрон жұбы доноры бола алатын заттарды анықтаңыз`, type:"basic"}, 
]

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }

  function getRandomElement(array) {
    // Generate a random index between 0 and the length of the array
    const randomIndex = Math.floor(Math.random() * array.length);

    // Return the element at the randomly generated index
    return array[randomIndex];
}

function toSub(value) {
    return value.sub();
}

function toSup(value) {
    return value.sup();
}

function checkClass(all,className) {
    let a = true;
    all.forEach(elem => {
        if (!elem.classList.contains(className)) {
            a = false;
        }
    })
    return a;
}

function checkOneElemClass(all, className) {
    for(i=0; i<all.length; i++){
        if (all[i].classList.contains(className)){
            return true;
        }
    }
    return false;
}

function App() {
    const lists = getMultipleRandom(allData, 6);
    const question = getRandomElement(questData);
    const questionHeader = document.createElement('h1');
    const questionType = question.type;
    questionHeader.innerHTML = question.question;
    questionContainer.appendChild(questionHeader);

    lists.forEach(elem => {
        const spanVariant = document.createElement('span');
        spanVariant.classList.add('variant');
        spanVariant.classList.add(elem.type);
        spanVariant.innerHTML = elem.substance;
        spanVariant.addEventListener('click', () => {
            if (spanVariant.classList.contains('selected')) {
                spanVariant.classList.remove('selected');
            } else {
                spanVariant.classList.add('selected');
            }
        })
        variantsContainer.appendChild(spanVariant);
    })

    const submitButton = document.createElement('button');
    submitButton.innerHTML = "Қабылдаңыз";
    submitButton.id = 'submitButton';
    container.appendChild(submitButton);

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const allSelected = document.querySelectorAll('.selected');
        const allUnSelected = document.querySelectorAll('span.variant:not(.selected)');
        if (checkClass(allSelected, questionType) && (!checkOneElemClass(allUnSelected, questionType))) {
            variantsContainer.innerHTML = "";
            questionContainer.innerHTML = "";
            if (container.lastChild.tagName == `BUTTON`) {
                container.lastChild.remove();
            }
            App();
        }
    })
}
App();