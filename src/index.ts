declare const global: { mm: object; };

export default function get<T>(key: string, default_value?: T) {
	const mm = global.mm;
	return (mm && mm[key] as T) || default_value;
}
