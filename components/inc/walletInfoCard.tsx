import { Card, Modal } from "@components/base";
import {
  ArrowAngledDown,
  Coin,
  Widthdraw,
  Plus,
  ArrowAngledUp,
} from "@components/icons";
import React from "react";
import { Convert, Deposit, Transfer, Withdraw } from "./modals";

type modal = null | "deposit" | "withdraw" | "convert" | "transfer";
type action = {
  label: string;
  icon: React.ReactNode;
  stateId: Exclude<modal, null>;
};
const actions: action[] = [
  {
    label: "Deposit",
    icon: <ArrowAngledDown />,
    stateId: "deposit",
  },
  {
    label: "Withdraw",
    icon: <Widthdraw />,
    stateId: "withdraw",
  },
  {
    label: "Convert",
    icon: <Plus size={"md"} />,
    stateId: "convert",
  },
  {
    label: "Transfer Coins",
    icon: <ArrowAngledUp className="text-white" />,
    stateId: "transfer",
  },
];

const WalletInfoCard = () => {
  const [activeCurrency, setActiveCurrency] = React.useState("USD");
  const [modal, setModal] = React.useState<modal>(null);
  return (
    <>
      <Card
        px={"xl"}
        py={"lg"}
        className="hello col-span-1 md:col-span-9 lg:col-span-12"
      >
        <div className="grid grid-cols-3 gap-6">
          <DetailCard>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-400">wallet Balance</h3>

              <select
                value={activeCurrency}
                onChange={(e) => setActiveCurrency(e.target.value)}
                className="rounded-full border border-gray-200 bg-gray-50 py-2 px-0.5 text-sm  text-gray-900 outline-none focus:border-orange-300 focus:ring-orange-300"
              >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <div className="font-roboto text-3xl font-bold">₦245,000.00</div>
          </DetailCard>
          <DetailCard>
            <div className="flex">
              <h3 className="text-lg text-gray-400">Coin Balance</h3>
            </div>
            <div className=" item-center flex gap-3 text-3xl font-bold">
              <Coin size="lg" />
              2000
            </div>
          </DetailCard>
          <DetailCard>
            <div className="flex items-center gap-2">
              <Coin size="md" />
              <h3 className="text-lg text-gray-400">Coin Value</h3>
            </div>
            <div className="text-3xl font-bold">₦73,000.00</div>
          </DetailCard>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-6">
          {actions.map(({ stateId, ...other }, index) => {
            const action = () => setModal(stateId);
            return <ActionCard key={index} {...other} action={action} />;
          })}
        </div>
        <Modal open={!!modal} onClose={() => setModal(null)}>
          {modal === "deposit" && <Deposit />}
          {modal === "withdraw" && <Withdraw />}
          {modal === "convert" && <Convert />}
          {modal === "transfer" && <Transfer />}
        </Modal>
      </Card>
      <HistoryTable />
    </>
  );
};

export default WalletInfoCard;

const DetailCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card
      py="lg"
      px="xl"
      className=" relative flex min-h-[150px] flex-col gap-6 overflow-hidden rounded-3xl bg-peach100"
    >
      <div className="z-10 space-y-6">{children}</div>
      <div className="z-1 absolute right-0 h-[250px] w-[180px] translate-x-1/3 -translate-y-1/4 rounded-[50%] bg-peach300"></div>
    </Card>
  );
};

const ActionCard = ({
  label,
  icon,
  action,
}: {
  label: string;
  icon: React.ReactNode;
  action: () => void;
}) => {
  return (
    <button
      className="flex items-center justify-between rounded-xl bg-peach300 px-4 py-3 text-lg font-semibold"
      onClick={action}
    >
      {label}
      <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-primaryColor">
        {icon}
      </div>
    </button>
  );
};

const dummyHistory = [
  {
    reference: "12345",
    description: "Transfer Coins to @JohnDoe",
    date: "April 4, 2022",
    status: "success",
    amount: "-200",
  },
  //generate more history items
  {
    reference: "23456",
    description: "Deposit money to wallet",
    date: "April 1, 2022",
    status: "success",
    amount: "₦100,000.00",
  },
  {
    reference: "34567",
    description: "Buy Coins from wallet",
    date: "May 6, 2022",
    status: "pending",
    amount: "₦100,000.00",
  },
];

const HistoryTable = () => {
  return (
    <Card
      px={"xl"}
      py={"lg"}
      className="col-span-1  md:col-span-9 lg:col-span-12"
    >
      <h1 className="bold text-xl">History</h1>
      <table className="w-full border-collapse">
        <thead >
          <tr>
            {Object.keys(dummyHistory[0]).map((key, i) => {
              return (
                <th key={i} className="text-left font-semibold capitalize text-gray-400">
                  {key}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="mt-3">
          {dummyHistory.map((history, i) => {
            return (
              <tr key={i} className="font-medium">
                {Object.values(history).map((item, i) => (
                  <td key={i} className={`${item==="success"?"text-green-500":'' } capitalize`}>{item}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};
