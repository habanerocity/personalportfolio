import React from 'react';
import classes from './RenderToolList.module.scss';

import toolsInfoData from '../data/toolsInfoData';
import ToolIcons from './ui/ToolIcons';

const RenderToolList = () => {

return (
<div className="d-flex flex-column">
    <h2 className={classes.heading}>Tools I Use</h2>
    <ul className={`d-flex mb-2 p-0 w-100 flex-wrap ${classes.tool__list}`}>
    {toolsInfoData.map(ToolIcons)}
    </ul>
</div>
);
}

export default RenderToolList;