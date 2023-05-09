import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "../styles/LineChartStyle.css"

export default function Graph({info}) {
    let d = []
    let h = []
    for (let index = 0; index < 10; index++) {
        d.push(0);
    }
    for (let index = 0; index < info.length; index++) {
        d.push(info[index][1] * 100);
    }
    for (let index = 0; index < 10; index++) {
        d.push(0);
    }
    for (let index = 0; index < info.length + 20; index++) {
        h.push('');
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        },
        animations: {
            tension: {
                duration: 500,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 0
            }
        }
    };

    const data = {
        labels: h,
        datasets: [{
            data: d,
            backgroundColor: 'rgba(0, 0, 0, 1)',
            fill: true,
            borderColor: 'rgb(101, 101, 101)',
            tension: 0.1,
        }]
    };

    return (
        <div className='LineChartStyle'>
            <Line options={options} data={data} />
        </div>
    )
}