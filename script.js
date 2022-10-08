let billTotalInput = document.getElementById('billTotalInput')
let tipInput= document.getElementById('tipInput')
let numberOfPeople= document.getElementById('numberOfPeople')
let perPersonTotal= document.getElementById('perPersonTotal')

let noOfppl = Number(numberOfPeople.innerText)
    
const calculateBill = () =>
  { 
      let billTotal = Number(billTotalInput.value)
      let tip = Number(tipInput.value)
      let tipAmount = billTotal*(tip/100)
    let totalBill = ((tipAmount + billTotal)/noOfppl).toFixed(2)

      perPersonTotal.innerText = totalBill
   }

const increasePeople = () => 
  {
    noOfppl +=1
    numberOfPeople.innerText= noOfppl
    calculateBill()
  }

const decreasePeople = () => 
  { if(noOfppl<=1)
  { throw 'cannot have people less than 1'
    return 
  }
    noOfppl -=1
    numberOfPeople.innerText= noOfppl
    calculateBill()
  }


