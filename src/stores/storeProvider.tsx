import { createContext, ReactNode, useContext } from 'react'
import { rootStore } from './rootStore'

const store = new rootStore()
const StoreContext = createContext<rootStore>({} as rootStore)

interface storeProvider {
    children: ReactNode
}

export const StoreProvider = ({ children }: storeProvider) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

/**
 * Hook to access the root store and thus all stores
 * @returns Root Store
 */
export const useStore = () => useContext(StoreContext)