const variantsContainer = document.getElementById('variants');
const questionContainer = document.getElementById('question');
const container = document.getElementById('container');
const allData = [
    {type: "acidic", substance: `HCl`},
    {type: "acidic", substance: `HBr`},
    {type: "acidic", substance: `HI`},
    {type: "acidic", substance: `HF`},
    {type: "acidic", substance: `HCOOH`},
    {type: "acidic", substance: `CH${toSub("3")}COOH`},
    {type: "acidic", substance: `C${toSub("2")}H${toSub("3")}COOH`},
    {type: "acidic", substance: `C${toSub("17")}H${toSub("35")}COOH`},
    {type: "acidic", substance: `CCl${toSub("3")}COOH`},
    {type: "acidic", substance: `CHClBrCOOH`},
    {type: "acidic", substance: `HNO${toSub("3")}`},
    {type: "acidic", substance: `HNO${toSub("2")}`},
    {type: "acidic", substance: `H${toSub("2")}CO${toSub("3")}`},
    {type: "acidic", substance: `H${toSub("2")}SO${toSub("3")}`},
    {type: "acidic", substance: `H${toSub("2")}SO${toSub("4")}`},
    {type: "acidic", substance: `H${toSub("2")}SO${toSub("4")}`},
    {type: "acidic", substance: `H${toSub("2")}SeO${toSub("4")}`},
    {type: "acidic", substance: `H${toSub("3")}PO${toSub("4")}`},
    {type: "acidic", substance: `H${toSub("3")}PO${toSub("3")}`},
    {type: "acidic", substance: `H${toSub("3")}AsO${toSub("4")}`},
    {type: "acidic", substance: `H${toSub("5")}IO${toSub("6")}`},
    {type: "acidic", substance: `HClO${toSub("4")}`},
    {type: "acidic", substance: `HClO${toSub("3")}`},
    {type: "acidic", substance: `HClO${toSub("2")}`},
    {type: "acidic", substance: `HClO}`},
    {type: "acidic", substance: `HBrO${toSub("3")}`},
    {type: "acidic", substance: `HIO${toSub("3")}`},

    {type: "basic", substance: `NaOH`},
    {type: "basic", substance: `KOH`},
    {type: "basic", substance: `RbOH`},
    {type: "basic", substance: `CsOH`},
    {type: "basic", substance: `LiOH`},
    {type: "basic", substance: `Ca(OH)${toSub("2")}`},
    {type: "basic", substance: `Ba(OH)${toSub("2")}`},
    {type: "basic", substance: `Sr(OH)${toSub("2")}`},
    {type: "basic", substance: `Mg(OH)${toSub("2")}`},
    {type: "basic", substance: `Fe(OH)${toSub("2")}`},
    {type: "basic", substance: `NH${toSub("3")}`},
    {type: "basic", substance: `NH${toSub("4")}OH`},
    {type: "basic", substance: `NaOH`},
    {type: "basic", substance: `KOH`},
    {type: "basic", substance: `RbOH`},
    {type: "basic", substance: `CsOH`},
    {type: "basic", substance: `LiOH`},
    {type: "basic", substance: `Ca(OH)${toSub("2")}`},
    {type: "basic", substance: `Ba(OH)${toSub("2")}`},
    {type: "basic", substance: `Sr(OH)${toSub("2")}`},
    {type: "basic", substance: `Mg(OH)${toSub("2")}`},
    {type: "basic", substance: `Fe(OH)${toSub("2")}`},
    {type: "basic", substance: `NH${toSub("3")}`},
    {type: "basic", substance: `NH${toSub("4")}OH`},
    
]

const questData = [
    {question: "Аррениус қышқылдарды анықтаңыз", type:"acidic"},
    {question: `Сулы ерітіндіде сутек катиондарының санын көбейтітін затты анықтаңыз`, type:"acidic"},
    {question: `Сулы ерітіндіде H${toSup("+")} санын көбейтітін затты анықтаңыз`, type:"acidic"},
    {question: "Аррениус негіздерін анықтаңыз", type:"basic"},
    {question: `Сулы ерітіндіде гидроксид катиондарының санын көбейтітін затты анықтаңыз`, type:"basic"},
    {question: `Сулы ерітіндіде OH${toSup("-")} санын көбейтітін затты анықтаңыз`, type:"basic"}, 
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