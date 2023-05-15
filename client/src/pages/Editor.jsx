import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const location = useLocation();
  const initialContent = location.state.content;
  const navigate = useNavigate();
  const handleFormSubmit = async (values) => {
    try {
      console.log(values);
      const apiEndpoint = `https://prodemic-ho3k.onrender.com/content`;
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        navigate(`/${values.customUrl}`, { state: { responseData } });
      } else {
        throw new Error("Error occurred while submitting the form.");
      }
    } catch (error) {
      console.error(error);
      // Handle error scenario or display error message
    }
  };

  return (
    <div className="cnt-main">
      <Formik
        initialValues={{ content: initialContent, customUrl: "" }}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <div className="react-quill">
              <Field name="content">
                {({ field }) => (
                  <ReactQuill
                    {...field}
                    theme="snow"
                    value={values.content}
                    onChange={handleChange("content")}
                  />
                )}
              </Field>
            </div>

            <div className="input-box">
              <Field
                type="text"
                id="customUrl"
                name="customUrl"
                placeholder="Enter your name for custom URL"
              />
            </div>

            <div className="btns">
              <button
                type="button"
                className="close"
                onClick={() => navigate("/")}
              >
                Back
              </button>
              <button type="submit" className="success">
                Evolve & Share
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Editor;
