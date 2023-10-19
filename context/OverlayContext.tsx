import React, { useContext, useState, ReactNode } from "react";
import styles from "../styles/components/atoms/PokemonDetails.module.css"

interface OverlayContextProps {
  showOverlay: (content: ReactNode) => void;
  hideOverlay: () => void;
}
interface OverlayProviderProps {
  children: ReactNode;
}
const OverlayContext = React.createContext<OverlayContextProps | undefined>(undefined);

export const OverlayProvider: React.FC<OverlayProviderProps> = ({ children }) => {
  const [overlayContent, setOverlayContent] = useState<ReactNode | null>(null);

  const showOverlay = (content: ReactNode) => {
    setOverlayContent(content);
  };

  const hideOverlay = () => {
    setOverlayContent(null);
  };

  return (
    <OverlayContext.Provider value={{ showOverlay, hideOverlay }}>
      {children}
      {overlayContent && <Overlay content={overlayContent} onClose={hideOverlay} />}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error("useOverlay must be used within an OverlayProvider");
  }
  return context;
};

interface OverlayProps {
  content: ReactNode;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ content, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  );
};
