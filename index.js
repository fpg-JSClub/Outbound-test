import { post } from 'axios';

export function squareAndSend (x) {
  // send x to example.com
  post('http://google.com', x);

  return x * x;
}
