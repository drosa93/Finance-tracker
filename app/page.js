"use client";
import {useState} from "react";
import { currencyFormatter } from "./lib/utils";
import ExpenseCategoryItem from "./components/expenseItem";
import {Chart as ChartJs, ArcElement, Legend, Tooltip} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import Modal from "./components/modal";

ChartJs.register(ArcElement, Legend, Tooltip);

const DUMMY_DATA = [
  {
    id: 1,
    title: "Entertainment",
    total: 500,
    color: "#000",
  },
  {
    id: 2,
    title: "Food",
    total: 200,
    color: "#009",
  },
  {
    id: 3,
    title: "Transport",
    total: 100,
    color: "#007",
  },
  {
    id: 4,
    title: "Health",
    total: 300,
    color: "#003",
  },
]

export default function Home() {

  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
    {/*Modal */}
    <Modal show={modalIsOpen} onClose={setModalIsOpen}>
      <h3>Hello World</h3> 
    </Modal>

    <main className="container max-w-2xl px-6 mx-auto">
      <section className="py-3">
        <small className="text-grey-400 text-md"> My Balance </small>
        <h2 className="text-4xl font-bold">{currencyFormatter(1000)}</h2>
      </section>
   
      <section className="flex items-center gap-2 py-3">
        <button  onClick={() => {setModalIsOpen(true)}} className="btn btn-primary">+expenses</button>
        <button className="btn btn-primary-outline">+income</button>
      </section>

      {/*expenses*/}
      <section className="py-6">
        <h3 className="text-2xl">My Expenses</h3>
        <div className="flex flex-col gap-4 mt-6">
          {DUMMY_DATA.map(expense => {
            return ( <ExpenseCategoryItem
              color={expense.color}
              title={expense.title}
              total={expense.total} />
              )
            })}
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-6">
        <h3 className="text-2xl">stats</h3>
        <div className="w-1/2 mx-auto">
          <Doughnut data={{
            labels: DUMMY_DATA.map(expense => expense.title),
            datasets: [
              {
                label: "Expenses",
                data: DUMMY_DATA.map(expense => expense.total),
                backgroundColor: DUMMY_DATA.map(expense => expense.color),
                bolderColor: ['#fff'],
                borderWidth: 1,
              }
            ]
          }} />
        </div>
      </section>
    </main>
    </>
  );
}
