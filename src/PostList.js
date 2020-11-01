import React, { useState, useEffect } from 'react';
import {getUsers} from './service';
import TableHeader from './TableHeader'

const PostList = () => {
  const [users, setUsers] = useState([]);
  const [searchFullName, setSearchFullName] = useState();
  
  useEffect(() => {
    const usersData = getUsers();
    setUsers(usersData)
  }, [])

  const handleFilter = (e) => {
    const value = e.currentTarget.value;
    setSearchFullName(value);
    const newData = users.filter(user => {
      if (user.fullName.toLowerCase().includes(value.toLowerCase())){
        return users
      }
    })
    setUsers(newData);
  }

  const sortAscending = () => {
    const dataArray = [...users].sort((a,b) => {
      if (a.state > b.state) return -1;
      if (a.state < b.state) return 1
    });
    setUsers(dataArray)
}

    return (
      <>
      <div className="table_wrapper">
        <form>
          <input onChange={handleFilter}
          type="text"
          value={searchFullName}
          className="form_control" placeholder="Search full name..."></input>
          <button type="text" className="sort_btn" onClick ={sortAscending}>Sort state</button>
        </form>
        {users.length > 0 && <table id='users'>
          <thead>
            <tr>
            <TableHeader elements={users} />
            </tr>
          </thead>
          <tbody>
            {users.map((user, index)=>{
              return <tr key={index}>
                <td>{user.fullName}</td>
                <td>{user.balance}</td>
                <td>{JSON.stringify(user.isActive)}</td>
                <td>{user.registered}</td>
                <td>{user.state}</td>
                <td>{user.country}</td>
              </tr>
            })}
          </tbody>
        </table>}
      </div>
    </>
    )
}

export default PostList;