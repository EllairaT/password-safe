import { contextBridge } from "electron"

contextBridge.exposeInMainWorld("lockio", {})
