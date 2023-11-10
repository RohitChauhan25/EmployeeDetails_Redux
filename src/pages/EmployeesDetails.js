import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  Container,
  TableContainer,
  EditWrapper,
  SearchBar,
  FilterWraper,
  SelectWrapper,
  TitleWrapper,
  FilterContainer,
  Title,
} from "../styles/List";
import { Modal, Select, Table } from "antd";
import { DeleteEmployee } from "../store/wareHouseSlice.js";
import UpdateModal from "../modal/updateModal.js";
import AddNewEmp from "../modal/addEmployeeModal.js";
import { Department, Salary } from "../constant/data.js";

const debounce = (func) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), 1000);
  };
};

const Employees = () => {
  const Data = useSelector((state) => state.wareHouse.data);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [EmployeesData, setEmployeeData] = useState([]);
  const diapatch = useDispatch();
  const handleDelete = (id) => {
    diapatch(DeleteEmployee({ id }));
  };

  const handleShowModal = (type) => {
    type === "Edit" ? setShowUpdateModal(true) : setShowAddModal(true);
  };

  const rowClassName = (record, index) => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  };
  const columns = [
    {
      title: "Name",
      key: "Employee Name",
      dataIndex: "Name",
    },

    {
      title: "Department",
      dataIndex: "Department",
      key: "Department",
    },
    {
      title: "Salary",
      dataIndex: "Salary",
      key: "Salary",
      sorter: (a, b) => a.Salary - b.Salary,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (id, record) => {
        return (
          <EditWrapper>
            <FaEdit
              cursor={"pointer"}
              style={{ fontSize: "24px", color: "#08c" }}
              onClick={() => {
                setSelectedEmployee(record);
                handleShowModal("Edit");
              }}
            />
            <MdDelete
              onClick={() => handleDelete(id)}
              cursor={"pointer"}
              style={{ fontSize: "24px", color: "black" }}
            />
          </EditWrapper>
        );
      },
    },
  ];

  useEffect(() => {
    setEmployeeData(Data);
  }, [Data]);

  // Search employee by their Name
  const SearchEmployee = (e) => {
    setInputValue(e.target.value);
    if (selectedDepartment?.length > 0) {
      const find = Data?.filter((info) => {
        const name = info?.Name;
        return (
          name &&
          name.trim().toLowerCase().includes(e.target.value) &&
          selectedDepartment.includes(info.Department)
        );
      });
      setEmployeeData(find);
    } else {
      const find = Data?.filter((info) => {
        const name = info?.Name;
        return name && name.trim().toLowerCase().includes(e.target.value);
      });
      setEmployeeData(find);
    }
  };

  const InputWithDebouncedOnchange = debounce(SearchEmployee, 500);

  const handleCancel = () => {
    setShowUpdateModal(false);
  };

  //filter Employees using department
  const handleSelect = (value) => {
    setSelectedDepartment([...selectedDepartment, value]);
    const newArr = [...selectedDepartment, value];
    let filterData = Data;

    if (inputValue) {
      filterData = filterData?.filter((info) => {
        const name = info?.Name;
        return name && name.trim().toLowerCase().includes(inputValue);
      });
    }

    if (newArr.length > 0) {
      filterData = filterData?.filter((info) =>
        newArr?.includes(info.Department)
      );
    }

    setEmployeeData(filterData);
  };

  //filter Employees using department when removing deSelecting department
  const handleDeSelect = (value) => {
    const newArr = selectedDepartment?.filter((item) => item !== value);
    setSelectedDepartment(newArr);
    let filterData = Data;

    if (inputValue) {
      filterData = filterData?.filter((info) => {
        const name = info?.Name;
        return name && name.trim().toLowerCase().includes(inputValue);
      });
    }

    if (newArr.length > 0) {
      filterData = filterData?.filter((info) =>
        newArr?.includes(info.Department)
      );
    }
    setEmployeeData(filterData);
  };

  return (
    <Container>
      <button onClick={() => setShowAddModal(true)} className="addEmployye">
        Add New Employee
      </button>
      <FilterContainer>
        <Title>Employee's Data</Title>
        <FilterWraper>
          <SearchBar>
            <input
              defaultValue={inputValue}
              placeholder="search by name"
              onChange={InputWithDebouncedOnchange}
            />
          </SearchBar>
          <SelectWrapper>
            <Select
              placeholder="select department"
              options={Department}
              className="selectClass"
              mode="multiple"
              value={selectedDepartment}
              onSelect={handleSelect}
              onDeselect={handleDeSelect}
              dropdownStyle={{ maxHeight: "200px", overflowY: "auto" }}
            />
          </SelectWrapper>
        </FilterWraper>
      </FilterContainer>

      <TableContainer>
        <Table
          columns={columns}
          dataSource={EmployeesData}
          style={{ width: "100%" }}
          rowClassName={rowClassName}
        />
      </TableContainer>

      <Modal
        open={showUpdateModal}
        footer={false}
        width={400}
        onCancel={handleCancel}
      >
        <UpdateModal
          data={selectedEmployee}
          setShowUpdateModal={setShowUpdateModal}
        />
      </Modal>
      <Modal
        open={showAddModal}
        footer={false}
        width={400}
        onCancel={() => setShowAddModal(false)}
      >
        <AddNewEmp setShowAddModal={setShowAddModal} />
      </Modal>
    </Container>
  );
};

export default Employees;
