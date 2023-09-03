import { useRef, useState } from 'react'
import { AllCountries } from '../services/apiService'
import { useEffect } from 'react'
import { Chart } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import { Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { setOptions } from 'react-chartjs-2/dist/utils';
const Home = () => {
    const animatedComponents = makeAnimated();
    const [countries, setCountries] = useState([])
    const [year, setYear] = useState('2023')
    const [options, setOptions] = useState([])
    const [mainCountry, setMainCountry] = useState({})
    const [graphCountries, setGraphCountries] = useState([mainCountry])
    const dynamicValueRef = useRef(mainCountry);
    const [years, setYears] = useState([])
    const [countryOption, setCountryOption] = useState('')
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [designations, setDesignations] = useState([])
    const [designation, setDesignation] = useState("")
    const getCountriesData = () => {
        AllCountries().then(response => {
            if (response.status === 200) {

                if (designation !== "") {
                    setCountries(response.data.data.filter((country) => (country.year == year && country.designation == designation)))
                }
                else {
                    setCountries(response.data.data.filter((country) => (country.year == year)))
                }

                setYears([...new Set(response.data.data.map((country) => country.year))])
                setDesignations([...new Set(response.data.data.map((country) => country.designation))])


            }
        })
    }

    const selectedMainCountry = (e) => {
        setCountryOption(e.target.value)
        setSelectedOptions([])
        graphCountries?.splice(0, graphCountries.length)
        if (e.target.value) {
            let countryObj = JSON.parse(e.target.value)
            let country = [...graphCountries]

            country.unshift(countryObj)
            setGraphCountries(country)
            setMainCountry(countryObj)
            let optList = []
            countries.map((country) => {
                if (country.country !== countryObj.label) {
                    let obj = {}
                    obj['value'] = country.income
                    obj['label'] = country.country
                    optList.push(obj)
                }

            })
            setOptions(optList)
        }
    }


    const option = {

        scales: {
            x: {
                grid: {
                    display: false,
                    // categorySpacing: 0.2, // Adjust the width of the grid columns
                },
            },
            y: {
                ticks: {
                    callback: value => `$ ${value}`,
                }
            }
        },
        plugins: {
            drawHorizontalLine: {
                // value:mainCountry.income, // Adjust this value to set the y-value where you want the horizontal line
                color: 'red', // Color of the horizontal line
                lineWidth: 2, // Line width of the horizontal line
            },
            legend: {
                display: false //This will do the task
            },
        },


    }



    useEffect(() => {
        dynamicValueRef.current = Number(mainCountry.value)
        const drawHorizontalLinePlugin = {
            id: 'drawHorizontalLine',
            afterDraw: (chart) => {
                const { ctx, scales, chartArea } = chart;

                if (!scales || !scales.y) return;

                const value = dynamicValueRef.current || 0;
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

        return () => {
            // Unregister the plugin when the component unmounts
            Chart.unregister(drawHorizontalLinePlugin);
        };
    }, [mainCountry])



    const handleChange = (selected) => {
        let countries = [graphCountries[0]]
        setSelectedOptions(selected)
        selected.map((country) => countries.includes(country) ? '' : countries.push(country))
        setGraphCountries(countries);

    }

    const labels = graphCountries?.map((country) => country.label)
    const data = {
        labels: labels,
        datasets: [{
            label: '',
            data: graphCountries?.map((country) => country.value),
            barPercentage: 0.3,
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
        },
        ]
    };




    useEffect(() => {
        getCountriesData()
    }, [year, designation])


    return (
        <>
            <section class="graph-country">
                <div class="container">
                    <h3>Our Revenues</h3>
                    <div class="inner-graph">
                        {/* <img src={require('../assets/images/graph.png')} alt="" /> */}
                        {/* <div id="myChart"></div> */}
                        <div className="filters-graph">
                            <Row>

                                
                                <Col className='slct' md="2">
                                    <label>Select Country</label>
                                    <select value={countryOption} onChange={selectedMainCountry}>
                                        <option value="">Select...</option>
                                        {designation&&(countries && countries.map((country) =>
                                            <option value={JSON.stringify({ "value": country.income, "label": country.country, "description": country.description })}>{country.country}</option>
                                        ))}

                                    </select>
                                </Col>
                                <Col className='slct multi-select' md="6">
                                <label>Select Options</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        isMulti
                                        value={selectedOptions}
                                        options={options}
                                        onChange={handleChange}
                                        components={animatedComponents}
                                    />
                                </Col>

                                <Col className='slct' md="2">
                                <label>Select Year</label>
                                    <select onChange={(e) => { setSelectedOptions([]); setCountryOption(''); setGraphCountries([]); setYear(e.target.value) }}>
                                        {years && years.map((year, i) =>
                                            <option value={year}>{year}</option>
                                        )}

                                    </select>
                                </Col>
                                <Col className='slct' md="2">
                                <label>Select Designations</label>
                                    <select onChange={(e) => { setSelectedOptions([]); setCountryOption(''); setGraphCountries([]); setDesignation(e.target.value) }}>
                                        <option value="">Select...</option>
                                        {designations && designations.map((designation) =>
                                            <option value={designation}>{designation}</option>
                                        )}

                                    </select>
                                </Col>
                            </Row>
                        </div>

                        {/* {Object.keys(mainCountry).length !== 0 ? */}
                        <Bar data={data} options={option} />
                        {/* :
                            <img src={require('../assets/images/graph.png')} alt="" />
                        } */}
                    </div>
                    <div class="graph-text-desc">
                        <h5>{mainCountry.label}</h5>
                        <p>{mainCountry.description}
                            {/* <a href="#"> Read more</a> */}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;