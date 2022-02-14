async function fetchData() {
	const res = await fetch('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST');
	const record = await res.json();
	console.log('🚀 ~ file: script.js ~ line 4 ~ fetchData ~ record', record);
	const date = new Date(record.lastUpdatedAtSource);
	const detailArr = record.detail;
	const html = detailArr
		.map(
			(city) =>
				`
        <tr>
          <td >${city.name}</td>
          <td >${city.cases}</td>
          <td >${city.death}</td>
        </tr>
    `,
		)
		.join('');
	const tableContent = document.querySelector('#tableContent');
	const dateElement = document.querySelector('#date');
	tableContent.innerHTML = html;
	dateElement.innerHTML = 'Update time: ' + date.toLocaleDateString('vi-VN');
}
fetchData();
