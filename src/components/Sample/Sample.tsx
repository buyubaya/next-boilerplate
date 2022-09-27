import { Button } from 'antd';
import React from 'react';
import s from './Sample.module.scss';

function Sample() {
  return (
    <div className={s.wrapper}>
      <h1>HELLO WORLD</h1>
      <Button>BUTTON</Button>
    </div>
  );
}

export default Sample;
