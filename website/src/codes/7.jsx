import React from 'react';

export default function Error7({ args }) {
  return (
    <>
      <h1>#7: Load app of {args[0]} error</h1>

      <p>这个错误表达的含义是：<b>加载应用 {args[0]} 失败 </b>。</p>
    </>
  );
}
