class tmp {
	constructor(x) {
		const { loadPath, id, labels } = x
		const keys = Object.keys(labels)
		this.labels = labels
		this.build(loadPath, id, keys)
	}

	async build(p, id, k) {
		this.d = {}
		let that = this
		await fetch(`https://api.findyour.agency/${p}`)
			.then(res => res.json())
			.then(json => {
				json.data.forEach(el => {
					console.log(el)
					console.log(el[id])
					that.d[el[id]] = {}
					// console.log(el)
					k.forEach(k2 => {
						that.d[el[id]][k2] = el[k2]
					})
				})
			})
			.catch(err => console.log(err))
	}
}

class Core {
	constructor(x) {
		this.setProviders()
		this.setUsers()
		this.setEligibility()
		this.setInventory()
	}

	async setProviders() {
		this.providers = {}
		let that = this
		await fetch('https://api.findyour.agency/provider')
			.then(res => res.json())
			.then(json => {
				json.data.forEach(el => {
					const {
						provider_id,
						provider_name,
						phone,
						description,
						hours,
						days_of_operation,
					} = el
					that.providers[provider_id] = {
						name: provider_name,
						phone,
						desc: description || 'None Provided',
						hours,
						days: days_of_operation || 'MTWRF',
					}

				})
			})
			.catch(err => console.log(err))
	}

	async setUsers() {
		this.users = {}
		let that = this
		await fetch('https://api.findyour.agency/users')
			.then(res => res.json())
			.then(json => {
				json.data.forEach(el => {
					const {
						user_id,
						member_of,
						full_name,
						email,
					} = el
					that.users[user_id] = {
						user_id,
						member_of,
						full_name,
						email,
					}
				})
			})
			.catch(err => console.log(err))
	}

	async setEligibility() {
		this.eligibility = {}
		let that = this
		await fetch('https://api.findyour.agency/eligibility')
			.then(res => res.json())
			.then(json => {
				json.data.forEach(el => {
					const {
						provider_id,
						public_assistance,
						mother_17_or_younger,
						is_client,
						client_of_other,
						trimester,
						residency_requirement,
						must_meet_all_criteria,
					} = el
					that.eligibility[provider_id] = {
						public_assistance,
						mother_17_or_younger,
						is_client,
						client_of_other,
						trimester,
						residency_requirement,
						must_meet_all_criteria,
					}
				})
			})
			.catch(err => console.log(err))
	}

	async setInventory() {
		this.inventory = {}
		let that = this
		await fetch('https://api.findyour.agency/inventory')
			.then(res => res.json())
			.then(json => {
				json.data.forEach(el => {
					const {
						inv_id,
						provider_id,
						inv_count,
						inv_type,
					} = el
					that.inventory[provider_id] = {
						inv_id,
						inv_count,
						inv_type,
					}
				})
			})
			.catch(err => console.log(err))
	}
}