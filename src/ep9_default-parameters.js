function calculateBill(total, tax, tip) {
	return total + (total * tax) + (total * tip);
}

function calculateBillWithDefaults(total, tax = .16, tip = .15) {
	return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(500, .16, .15);
console.log(totalBill);

const totalBillDefaults = calculateBillWithDefaults(500);
console.log(totalBillDefaults);