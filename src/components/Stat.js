import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';



function Stat() {
  const data = [
    { name: "facebook", value: 20 },
    { name: "instgram", value: 80 }
  ];
  const COLORS = ['#0088FE', '#FF8042'];


  const data2 = [
    {
      name: 'Page A',
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      pv: 3800,
      amt: 2500,
    },

    {
      name: 'Page H',
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page I',
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page J',
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page K',
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page L',
      pv: 1398,
      amt: 2210,
    },


  ];
  const data3 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1400,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data4 = [
    {
      name: 'Page A',
      uv: 1000,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];



  return (
    <div class="container py-5" style={{ maxWidth: '1200px', textAlign: "center" }}>
      <div className="col c mt-5" >
        <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} >Graph 01 : NBR Jobs et NBR demandes par mois</h3>


        <div className=" py-3 px-5  d-flex  justify-content-center">
          <div className="col px-5 d-flex justify-content  align-items h-100">
            <div className="col ">
              <div className="card-body p-4">
                <div className="d-flex text-black">

                  <div className="flex-grow-1 ms-3">
                    <AreaChart
                      width={1000}
                      height={300}
                      data={data4}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                      <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} >Graph 02 : NBR Des Demandeur Qui Sont Accepter Pour Un Interviw Par Année </h3>


        <div className=" py-3 px-5  d-flex  justify-content-center">
          <div className="col px-5 d-flex justify-content  align-items h-100">
            <div className="col ">
              <div className="card-body p-4">
                <div className="d-flex text-black">

                  <div className="flex-grow-1 ms-3">
                    <LineChart
                      width={1000}
                      height={300}
                      data={data3}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="pv" stroke='rgb(255, 99, 132)' activeDot={{ r: 8 }} strokeWidth={2} />
                    </LineChart>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} >Graph 03 : NBR Jobs par Chaque Competances</h3>


        <div className=" py-3 px-5  d-flex  justify-content-center">
          <div className="col px-5 d-flex justify-content  align-items h-100">
            <div className="col ">
              <div className="card-body p-4">
                <div className="d-flex text-black">

                  <div className="flex-grow-1 ms-3">
                    <BarChart
                      width={1000}
                      height={300}
                      data={data2}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" stackId="a" stroke='rgb(255, 159, 64)' fill='rgba(255, 159, 64, 0.2)' />
                    </BarChart>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} >Graph 04 : NBR Totale de jobs Et Totale de NBR Demandes </h3>

        <div className=" py-3 px-5  d-flex  justify-content-center">
          <div className="col px-5 d-flex justify-content  align-items h-100">
            <div className="col ">
              <div className="card-body p-4">
                <div className="d-flex text-black">

                  <div className="flex-grow-1 ms-3">
                    <PieChart width={800} height={200}>
                      <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label

                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >

    </div >
  )
}

export default Stat;
