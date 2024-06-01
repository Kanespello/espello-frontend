export const getPath = (value: number): string => {
    const outerRadius = 39;
    const innerRadius = 33; // Adjust inner radius as needed
    const centerX = 39;
    const centerY = 39;

    const valueRatio = value / 10;
    const angle = valueRatio * 2 * Math.PI;

    const outerEndX = centerX + outerRadius * Math.cos(angle - Math.PI / 2);
    const outerEndY = centerY + outerRadius * Math.sin(angle - Math.PI / 2);

    const innerEndX = centerX + innerRadius * Math.cos(angle - Math.PI / 2);
    const innerEndY = centerY + innerRadius * Math.sin(angle - Math.PI / 2);

    const largeArcFlag = angle >= Math.PI ? 1 : 0;

    let pathData = '';

    if (value === 0) {
        pathData = '';
    } else if (value === 10) {
        pathData = `M${centerX} ${centerY - outerRadius}
                    A${outerRadius} ${outerRadius} 0 1 1 ${centerX} ${centerY + outerRadius}
                    A${outerRadius} ${outerRadius} 0 1 1 ${centerX} ${centerY - outerRadius}
                    M${centerX} ${centerY - innerRadius}
                    A${innerRadius} ${innerRadius} 0 1 0 ${centerX} ${centerY + innerRadius}
                    A${innerRadius} ${innerRadius} 0 1 0 ${centerX} ${centerY - innerRadius}Z`;
    } else {
        pathData = `M${centerX} ${centerY - outerRadius}
                    A${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}
                    L${innerEndX} ${innerEndY}
                    A${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${centerX} ${centerY - innerRadius}Z`;
    }

    return pathData;
};

export const getPath2 = (value: number): string => {
    const outerRadius = 30;
    const innerRadius = 24; // Adjust inner radius as needed
    const centerX = 30;
    const centerY = 30;

    const valueRatio = value / 10;
    const angle = valueRatio * 2 * Math.PI;

    const outerEndX = centerX + outerRadius * Math.cos(angle - Math.PI / 2);
    const outerEndY = centerY + outerRadius * Math.sin(angle - Math.PI / 2);

    const innerEndX = centerX + innerRadius * Math.cos(angle - Math.PI / 2);
    const innerEndY = centerY + innerRadius * Math.sin(angle - Math.PI / 2);

    const largeArcFlag = angle >= Math.PI ? 1 : 0;

    let pathData = '';

    if (value === 0) {
        pathData = '';
    } else if (value === 10) {
        pathData = `M${centerX} ${centerY - outerRadius}
                    A${outerRadius} ${outerRadius} 0 1 1 ${centerX} ${centerY + outerRadius}
                    A${outerRadius} ${outerRadius} 0 1 1 ${centerX} ${centerY - outerRadius}
                    M${centerX} ${centerY - innerRadius}
                    A${innerRadius} ${innerRadius} 0 1 0 ${centerX} ${centerY + innerRadius}
                    A${innerRadius} ${innerRadius} 0 1 0 ${centerX} ${centerY - innerRadius}Z`;
    } else {
        pathData = `M${centerX} ${centerY - outerRadius}
                    A${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}
                    L${innerEndX} ${innerEndY}
                    A${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${centerX} ${centerY - innerRadius}Z`;
    }

    return pathData;
};