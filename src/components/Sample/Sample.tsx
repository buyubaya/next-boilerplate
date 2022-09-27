import { Button } from 'antd';
import React from 'react';
import { Counter } from '../Counter/Counter';
import s from './Sample.module.scss';

function Sample() {
  return (
    <div className={s.wrapper}>
      <h1>HELLO WORLD</h1>
      <Button>BUTTON</Button>
      <Counter />
    </div>
  );
}

export default Sample;
