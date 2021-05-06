import { ErrorPayload } from "@formspree/react/dist/types/src/types";
import { useEffect, useState } from "react";

const Dialogs = (props: {
  state: {
    submitting: boolean;
    succeeded: boolean;
    errors: ErrorPayload[];
  };
}): JSX.Element => {
  const { state } = props;
  const [submitting, setSubmitting] = useState(state.submitting);
  const [succeeded, setSucceeded] = useState(state.succeeded);
  const [error, setError] = useState(!!state.errors.length);

  useEffect(() => {
    setSubmitting(state.submitting);
    setSucceeded(state.succeeded);
    setError(!!state.errors.length);
  }, [state.submitting, state.succeeded, state.errors]);

  return (
    <>
      {submitting && (
        <div
          onClick={() => setSubmitting(false)}
          className="flex justify-center cursor-pointer"
        >
          <p className="font-semibold bg-blue-300 py-2 pr-3 pl-4 opacity-95 border-2 rounded-xl border-blue-500">
            Sending...
          </p>
        </div>
      )}
      {succeeded && (
        <div
          onClick={() => setSucceeded(false)}
          className="flex justify-center cursor-pointer"
        >
          <p className="font-semibold bg-green-400 py-2 pr-3 pl-4 opacity-95 border-2 rounded-xl border-green-600">
            Your message was succesfully sent
          </p>
        </div>
      )}
      {error && (
        <div
          onClick={() => setSucceeded(false)}
          className="flex justify-center cursor-pointer"
        >
          <p className="font-semibold bg-red-400 py-2 pr-3 pl-4 opacity-95 border-2 rounded-xl border-red-700">
            We encountered an error, try again
          </p>
        </div>
      )}
    </>
  );
};

export default Dialogs;
