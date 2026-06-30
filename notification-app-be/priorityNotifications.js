const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDAzMDUxMjQ3MDE0QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc4MjgxMTExNywiaWF0IjoxNzgyODEwMjE3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMDFkN2JjYmItYjNmNy00Y2IyLWJiOGEtNzJiNmM0NzE0NzFlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3V5YXNoIGJhbHNhaGViIGxhaHVyZSIsInN1YiI6IjY2YTIxMDRhLTU1NDgtNDUxMC05OTQ4LWI0ODJjODk4MTliNSJ9LCJlbWFpbCI6IjI0MDMwNTEyNDcwMTRAcGFydWx1bml2ZXJzaXR5LmFjLmluIiwibmFtZSI6InN1eWFzaCBiYWxzYWhlYiBsYWh1cmUiLCJyb2xsTm8iOiIyNDAzMDUxMjQ3MDE0IiwiYWNjZXNzQ29kZSI6ImNKcWFFQiIsImNsaWVudElEIjoiNjZhMjEwNGEtNTU0OC00NTEwLTk5NDgtYjQ4MmM4OTgxOWI1IiwiY2xpZW50U2VjcmV0IjoiamRWTXVrUnRkUnlUTXFlUiJ9.z1ykDNXhKcRDd1DptoSR8fYY6Em20EA7mGQ6_BCEF68";

const priority = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function getTopNotifications(limit = 10) {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const notifications = response.data.notifications;

    notifications.sort((a, b) => {
      if (priority[b.Type] !== priority[a.Type]) {
        return priority[b.Type] - priority[a.Type];
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    return notifications.slice(0, limit);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

getTopNotifications().then((data) => console.log(data));