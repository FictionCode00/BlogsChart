import { useState } from 'react'
import { AllCountries } from '../services/apiService'
import { useEffect } from 'react'
import { Chart } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
const Home = () => {
    const [countries, setCountries] = useState()
    const getCountriesData = () => {
        AllCountries().then(response => {
            if (response.status === 200) {
                console.log(response.data.data)
                setCountries(response.data.data)
            }
            // setCountries

        })
    }

    const option = {
        plugins: {
            drawHorizontalLine: {
                value: 800000, // Adjust this value to set the y-value where you want the horizontal line
                color: 'red', // Color of the horizontal line
                lineWidth: 2, // Line width of the horizontal line
            },
        },
    }
    const drawHorizontalLinePlugin = {
        id: 'drawHorizontalLine',
        afterDraw: (chart) => {
            const { ctx, scales, chartArea } = chart;

            if (!scales || !scales.y) return;

            const value = option.plugins.drawHorizontalLine.value;
            const yPixel = scales.y.getPixelForValue(value);

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(chartArea.left, yPixel);
            ctx.lineTo(chartArea.right, yPixel);
            ctx.strokeStyle = option.plugins.drawHorizontalLine.color;
            ctx.lineWidth = option.plugins.drawHorizontalLine.lineWidth;
            ctx.stroke();
            ctx.restore();
        },
    };
    Chart.register(drawHorizontalLinePlugin);



    const labels = countries?.map((country) => country.country)
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: countries?.map((country) => country.income),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };


    useEffect(() => {
        getCountriesData()
    }, [])
    return (
        <>
            <section class="graph-country">
                <div class="container">
                    <h3>Our Revenues</h3>
                    <div class="inner-graph">
                        {/* <img src={require('../assets/images/graph.png')} alt="" /> */}
                        {/* <div id="myChart"></div> */}
                        <Bar data={data} options={option} />
                    </div>
                    <div class="graph-text-desc">
                        <h5>Canada</h5>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Bring to the table win-win survival strategies to ensure proactive domination.
                            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Bring to the table win-win survival strategies to ensure proactive domination.
                            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Bring to the table win-win survival strategies to ensure proactive domination.
                            <a href="#"> Read more</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;