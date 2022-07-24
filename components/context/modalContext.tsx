import React, { Component } from "react";
import * as portals from 'react-reverse-portal'

interface modalContext {
  portalNode: portals.HtmlPortalNode<Component<any>> | null;
  shouldRenderModal:boolean;
}
const modalContext = React.createContext<modalContext|null>(null);
export default modalContext