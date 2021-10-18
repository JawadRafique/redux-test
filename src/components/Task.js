import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/testSlice";
import "./Task.css";

export const Task = () => {
    const store = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    console.log(store);

    const fetchDate = () => {
        fetch("localhost:3000/programs/anything/edit")
            .then(() => {
                console.log("Data");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="data-table">
            <div className="data-heading">
                <span className="data-col bold">Id</span>
                <span className="data-col bold">Name</span>
                <span className="data-col bold">Status</span>
                <span className="data-col bold">Action</span>
            </div>
            <div className="data-body">
                {store.tasks.map((item, key) => {
                    return (
                        <div className="data">
                            <span className="data-col">{item.id}</span>
                            <span className="data-col">{item.name}</span>
                            <span className="data-col">
                                {item.status ? "Active" : "Inactive"}
                            </span>
                            <span className="data-col">
                                <span
                                    className="edit cursor"
                                    onClick={fetchDate}
                                >
                                    Edit
                                </span>
                                <span
                                    className="delete cursor"
                                    onClick={() =>
                                        dispatch(deleteTask(item.id))
                                    }
                                >
                                    Delete
                                </span>
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
