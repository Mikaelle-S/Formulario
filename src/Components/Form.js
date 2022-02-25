import * as yup from "yup";

import PropTypes from "prop-types";
import React from "react";

import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";

import "./Form.css";

const validations = yup.object().shape({
  nome: yup.string().required("O campo é obrigatório."),
  idade: yup.number().required("O campo é obrigatório."),
  cpf: yup
    .string()
    .max(9, "O máximo é 9 digitos")
    .required("O campo é obrigatório."),
  cpf2: yup.string().max(2, "O máximo é 2 digitos").required("O campo é obrigatório."),
  matricula: yup.string().max(9, "O máximo é 9 digitos").required("O campo é obrigatório."),
  curso: yup.string().required("O campo é obrigatório."),
  endereco: yup.string().required("O campo é obrigatório."),
  numero: yup
    .number()
    .positive("O campo deve ser positivo.")
    .integer("O campo deve ser um número inteiro.")
    .required("O campo é obrigatório."),
  bairro: yup.string().required("O campo é obrigatório."),
  complemento: yup.string(),
  cidade: yup.string().required("O campo é obrigatório."),
  cep: yup.string().max(5, "O máximo é 5 digitos").required("O campo é obrigatório."),
  cep2: yup.string().max(3, "O máximo é 3 digitos").required("O campo é obrigatório.")
});

const Form = ({ handleSubmit, initialValues }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validations}
  >
    <FormikForm className="Form">
      <h1 className="Form-Title">Formulário</h1>
      <h2 className="Form-Info">Preencha o formulário abaixo</h2>
      <div className="Form-Group">
        <Field
          className="Form-Field"
          name="nome"
          placeholder="Nome Completo"
          type="text"
        />
        <ErrorMessage className="Form-Error" component="span" name="nome" />
      </div>
      <div className="Form-Group">
        <Field
          className="Form-Field"
          name="idade"
          placeholder="Idade"
          type="number"
        />
        <ErrorMessage className="Form-Error" component="span" name="idade" />
      </div>
      <div className="Form-Adrress">
        <Field
          className="Form-Field"
          name="cpf"
          placeholder="CPF"
          type="text"
        />{" "}
        - <Field className="Form-Field" name="cpf2" type="text" />
        <ErrorMessage className="Form-Error" component="span" name="cpf" />
        <ErrorMessage className="Form-Error" component="span" name="cpf2" />
      </div>
      <div className="Form-Group">
        <Field
          className="Form-Field"
          name="matricula"
          placeholder="Matrícula"
          type="text"
        />
        <ErrorMessage
          className="Form-Error"
          component="span"
          name="matricula"
        />
      </div>
      <div className="Form-Group">
        <Field
          className="Form-Field"
          name="curso"
          placeholder="Cursando"
          type="text"
        />
        <ErrorMessage className="Form-Error" component="span" name="curso" />
      </div>
      <div className="Form-Adrress">
        <Field
          className="Form-Field"
          name="endereco"
          placeholder="Endereço"
          type="text"
        />

        <ErrorMessage className="Form-Error" component="span" name="endereco" />

        <Field
          className="Form-Field"
          name="numero"
          placeholder="Número"
          type="number"
        />

        <ErrorMessage className="Form-Error" component="span" name="numero" />

        <Field
          className="Form-Field"
          name="bairro"
          placeholder="Bairro"
          type="text"
        />

        <ErrorMessage className="Form-Error" component="span" name="bairro" />
      </div>
      <div className="Form-Group">
        <Field
          className="Form-Field"
          name="complemento"
          placeholder="Complemento"
          type="text"
        />
        <ErrorMessage
          className="Form-Error"
          component="span"
          name="complemento"
        />
      </div>
      <div className="Form-Adrress">
        <Field
          className="Form-Field"
          name="cidade"
          placeholder="Cidade"
          type="text"
        />

        <ErrorMessage className="Form-Error" component="span" name="cidade" />

        <select className="Form-Field" name="estado">
          <option value="ac">Acre</option>
          <option value="al">Alagoas</option>
          <option value="am">Amazonas</option>
          <option value="ap">Amapá</option>
          <option value="ba">Bahia</option>
          <option value="ce">Ceará</option>
          <option value="df">Distrito Federal</option>
          <option value="es">Espírito Santo</option>
          <option value="go">Goiás</option>
          <option value="ma">Maranhão</option>
          <option value="mt">Mato Grosso</option>
          <option value="ms">Mato Grosso do Sul</option>
          <option value="mg">Minas Gerais</option>
          <option value="pa">Pará</option>
          <option value="pb">Paraíba</option>
          <option value="pr">Paraná</option>
          <option value="pe">Pernambuco</option>
          <option value="pi">Piauí</option>
          <option value="rj">Rio de Janeiro</option>
          <option value="rn">Rio Grande do Norte</option>
          <option value="ro">Rondônia</option>
          <option value="rs">Rio Grande do Sul</option>
          <option value="rr">Roraima</option>
          <option value="sc">Santa Catarina</option>
          <option value="se">Sergipe</option>
          <option value="sp">São Paulo</option>
          <option value="to">Tocantins</option>
        </select>
      </div>
      <div className="Form-Adress">
        <Field
          className="Form-Field"
          name="cep"
          placeholder="CEP"
          type="text"
        />{" "}
        - <Field className="Form-Field" name="cep2" type="text" />
        <ErrorMessage className="Form-Error" component="span" name="cep" />
        <ErrorMessage className="Form-Error" component="span" name="cep2" />
      </div>
      <button className="Form-Button" type="submit">
        Enviar
      </button>
    </FormikForm>
  </Formik>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired
};

export default Form;
