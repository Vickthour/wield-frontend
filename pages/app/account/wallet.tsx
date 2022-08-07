import React, { ReactElement } from 'react'
import AccountLayout from '@components/layouts/AccountLayout';
import { Card } from '@components/base';
import { WalletInfoCard } from '@components/inc';

const Wallet = () => {
  return (
    <>
    <Card
      px={"xl"}
      py={"lg"}
      className=" col-span-1 md:col-span-9 lg:col-span-12"
    >
      <h1 className="text-xl font-semibold">Wallet</h1>
    </Card>
    <WalletInfoCard/>
      </>
  );
}

Wallet.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};
export default Wallet