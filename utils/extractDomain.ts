export const extractDomain = (url: string) => {
	// remove "https://" if present and convert to lowercase
	const cleanedUrl = url?.replace(/^https?:\/\//i, "").toLowerCase();

	// Check if cleanedUrl is not undefined or null
	if (!cleanedUrl) {
		return "";
	}

	// split the cleaned URL by '/' and return the first part (the domain)
	const domainParts = cleanedUrl?.split("/");
	const domain = domainParts[0];

	return domain;
};
