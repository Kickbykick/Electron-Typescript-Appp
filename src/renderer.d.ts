export interface IElectronAPI {
    doThing: () => void,
}

declare global {
    interface Window {
        electron: IElectronAPI
    }
}