import { Modal, Select } from "antd";
import React, { useEffect, useId } from "react";
import {
  Container,
  Error,
  Form,
  Input,
  Title,
  Wrapper,
} from "../styles/updateModal";
import { Department } from "../constant/data";
import { useForm } from "react-hook-form";
import { VALIDATION_SCHEMA } from "../utils/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { AddNewData, Update } from "../store/wareHouseSlice.js";

const AddNewEmp = ({ setShowAddModal }) => {
  const dispatch = useDispatch();
  const { v4: uuidv4 } = require("uuid");
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(VALIDATION_SCHEMA),
    defaultValues: { name: "", deparment: "", salary: null },
  });

  const submitForm = (info) => {
    dispatch(
      AddNewData({
        id: uuidv4(),
        Name: info.name,
        Department: info.deparment,
        Salary: info.salary,
      })
    );
    setShowAddModal(false);
  };

  return (
    <Container>
      <Title>Add New Employee</Title>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Wrapper>
          <Input placeholder="enter name" {...register("name")} />
          <Error>{errors?.name && errors?.name?.message}</Error>
        </Wrapper>
        <Wrapper>
          <Input
            placeholder="enter salary"
            type="number"
            onChange={(e) => {
              if (e.target.value) {
                setValue("salary", e.target.value);
                trigger("salary");
              } else {
                setValue("salary", null);
                trigger("salary");
              }
            }}
          />
          <Error>{errors?.salary && errors?.salary?.message}</Error>
        </Wrapper>

        <Wrapper>
          <Select
            placeholder="select Department"
            options={Department}
            className="antSelect"
            onChange={(value) => {
              setValue("deparment", value);
              trigger("deparment");
            }}
          />
          <Error>{errors?.deparment && errors?.deparment?.message}</Error>
        </Wrapper>

        <button> Update </button>
      </Form>
    </Container>
  );
};

export default AddNewEmp;
