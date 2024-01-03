import { useState } from "react";
import { notifications } from "@mantine/notifications";

const useNotification = () => {
	const [notificationId, setNotificationId] = useState<number | null>(
		null
	);

	const notify = (options: any) => {
		const id = parseInt(notifications.show(options));
		setNotificationId(id);
		return id;
	};

	const updateNotification = (options: any) => {
		if (notificationId !== null) {
			notifications.update({
				id: notificationId,
				...options,
			});
		}
	};

	return { notify, updateNotification };
};

export default useNotification;
