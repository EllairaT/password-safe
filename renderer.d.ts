export interface IDB {
	start: () => Promise<void>
}

declare global {
	interface Window {
		server: IDB
	}
}
