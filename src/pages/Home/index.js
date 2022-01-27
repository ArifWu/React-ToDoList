import React from 'react';
import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from '../../global/constants'

import Edit from './components/Edit'
import List from './components/List'
import './index.css'

// react也支持這種把css寫在js中的方式
// 但有更好的方式，如:styled-components
// const app = {
//     color: 'red'
// };


async function fetchData(setData) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
}

// 寫元件的方式很簡單，就是寫一個func，然後把它export出去
const Home = () => {
    // useState有改變，react就知道要重新渲染
    const [data, setData] = useState([]);
    // 他永遠在最新狀態，即使頁面渲染好幾次，只要不是重新整理
    // 他就永遠是false
    const submittingStatus = useRef(false);

    // userEffect功用就是，data每變動一次，就會執行一次useEffect的東西
    // 如可以用在alert功能上
    // 注意: 只要重新渲染跟重新整理userEffect一定會被執行
    useEffect(() => {
      // 因為用submittingStatus當判斷
      // 第一次進入畫面時就部會跑fetchSetData
      if (!submittingStatus.current){
        return
      }
      fetchSetData(data)
        .then(data => submittingStatus.current = false)
    }, [data])

    useEffect(() => {
      fetchData(setData)
    }, [])
  
    return (
      <div className='app'>
        <Edit add={setData} submittingStatus={submittingStatus} />
        <List listData={data}  deleteData={setData} submittingStatus={submittingStatus} />
      </div>
    );
  };
  
  export default Home;