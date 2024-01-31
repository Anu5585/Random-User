const url = 'https://randomuser.me/api/';

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if 'results' array exists and has at least one item
    if (data.results && data.results.length > 0) {
      const userGender = data.results[0].gender;
      const userName = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;

      // Displaying information
      const userInfoDiv = document.getElementById('user-info');
      userInfoDiv.innerHTML = `<p>Gender: ${userGender}</p><p>Name: ${userName}</p>`;
    } else {
      console.error('No user data found.');
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
