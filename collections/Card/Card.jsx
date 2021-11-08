// The Card to be exported goes here

import { CardContainer } from  "./elements"

export const Card = ({ ...props }) => {
    return <CardContainer { ...props } />
};