async function getKitty(t) {
	const url = `https://api.thecatapi.com/v1/images/search`
	const reqObject = {
		method: "GET",
		// mode: "no-cors",
		headers: {
			"x-api-key": "0d6048e1-0856-45c5-85c0-56eddf7b0890",
			"Content-Type": "application/json",
		},
	}

	const resp = await fetch(url, reqObject)
	.then(res => res.json())
	.then(res => res[0])
	return resp
}