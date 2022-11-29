import { useState } from "react";
import { addData, updateData, deleteData } from "../Features/Slice";
import { useSelector, useDispatch } from "react-redux";
const Crud = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [updateName, SetUpdateName] = useState();
  const [updateAge, setUpdateAge] = useState();

  const userList = useSelector((e) => e.value);
  const dispatch = useDispatch();
  console.log(userList);
  return (
    <div>
      <div>
        <input
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        &nbsp;
        <input
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button
          onClick={() =>
            dispatch(
              addData({
                id: userList[userList.length - 1].id + 1,
                name,
                age
              })
            )
          }
        >
          Add User
        </button>
      </div>
      <br />
      {userList.map((e, id) => (
        <div key={id}>
          <div>{e.id}</div>
          <div>{e.name}</div>
          <div>{e.age}</div>
          <div>
            <input
              placeholder="update name"
              // value={e.name || updateName}
              onChange={(e) => {
                SetUpdateName(e.target.value);
              }}
            />
            &nbsp;
            <input
              placeholder="update age"
              onChange={(e) => {
                setUpdateAge(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(
                  updateData({ id: e.id, name: updateName, age: updateAge })
                );
              }}
            >
              update
            </button>
            &nbsp;
            <button
              onClick={() => {
                dispatch(deleteData({ id: e.id }));
              }}
            >
              delete
            </button>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};
export default Crud;
