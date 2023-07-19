import React from "react";
import { render, Printer, Text } from "react-thermal-printer";

function ThermalPrinter() {
  async function printdata() {
    const data = await render(
      <Printer type="epson">
        <Text>Hello World</Text>
      </Printer>
    );
    navigator.serial.getPorts().then((ports) => {
      console.log(ports);
    });
    const port = await window.navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });

    const writer = port.writable?.getWriter();
    if (writer != null) {
      await writer.write(data);
      writer.releaseLock();
    }
  }

  return <button onClick={printdata}>Print thermal</button>;
}
export default ThermalPrinter;
