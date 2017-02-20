module.exports = function() {
 	var faker = require("faker");
	var _ = require("lodash");
	return {
		users: _.times(50, function (n) {
			return {
				id : n,
				name : faker.name.findName(),
				about : faker.lorem.paragraph(),
				avatar : faker.internet.avatar(),
				friends : faker.name.findName(),
				followers : faker.name.findName(),
				photos : faker.name.findName(),
				videos : faker.name.findName()
			}
		}),
		posts: _.times(50, function (n){
			return{
				id: n,
				name: faker.lorem.sentence(),
				description:  faker.lorem.paragraph()
			}
		}),
		income: _.times(30, function (n) {
			return {
				receiptPersonMobile: faker.phone.phoneNumber(),
				receiptPersonEmail: faker.internet.email(),
				receiptPersonAddress: faker.address.secondaryAddress(),
				receiptType: faker.finance.transactionType(),
				receivedDate: faker.date.past(),
				receviedBy: faker.name.findName(),
				receiptAmt: faker.finance.amount(),
				receiptDescription: faker.finance.account(),
				receiptName: faker.name.findName(),
				receiptSubCategory: faker.finance.bitcoinAddress(),
				receiptMainCategory: faker.finance.accountName(),
				receiptid: faker.random.number(),
				id: n
			}
		})

	}
}