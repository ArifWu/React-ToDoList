import React from 'react';
import { useState } from 'react'

import Edit from './components/Edit'
import List from './components/List'
import './index.css'

// react也支持這種把css寫在js中的方式
// 但有更好的方式，如:styled-components
// const app = {
//     color: 'red'
// };

// 寫元件的方式很簡單，就是寫一個func，然後把它export出去
const Home = () => {
    // useState有改變，react就知道要重新渲染
    const [data, setData] = useState([]);

    // userEffect功用就是，data每變動一次，就會執行一次useEffect的東西
    // 如可以用在alert功能上
    // useEffect(() => {
  
    // }, [data])
  
    return (
      <div className='app'>
        <Edit add={setData} />
        <List listData={data}  deleteData={setData} />
      </div>
    );
  };
  
  export default Home;