import { Button, Modal, Select } from "antd";
import React, { useEffect } from "react";
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
import { Update } from "../store/wareHouseSlice.js";

const UpdateModal = ({ data, setShowUpdateModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(VALIDATION_SCHEMA),
    defaultValues: { name: "", deparment: "", salary: null },
  });

  useEffect(() => {
    setValue("deparment", data?.Department);
    setValue("name", data?.Name);
    setValue("salary", data?.Salary);
  }, [data]);

  const submitForm = (info) => {
    dispatch(
      Update({
        ...data,
        Name: info.name,
        Department: info.deparment,
        Salary: info.salary,
      })
    );
    setShowUpdateModal(false);
  };

  return (
    <Container>
      <Title>Update Datails </Title>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Wrapper>
          <Input placeholder="enter name" {...register("name")} />
          <Error>{errors?.name && errors?.name?.message}</Error>
        </Wrapper>
        <Wrapper>
          <Input
            placeholder="enter salary"
            type="number"
            {...register("salary")}
          />
          <Error>{errors?.salary && errors?.salary?.message}</Error>
        </Wrapper>

        <Wrapper>
          <Select
            placeholder="select Department"
            options={Department}
            defaultValue={data?.Department}
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

export default UpdateModal;
