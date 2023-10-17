import React from 'react';
import styles from "../../styles/components/atoms/typeCard.module.css"
type TypeCardProps = {
    type: string;
    variant?: "round" | "banner" | ""
};

const TypeCard: React.FC<TypeCardProps> = ({ type, variant = "" }) => {
    const iconURI= `/typesIcons/${type}.svg`
    const typeBackground = `${type}`
    return (
        <div className={`${styles.container} ${styles[typeBackground]} ${styles[variant]}`}>

            <img src={iconURI} alt="type icon" width="25"/>
            <h4>{type}</h4>

        </div>
    );
};

export default TypeCard;