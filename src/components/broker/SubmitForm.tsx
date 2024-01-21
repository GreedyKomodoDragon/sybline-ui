import { createForm, required } from "@modular-forms/solid";
import { createSignal } from "solid-js";
import { SubmitMessage } from "~/rest/broker";
import ErrorAlert from "../ErrorAlert";
import SuccessAlert from "../SuccessAlert";

type SubmitForm = {
  message: string;
};

interface SubmitFormProps {
  routingKey: string;
}

export default function SubmitForm(props: SubmitFormProps) {
  const [_, { Form, Field }] = createForm<SubmitForm>();
  const [msg, setMsg] = createSignal<string>("");

  const [success, setSuccess] = createSignal<boolean>(false);
  const [failed, setFailed] = createSignal<boolean>(false);

  return (
    <Form
      class="mt-4"
      onSubmit={() => {
        SubmitMessage(props.routingKey, msg())
          .then(() => {
            setSuccess(true);
          })
          .catch(() => {
            setFailed(true);
          });
      }}
    >
      <div class="mb-4">
        {failed() && (
          <div class="mb-2">
            <ErrorAlert />
          </div>
        )}
        {success() && (
          <div class="mb-2">
            <SuccessAlert />
          </div>
        )}
        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
          Message:
        </label>
        <Field
          name="message"
          validate={[
            required("Message must be provided before submitting to a broker"),
          ]}
        >
          {(field, props) => (
            <>
              <textarea
                {...props}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="5"
                value={field.value}
                placeholder="Enter your message"
                onChange={(e) => setMsg(e.currentTarget.value)}
              ></textarea>
              {field.error && <div class="text-red-600">{field.error}</div>}
            </>
          )}
        </Field>
      </div>
      <div class="flex items-center justify-end">
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </div>
    </Form>
  );
}