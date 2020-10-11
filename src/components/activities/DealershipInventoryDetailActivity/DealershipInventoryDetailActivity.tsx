import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";
import * as dataService from "./dataService";

import { TopBar } from "components/common/TopBar/TopBar";
import { Footer } from "components/common/Footer/Footer";
import { InventoryView } from "./InventoryView/InventoryView";
import { LoadingView } from "components/common/LoadingView/LoadingView";

const styles = require("./DealershipInventoryDetailActivity.module.scss");

interface IInventoryInfo {}
export const DealershipInventoryDetailActivity: React.FC<IInventoryInfo> = (
  props
) => {
  const { dealershipId } = useParams();
  const queryTuple = dataService.useDealershipDetailActivityQuery(dealershipId);

  const getSearchResult = (searchName: string, searchInventory: string) => {
    if (
      queryTuple.data &&
      queryTuple.data.dealership &&
      queryTuple.data.dealership.vehicles &&
      queryTuple.data.dealership.vehicles.length > 0
    ) {
    }
  };

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
