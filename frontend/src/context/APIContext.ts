import { createContext } from "react";
import Api from '../utils/Api.ts'

interface ApiContextType {
     api: Api | undefined;
}

export const APIContext = createContext<ApiContextType | undefined>(undefined);