import Item from './Item'

const arr = [1, 2, 3];

const List = () => {
    return (
      <div className="list">
        {
          // arr.map(item => <Item />)
          arr.map(item => <div>{item}</div>)
        }
      </div>
    );
  };
  
export default List;