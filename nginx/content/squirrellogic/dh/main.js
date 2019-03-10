window.onload = () => {
	const cbDiv = document.getElementById('cb-group');
	
	cbValues.forEach(el => {
		cbDiv.innerHTML += `<div><input type="checkbox" name="stack" value="${el}" id="${el}"><label for="${el}">${el}</label></div>`;
	})

	document.getElementById("format-btn").addEventListener("click", (e) => {
		const submDiv = document.getElementById('submission-group');
		const output = document.getElementById("output");
		let fail = false;
		const warns = [];
		
		const valuesObj = getValues(submDiv)
		const checked = getChecked(cbDiv)
		// do checks

		if (!/^[^@].*?#\d{4}$/g.test(valuesObj.uname)) {
			fail = true
			warns.push("Discord User in invalid format. Should be: NAME#0000")
		}
		if (!valuesObj.pname.length) {
			fail = true
			warns.push("Must include a Project Name")
		}
		if (!checked.length) {
			fail = true
			warns.push("At least 1 Stack option must be selected")
		}
		if (!valuesObj.surl.length && !valuesObj.durl.length) {
			fail = true
			warns.push("Must include at least 1 showcase URL")
		}

		if (fail == true) {
			alert(warns.join('\n'))
		} else {
			const useSurl = buildURLBlock(valuesObj.surl);
			const useDurl = buildURLBlock(valuesObj.durl);

			// console.log(useDurl)

			let ret = `@${valuesObj.uname}
			[${checked.join(' - ')}]
			
			${valuesObj.pname}
			\`\`\`
			${valuesObj.desc}
			\`\`\`
			${useSurl}
			${useDurl}
			`
			output.innerText = ret.replace(/\t/g, '');
		}
		
	})
}

const buildURLBlock = (val) => {
	let ret = '';
	if (!/^http/g.test(val)) {
		if (val.length > 0) {
			ret += `Live demo:
			<http://${val}>`
		}
	} else {
		ret += `Live demo:
			<${val}>`
	}
	return ret;
}

const getChecked = (parent) => {
	const ret = [];
	const allChecked = parent.querySelectorAll('input:checked');

	for (let i = 0; i < allChecked.length; i++) {
		ret.push(allChecked[i].value)
	}

	return ret;
}

const getValues = (parent) => {
	const ret = {};
	const allTextInputs = parent.querySelectorAll('input[type=text]');
	const allTextareas = parent.querySelectorAll('textarea');

	for (let i = 0; i < allTextInputs.length; i++) {
		ret[allTextInputs[i].name] = allTextInputs[i].value
	}

	for (let i = 0; i < allTextareas.length; i++) {
		ret[allTextareas[i].name] = allTextareas[i].value
	}

	return ret;
}
