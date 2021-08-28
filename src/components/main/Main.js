import React from 'react';
import MainUser from './MainUser';
import MainUtil from './MainUtil';
import mainData from '../../mainData';

const userData = mainData.data.contents[0];
const UtilData = mainData.data.contents[1];

const Main = () => {
  return (
    <>
      <MainUser data={userData} />
      <MainUtil data={UtilData} />
    </>
  );
};

export default Main;