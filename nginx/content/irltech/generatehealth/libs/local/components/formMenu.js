const formC = {
	view: function (vnode) {
		return m('div', [
			m('span', 'Select Your View'),
			m('button', 'See All Users'),
			m('button', 'See All Providers'),
			m('button', 'See All Eligibility'),
			m('button', 'See All Inventories'),
		])
	}
}

export {
	formC,

}