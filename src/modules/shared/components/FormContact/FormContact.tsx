"use client";
import { hakuInformation } from "@/modules/constants";
import { Button, Form, Input, Select, Textarea } from "@/modules/shared";
import { IFormcontact } from "@/modules/types";
import { useForm } from "react-hook-form";

//form data
export interface IFormData {
  nameAndSurname: string;
  companyName: string;
  reason: string;
  comment: string;
  socialMedia: string;
}

interface Props {
  formValues: IFormcontact;
  className: string;
}

// * explanation *//
// This compononet goes through 2 diferent places.
// Here is the UI and all the logic to make it work.
// The component is used in a layout that receives a formValues prop with the different form fields.
// The prop formValues is created in a containter component.
// Additionally, there is an interface with de formValues props to keep everything smooth, not repetitive.

export default function FormContact({ formValues, className }: Props) {
  // react hook forms
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>();

  /* -------------------------------- onSubmit -------------------------------- */
  function onSubmit(data: IFormData) {
    const phone = hakuInformation.phone;

    // interpolate values
    const message = formValues.messageTemplate
      .replace("{{nameAndSurname}}", data.nameAndSurname)
      .replace("{{companyName}}", data.companyName)
      .replace("{{reason}}", data.reason)
      .replace("{{comment}}", data.comment)
      .replace("{{socialMedia}}", data.socialMedia);

    // replace empty spaces
    function sanitizeURL(message: string) {
      return message.replace(/\s+/g, "%20");
    }

    const sanitizedURL = sanitizeURL(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${sanitizedURL}`;

    // send
    window.open(whatsappURL, "_blank");
  }
  console.log(formValues);
  return (
    <Form className={className} onSubmit={handleSubmit(onSubmit)}>
      {/* person */}
      <Input
        label={formValues?.nameAndSurnameLabel}
        type="text"
        register={register("nameAndSurname", {
          required: formValues.nameAndSurnameError,
        })}
        error={errors.nameAndSurname?.message || ""}
      />

      {/* company */}
      <Input
        label={formValues.companyNameLabel}
        type="text"
        register={register("companyName", {
          required: formValues.companyNameError,
        })}
        error={errors.companyName?.message || ""}
      />

      {/* social media */}
      <Input
        type="url"
        label={formValues.socialMediaTitle}
        register={register("socialMedia", {
          pattern: {
            value: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w-]*)*\/?$/,
            message: formValues.socialMediaError,
          },
        })}
        error={errors.socialMedia?.message || ""}
      />

      {/* reason */}
      <Select
        label={formValues.reasonLabel}
        options={formValues.options}
        register={register("reason")}
      />

      {/* comment */}
      <Textarea
        label={formValues.commentLabel}
        register={register("comment", { required: formValues.commentError })}
        error={errors.comment?.message || ""}
      />

      {/* button */}
      <Button alwaysFull text={formValues.button} />
    </Form>
  );
}
