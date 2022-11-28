import React from "react";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";

import Table from "../components/table/Table";
import StatusCard from "../components/status-card/StatusCard";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
    mode: "light",
  },
};

const bookingsData = {
  head: ["Booking Id", "Date", "Traveller"],
  body: [
    {
      id: "PNR-1011229433",
      date: "14/11/2020",
      traveller: "Mrinmoy (8240491818)",
    },
    {
      id: "frank iva",
      date: "250",
      traveller: "$12,251",
    },
    {
      id: "anthony baker",
      date: "120",
      traveller: "$10,840",
    },
    {
      id: "frank iva",
      date: "110",
      traveller: "$9,251",
    },
    {
      id: "anthony baker",
      date: "80",
      traveller: "$8,840",
    },
  ],
};

const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCusomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.date}</td>
    <td>{item.traveller}</td>
  </tr>
);

const paymentCycle = {
  head: ["Booking Id", "Payment Amount", "Due Amount"],
  body: [
    {
      id: "PNR-1011229433",
      amount: "15,870",
      due: "1,870",
    },
    {
      id: "frank iva",
      amount: "250",
      due: "$12,251",
    },
    {
      id: "anthony baker",
      amount: "120",
      due: "$10,840",
    },
    {
      id: "frank iva",
      amount: "110",
      due: "$9,251",
    },
    {
      id: "anthony baker",
      amount: "80",
      due: "$8,840",
    },
  ],
};

const renderPaymentHead = (item, index) => <th key={index}>{item}</th>;

const renderPaymentBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.amount}</td>
    <td>{item.due}</td>
  </tr>
);

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <StatusCard
                icon="bx bx-shopping-bag"
                count="1,995"
                title="Total Bookings"
              />
            </div>
            <div className="col-6">
              <StatusCard
                icon="bx bx-dollar-circle"
                count="1,995"
                title="Total income"
              />
            </div>
            <div className="col-6">
              <StatusCard
                icon="bx bx-receipt"
                count="1,995"
                title="New Bookings"
              />
            </div>
            <div className="col-6">
              <StatusCard icon="bx bx-car" count="150" title="Available Cars" />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            {/* chart */}
            <Chart
              options={chartOptions}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card__header">
              <h3>New Bookings</h3>
            </div>
            <div className="card__body">
              <Table
                headData={bookingsData.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={bookingsData.body}
                renderBody={(item, index) => renderCusomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card__header">
              <h3>Payment Cycle</h3>
            </div>
            <div className="card__body">
              <Table
                headData={paymentCycle.head}
                renderHead={(item, index) => renderPaymentHead(item, index)}
                bodyData={paymentCycle.body}
                renderBody={(item, index) => renderPaymentBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
