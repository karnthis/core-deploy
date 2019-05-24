const Data = new Core()

const Prov = new tmp({
	loadPath: 'provider',
	id: 'provider_id',
	labels: {
		provider_name: 'Agency Name',
		phone: 'Phone',
		description: 'Description',
		hours: 'Hours',
		days_of_operation: 'Days Open',
	},
})


console.log('start')
console.log(Data.providers)
console.log(Data.users)
console.log(Data.eligibility)
console.log(Data.inventory)
console.log('tmp test')
console.log(Prov)

window.onload = function() {
	console.log('loaded')
	const d = document
	const resultsDiv = d.querySelector('.results')

	d.querySelector('.viewMenu').addEventListener('click', e => {
		console.log(e.target.id)
		switch (e.target.id) {
			case 'btn1':
				changeChildren(resultsDiv, Labels.user, Data.users)
				break;
			case 'btn2':
				changeChildren(resultsDiv, Labels.provider, Data.providers)
				break;
			case 'btn3':
				changeChildren(resultsDiv, Labels.eligibility, Data.eligibility)
				break;
			case 'btn4':
				changeChildren(resultsDiv, Labels.inventory, Data.inventory)
				break;
			case 'check':
				const t = d.querySelector('.checkElig')
				const inputs = t.getElementsByTagName('input')
				for (const el in inputs) {
					
				}
				break;
			default:
				// no action
		}
	})

	d.querySelector('.formMenu').addEventListener('click', e => {
		console.log(e.target.id)
		if (!e.target.id) return
		d.querySelector(`.${e.target.id}`).classList.toggle('noShow')

	})

	// doGet('https://api.findyour.agency/provider')
	// 	.then(json => {
	// 		console.log(JSON.stringify(json));
	// 	});
}

// GLOBALS
const Labels = {
	user: {
		user_id: 'ID',
		member_of: 'Agency',
		full_name: 'Name',
		email: 'Email',
	},
	provider: {
		name: 'Agency Name',
		phone: 'Phone',
		desc: 'Description',
		hours: 'Hours',
		days: 'Days Open',
	},
	eligibility: {
		
	},
	inventory: {
		
	},
}

function changeChildren(parent, labels, data) {
	while (parent.firstChild) {
		parent.firstChild.remove();
	}
	makeHTML(labels, data, parent)
}

// FETCH FUNCTIONS

function doFetch(cfg = {}) {
	const { cfgPath = '', cfgMethod = 'GET', cfgBody = null } = cfg
	const url = `https://api.findyour.agency/${cfgPath}`
	const fetchConfig = {
		method: cfgMethod,
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
				"Content-Type": "application/json",
		},
		redirect: "follow",
		referrer: "no-referrer",
		body: cfgBody,
	}
	return fetch(url, fetchConfig)
		.then(res => res.json());
}

function doPost(path = '', data = {}) {
	const cfg = {
		cfgPath: path,
		cfgMethod: 'POST',
		cfgBody: JSON.stringify(data)
	}
	return doFetch(cfg)
}

function doGet(path = '') {
	const cfg = {
		cfgPath: path,
		cfgMethod: 'GET',
	}
	return doFetch(cfg)
}

// HTML FUNCTIONS

function makeHTML(labels = {}, data = {}, parent) {
	// const parent = makeNode('div')
	for (const dataKey in data) {
		const child = makeNode('p')
		for (const labelKey in labels) {
			const content = makeText(`${labels[labelKey]}: ${data[dataKey][labelKey]}`)
			const shell = makeNode('div')
			shell.appendChild(content)
			child.appendChild(shell)
		}
		parent.appendChild(child)
	}
	return parent
}

function makeText(t) {
	return document.createTextNode(t)
}

function makeNode(t) {
	return document.createElement(t)
}