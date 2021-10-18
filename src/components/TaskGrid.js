import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteTask } from "../redux/testSlice";

export const TaskGrid = () => {
    const store = useSelector((state) => state.tasks);
    const [taskData, setTaskData] = useState(null);

    const dispatch = useDispatch();

    const columnDefs = [
        { headerName: "Id", field: "id" },
        { headerName: "Name", field: "name" },
        { headerName: "Status", field: "status" },
        {
            headerName: "Action",
            field: "action",
            cellRendererFramework: (params) => (
                <>
                    <i className="fa fa-edit" onClick={fetchDate}></i>
                    <i
                        className="fa fa-trash ml-2"
                        onClick={() => dispatch(deleteTask(params.data.id))}
                    ></i>
                </>
            ),
        },
    ];
    useEffect(() => {
        setTaskData(store.tasks);
    }, [store]);

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
        <div
            className="ag-theme-balham"
            style={{
                height: "500px",
                width: "802px",
            }}
        >
            <AgGridReact
                columnDefs={columnDefs}
                rowData={taskData}
            ></AgGridReact>
        </div>
    );
};
