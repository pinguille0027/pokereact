import React from 'react';
import styles from "../../styles/components/atoms/typeCard.module.css"
type TypeCardProps = {
    type: string;
};

const TypeCard: React.FC<TypeCardProps> = ({ type }) => {
    const iconURI= `../../typesIcons/${type}.svg`
    return (
        <div className={`${styles.container} ${`styles.${type}`}`}>

            <img src={iconURI} alt="type icon" width="50"/>
            <h4>{type}</h4>

        </div>
    );
};

export default TypeCard;