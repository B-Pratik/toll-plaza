import { useMemo, useState, useCallback } from "preact/hooks";
import FormField from "preact-material-components/FormField";
import Button from "preact-material-components/Button";
import debounce from "../../services/debounce";
import Loader from "../Loader/Loader";
import { verifyTransaction } from "./helper";

import "preact-material-components/FormField/style.css";
import "preact-material-components/Button/style.css";

const HasTicket = () => {
  const [transactionId, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const onInput = useMemo(
    () => debounce(({ target: { value } = {} } = {}) => setValue(value)),
    []
  );
  const onVerify = useCallback(async () => {
    setLoading(true);
    const { isValid } = await verifyTransaction(transactionId);
    setLoading(false);
    const message = isValid ? "Receipt is valid" : "Receipt is invalid";
    return alert(message);
  }, [transactionId]);

  return (
    <Loader loading={loading}>
      <FormField>
        <label for="transaction">Enter transaction id &nbsp;</label>
        <input id="transaction" type="text" maxlength="50" onInput={onInput} />
      </FormField>
      <p>
        <Button
          outlined
          disabled={
            !(
              typeof transactionId === "string" &&
              transactionId.trim().length > 0
            )
          }
          onClick={onVerify}
        >
          Verify
        </Button>
      </p>
    </Loader>
  );
};
export default HasTicket;
