document.addEventListener('DOMContentLoaded', function () {
    // Simulated CSV content (replace with the actual content of your CSV file)
    const csvData = `
    Team Name,Rating,Flag
    INDIA,100,flags/flag_a.png
    ENGLAND,90,flags/flag_b.png
    NEW ZEALAND,88,flags/flag_c.png
    BANGLADESH,82,flags/flag_d.png
    AUSTRALIA,87,flags/flag_e.png
    PAKISTAN,89,flags/flag_f.png
    SOUTH AFRICA,86,flags/flag_g.png
    SRILANKA,84,flags/flag_h.png
    WEST INDIES,83,flags/flag_i.png
    AFGANISTAN,81,flags/flag_j.png
    `.trim();

    // Parse the CSV data
    const rows = csvData.split('\n').slice(1); // Skip header row
    const teams = rows.map(row => {
        const [teamName, rating, flag] = row.split(',');
        return { 
            teamName: teamName.trim(), 
            rating: parseInt(rating.trim()), 
            flag: flag.trim() 
        };
    });

    // Sort teams by rating in descending order
    teams.sort((a, b) => b.rating - a.rating);

    // Populate the table with sorted data
    const tableBody = document.querySelector('#pointsTable tbody');
    teams.forEach((team, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${team.flag}" alt="${team.teamName} flag" style="width: 30px; height: 20px; margin-right: 10px;">${team.teamName}</td>
            <td>${team.rating}</td>
        `;
        tableBody.appendChild(tr);
    });
});


