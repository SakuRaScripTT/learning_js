class Calculator {
	constructor(prev, current){
		this.prev = prev;
		this.current = current;
		this.clear();
	}

	clear(){
		this.currentOperand = '';
		this.prevOperand = '';
		this.operation = undefined;
	}

	delete(){
		if(this.currentOperand.length <= 0) return (false);
		this.currentOperand = this.currentOperand.toString().slice(0, -1);
	}

	addNumber(num){	
		if(this.currentOperand.length > 12) return (false);
		if(num === '.' && this.currentOperand.includes('.')) return (false);
		this.currentOperand = this.currentOperand.toString() + num.toString();

	}

	choseOperation(operation){
		if (this.currentOperand === '') return (false);
		if (this.prevOperand !== '') {
			this.compute();
		}
		this.operation = operation;
		this.prevOperand = this.currentOperand;
		this.currentOperand = '';
	}

	compute(){
		let computation;
		const prevOp = parseFloat(this.prevOperand);
		const currentOp = parseFloat(this.currentOperand);

		if(isNaN(prevOp) || isNaN(currentOp)) return (false);
		switch(this.operation){
			case '+':
				computation = prevOp + currentOp;
				break;
			case '-':
				computation = prevOp - currentOp;
				break;
			case '*':
				computation = prevOp * currentOp;
				break;
			case '/':
				computation = prevOp / currentOp;
				break;
			default:
				return (false);
		}
		this.currentOperand = computation;
		this.operation = undefined;
		this.prevOperand = '';
	}


	getDisplayNum(number) {
		const stringNumber = number.toString();
		const integerDigits = parseFloat(stringNumber.split('.')[0]);
		const decimalDigits = stringNumber.split('.')[1];
		let integerDisplay;

		if (isNaN(integerDigits)) {
			integerDisplay = '';
		} 
		else {
			integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
		}
		if (decimalDigits != null) {
			return `${integerDisplay}.${decimalDigits}`;
		} 
		else {
			return integerDisplay;
		}
	}
	update(){
		this.current.innerText = this.getDisplayNum(this.currentOperand);
		this.prev.innerText = this.prevOperand;

		if(this.operation != null){
			this.prev.innerText = `${this.prevOperand} ${this.operation}`;
		}
	}
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const ceButton = document.querySelector('[data-all-clear]');
const cButton = document.querySelector('[data-delete]');
const prev = document.querySelector('[data-prev]');
const current = document.querySelector('[data-current]');


const calculator = new Calculator(prev, current);

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.addNumber(button.innerText);
		calculator.update();
	})
})

operationButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.choseOperation(button.innerText);
		calculator.update();
	})
})

equalsButton.addEventListener('click', button => {
	calculator.compute();
	calculator.update();
})

ceButton.addEventListener('click', button => {
	calculator.clear();
	calculator.update();
})

cButton.addEventListener('click', button => {
	calculator.delete();
	calculator.update();
})