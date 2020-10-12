import React from 'react';
import { useParams } from 'react-router-dom';
import * as dataService from './dataService';

import { TopBar } from 'components/common/TopBar/TopBar';
import { Footer } from 'components/common/Footer/Footer';
import { InventoryView } from './InventoryView/InventoryView';
import { LoadingView } from 'components/common/LoadingView/LoadingView';

interface IInventoryInfo {}
export const DealershipInventoryDetailActivity: React.FC<IInventoryInfo> = () => {
  const { dealershipId } = useParams();
  const queryTuple = dataService.useDealershipDetailActivityQuery(dealershipId);

  if (queryTuple.loading) {
    return <LoadingView></LoadingView>;
  }

  return (
    <div className="page-container">
      <TopBar></TopBar>

      {!queryTuple.loading && queryTuple.data.dealership && (
        <InventoryView data={queryTuple.data.dealership}></InventoryView>
      )}

      <Footer></Footer>
    </div>
  );
};
