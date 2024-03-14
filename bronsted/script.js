const variantsContainer = document.getElementById('variants');
const questionContainer = document.getElementById('question');
const container = document.getElementById('container');
const allData = [
    {type: "acidic", substance: `HCl`},
    {type: "acidic", substance: `HBr`},
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
    {type: "acidic", substance: `H${toSub("3")}AsO${toSub("4")}`},
    {type: "acidic", substance: `H${toSub("5")}IO${toSub("6")}`},
    {type: "acidic", substance: `HIO${toSub("3")}`},
    {type: "acidic", substance: `H${toSub("3")}O${toSup("+")}`},
    {type: "acidic", substance: `NH${toSub("4")}${toSup("+")}`},
    {type: "acidic", substance: `CH${toSub("3")}NH${toSub("3")}${toSup("+")}`},

    {type: "basic", substance: `OH${toSup("-")}`},
    {type: "basic", substance: `NH${toSub("3")}`},
    {type: "basic", substance: `CH${toSub("3")}COO${toSup("-")}`},
    {type: "basic", substance: `HCOO${toSup("-")}`},
    {type: "basic", substance: `SO${toSub("4")}${toSup("-2")}`},
    {type: "basic", substance: `SO${toSub("3")}${toSup("-2")}`},
    {type: "basic", substance: `PO${toSub("4")}${toSup("-3")}`},
    {type: "basic", substance: `Cl${toSup("-")}`},
    {type: "basic", substance: `Br${toSup("-")}`},
    {type: "basic", substance: `I${toSup("-")}`},
    {type: "basic", substance: `F${toSup("-")}`},
    {type: "basic", substance: `ClO${toSub("4")}${toSup("-")}`},
    {type: "basic", substance: `BrO${toSub("3")}${toSup("-")}`},

    {type: "amphiprotic", substance: `HSO${toSub("4")}${toSup("-")}`},
    {type: "amphiprotic", substance: `HSO${toSub("3")}${toSup("-")}`},
    {type: "amphiprotic", substance: `H${toSub("2")}O`},
    {type: "amphiprotic", substance: `HCO${toSub("3")}${toSup("-")}`},
    {type: "amphiprotic", substance: `H${toSub("2")}PO${toSub("4")}${toSup("-")}`},
    {type: "amphiprotic", substance: `HPO${toSub("4")}${toSup("-2")}`},
    {type: "amphiprotic", substance: `H${toSub("2")}AsO${toSub("4")}${toSup("-")}`},
    {type: "amphiprotic", substance: `HAsO${toSub("4")}${toSup("-2")}`},
    {type: "amphiprotic", substance: `SH${toSup("-")}`},
    

]

const questData = [
    {question: "Бренстед-Лоури қышқылдарды(амфолит емес) анықтаңыз", type:"acidic"},
    {question: `H${toSup("+")} иондарын бере алатын(амфолит емес) затты анықтаңыз`, type:"acidic"},
    {question: `H${toSup("+")} доноры(амфолит емес) болатын затты анықтаңыз`, type:"acidic"},
    {question: `Протон доноры(амфолит емес) болатын затты анықтаңыз`, type:"acidic"},
    {question: "Бренстед-Лоури негіздерін(амфолит емес) анықтаңыз", type:"basic"},
    {question: `H${toSup("+")} иондарын қабылдай алатын(амфолит емес) затты анықтаңыз`, type:"basic"},
    {question: `H${toSup("+")} акцепторы(амфолит емес) болатын затты анықтаңыз`, type:"basic"},
    {question: `Протон акцепторы(амфолит емес) болатын затты анықтаңыз`, type:"basic"},
    {question: `Протон акцепторы және доноры да бола алатын затты анықтаңыз`, type:"amphiprotic"}, 
    {question: `Амфолитті анықтаңыз`, type:"amphiprotic"},
    {question: `Кейде Бренстед-Лоури қышқылы кейде Бренстед-Лоури негізі бола алатын затты табыңыз`, type:"amphiprotic"},
    {question: `H${toSup("+")} иондарын бере де алатын ала да алатын затты көрсетіңіз`, type:"amphiprotic"}
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
        if ( ( checkClass(allSelected, questionType)) && ((!checkOneElemClass(allUnSelected, questionType)))) {
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