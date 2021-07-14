import React, { useEffect, useState } from 'react'

interface Props {
  ref: HTMLDivElement
}

const UseHook = (props: Props) => {
  const { ref } = props;

  useEffect(() => {
    const [left, setLeft] = useState(ref.offsetLeft)
    const [top, setTop] = useState(ref.offsetTop);
  });
  return []
}
export default UseHook