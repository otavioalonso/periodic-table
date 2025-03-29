
import { radialWavefunction } from '../calcs.js'

import Plot from 'react-plotly.js';

const config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
    doubleClick: false,
    displaylogo: false
};

const layout = {
    xaxis: {
        zeroline: false,
        showgrid: false,
    },
    yaxis: {
        showticklabels: false,
        zeroline: false,
        showgrid: false,
    },
    showlegend: true,
    plot_bgcolor: 'rgba(0,0,0,0)',
    paper_bgcolor: 'rgba(0,0,0,0)',
    margin: {
        l: 0,
        r: 0,
        t: 0,
        b: 0,
        pad: 0
      }
}

export default ({ params, style }) => {

    const rValues = Array.from({ length: 300 }, (_, i) => i * 0.1);
    
    const data = params.filter(n => n).map((e) => {
        const yValues = rValues.map(r => r * r * Math.pow(radialWavefunction(e.n, e.l, r), 2));
        
        return {
            x: rValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            line: { shape: 'spline' },
            name: `${e.n}${'spdf'[e.l]}`,
        };
    });

    return (
        <Plot
            data={data}
            layout={layout}
            config={config}
            style={style}
        />
    );
};