import { useMemo, useState, useCallback } from "preact/hooks";
import FormField from "preact-material-components/FormField";
import Switch from "preact-material-components/Switch";
import Button from "preact-material-components/Button";
import Loader from "../Loader/Loader";
import debounce from "../../services/debounce";
import { createTicket } from "./helper";

import "preact-material-components/FormField/style.css";
import "preact-material-components/Switch/style.css";

const Pay = () => {
  const [vehicleNumber, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("100");
  const onInput = useMemo(
    () => debounce(({ target: { value } = {} } = {}) => setValue(value)),
    []
  );
  const onPay = useCallback(async () => {
    setLoading(true);
    const ticket = await createTicket({
      vehicleNumber,
      amount,
      isTwoWay: amount === "200",
    });
    setLoading(false);
    if (ticket === null) {
      return alert("Ticket creation failed");
    }
    return alert(
      `Your transaction was successful for ${
        ticket.vehicleNumber
      } with amount:${ticket.amount} for date:${new Date(
        ticket.date
      ).toLocaleDateString()}`
    );
  }, [vehicleNumber, amount]);

  const onSwitchChange = useCallback(({ target: { checked } = {} } = {}) => {
    setAmount(checked ? "200" : "100");
  }, []);

  return (
    <Loader loading={loading}>
      <p>
        <FormField>
          <label for="vehicle">Enter your vehicle number &nbsp;</label>
          <input id="vehicle" type="text" maxlength="50" onInput={onInput} />
        </FormField>
      </p>
      <p>
        <FormField>
          <label for="return">Return ticket needed &nbsp;&nbsp;</label>
          <Switch onChange={onSwitchChange} />
        </FormField>
      </p>
      <p>Total Amount : {amount}</p>
      <p>
        <Button
          outlined
          disabled={
            !(
              typeof vehicleNumber === "string" &&
              vehicleNumber.trim().length > 0
            )
          }
          onClick={onPay}
        >
          Pay
        </Button>
      </p>
    </Loader>
  );
};
export default Pay;
