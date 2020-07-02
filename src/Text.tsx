import React from 'react';

type Props = {
    t: string;
};

const Text = ({ t }: Props) => {
    return <div>{t}</div>;
};

export default Text;
