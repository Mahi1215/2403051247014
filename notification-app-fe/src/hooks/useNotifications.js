import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(page = 1, limit = 10, type = "") {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchNotifications(page, limit, type);

        setNotifications(data.notifications || []);
        setTotal(data.total ?? 0);
        setTotalPages(data.totalPages ?? 1);
      } catch (err) {
        setError(err.message || "Failed to fetch notifications");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [page, limit, type]);

  return {
    notifications,
    loading,
    error,
    total,
    totalPages,
  };
}