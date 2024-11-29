import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, Minus, Plus, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import { Field, FieldArray, Form, Formik } from "formik";
import { InputPhotoUpload, InputText } from "@/components/helpers/FormInputs";
import * as Yup from "Yup";


const  ModalAddQuestions  = () => {
  const { dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const initVal = {
    questions_title : "",
    question_choices: [
      {
        choice: "",
        isCorrect: "",
      }
    ]
    
  }

  const yupSchema = Yup.object ({
    questions_title : Yup.string().required("Required"),
    
  });

  return (
    <>
      <ModalWrapper>
        <div className="main-side absolute top-0 right-0 bg-primary h-[100dvh] w-[450px] border-l border-line">
          <div className="modal-header p-4 flex justify-between items-center">
            <h5 className="mb-0 leading-none">Add Questions</h5>
            <button onClick={handleClose}>
              <X />
            </button>
          </div>

          <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
        {(props) => {
          return (
            <Form>

          <div className="modal-form  h-full max-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto]">
            <div className="form-wrapper p-4 max-h-[85vh] h-full overflow-y-auto custom-scroll ">
            
            <div className="input-wrap">
                <InputText 
                label="Questions"
                type="text"
                name="questions_title"
                />
              </div>

             
                        <FieldArray
                          name="question_choices"
                          render={({ push, remove }) => (
                            <div className="mt-10 relative">
                              {props.values.question_choices.map(
                                (question, index) => (
                                  <div
                                    key={index}
                                    className="flex gap-4 items-center mb-5"
                                  >
                                    <div className="basis-[89%]">
                                      <div className="mb-2">
                                        <p className="text-xs">Choice</p>
                                        <Field
                                          name={`question_choices[${index}].choice`}
                                        />
                                      </div>

                                      <div>
                                        <p className="text-xs">IsCorrect?</p>
                                        <Field
                                          name={`question_choices.${index}.isCorrect`}
                                        />
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      onClick={() => remove(index)}
                                      className="size-[25px] center-all bg-myyellow "
                                    >
                                      <Minus size={16} stroke={"#000"} />
                                    </button>
                                  </div>
                                )
                              )}
                              
                              <button
                                type="button"
                                className="absolute -top-5 right-1flex gap-2 items-center px-2 py-1 rounded-md bg-accent"
                                onClick={() =>
                                  push({ choice: "", isCorrect: "" })
                                }
                              >
                                <Plus size={16} /> Add Choices
                              </button>
                            </div>
                          )}
                        />
                      </div>
                                   
            
            <div className="form-action flex p-4 justify-end gap-3">
              <button className="btn btn-info bg-myred" type="submit">
                <SpinnerButton />
                Save
              </button>
              <button className="btn btn-cancel" onClick={handleClose} type="reset">
                Cancel
              </button>
            </div>
          </div>
          </Form>
          );
        }}
      </Formik>

        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddQuestions;