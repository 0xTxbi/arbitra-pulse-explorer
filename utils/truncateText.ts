export function truncateText(text: string, maxChars: number): string {
	if (text.length <= maxChars) {
		return text;
	}
	return `${text.substring(0, maxChars - 3)}...`;
}
