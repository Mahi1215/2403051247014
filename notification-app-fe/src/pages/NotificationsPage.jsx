import { useState } from "react";
import {
  Alert,
  Badge,
  Box,
  CircularProgress,
  Divider,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { NotificationCard } from "../components/NotificationCard";
import { NotificationFilter } from "../components/NotificationFilter";
import { useNotifications } from "../hooks/useNotifications";

export function NotificationsPage() {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  const {
    notifications,
    totalPages,
    loading,
    error,
  } = useNotifications(
    page,
    10,
    filter === "All" ? "" : filter
  );

  const unreadCount = notifications.length;

  const handleFilterChange = (newFilter) => {
    if (!newFilter) return;

    setFilter(newFilter);
    setPage(1);
  };

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ maxWidth: 720, mx: "auto", px: 2, py: 4 }}>
      <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
        <Badge badgeContent={unreadCount} color="primary">
          <NotificationsIcon />
        </Badge>

        <Typography variant="h5" fontWeight="bold">
          Notifications
        </Typography>
      </Stack>

      <Divider sx={{ mb: 3 }} />

      <NotificationFilter
        value={filter}
        onChange={handleFilterChange}
      />

      <Box mt={3} />

      {loading && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}

      {!loading && error && (
        <Alert severity="error">
          Failed to load notifications.
        </Alert>
      )}

      {!loading && !error && notifications.length === 0 && (
        <Alert severity="info">
          No notifications found.
        </Alert>
      )}

      {!loading && !error && notifications.length > 0 && (
        <Stack spacing={2}>
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.ID}
              notification={notification}
            />
          ))}
        </Stack>
      )}

      {!loading && totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      )}
    </Box>
  );
}