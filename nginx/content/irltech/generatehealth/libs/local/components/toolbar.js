import { formC } from './formMenu.js'
import { viewC } from './viewMenu.js'

const Toolbar = {
	view: function (vnode) {
		return [m("div", {class: "grid toolbar"}, [
			m('div', {class: "grid views"}, [
				m('span', 'Select Your View'),
				m('button', 'See All Users'),
				m('button', 'See All Providers'),
				m('button', 'See All Eligibility'),
				m('button', 'See All Inventories'),
			]),
			m('div', {class: "grid forms"}, [
				m('span', 'Select Your Form'),
				m('button', 'See All Providers'),
				m('button', 'TBD'),
				m('button', 'TBD'),
				m('button', 'TBD'),
			]),
			
		]),
		m('div', {class: "content grid"}, 'ha')]
	}
}

export {
	Toolbar
}