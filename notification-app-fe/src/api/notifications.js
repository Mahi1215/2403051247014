import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDAzMDUxMjQ3MDE0QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc4MjgxNDUxNywiaWF0IjoxNzgyODEzNjE3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNmFlMjIyMmItY2U5OS00NGM4LTk0M2ItMDU5ZWU1YzAwZWVlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3V5YXNoIGJhbHNhaGViIGxhaHVyZSIsInN1YiI6IjY2YTIxMDRhLTU1NDgtNDUxMC05OTQ4LWI0ODJjODk4MTliNSJ9LCJlbWFpbCI6IjI0MDMwNTEyNDcwMTRAcGFydWx1bml2ZXJzaXR5LmFjLmluIiwibmFtZSI6InN1eWFzaCBiYWxzYWhlYiBsYWh1cmUiLCJyb2xsTm8iOiIyNDAzMDUxMjQ3MDE0IiwiYWNjZXNzQ29kZSI6ImNKcWFFQiIsImNsaWVudElEIjoiNjZhMjEwNGEtNTU0OC00NTEwLTk5NDgtYjQ4MmM4OTgxOWI1IiwiY2xpZW50U2VjcmV0IjoiamRWTXVrUnRkUnlUTXFlUiJ9.uC5_6c2Wt2iXlPaFIBGxG2FBHayjTmpXpphZ6gIp4Wk";

const API =
  "http://4.224.186.213/evaluation-service/notifications";

export async function fetchNotifications(
  page = 1,
  limit = 10,
  notificationType = ""
) {
  const response = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    params: {
      page,
      limit,
      notification_type: notificationType || undefined,
    },
  });

  return response.data;
}