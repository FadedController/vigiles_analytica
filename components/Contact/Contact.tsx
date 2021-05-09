import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import Dialogs from "./Dialogs";

const Contact = (): JSX.Element => {
  const [state, formSubmit] = useForm("contact");
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(state.submitting);
  const [succeeded, setSucceeded] = useState(state.succeeded);
  const [error, setError] = useState(!!state.errors.length);

  useEffect(() => {
    setSubmitting(state.submitting);
    setSucceeded(state.succeeded);
    setError(!!state.errors.length);
  }, [state.submitting, state.succeeded, state.errors]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    formSubmit(form);
    handleReset();
  };

  const handleReset = () => {
    setForm({
      email: "",
      name: "",
      message: "",
    });
  };

  return (
    <div className="hero-bg flex items-center justify-center">
      <div className="max-w-5xl w-full py-8 px-5">
        <form
          id="contact"
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="flex flex-col relative space-y-5 px-10 py-8 rounded-xl bg-gray-200"
        >
          <h1 className="text-center text-blue-900 text-4xl font-normal uppercase">
            Contact Us
          </h1>
          <p className="text-lg font-light">
            Feel free to connect with us for further information about our
            services.
          </p>
          <input
            type="email"
            placeholder="Please enter your email adress"
            name="email"
            id="email"
            required
            className="h-12 px-5 font-light rounded-md text-lg"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Please enter your name"
            name="name"
            id="name"
            required
            className="h-12 px-5 font-light rounded-md text-lg"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Please enter your message"
            name="message"
            id="message"
            className="h-36 px-5 py-2 font-light rounded-md text-lg"
            required
          />
          <div className="flex items-center justify-center space-x-10">
            <button
              className="transition text-lg hover:bg-gray-800 bg-gray-900 px-4 py-2 rounded-md font-semibold text-gray-50"
              type="submit"
            >
              Submit
            </button>
            <button
              type="reset"
              className="transition text-lg hover:bg-blue-800 bg-blue-900 px-4 py-2 rounded-md font-semibold text-gray-50"
            >
              Reset
            </button>
          </div>
          <Dialogs state={state} />
          {/* {true && (
            <div className="flex absolute bottom-5 right-0">
              <p className="px-4 py-2 font-light bg-blue-500 rounded-md">
                Submitting...
              </p>
            </div>
          )}
          {succeeded && <p>Succeded</p>}
          {error && <p>Error</p>} */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
