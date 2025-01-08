import { createContext } from "react";
import { IRequestContext } from "../types";

export const RequestContext =createContext<IRequestContext|undefined>(undefined)