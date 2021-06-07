import { useState } from "react";
import { ActiveContract, Property } from "types";

const dummyProperties = [
  {
    id: 1,
    alias: "Propiedad X",
    address: "Calle X 123 esquina Y",
    municipal_registry: "111111111",
    isRented: true,
  },
  {
    id: 2,
    alias: "Propiedad Y",
    address: "Calle X 125",
    municipal_registry: "2222222222",
    isRented: true,
  },
  {
    id: 3,
    alias: "Propiedad Z",
    address: "Calle Y 333",
    municipal_registry: "3333333333",
    isRented: false,
  },
];

const dummyContractData = {
  id: 1,
  created_at: new Date("01-01-2020T10:00:00-03:00Z"),
  ends_at: new Date("01-01-2021T10:00:00-03:00Z"),
  user: {
    id: 1,
    first_name: "Juan",
    last_name: "Perez",
  },
  rents: [
    {
      amount: 10000,
      month: 1,
      year: 2020,
      created_at: new Date("01-01-2020T10:00:00-03"),
      status: "payed",
    },
    {
      amount: 10000,
      month: 2,
      year: 2020,
      created_at: new Date("01-02-2020T10:00:00-03"),
      status: "partially_paid",
    },
    {
      amount: 1000,
      month: 3,
      year: 2020,
      created_at: new Date("01-03-2020T10:00:00-03"),
      status: "not_paid",
    },
  ],
  payments: [
    {
      amount: 5000,
      month: 1,
      year: 2020,
      created_at: new Date("01-03-2020T10:00:00-03"),
    },
    {
      amount: 5000,
      month: 1,
      year: 2020,
      created_at: new Date("15-03-2020T10:00:00-03"),
    },
    {
      amount: 5000,
      month: 2,
      year: 2020,
      created_at: new Date("15-03-2020T10:00:00-03"),
    },
    {
      amount: 3000,
      month: 2,
      year: 2020,
      created_at: new Date("15-03-2020T10:00:00-03"),
    },
  ],
};

const dummyNotes = [
  {
    id: 1,
    text: "Hablar con Juan Perez",
    created_at: new Date("15-03-2020T10:00:00-03"),
  },
];

const Properties = () => {
  const [properties, setProperties] = useState<Property>(dummyProperties[0]);
  const [activeContractData, setActiveContractData] =
    useState<ActiveContract>(dummyContractData);
  const [propertyNotes, setPropertyNotes] =
    useState<ActiveContract>(dummyNotes);

  return (
    <>
      <div className="flex items-center w-full p-8 space-x-8">
        <div className="flex flex-col bg-white rounded-2xl h-96 w-80"></div>
        <div className="flex flex-grow bg-gray-400 h-80"></div>
      </div>
      <div className="flex items-center justify-center w-full p-8 space-x-16">
        <div className="flex flex-col bg-white rounded-2xl h-96 w-80"></div>
        <div className="flex flex-col bg-white rounded-2xl h-96 w-80"></div>
        <div className="flex flex-col bg-white rounded-2xl h-96 w-80"></div>
      </div>
      <div className="flex items-center justify-center w-full p-8 space-x-16">
        <div className="flex flex-col flex-grow-0 bg-white rounded-2xl h-36 w-120"></div>
      </div>
    </>
  );
};

export default Properties;
