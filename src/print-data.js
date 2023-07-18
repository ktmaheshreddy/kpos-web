import { render, Printer, Text } from 'react-thermal-printer';

const data = await render(
  <Printer type="epson">
    <Text>Hello World</Text>
  </Printer>
);

const port = await window.navigator.serial.requestPort();
await port.open({ baudRate: 9600 });

const writer = port.writable?.getWriter();
if (writer != null) {
  await writer.write(data);
  writer.releaseLock();
}