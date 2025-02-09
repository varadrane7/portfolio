const firstName = 'Varad';
const lastName = 'Rane';
const suffix = 'Personal Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
