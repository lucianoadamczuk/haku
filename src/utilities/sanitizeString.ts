export function sanitizeString(input: string): string {
	// Remove accents
	const removeAccents = (input: string): string =>
		input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

	// Transform to lowercase and remove unwanted characters
	return removeAccents(input)
		.toLowerCase() // Convert to lowercase
		.replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except spaces and hyphens
		.trim() // Remove spaces at the beginning and end
		.replace(/\s+/g, '-') // Replace multiple spaces with a single hyphen
		.replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
}
