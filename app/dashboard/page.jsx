import React from "react";
import Card from "../ui/dashboard/card/Card";
import Transactions from "../ui/dashboard/transactions/Transactions";
import Chart from "../ui/dashboard/chart/Chart";
import RightBar from "../ui/dashboard/rightbar/RightBar";

const Dashboard = () => {
  return (
    <div className="flex justify-between gap-5">
      <div className="flex-3 flex-col">
        <div className="flex gap-5 mt-4 justify-between">
          <Card />
          <Card />
          <Card />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Transactions />
          <Chart />
        </div>
      </div>

      <div className="mt-4 flex-1">
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
